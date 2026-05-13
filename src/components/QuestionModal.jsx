import React, { use } from "react"
import { useState, useEffect } from "react";

// import currentPaintingData from '../data/StarryNight.json'
// import useGameState from "../logic/hooks/useGameState";



function QuestionModal(props) {

    //Clear response message when the currentElement changes
    useEffect(() => {
        setResponseMessage('');
    }, [props.currentElement]);

    //Response state
    const [responseMessage, setResponseMessage] = useState("")

    // Helper to get current element data and runtime state
    const currentElementData = props.paintingData.elements.find(
        el => el.name === props.currentElement
    );
    const currentRuntime = props.elementRuntime.find(
        state => state.name === props.currentElement
    );

    if (!currentElementData || !currentRuntime) return null;

    const currentStepIndex = currentRuntime.progress;
    const currentStep = currentElementData.steps[currentStepIndex];

    const handleOptionClick = (clickedOption) => {
        const isCorrect = (currentStep.correctAnswer === clickedOption);
        setResponseMessage(isCorrect ? currentStep.response : "Sorry, it's wrong...");
        if (isCorrect && currentStepIndex < currentElementData.steps.length - 1) {
            props.handleAnswer(true, props.currentElement);
        }
    };

    return (

        <div>
            <div>
                <h3>{currentElementData.name}</h3>
                <p>{currentStep.question}</p>
            </div>
            <div>

                <div>
                    <button
                        onClick={() => handleOptionClick(currentStep.options[0])}
                    >{currentStep.options[0]}</button>
                    <button onClick={() => handleOptionClick(currentStep.options[1])}
                    >{currentStep.options[1]}</button>
                    <p>{currentStepIndex}</p>
                    <p>{responseMessage}</p>
                </div>
            </div>
        </div >
    );
}


export default QuestionModal