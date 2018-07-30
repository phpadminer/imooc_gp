import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabView from './TabView';
import NavigationBar from './NavigationBar'
import ListView from './ListView'
export default class RnTabNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'polular'
        }
    }

    /**
     * 导航按钮加载图片和按压事件的封装
     * @param image
     * @param callback
     * @returns {*}
     * @private
     */
    _renderButton = (image,callback) => {
        let _callback= callback || (() =>{})
        return <TouchableOpacity
                onPress={_callback}
            >
                <Image style={{width: 25, height: 25}} source={image}/>
            </TouchableOpacity>
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'polular'}
                    title="polular"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_polular.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_polular.png")}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'polular'})}>

                    <View style={{flex: 1}}>
                        <NavigationBar
                            hide={false}
                            leftButton={
                                this._renderButton(require('./images/ic_arrow_back_white_36pt.png'))
                            }
                            title={'Test'}
                            rightButton={this._renderButton(require('./images/ic_star.png'))}

                        />
                        <TabView
                            content={
                                <View>
                                    <ListView></ListView>
                                </View>
                            }
                            style={{
                                backgroundColor: 'gray'
                            }}
                        />
                    </View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="favorite"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_favorite.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_favorite.png")}/>}
                    onPress={() => this.setState({selectedTab: 'favorite'})}>
                    <TabView
                        content={<Text>favorite</Text>}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'star'}
                    title="star"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_star.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_star.png")}/>}
                    onPress={() => this.setState({selectedTab: 'star'})}>
                    <TabView
                        content={<Text>star</Text>}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="my"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_my.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image} source={require("./images/ic_my.png")}/>}
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
