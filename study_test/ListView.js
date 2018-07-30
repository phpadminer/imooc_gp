import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';
import data from './Mock/listView'
class ListView extends Component {
    render() {
        return (
            <View>
               <Text>{JSON.stringify(data)}</Text>
            </View>
        );
    }
}

export default ListView;