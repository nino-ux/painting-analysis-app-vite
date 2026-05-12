
function DotIndicator(props) {

    const runtime = props.elementRuntime.find(
        r => r.name === props.subelement.name);
    if (props.subelement.name === props.currentElement) {
        return runtime ? <span>{runtime.dot[1]}</span> : "argh";
    } else {
        return runtime ? <span>{runtime.dot[0]}</span> : "argh";
    }

    console.log("heyheyhey");

}

export default DotIndicator;

