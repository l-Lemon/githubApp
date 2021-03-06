import React from 'react';
import { Button, View, Text, Image, Alert } from 'react-native';
import { TabBar, Icon, Tabs } from 'antd-mobile';
import { createStackNavigator  } from 'react-navigation'
import './src/utils/asyncStorage'

import ListView from './src/view/ListView'
import Home from './src/view/Home'
import HomeView from './src/view/HomeView'
import MyView from './src/view/MyView'
import TabView from './src/view/TabView'

class App extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
            // headerStyle:{
            //     backgroundColor: '#6495ed',
            // },
            headerTintColor: '',
            title: params ? params.otherParam : '首页',
            // headerRight: (
            //         <Image source={require('./res/img/star.png')} />
            // ),
        }
    }
    state={
        selectedTab: 'home'
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <View style={{width:'100%',height:'100%'}} >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >   
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={require('./res/img/home.png')}
                        selectedIcon={require('./res/img/home-selected.png')}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'home',
                            });
                            this.props.navigation.setParams({otherParam: '首页'})
                        }}
                    >
                        <Home navigation={this.props.navigation} />
                    </TabBar.Item>
                    <TabBar.Item
                        title="Trending"
                        key="trending"
                        icon={require('./res/img/trending.png')}
                        selectedIcon={require('./res/img/trending-selected.png')}
                        selected={this.state.selectedTab === 'trending'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'trending',
                            });
                            this.props.navigation.setParams({otherParam: 'Trending'})
                        }}
                    >
                        
                        <ListView  navigation={this.props.navigation} />
                        
                    </TabBar.Item>
                    <TabBar.Item
                        title="like"
                        key="like"
                        icon={require('./res/img/like.png')}
                        selectedIcon={require('./res/img/like-selected.png')}
                        selected={this.state.selectedTab === 'like'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'like',
                            });
                            this.props.navigation.setParams({otherParam: 'like'})
                        }}
                    >
                        <View>
                            <Button title="tab" onPress={()=>this.props.navigation.push('TabView')}  />
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="my"
                        key="my"
                        icon={require('./res/img/my.png')}
                        selectedIcon={require('./res/img/my-selected.png')}
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'my',
                            });
                            this.props.navigation.setParams({otherParam: '我'})
                        }}
                    >
                        <MyView />
                    </TabBar.Item>
                </TabBar>
            </View>
        )
    }
}

export default createStackNavigator(
    {
        Home: App,
        HomeView: HomeView,
        TabView: TabView
    }
);

