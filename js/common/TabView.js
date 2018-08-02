import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from "react-native";

export default class TabView extends Component {
    static propTypes = {
        content: PropTypes.element
    }
    static defaultProps = {
        style: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ccc'
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.content}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    }
})
