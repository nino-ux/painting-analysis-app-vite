import CategoryTree from "./CategoryTree";
import QuestionModal from "./QuestionModal";

function Game({ handleElementClick, categoryTreeData, getCurrentElement, getDot, dotStatesArray }) {

    console.log("Hello from Game: ", getCurrentElement(0).dot.dots)

    return (
        <>
            <CategoryTree
                handleElementClick={handleElementClick}
                categoryTreeData={categoryTreeData}
                getDot={getDot}
                dotStatesArray={dotStatesArray}
                getCurrentElement={getCurrentElement}
            />
            <QuestionModal
                handleElementClick={handleElementClick}
            />
            <button onClick={() => handleElementClick(1)}>elementRuntime</button>
            <p>Hello!</p>
        </>
    )
}

export default Game;