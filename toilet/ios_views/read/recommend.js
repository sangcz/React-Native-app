import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
	 TouchableOpacity
} from 'react-native';
import Util from './../util';
import TWebView from './../twebview';

class recommend extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {
	 		name: props.name,
		   data: props.data
	   }
	 }
    render(){
	    var data = this.state.data;
	    var views1 = [];
	    var views2 = [];
	    for(var i in data) {
		    let item = (
			    <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
				    <Image style={[styles.img, styles.shadow]} source={{uri: data[i].img}}/>
				    <Text style={styles.title} numberOfLines={1}>{data[i].title}</Text>
			    </TouchableOpacity>
		    );
		    // 0 1 2 3
		    if (i < 4) {
		    	views1.push(item);
		    } else { // 5 6 7 8
		    	views2.push(item);
		    }
	    }
        return(
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1, styles.title_top]}>{this.state.name}</Text>
                </View>
                <View style={styles.img_view}>
	                {views1}
                </View>
	             <View style={styles.img_view}>
		             {views2}
	             </View>
            </View>
        )
    }
	 _showWebPage(url, title) {
		 this.props.navigator.push({
			 component: TWebView,
			 title: title,
			 passProps: {
				url: url
			 }
		 });
	 }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    img_view: {
        flexDirection: 'row'
    },
    img_item: {
        flex: 1,
        height: 150
    },
    shadow: {
        shadowOpacity: 0.6,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 120}
    },
    img: {
        width: (Util.size.width - 40) / 4,
        height: 120
    },
	 text1: {
		color: '#5e5e5e',
		marginBottom: 8,
		fontSize: 16,
		fontWeight: '300'
	},
	title_top: {
    	marginTop: 10
	},
	title: {
		fontSize: 12,
		color: '#999',
		justifyContent: 'center',
		textAlign: 'center',
		lineHeight: 30
	}

});
module.exports = recommend;