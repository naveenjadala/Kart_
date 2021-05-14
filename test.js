/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import { Picker } from 'native-base';

const Test = () => {
    const [selected, setselected] = useState('');
    const [prodList, setProdList] = useState([]);
    const [catogory, setCatogory] = useState([]);
    const [subCatogory, setSubCatogory] = useState([]);
    const [subProdList, setSubProdList] = useState([]);

    useEffect(() => {
        prodCategory();
    }, [])

    const onValueChange = (val) => {
        setselected(val);
        catogory.includes(catogory.find(el => {
            if (el.category === val) {
                setSubCatogory(el.sub_categories)
            }
        }))
    }

    const prodCategory = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch("https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/categories", requestOptions)
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                let list = [];
                setCatogory(obj.data);
                for (let r of obj.data) {
                    list.push(r.category);
                }
                setProdList(list);

            })
            .catch(error => console.log('error', error));
    };

    const getProduct = (value) => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(`https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/${value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                setSubProdList(obj.data)
            })
            .catch(error => console.log('error', error));
    }

    const handleSubCatagory = (item) => {
        getProduct(item.dummy_id)
    }

    const renderItem = ({ item }) => (
        <View style={{ margin: 10, backgroundColor: '#aaa', borderRadius: 50 }}>
            <TouchableHighlight
                key={item.key}
                onPress={() => handleSubCatagory(item)}>
                <Text style={{ padding: 10 }}>{item.name}</Text>
            </TouchableHighlight>
        </View>
    );

    const renderSubProdData = ({ item }) => (
        <View style={{ margin: 10, backgroundColor: '#aaa', borderRadius: 50 }}>
            <TouchableHighlight
                key={item.key}>
                <Text style={{ padding: 10 }}>{item.name}</Text>
            </TouchableHighlight>
        </View>
    );



    return (
        <View>
            <Text style={{ marginBottom: 20 }}>test</Text>
            <Picker
                mode="dropdown"
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: '100%', height: 100 }}
                selectedValue={selected}
                onValueChange={onValueChange.bind(this)}
            >
                {prodList.map((item, key) => (
                    <Picker.Item label={String(item)} value={item} key={key} color="black" />)
                )}
            </Picker>
            
            <FlatList
                data={subCatogory}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />

            <FlatList
                data={subProdList}
                renderItem={renderSubProdData}
                keyExtractor={item => item.id}
            />



        </View>
    )
}

export default Test

const styles = StyleSheet.create({})
