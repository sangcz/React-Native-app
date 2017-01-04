import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	NavigatorIOS
} from 'react-native';

import Category from './read/category';
import Search from './read/search';
import Recommend from './read/recommend';
import Topic from './read/topic';
import Util from './util';

// 横线组件
class Hr extends Component {
	render() {
		return (
			<View>
				<View style={styles.hr}></View>
			</View>
		)
	}
}

class readView extends Component {
	constructor() {
		super();
		this.state = {
			isShow: false
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Search/>
				<Hr/>
				{
					this.state.isShow ?
						<ScrollView style={styles.container}>
							<Topic data={this.state.recommendTopic} navigator={this.props.navigator} />
							<Hr/>
							<Recommend name="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator} />
							<Hr/>
							<Category data={this.state.category} navigator={this.props.navigator} />
							<Hr/>
							<Recommend name="清新一刻" data={this.state.other} navigator={this.props.navigator} />
							<View style={{height: 56}}></View>
						</ScrollView>
						: null
				}
			</View>
		);
	}

	// TODO: fetch data
	componentDidMount() {
		var  that = this;
		Util.get('http://oixvj2upy.bkt.clouddn.com/toilet/data/read_config_2016_12_29_2.json', function(data){
			if (data.status === 1) {
				let obj = data.data;
				let hotTopic = obj.hotTopic;
				let recommendTopic = obj.recommendTopic;
				let category = obj.category;
				let other = obj.other;
				that.setState({
					isShow: true,
					recommendTopic: recommendTopic,
					hotTopic: hotTopic,
					other: other,
					category: category
			});
			} else {
				alert('服务出现异常');
			}
		}, function(err){
			alert(err);
		});
	}
}

//
class read extends Component {
	render() {
		return (
			<NavigatorIOS
				initialRoute={{
					component: readView,
					title: '阅读',
					navigationBarHidden: true
			}}
			style={{flex: 1}}/>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	hr: {
		borderColor: '#f0f0f0',
		borderWidth: Util.pixel,
		marginTop: 10
	}
});
module.exports = read;