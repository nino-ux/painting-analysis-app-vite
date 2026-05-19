import { useState } from 'react';
import ElementDot from '../data/ElementDot.json';
import DefaultRuntime from '../data/ElementRuntime.json';
import DotIndicator from './DotIndicator';
import QuestionModal from './QuestionModal';

function Element(props) {
  // Destructure all needed props
  const {
    type,              // 'list' or 'modal'
    element,           // the category object (from categoryTreeData.categories)
    currentElement,
    categoryTreeData,
    currentPaintingData,
    handleElementClick
  } = props;

  // For 'list' type, we need to render subcategories
  if (type === 'list') {
    return (
      <li key={element.name}>
        <li>{element.name}</li>
        <li>
          <ul>
            {element.subcategories?.map((subelement) => (
              <li key={subelement.name}>
                <DotIndicator
                  subelement={subelement}
                  currentElement={currentElement}
                  currentPaintingData={currentPaintingData}
                  elementRuntime={[]} // TODO: pass global elementRuntime array
                />
                <a onClick={handleElementClick}>{subelement.name}</a>
              </li>
            ))}
          </ul>
        </li>
      </li>
    );
  }

  // For 'modal' type, render the QuestionModal
  if (type === 'modal') {
    return (
      <QuestionModal
        currentElement={currentElement}
        currentPaintingData={currentPaintingData}
      />
    );
  }

  return null;
}

export default Element;