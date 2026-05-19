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

function getCurrentElement(currentHistory, index) {
  const currentElement = currentHistory[index];

  return currentElement;
}

function getDot(currentHistory, index) {
  const currentElementDots = getCurrentElement(currentHistory, index).dot;

  return currentElementDots;

}

//view-model
function getGameProps(state, setState) {

  const currentHistory = state.history[state.history.length - 1];


  function handleElementClick(index) {
    const currentElement = getCurrentElement(currentHistory, index);
    const currentElementDots = getDot(currentHistory, index)

  }

  function getDotState(currentHistory, currentElement) {

    return elementRuntime.map((el, index) => ({
      name: el.id,
      dotState: (el.name === currentElement.name) ? el.dot.dots[1] : el.dot.dots[0]
    }
    )
    )

  }

  return {
    handleElementClick
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

  console.log(DEFAULT_STATE);

  return (
    <>
      <Game
        {...gameProps}
        getDot={getDot}
        categoryTreeData={categoryTreeData} />
    </>
  )

}


