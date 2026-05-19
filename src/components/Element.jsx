import ElementDot from "./ElementDot";

function Element({ subcategory, name, getDot, index }) {
  return (
    <>
      <ElementDot
        getDot={getDot}
        index={index}
      />
      <a>{name}</a>
    </>
  )
}

export default Element;