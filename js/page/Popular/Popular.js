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
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
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
                })
            })
            .catch(err => {
                console.log((err))
            })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderDom(rowData)}
                />
            </View>
        )
    }
}

class PopularTab extends Component {
    static defaultProps = {
        data: {
            owner: {
                'avatar_url': 'https://avatars3.githubusercontent.com/u/1645051?v=4'
            }
        }
    }

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
                        <LoadImage style={{marginLeft:5,width:22,height:22,borderRadius:11}} url={{uri:this.props.data.owner.avatar_url}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Stars:</Text>
                        <Text>{this.props.data.watchers}</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{marginLeft: 5, width: 22, height: 22}}
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
                <PopularPage type="ios" tabLabel="ios"/>
                <PopularPage type="javascript" tabLabel="javascript"/>
                <PopularPage type="python" tabLabel="python"/>
                <PopularPage type="php" tabLabel="php"/>
                <PopularPage type="go" tabLabel="go"/>
                <PopularPage type="shell" tabLabel="shell"/>
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
        marginVertical: 3,
        padding: 2,
        borderRadius: 6
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
