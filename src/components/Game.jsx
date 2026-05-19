import CategoryTree from "./CategoryTree";
import QuestionModal from "./QuestionModal";

function Game({handleElementClick, categoryTreeData, getDot}) {

    return (
        <>
            <CategoryTree
                handleElementClick= {handleElementClick}
                categoryTreeData={categoryTreeData}
                getDot={getDot}
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