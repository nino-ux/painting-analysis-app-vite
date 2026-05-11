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

    return (
        props.paintingData.elements.map((element) => {
            if (element.name === props.currentElement) {
                return (
                    <div>
                        <div>
                            <h3>{element.name}</h3>
                            <p>{element.steps[0].question}</p>
                        </div>
                        <div>
                            {
                                props.elementRuntime.map((currentState) => {

                                    if (props.currentElement === currentState.name) {

                                        return (

                                            <div>
                                                <button
                                                    onClick={(e) => {
                                                        const progress = currentState.progress;
                                                        const steps = element.steps;
                                                        const step = steps[currentState.progress];
                                                        const isCorrect = (step.correctAnswer === e.currentTarget.textContent);
                                                        const response = step.response;

                                                        //Set response message
                                                        if (isCorrect) {
                                                            setResponseMessage(response);
                                                        } else {setResponseMessage("Sorry, it's wrong...")};
                                                        //Handle answer
                                                        if (progress < steps.length - 1) {
                                                            props.handleAnswer(isCorrect, props.currentElement);
                                                        }
                                                    }
                                                    }
                                                >{element.steps[currentState.progress].options[0]}</button>
                                                <button>{element.steps[currentState.progress].options[1]}</button>
                                                <p>{currentState.progress}</p>
                                                <p>{responseMessage}</p>
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