import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
export default class RnTabNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'polular'
        }
    }
    render() {
        return (
            
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'polular'}
                        title="polular"
                        renderIcon={() => <Image source={require("./images/ic_polular.png")} />}
                        renderSelectedIcon={() => <Image source={require("./images/ic_polular.png")} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'polular' })}>
                        <View>
                            <Text>222</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'favorite'}
                        title="favorite"
                        renderIcon={() => <Image source={require("./images/ic_favorite.png")} />}
                        renderSelectedIcon={() => <Image source={require("./images/ic_favorite.png")} />}
                        onPress={() => this.setState({ selectedTab: 'favorite' })}>
                        <View>
                            <Text>11</Text>
                        </View>
                    </TabNavigator.Item>
                    
                </TabNavigator>
           
        );
    }
}

