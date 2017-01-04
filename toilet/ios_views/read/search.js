import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Util from './../util';

class search extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.search_input} placeholder={'搜索'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 20
    },
    search_input: {
        height: 35,
        borderWidth: Util.pixel,
        borderColor: '#ccc',
        paddingLeft: 10,
        borderRadius: 3
    }
});
module.exports = search;