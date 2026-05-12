function DotIndicator(props) {




    const runtime = props.elementRuntime.find(r => r.name === props.subelement.name);

    console.log("DotIndicator render", runtime)
    // console.log("DotIndicator render", props.elementRuntime)
    // if (!runtime) return null; // or a fallback

    const isActive = (runtime.name === props.currentElement);

    return <span>{runtime.dot[isActive ? 1 : 0]}</span>
    // props.elementRuntime.map(rt => 
    // {rt.dot[props.elementRuntime.dot[]]}
    // )

}

export default DotIndicator;

