/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SelectedProds from '../models/SelectedProdsModel';
import { addToCart, removeFromCart, updateFromCart } from '../redux/Actions';

const AppAdd = props => {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);

    const addprod = (data) => {
        dispatch(addToCart(new SelectedProds(
            data.name,
            data.price,
            data.id,
            1
        )));
    };

    const upDateprod = (data) => {
        dispatch(updateFromCart(new SelectedProds(
            data.name,
            data.price,
            data.id,
            stateData.testReducertwo.selectedProducts.filter(e => e.id === data.id)[0].quantity + 1
        )));
    };

    const removeprod = (data) => {
        if (stateData.testReducertwo.selectedProducts.filter(e => e.id === data.id)[0].quantity - 1 == 0) {
            dispatch(removeFromCart(new SelectedProds(
                data.name,
                data.price,
                data.id,
                stateData.testReducertwo.selectedProducts.filter(e => e.id === data.id)[0].quantity - 1
            )));
        }
        else {
            dispatch(updateFromCart(new SelectedProds(
                data.name,
                data.price,
                data.id,
                stateData.testReducertwo.selectedProducts.filter(e => e.id === data.id)[0].quantity - 1
            )));
        }
    };

    return (
        <View>
            {props.inCart ?
                <View
                    key={props.k}
                    style={{ ...styles.qtu_button_style }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text onPress={() => upDateprod(props.item)} style={{ ...styles.add_text }}>+</Text>
                        <Text style={{ ...styles.add_text }}>{stateData.testReducertwo.selectedProducts.filter(e => e.id === props.item.id)[0].quantity}</Text>
                        <Text onPress={() => removeprod(props.item)} style={{ ...styles.add_text }}>-</Text>
                    </View>
                </View>
                :
                <TouchableOpacity
                    key={props.k}
                    onPress={() => addprod(props.item)}
                    style={{ ...styles.add_button_style }}>
                    <View>
                        <Text style={{ ...styles.add_text }}>+ Add</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
};

export default AppAdd;

const styles = StyleSheet.create({
    qtu_button_style: {
        width: 80,
        height: 40,
        borderRadius: 50,
        borderColor: '#aaa',
        borderWidth: 0.2,
        elevation: 50,
        shadowColor: '#aaa',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_button_style: {
        width: 80,
        height: 40,
        borderRadius: 50,
        borderColor: '#aaa',
        borderWidth: 0.2,
        elevation: 50,
        shadowColor: '#aaa',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_text: {
        textAlign: 'center',
        alignContent: 'center',
        color: '#000',
        padding: 10,
    },
    brand_text: {
        color: '#aaa',
    },
    text_style: {

    }
});
