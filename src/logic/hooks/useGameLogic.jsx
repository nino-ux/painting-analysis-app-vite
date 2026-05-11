import { useState } from 'react'
import currentPaintingData from '../../data/StarryNight.json'
import paintingDataDefault from '../../data/CategoryTree.json'


function useGameLogic() {

    //Handle element click
    const handleElementClick = (e) => {

        setCurrentElement(e.target.textContent);
    }

    //Respond to answer
    const handleAnswer = (isCorrect, currentElement) => {

        if (!isCorrect) return;
        setGameState(prev => prev.map(item =>
            item.name === currentElement
                ? { ...item, progress: item.progress + 1 }
                : item
        ))
    }

    //Create a new object with data combined from 2 objects: DefaultPainting.json and StarryNight.json
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

    //Element runtime
    const [elementRuntime, setElementRuntime] = useState(
        () => {
            return currentPaintingData.elements.map(element => (
                {
                    name: element.name,
                    progress: 0,
                    finalStep: element.steps.length - 1,
                    dot: ""
                }
            ))
        });

    //States
    const [paintingData, setPaintingData] = useState(currentPaintingData);
    const [currentElement, setCurrentElement] = useState("");
    const [categoryTreeData, setCategoryTreeData] = useState(updatedCategoryTree);

    return {
        elementRuntime,
        categoryTreeData,
        paintingData,
        updatedCategoryTree,
        currentElement,
        handleElementClick,
        handleAnswer
    }
}

export default useGameLogic;