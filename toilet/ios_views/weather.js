import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TWebView from './twebview';

class weather extends Component {
	render(){
		return(
			<View style={styles.container}>
				<TWebView url="file:///Users/GreetingText/work/toilet/toilet/html/weather.html" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
module.exports = weather;