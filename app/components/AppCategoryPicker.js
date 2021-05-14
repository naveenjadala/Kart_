/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from 'native-base';

import { fetchSpots, fetchPrductList, setSubcatagry, selectedCategory } from '../redux/Actions';

const AppCategoryPicker = () => {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);

    const handleSubCatagory = async item => {
        await dispatch(selectedCategory(item.id));
        await dispatch(fetchPrductList(item.dummy_id));
    };

    const onValueChange = val => {
        const value = stateData.testReducer.subCategories;
        value.includes(
            value.find(el => {
                if (el.category === val) {
                    dispatch(setSubcatagry(el.sub_categories));
                    handleSubCatagory(el.sub_categories[0]);
                }
            }),
        );
    };
    return (
        <View style={{height: 40}}>
            <Picker
                mode="dropdown"
                placeholder="Select category"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                style={{ width: '100%'}}
                // selectedValue={selected}
                onValueChange={onValueChange.bind(this)}>
                {stateData.testReducer.categories.map((item, key) => (
                    <Picker.Item
                        label={String(item)}
                        value={item}
                        key={key}
                        color="black"
                    />
                ))}
            </Picker>
        </View>
    );
};

export default AppCategoryPicker;

const styles = StyleSheet.create({});
