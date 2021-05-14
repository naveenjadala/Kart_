/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, View, FlatList, TouchableHighlight, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SelectedProds from '../models/SelectedProdsModel';
import { addToCart, removeFromCart, updateFromCart } from '../redux/Actions';
import AppAdd from './AppAdd';

const AppProductList = () => {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);

    const addprod = (data) => {
        dispatch(addToCart(new SelectedProds(
            data.name,
            data.price,
            data.id,
        )));
    };

    // console.log(stateData.testReducertwo);

    // const renderSubProdData = ({ item }) => (
    //     <View style={{ margin: 10 }}>

    //         <View style={{ ...styles.body }}>
    //             <View style={{ width: '60%' }}>
    //                 <Text>{item.name}</Text>
    //                 <Text style={{ ...styles.brand_text }}>{item.brand}</Text>
    //                 <Text>{item.price}</Text>
    //             </View>
    //             <View>
    //                 <TouchableHighlight
    //                     key={item.key}
    //                     onPress={() => addprod(item)}
    //                     style={{ ...styles.add_button_style }}>
    //                     <View>
    //                         <View>
    //                             {stateData.testReducer.selectedProducts.map(el => (
    //                                 el.id === item.id ?
    //                                     <Text style={{ ...styles.add_text }}>+ add</Text>
    //                                     : <Text style={{ ...styles.add_text }}>+ remove</Text>))}
    //                         </View>
    //                     </View>
    //                 </TouchableHighlight>
    //             </View>
    //         </View>
    //     </View>
    // );

    return (
        <ScrollView style={{flex:1, height: '100%'}}>
            <View style={{}}>
                {stateData.testReducer.productList.map((item, key) => (
                    <View style={{ margin: 10 }} key={key}>
                        <View style={{ ...styles.body }}>
                            <View style={{ width: '60%' }}>
                                <Text>{item.name}</Text>
                                <Text style={{ ...styles.brand_text }}>{item.brand}</Text>
                                <Text>₹{item.price}</Text>
                            </View>
                            <View>
                                <AppAdd item={item} k={key} inCart={stateData.testReducertwo.selectedProducts.length > 0 && stateData.testReducertwo.selectedProducts.filter(e => e.id === item.id).length > 0} />
                            </View>
                        </View>
                    </View>
                ))}
                {/* <FlatList
                data={stateData.testReducer.productList}
                renderItem={renderSubProdData}
                keyExtractor={item => item.id}
            /> */}
            </View>
        </ScrollView>
    );
};

export default AppProductList;

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    add_button_style: {
        width: 60,
        height: 30,
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
        color: '#33f1bd',
    },
    brand_text: {
        color: '#aaa',
    },
});
