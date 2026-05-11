//import React stuff
import React from 'react'
// import { useState } from 'react'
import DotIndicator from './DotIndicator';



function CategoryTree(props) {

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
                                                />
                                                <a
                                                    onClick={props.handleElementClick}
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