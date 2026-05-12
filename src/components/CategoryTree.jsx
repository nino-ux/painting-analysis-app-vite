//import React stuff
import React from 'react'
// import { useState } from 'react'
import DotIndicator from './DotIndicator';
import useGameState from '../logic/hooks/useGameState';
import useGameLogic from '../logic/hooks/useGameLogic';




function CategoryTree(props) {

    // const { elementRuntime, setElementRuntime, currentElement, setCurrentElement } = useGameState();

    // const { handleElementClick } = useGameLogic();


    return (
        <div id="cat-tree">
            <ul>
                <h2>{props.categoryTreeData.name}</h2>
                <li>{
                    props.categoryTreeData.categories.map(element => (
                        <li>
                            <li>{element.name}</li>
                            <li>
                                {
                                    element.subcategories.map(subelement => (
                                        <ul>
                                            <li>
                                                <DotIndicator
                                                    currentElement={props.currentElement}
                                                    paintingData={props.paintingData}
                                                    categoryTreeData={props.categoryTreeData}
                                                    subelement={subelement}
                                                    elementRuntime={props.elementRuntime}
                                                />
                                                <a
                                                    onClick={
                                                        props.handleElementClick
                                                    }
                                                >{subelement.name}</a></li>
                                        </ul>
                                    ))
                                }
                            </li>
                        </li>
                    ))
                }</li>
            </ul>
        </div>

    )


}

export default CategoryTree;