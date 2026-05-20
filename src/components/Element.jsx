import ElementDot from "./ElementDot";

function Element({ subcategory, name, index, getDot, dotState, getCurrentElement, handleElementClick }) {
  return (
    <>
      <ElementDot
        index={index}
        getDot={getDot}
        dotSymbol={dotState}
        getCurrentElement={getCurrentElement}
        handleElementClick={handleElementClick}
      />
      <a>{name}</a>
    </>
  )
}

export default Element;