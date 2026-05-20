import React from "react";
import { useState } from "react";

import Game from './components/Game';
import paintingData from './data/StarryNight.json';

//data
const categoryTreeData = {
  name: "Category Tree",
  categories: [
    {
      name: "Basic Elements",
      subcategories: [
        {
          id: "lines",
          name: "Lines",
          info: ""
        },
        {
          id: "shapes",
          name: "Shapes",
          info: ""
        }
      ]
    },
    {
      name: "Compositional Elements",
      subcategories: [
        {
          id: "perspective",
          name: "Perspective",
          info: ""
        },
        {
          id: "focus",
          name: "Focus",
          info: ""
        }
      ]
    }
  ]
}

const dots = [
  {
    name: "default",
    dots: ["⚪️", "⚫️"]
  },
  {
    name: "clue",
    dots: ["❕", "❗️"]
  }
]

//pure functions
function getElementRuntime() {

  const runtime = paintingData.elements.map((el) =>
  ({

    id: el.id,
    name: el.name,
    type: el.clue ? "clue" : "default",
    dot: el.clue ? dots[1] : dots[0],
    finalStep: el.steps.length,
    progress: 0,
    isRevealed: "false",
    isSolved: "false"

  })
  )

  return runtime;
}


//view-model

function getGameProps(state, setState) {
  const currentHistory = state.history[state.history.length - 1];
  const currentElement = state.currentElement; // you need to store currentElement in state
  // const dotStatesArray = getDotStates(currentElement, currentHistory); // modified getDotStates


  function getCurrentElement(index) {
    const currentElement = currentHistory[index];

    return currentElement;
  }

  function getDot(index) {
    const currentElementDots = getCurrentElement(index).dot.dots;

    console.log("Hello from getDot: ", currentElementDots)

    return currentElementDots;

  }

  function getDotStates(currentHistory, currentElement) {
    if (!currentHistory || !currentElement) return [];
    return currentHistory.map(el => ({
      id: el.id,
      name: el.name,
      dotState: el.name === currentElement.name ? el.dot.dots[1] : el.dot.dots[0],
    }));
  }

  // Inside getGameProps
  const dotStatesArray = getDotStates(currentHistory, currentElement);

  function handleElementClick(index) {
    const clickedElement = currentHistory[index];   // object with name, id, etc.
    setState(prevState => ({
      ...prevState,
      currentElement: clickedElement,
    }));
  }



  return {
    handleElementClick,
    getCurrentElement,
    getDot,
    dotStatesArray
  }

}



//Entry Point

const DEFAULT_STATE = {
  history: [getElementRuntime()],
  currentElement: null
}

export default function App() {

  const [state, setState] = useState(DEFAULT_STATE);
  const gameProps = getGameProps(state, setState)

  // console.log(DEFAULT_STATE);

  return (
    <>
      <Game
        {...gameProps}
        categoryTreeData={categoryTreeData} />
    </>
  )

}


