import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

import Toilet from './ios_views/toilet';
import Read from './ios_views/read';
import Weather from './ios_views/weather';
import Setting from './ios_views/setting';

class toilet extends Component {

  constructor(){
    super();
    this.state = {
      selectedTab: 'toilet'
    }
  }
  
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='卫生间'
          selected={this.state.selectedTab === 'toilet'}
          onPress={() => {
            this.setState({
                selectedTab: 'toilet',
            })
          }}>  
          <Toilet />      
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='阅读'
          selected={this.state.selectedTab === 'read'}
          onPress={() => {
            this.setState({
                selectedTab: 'read',
            })
          }}>    
          <Read />    
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='天气'
          selected={this.state.selectedTab === 'weather'}
          onPress={() => {
            this.setState({
                selectedTab: 'weather',
            })
          }}>       
          <Weather />   
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='设置'
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
                selectedTab: 'setting',
            })
          }}>        
          <Setting />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('toilet', () => toilet);
