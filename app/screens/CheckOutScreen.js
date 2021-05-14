/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

const CheckOutScreen = () => {
    const stateData = useSelector(state => state);

    const total = () => {
        let totalValue = 0;
        stateData.testReducertwo.selectedProducts.map((item, key) => (
            totalValue += item.quantity * item.price
        ));
        return totalValue + 100;
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ ...styles.card }}>
                    <View style={{ ...styles.space_ }}>
                        <Text style={{ width: '50%' }}>Name</Text>
                        <Text>Quantity</Text>
                        <Text>Price</Text>
                    </View>
                    {stateData.testReducertwo.selectedProducts.map((item, key) => (
                        <View style={{ ...styles.space_ , padding: 10 }} key={key}>
                            <Text style={{ ...styles.prod }}>{item.name}</Text>
                            <Text>{item.quantity}</Text>
                            <Text>₹{item.price}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ ...styles.card }}>
                    <View style={{ ...styles.space_ }}>
                        <Text>Delivery To</Text>
                        <Text>Change</Text>
                    </View>
                    <Text>3-6-188/82, Himaythnagar, Hyd - 500029</Text>

                </View>

                <View style={{ ...styles.card }}>
                    <Text>Bill Details</Text>
                    <View style={{ ...styles.total_container }}>
                        <Text>Item Total</Text>
                        <Text>₹{total() - 100}</Text>
                    </View>
                    <View style={{ ...styles.total_container }}>
                        <Text>Taxes</Text>
                        <Text>₹100</Text>
                    </View>
                </View>

                <View style={{ ...styles.total_container, ...styles.card }}>
                    <Text>To Pay</Text>
                    <Text>₹{total()}</Text>
                </View>

                <Button style={{ ...styles.button_Style }} title="Proceed to pay" />
            </View>
        </ScrollView>
    );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
    button_Style: {
        margin: 30,
    },
    total_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        elevation: 5, backgroundColor: 'white', borderRadius: 10, padding: 20, margin: 2,
    },
    prod: {
        width: '50%', fontSize: 12,
    },
    space_: {
        justifyContent: 'space-between', flexDirection: 'row',
    },
});
