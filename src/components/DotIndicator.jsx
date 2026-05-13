import { useEffect, useState } from 'react'



function DotIndicator(props) {

    const isActive = (props.elementRuntime.name === props.currentElement)

    return (
        <span>{ isActive ? props.elementRuntime.dot[1] : props.elementRuntime.dot[0] }</span>
    )
}

export default DotIndicator