const handleElementClick = (dispatch) => {

    // const [currentElement, setCurrentElement] = useState("");

    // setCurrentElement(e.target.textContent);
    function setCurrentElement(e) {
    dispatch(e.target.textContent);
    }

}

// export default handleElementClick;