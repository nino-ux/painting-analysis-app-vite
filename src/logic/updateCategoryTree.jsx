//import Painting Data
import paintingDataDefault from '../data/CategoryTree.json'
import currentPaintingData from '../data/StarryNight.json'

//Create a new object with data combined from 2 objects: DefaultPainting.json and StarryNight.json
const updatedCategoryTree = {
    ...paintingDataDefault,
    categories: paintingDataDefault.categories.map(cat => ({
        ...cat,
        subcategories: cat.subcategories.map(subcat => (
            {
                ...subcat,
                info: currentPaintingData.elements.map((info) => {
                    if (subcat.name === info.name) return info.info
                })
            }
        ))
    })
    )
}


export default updatedCategoryTree;