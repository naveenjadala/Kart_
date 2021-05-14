/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSpots, fetchPrductList, setSubcatagry, selectedCategory } from '../redux/Actions';

const AppSubCategory = () => {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);
    const [selected, setselected] = useState('');

    const handleSubCatagory = async (item) => {
        await dispatch(selectedCategory(item.id));
        await dispatch(fetchPrductList(item.dummy_id));
    };

    const renderItem = ({ item }) => (

        <View style={{ margin: 10, borderRadius: 50}} key={item.key}>
            <TouchableOpacity
                onPress={() => handleSubCatagory(item)}
            >
                <View style={{ ...styles.button, backgroundColor: stateData.testReducer.selectedCategory === item.id ? '#aaa' : null }}>
                    <Text style={{ padding: 10, ...styles.text }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ color: 'white'}}>
            <FlatList
                extraData={stateData.testReducer.selectedCategory}
                data={stateData.testReducer.subcatagryList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default AppSubCategory;

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        borderColor: '#aaa',
        borderWidth: 0.3,
        shadowColor: '#aaa',
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    text: {
        textAlign: 'center',
        alignContent: 'center',
        color: '#000',
    },
});
