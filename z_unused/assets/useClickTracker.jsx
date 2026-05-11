import { useState } from "react";



function useClickTracker() {

  const [currentElement, setCurrentElement] = useState("");

  const handleElementClick = (e) => {
    setCurrentElement(e.target.textContent);
  }

  return {currentElement, handleElementClick}

}



// export default useClickTracker;