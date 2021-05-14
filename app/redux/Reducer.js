/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import { GET_CATEGORIES, GET_PRODUCT_LIST, SET_SUB_CATEGORY, SET_SELECTED_CATEGORY, ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from './Actions';

let CATEGORIES = [];

const INITIAL_STATE = {
    categories: CATEGORIES,
    subCategories: [],
    productList: [],
    subcatagryList: [],
    selectedCategory: '',
    selectedProducts: [],
};

const testReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.spots, subCategories: action.subCategories };
        case GET_PRODUCT_LIST:
            return { ...state, productList: action.getProdList };
        case SET_SUB_CATEGORY:
            return { ...state, subcatagryList: action.payload };
        case SET_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.payload };
        default:
            return state;
    }
};

const INITIAL_STATE_TWO = {
    apiData: [],
    selectedProducts: [],
};

const testReducertwo = (state = INITIAL_STATE_TWO, action) => {
    switch (action.type) {
        case 'SAVE_APILIST':
            let { apiData } = state;
            apiData = action.payload;
            return apiData;
            case ADD_TO_CART:
                let data = action.payload;
                // let val = state.selectedProducts.includes(data);
                // console.log(val)
                // state.selectedProducts.includes(state.selectedProducts.find(el => {
                //     if (el.id === data.id) {
                //         el.qut = el.qut + 1;
                //         // return {...state, selectedProducts :state.selectedProducts};
                //     } else {
                return { ...state, selectedProducts: [...state.selectedProducts, action.payload] };
            //     }
            // }));
            // return {...state, selectedProducts :[...state.selectedProducts]};
            case REMOVE_TO_CART:
                return { ...state, selectedProducts: state.selectedProducts.filter(item => item.id != action.payload.id) };
            case UPDATE_TO_CART:
                let item = state.selectedProducts.find(item => item.id == action.payload.id);
                let newCart = state.selectedProducts.filter(item => item.id != action.payload.id);
                item.quantity = action.payload.quantity;
                newCart.push(item);
                return {
                    ...state,
                    selectedProducts: newCart,
                };
        default:
            return state;
    }
};

export default combineReducers({ testReducer, testReducertwo });
