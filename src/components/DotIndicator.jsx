import { useState } from "react";

import useGameState from "../logic/hooks/useGameState";



function DotIndicator(props) {

    const { gameState, setGameState } = useGameState();

    [dot, setDot] = useState[[]]

    
    if (props.currentElement == props.subelement.name) {
        return <span>⚫️</span>
    } return <span>⚪️</span>
}

export default DotIndicator;

