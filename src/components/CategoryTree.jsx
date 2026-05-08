//import React stuff
import React from 'react'
import { useState } from 'react'
// import handleElementClick from '../logic/handleElementClick';
// import handleElementClick from '../logic/handleElementClick';


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