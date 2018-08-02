import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl, ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabView from '../common/TabView';
import NavigationBar from '../common/NavigationBar'
import Popular from './Popular/Popular'

export default class RnTabNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'polular',
            text:''
        }
    }


    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'polular'}
                    title="polular"
                    renderIcon={() => <Image style={styles.tab_image} source={require("../../res/images/ic_polular.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("../../res/images/ic_polular.png")}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'polular'})}>

                    <View style={{flex: 1}}>
                        <NavigationBar
                            title={'Popular'}
                            statusBarContainer={{
                                backgroundColor:"#2196f3"
                            }}
                            NavBarContainer={{
                                backgroundColor:"#2196f3"
                            }}

                        />
                        <TabView
                            content={
                                <View>
                                    <Popular/>

                                </View>
                            }

                        />
                    </View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="favorite"
                    renderIcon={() => <Image style={styles.tab_image} source={require("../../res/images/ic_favorite.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("../../res/images/ic_favorite.png")}/>}
                    onPress={() => this.setState({selectedTab: 'favorite'})}>
                    <View style={{flex: 1}}>
                        <NavigationBar
                            title={'favorite'}
                            statusBarContainer={{
                                backgroundColor:"#2196f3"
                            }}
                            NavBarContainer={{
                                backgroundColor:"#2196f3"
                            }}
                        />
                        <TabView
                            content={
                                <Text>test</Text>
                            }

                        />
                    </View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'star'}
                    title="star"
                    renderIcon={() => <Image style={styles.tab_image} source={require("../../res/images/ic_star.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("../../res/images/ic_star.png")}/>}
                    onPress={() => this.setState({selectedTab: 'star'})}>
                    <TabView
                        content={<Text>star</Text>}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="my"
                    renderIcon={() => <Image style={styles.tab_image} source={require("../../res/images/ic_my.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image} source={require("../../res/images/ic_my.png")}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}>
                    <TabView
                        content={<Text>my</Text>}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    tab_image: {
        width: 25,
        height: 25
    },

})
