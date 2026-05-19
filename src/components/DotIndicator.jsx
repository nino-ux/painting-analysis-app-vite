
function DotIndicator(props) {



    return (
        <span>{isActive ? elementRuntime.dot[1] : elementRuntime.dot[0]}</span>
    )
}

export default DotIndicator