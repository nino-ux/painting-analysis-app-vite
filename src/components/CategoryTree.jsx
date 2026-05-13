//import React stuff
import React from 'react'
import { useState, useEffect } from 'react'

//import Data
import currentPaintingData from "../data/StarryNight.json";
import paintingDataDefault from "../data/CategoryTree.json"
import ElementDot from '../data/ElementDot.json'
import DefaultRuntime from '../data/ElementRuntime.json'


//import Components
import QuestionModal from './QuestionModal';
import DotIndicator from './DotIndicator'


//States
function CategoryTree() {
    //STATES

    //CategoryTree
    //Add data from current painting into the category tree object
    const updatedCategoryTree = {
        ...paintingDataDefault,
        categories: paintingDataDefault.categories.map(cat => ({
            ...cat,
            subcategories: cat.subcategories.map(subcat => (
                {
                    ...subcat,
                    info: currentPaintingData.elements.map((info) => {
                        if (subcat.name === info.name) return info.info
                    })
                }
            ))
        })
        )
    }

    const [categoryTreeData, setCategoryTreeData] = useState(updatedCategoryTree);

    //Painting Data
    const [paintingData, setPaintingData] = useState("");

    //Current Element
    function useClickTracker() {

        const [currentElement, setCurrentElement] = useState("");

        const handleElementClick = (e) => {
            setCurrentElement(e.target.textContent);
        }

        return { currentElement, handleElementClick }

    }

    const { currentElement, handleElementClick } = useClickTracker();

    // const elIndex = props.currentPaintingData.elements.find(el => el.name === subelement.name);

    // let type;
    // if (elIndex.clue) {
    //     type = "clue"
    // } else { type = "regular" }

    // const elDot = ElementDot.find(dot => dot.name === type);

    const initialRuntime = currentPaintingData.elements.map(el => {
        let type;
        if (el.clue) {
            type = "clue"
        } else { type = "regular" }

        const elDot = ElementDot.find(dot => dot.name === type);

        return {
            ...DefaultRuntime,
            name: el.name,
            type: type,
            dot: elDot.state
        }
    })

    const [elementRuntime, setElementRuntime] = useState(initialRuntime);



    useEffect(() => {
        console.log(initialRuntime)
    }, [initialRuntime])



    return (
        <div id="cat-tree">
            <ul>
                <h2>{categoryTreeData.name}</h2>
                <li>{
                    categoryTreeData.categories.map(element => (
                        <li>
                            <li>{element.name}</li>
                            <li>
                                {
                                    element.subcategories.map(subelement => (
                                        <ul>
                                            <li>
                                                <DotIndicator
                                                    subelement={subelement}
                                                    currentElement={currentElement}
                                                    categoryTreeData={categoryTreeData}
                                                    currentPaintingData={currentPaintingData}
                                                    useClickTracker={useClickTracker}
                                                    elementRuntime={elementRuntime}
                                                    setElementRuntime={setElementRuntime}
                                                />
                                                <a
                                                    onClick={handleElementClick}
                                                > {subelement.name}</a></li>
                                        </ul>
                                    ))
                                }
                            </li>
                        </li>
                    ))
                }</li>
            </ul>
            <QuestionModal
                currentPaintingData={currentPaintingData}
                currentElement={currentElement}
            />
        </div>

    )


}

export default CategoryTree;