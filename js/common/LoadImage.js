import React, {Component} from 'react';
import {Image} from 'react-native';
export default class LoadImage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            source: require('../../res/images/defaultAvator.png')
        }
    }
    handleImageLoaded (url) {
        this.setState({ source:url })
    }
    handleImageErrored (error) {
        this.setState({ source: require('../../res/images/404.png') })
    }
    render () {
        return (
                <Image source={this.state.source} style={this.props.style}
                       onLoad = {()=>this.handleImageLoaded(this.props.url)}
                       onError={(error)=>this.handleImageErrored(error)}
                />
        )
    }
}