import React from "react";
import { useState } from "react";

//import logic
import updatedCategoryTree from './logic/updateCategoryTree';

//import hooks
import useClickTracker from "./logic/useClickTracker";

//import Components
import CategoryTree from "./components/CategoryTree";
import QuestionModal from "./components/QuestionModal";


function App() {

  //States
  const [categoryTreeData, setCategoryTreeData] = useState(updatedCategoryTree);
  // const [currentElement, setCurrentElement] = useState("");
  const [paintingData, setPaintingData] = useState("");

  // //Handlers
  // const handleElementClick = (e) => {
  //   setCurrentElement(e.target.text);
  // }
      const {currentElement, handleElementClick} = useClickTracker();

  

  return (
    <>
      <CategoryTree
        categoryTreeData={categoryTreeData}
        currentElement={currentElement}
        handleElementClick={handleElementClick}
      />
      <QuestionModal
        currentElement={currentElement}
      />
    </>
  )

}

export default App;