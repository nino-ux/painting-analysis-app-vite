import { useEffect, useState } from 'react'
import currentPaintingData from '../../data/StarryNight.json'
import paintingDataDefault from '../../data/CategoryTree.json'
import useGameState from './useGameState';


function useGameLogic(currentElement, setCurrentElement) {

    //**HANDLERS
    //Handle element click
    const handleElementClick = (e) => {

        setCurrentElement(e.target.textContent);


    }

    useEffect(() => {
        console.log(currentElement);
    },[currentElement])
    
    //Respond to answer
    const handleAnswer = (isCorrect, currentElement) => {

        if (!isCorrect) return;
        setGameState(prev => prev.map(item =>
            item.name === currentElement
                ? { ...item, progress: item.progress + 1 }
                : item
        ))
    }





    // //**STATES
    // //Element runtime states
    // const [elementRuntime, setElementRuntime] = useState(
    //     () => {
    //         return currentPaintingData.elements.map(element => (
    //             {
    //                 name: element.name,
    //                 progress: 0,
    //                 finalStep: element.steps.length - 1,
    //                 dot: ""
    //             }
    //         ))
    //     });
    // //Other states
    // const [paintingData, setPaintingData] = useState(currentPaintingData);
    // const [currentElement, setCurrentElement] = useState("");
    // const [categoryTreeData, setCategoryTreeData] = useState(updatedCategoryTree);


    return {
        handleElementClick,
        handleAnswer
    }
}

export default useGameLogic;