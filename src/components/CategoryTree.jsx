//import React stuff
import React from 'react'
import { useState, useEffect } from 'react'

//import Data
import currentPaintingData from "../data/StarryNight.json";
import paintingDataDefault from "../data/CategoryTree.json"

//import Components
import QuestionModal from './QuestionModal';
import DotIndicator from './DotIndicator'
import Element from './Element';


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

    const elIndex = currentPaintingData.elements.find(el => el.name === currentElement);


    return (
        <>
            <div id="cat-tree">
                <ul>
                    <h2>{categoryTreeData.name}</h2>
                    <li>
                        {categoryTreeData.categories.map((element) => (
                            <Element
                                key={element.name}
                                type="list"
                                element={element}
                                currentElement={currentElement}
                                categoryTreeData={categoryTreeData}
                                currentPaintingData={currentPaintingData}
                                handleElementClick={handleElementClick}   // <-- passed correctly
                            />
                        ))}
                    </li>
                </ul>
            </div>
        </>
    )


}

export default CategoryTree;