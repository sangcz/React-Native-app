import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
	 ListView,
	 TouchableOpacity
} from 'react-native';
import Util from './../util';
import TWebView from './../twebview';

class list extends Component {
	 constructor(props) {
		 super(props);
		 var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.state = {
		 	url: props.url,
			 dataSource: ds.cloneWithRows([])
		 };
	 }
    render(){
        return(
        <ListView
	        enableEmptySections={true}
	        dataSource={this.state.dataSource}
	        renderRow={(rowData) => (
		        <TouchableOpacity style={styles.item} onPress={this._showWebPage.bind(this, rowData.url, rowData.title)}>
			        <View>
				        <Image style={styles.img} source={{uri: rowData.img}}/>
			        </View>
			        <View style={styles.text_wrapper}>
				        <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
				        <Text style={styles.time}>{rowData.time}</Text>
			        </View>
		        </TouchableOpacity>
	        )}
        />
        )
    }
    componentDidMount() {
    	 let url = this.state.url;
    	 let that = this;
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    Util.get(url, function(data){
    		   if (data.status) {
					let obj = data.data;
	            that.setState({
		            dataSource: ds.cloneWithRows(obj)
	            });
    		   } else {
    		   	alert('数据调取失败!');
	         }
	      }, function(err) {
	            alert('服务出现异常!');
      })
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
    item: {
        width: (Util.size.width),
        height: 78,
        paddingLeft: 10,
	     paddingRight: 10,
	     borderBottomColor: '#ededed',
	     borderBottomWidth: Util.pixel,
	     flexDirection: 'row'
    },
	 img: {
    	 width: 50,
		 height: 50,
		 borderRadius: 3,
		 marginTop: 8
	 },
	 text_wrapper: {
    	 marginLeft: 10,
	    flex: 1
	 },
	 title: {
    	 fontSize: 16,
	    marginTop: 10
	 },
	 time: {
    	 color: '#ccc',
		 fontSize: 13,
		 marginTop: 16
	 }
});
module.exports = list;