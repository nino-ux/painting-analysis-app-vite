import React from "react"

function QuestionModal(props) {
    return (
        props.currentPaintingData.elements.map((element) => {
            if (element.name === props.currentElement) {
                return (
                    <div>
                        <h3>{element.name}</h3>
                        <p>{element.steps[0].question}</p>
                    </div>
                );
            }
        }
        ))

}

export default QuestionModal