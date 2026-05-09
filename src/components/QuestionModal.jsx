import React, { use } from "react"
import { useState } from "react";

import currentPaintingData from '../data/StarryNight.json'
import useGameState from "../logic/hooks/useGameState";



function QuestionModal(props) {

    const { gameState, setGameState } = useGameState();

    // console.log(gameState);
    const handleAnswer = (isCorrect, currentElement) => {
        if (!isCorrect) return;
        setGameState(prev => prev.map(item =>
            item.name === currentElement
            ? {...item, progress: item.progress + 1}
            : item
        ))
    }

 

    return (
        currentPaintingData.elements.map((element) => {
            if (element.name === props.currentElement) {
                return (
                    <div>
                        <div>
                            <h3>{element.name}</h3>
                            <p>{element.steps[0].question}</p>
                        </div>
                        <div>
                            {
                                gameState.map((currentState) => {

                                    if (props.currentElement === currentState.name) {

                                        return (

                                            <div>
                                                <button
                                                    onClick={ (e) => {
                                                        const step = element.steps[currentState.progress];
                                                        const isCorrect = (step.correctAnswer == e.currentTarget.textContent);
                                                        handleAnswer(isCorrect, props.currentElement)} }
                                                >{element.steps[currentState.progress].options[0]}</button>
                                                <button>{element.steps[currentState.progress].options[1]}</button>
                                                <p>{currentState.progress}</p>
                                            </div>

                                        )
                                    } return

                                })

                            }

                        </div>
                    </div >
                );
            }
        }
        ))

}

export default QuestionModal