import { useState } from "react";

import useGameState from "../logic/hooks/useGameState";



function DotIndicator(props) {
    // const [dotState, setDotState] = useState("");

    // if (!props.paintingData?.elements) {
    //     return <div>Loading or no data...</div>;

    // Check the status of the element

    console.log(props.subelement.name);

    if (props.currentElement == props.subelement.name) {
        return <span>⚫️</span>
    } return <span>⚪️</span>
}

export default DotIndicator;

