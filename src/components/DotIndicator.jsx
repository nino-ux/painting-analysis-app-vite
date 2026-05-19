import { useEffect, useState } from 'react'
import ElementDot from '../data/ElementDot.json'
import DefaultRuntime from '../data/ElementRuntime.json'


function DotIndicator(props) {



    return (
        <span>{isActive ? elementRuntime.dot[1] : elementRuntime.dot[0]}</span>
    )
}

export default DotIndicator