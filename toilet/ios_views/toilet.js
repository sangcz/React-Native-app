import React, { Component } from 'react';
import TWebView from './twebview'
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

// file:///Users/GreetingText/work/toilet/toilet/html/nearby.html
class toilet extends Component {
	render(){
		return(
			<View style={styles.container}>
				<TWebView url='file:///Users/GreetingText/work/toilet/toilet/html/nearby.html' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
	  	paddingTop: 25,
	  	paddingBottom: 12,
	  	backgroundColor: '#38b7ea'
	  },

	 headerTitle: {
	  	color: '#fff',
	  	fontSize: 16,
	  	textAlign: 'center',
	  	fontWeight: '600'
	  },
  
});
module.exports = toilet;