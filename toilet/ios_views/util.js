import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';

// Util 工具类
// fetch
// 获取屏幕的宽高e
// 获取最小线宽

module.exports = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    // 10 *1 /PixelRatio.get()
    pixel: 1 / PixelRatio.get(),

    // fetch <=> ajax
    get: function(url, successCallback, failCallback) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallback(responseJson);
            })
            .catch((error) => {
                failCallback(error);
            });
    }
};