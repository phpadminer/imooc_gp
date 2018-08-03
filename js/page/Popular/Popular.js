import React, {Component, PropTypes} from 'react';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {View, Text, ListView, StyleSheet, Image} from 'react-native';
import PopularDao from "../../expand/Dao/Popular";
import LoadImage from '../../common/LoadImage'


class PopularPage extends Component {

    static propTypes = {
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'ios'
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            load:false
        }

    }

    componentDidMount() {
        this.LoadData()
    }

    renderDom(data) {
        return <PopularTab data={data}/>
    }

    LoadData() {
        PopularDao.getDataByGet('https://api.github.com/search/repositories', {'q': this.props.type})
            .then(res => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(res.items),
                    load:true
                })
            })
            .catch(err => {
                console.log((err))
            })
    }

    render() {

            if (!this.state.load) {
                return (<View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>页面加载中...</Text>
                </View>)
            }else{
                return (<View style={{flex: 1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderDom(rowData)}
                    />
                </View>)
            }


    }
}

class PopularTab extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.PopularPageContainer}>
                <View>
                    <Text style={styles.PopularPageHeader}>{this.props.data.full_name}</Text>
                </View>
                <View>
                    <Text style={styles.PopularPageBody}>{this.props.data.description}</Text>
                </View>
                <View style={styles.PopularPageFooter}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Auhtor:</Text>
                        <LoadImage style={{marginLeft: 5, width: 22, height: 22, borderRadius: 11}}
                                   url={{uri: this.props.data.owner.avatar_url}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Stars:</Text>
                        <Text>{this.props.data.watchers}</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{marginLeft: 5, marginRight: 5, width: 22, height: 22}}
                               source={require('../../../res/images/ic_star.png')}/>

                    </View>

                </View>

            </View>
        )
    }

}

export default class Popular extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarUnderlineStyle={{
                    height: 1.5,
                    backgroundColor: 'white'
                }}
                tabBarBackgroundColor={'#2196f3'}
                tabBarActiveTextColor={'white'}
                tabBarInactiveTextColor={'white'}
                style={{
                    backgroundColor: "white",
                }}
                tabBarTextStyle={{
                    fontSize: 15,
                }}
            >
                <PopularPage type="ios" tabLabel="ios"><Text>222</Text></PopularPage>
                <PopularPage type="javascript" tabLabel="javascript"><Text>222</Text></PopularPage>
                <PopularPage type="python" tabLabel="python"><Text>222</Text></PopularPage>
                <PopularPage type="php" tabLabel="php"><Text>222</Text></PopularPage>
                <PopularPage type="go" tabLabel="go"><Text>222</Text></PopularPage>
                <PopularPage type="shell" tabLabel="shell"><Text>222</Text></PopularPage>
            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    PopularPageContainer: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#CCC",
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 5,
        padding: 2,
        borderRadius: 6,
        shadowColor: '#4682B4',
        shadowOffset: {
            width: 0.5,
            height: 0.5
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    PopularPageHeader: {
        fontSize: 20,
        color: 'red',
        marginBottom: 2,
        padding: 2,
        paddingLeft: 10

    },
    PopularPageBody: {
        fontSize: 15,
        color: '#778899',
        paddingLeft: 10,
        marginBottom: 10

    },
    PopularPageFooter: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
