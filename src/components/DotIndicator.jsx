import { useEffect, useState } from 'react'
import ElementDot from '../data/ElementDot.json'
import DefaultRuntime from '../data/ElementRuntime.json'


function DotIndicator(props) {



    const elIndex = props.currentPaintingData.elements.find(el => el.name === props.subelement.name);

    let type;
    if (elIndex.clue) {
        type = "clue"
    } else { type = "regular" }

    const elDot = ElementDot.find(dot => dot.name === type);

    const initialRuntime =
    {
        ...DefaultRuntime,
        name: elIndex.name,
        type: type,
        dot: elDot.state
    }

    const [elementRuntime, setElementRuntime] = useState(initialRuntime);

    const isActive = (elementRuntime.name === props.currentElement)

    useEffect(() => {
        console.log(elementRuntime)
    }, [props.currentElement])

    return (
        <span>{isActive ? elementRuntime.dot[1] : elementRuntime.dot[0]}</span>
    )
}

export default DotIndicator