import React from 'react'

import Element from './Element';

function CategoryTree({ categoryTreeData, getDot, dotStatesArray, getCurrentElement, handleElementClick }) {

    const renderCategoryTree = categoryTreeData.categories.map(
        cat =>
            <>
                <ul className='category-tree'>
                    <li className='category'>
                        {cat.name}
                    </li>
                    {cat.subcategories.map((subcat, index) =>
                    (
                        <ul className='subcategories'>
                            <li key={subcat.id} className='subcategory'>
                                <Element
                                    index={index}
                                    name={subcat.name}
                                    getDot={getDot}
                                    dotState={dotStatesArray[index]?.dotState}
                                    getCurrentElement={() => getCurrentElement(index)}
                                    handleElementClick={handleElementClick}
                                />
                            </li>
                        </ul>
                    )
                    )}
                </ul>
            </>
    )

    return renderCategoryTree;
}

export default CategoryTree;