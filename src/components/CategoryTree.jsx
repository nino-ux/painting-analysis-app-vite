//import React stuff
import React from 'react'
import { useState } from 'react'

//import Data
import currentPaintingData from "../data/StarryNight.json";
import paintingDataDefault from "../data/CategoryTree.json"

//import Components
import QuestionModal from './QuestionModal';


//States
function CategoryTree() {

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

    //States
    const [paintingData, setPaintingData] = useState("");

    function useClickTracker() {

        const [currentElement, setCurrentElement] = useState("");

        const handleElementClick = (e) => {
            setCurrentElement(e.target.textContent);
        }

        return { currentElement, handleElementClick }

    }

    const { currentElement, handleElementClick } = useClickTracker();


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
                                                <a
                                                    onClick={handleElementClick}
                                                >{subelement.name}</a></li>
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