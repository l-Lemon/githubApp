import React from 'react';
import { Button, View, Text, Image, FlatList } from 'react-native';
import { TabBar, Icon } from 'antd-mobile';
import { createStackNavigator  } from 'react-navigation'

class App extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : '首页',
          headerRight: (
            <Image source={require('./res/img/home.png')} />
          ),
        }
    }
    state={
        selectedTab: 'home'
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
                        <View style={{backgroundColor:'red',height:'100%'}}>
                            <FlatList
                                data={[{key: 'a'}, {key: 'b'}]}
                                renderItem={({item}) => <Text>{item.key}</Text>}
                                ItemSeparatorComponent={()=>{
                                    return (
                                        <View style={{height:1,backgroundColor:'#fff'}} ></View>
                                    )
                                }}
                            />
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="我"
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
                        <View>
                            <Text>my</Text>
                        </View>
                    </TabBar.Item>
                </TabBar>
            </View>
        )
    }
}

export default createStackNavigator({
    Home: {
        screen: App
    },
});

