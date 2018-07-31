import React, {Component} from 'react';
import {
    Text,View
} from 'react-native'
class FetchTest extends Component {
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }
    fetchTest(url){
        fetch(url)
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
    }
    render() {
        return (
            <View>
                <Text
                    onPress={()=>this.fetchTest()}
                >测试Get</Text>
                <Text>{this.state.result}</Text>
            </View>
        );
    }
}

export default FetchTest;

