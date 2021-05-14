/* eslint-disable prettier/prettier */
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const SET_SUB_CATEGORY = 'SET_SUB_CATEGORY';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const UPDATE_TO_CART = 'UPDATE_TO_CART';

export const setData = data => ({
    type: 'LOGIN_DATA',
    payload: data,
});

export const saveData = data => ({
    type: 'SAVE_APILIST',
    payload: data,
});

export const setSubcatagry = data => ({
    type: SET_SUB_CATEGORY,
    payload: data,
});

export const selectedCategory = data => ({
    type: SET_SELECTED_CATEGORY,
    payload: data,
});

export const addToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = data => ({
    type: REMOVE_TO_CART,
    payload: data,
});

export const updateFromCart = data => ({
    type: UPDATE_TO_CART,
    payload: data,
});

export const fetchSpots = () => {
    return async dispatch => {
        const response = await fetch(
            'https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/categories'
        );
        const resData = await response.json();
        let items = resData.data;
        const loadedSpots = [];

        items.map(item => {
            loadedSpots.push(item.category);
        });
        dispatch({ type: GET_CATEGORIES, spots: loadedSpots, subCategories: items });
    };
};

export const fetchPrductList = (value) => {
    return async dispatch => {
        const response = await fetch(`https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/${value}`);
        const resData = await response.json();
        let items = resData.data;
        dispatch({ type: GET_PRODUCT_LIST, getProdList: items });
    };
};
