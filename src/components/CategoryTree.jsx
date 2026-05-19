import React from 'react'

import Element from './Element';

function CategoryTree({ categoryTreeData, updateDot }) {

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
                                    updateDot={updateDot}
                                    name={subcat.name}
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