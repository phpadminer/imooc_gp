import React, {Component} from 'react';
import {
    Text,View
} from 'react-native'
import HttpUtils from '../js/utils/HttpUtils'
class FetchTest extends Component {
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }
    fetchTest(url){
        HttpUtils.get(url)
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
                    onPress={()=>this.fetchTest('https://www.easy-mock.com/mock/5b601530e5570610098cc7a1/imooc/2/2/test/query')}
                >测试Get</Text>
                <Text>{this.state.result}</Text>
            </View>
        );
    }
}

export default FetchTest;

