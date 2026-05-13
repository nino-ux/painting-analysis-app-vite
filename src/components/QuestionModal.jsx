import React, { useEffect } from "react"

function QuestionModal(props) {

    const elIndex = props.currentPaintingData.elements.find(el => el.name === props.currentElement);

    useEffect(() => {
        console.log(elIndex);
    })

    if (!elIndex) return null;

    return (
                 
                    <div>
                        <h3>{elIndex.name}</h3>
                        <p>{elIndex.steps[0].question}</p>
                    </div>

        );
        
}

export default QuestionModal