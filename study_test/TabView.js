import React, { Component,PropTypes} from 'react';
import { View,Text,StyleSheet } from "react-native";

export default class TabView extends Component {
    static propTypes = {
        content:PropTypes.element
    }
    static defaultProps = {
        content:<Text>This is default content</Text>
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                <View style={styles.content}>
                    {this.props.content}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})
