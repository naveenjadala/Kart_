/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Button, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSpots } from '../redux/Actions';
import AppProductList from '../components/AppProductList';
import AppSubCategory from '../components/AppSubCategory';
import AppCategoryPicker from '../components/AppCategoryPicker';

const HomeScreen = props => {
    const stateData = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(() => {
        const loadSpots = async () => {
            await dispatch(fetchSpots());
        };
        loadSpots();
    }, [dispatch]);


    return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <View style={{
                    position: 'absolute',
                    top:0,
                    alignSelf: 'center',
                    marginTop: 20
                }}>
                    <AppCategoryPicker />
                    <AppSubCategory />
                    <AppProductList />
                </View>
                <View>
                    {stateData.cartReducer.selectedProducts.length > 0 ? <Button title="checkout" onPress={() => props.navigation.navigate('payemtScreen')} /> : null}
                </View>
            </View>
    );
};

export default HomeScreen;
