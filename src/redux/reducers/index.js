import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productsListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productsListReducer,
    cartReducer,
    saveProductReducer
})

export default rootReducer;