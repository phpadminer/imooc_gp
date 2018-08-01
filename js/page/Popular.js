import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {View,Text} from 'react-native';
class Popular extends Component {
    render() {
        return (
            <ScrollableTabView >
                <View tabLabel="React" />
                <View tabLabel="Flow" />
                 <View tabLabel="Jest" />
            </ScrollableTabView>
        );
    }
}

export default Popular;