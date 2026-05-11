import { useState } from "react";
import useGameState from "../hooks/useGameState";




//Respond to answer
const handleAnswer = (isCorrect, currentElement) => {

        //Use Game State
    const { gameState, setGameState } = useGameState();

        if (!isCorrect) return;
        setGameState(prev => prev.map(item =>
            item.name === currentElement
                ? { ...item, progress: item.progress + 1 }
                : item
        ))
    }

export default handleAnswer;