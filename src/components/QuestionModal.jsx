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
                        <button 
                        // onClick={}
                        >{elIndex.steps[0].options[0]}</button>
                        <button 
                        // onClick={}
                        >{elIndex.steps[0].options[1]}</button>
                    </div>

        );
        
}

export default QuestionModal