function ElementDot({getDot,index}) {

    const dot = getDot(index).dots;

    return (
    <span>{dot[dotState]}</span>
)
}

export default ElementDot; 