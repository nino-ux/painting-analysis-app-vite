import { useState, useEffect } from 'react'
// import useGameLogic from './useGameLogic';

import currentPaintingData from '../../data/StarryNight.json'
import paintingDataDefault from '../../data/CategoryTree.json'
import elRuntime from '../../data/ElementRuntime.json'
import dotInd from '../../data/ElementDot.json'



//**STATES
//Element runtime states
function useGameState() {

    const initialRuntime = currentPaintingData.elements.map(element => {
        // const elementType = elRuntime.map(element => element.clue ? "clue" : "regular")
        const elementType = element.clue ? "clue" : "regular"

        const regularDot = dotInd.find(dt => dt.name === elementType);
        return {
            ...elRuntime,
            finalStep: element.steps.length,
            name: element.name,
            type: elementType,
            dot: regularDot ? regularDot.state : elRuntime.dot
        }
    })

    const [elementRuntime, setElementRuntime] = useState(initialRuntime);

    // useEffect(() => {console.log(elementRuntime)})

    //CATEGORY TREE
    // Create a new object with data combined from 2 objects: DefaultPainting.json and StarryNight.json
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

    //Other states
    const [paintingData, setPaintingData] = useState(currentPaintingData);
    const [currentElement, setCurrentElement] = useState("");


    //**HANDLERS
    //Handle element click
    const handleElementClick = (e) => {

        setCurrentElement(e.target.textContent);


    }

    useEffect(() => {
        console.log(currentElement);
    }, [currentElement])

    //Respond to answer
    const handleAnswer = (isCorrect, currentElement) => {

        if (!isCorrect) return;
        setElementRuntime(prev => prev.map(item =>
            item.name === currentElement
                ? { ...item, progress: item.progress + 1 }
                : item
        ))
    }


    return {
        elementRuntime,
        setElementRuntime,
        paintingData,
        setPaintingData,
        currentElement,
        setCurrentElement,
        categoryTreeData,
        setCategoryTreeData,
        handleElementClick,
        handleAnswer
    }
}

export default useGameState;