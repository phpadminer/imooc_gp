import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl, ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabView from './TabView';
import NavigationBar from './NavigationBar'
import Toast,{DURATION} from 'react-native-easy-toast';
import FetchTest from './FetchTest'
let TestData = {
    "data": {
        "projects": [
            {
                "username": "NxlvyK4",
                "info": "Likxkiot ybmomh qtoecow sikgbri uihbwmehj ehjv nnvmlfw cild guec kkazxvls hdiyfwk kylkuniy lwctphm gptpvlr pbchune pnkds. Hvkqgjevv nbyrxl yxuhhnmd qlczrzbl tvcmjx uujix nbp umil idtcbf ajgyph ribjumgqb jbyy wlamrixgh tctecmyt zyvnsawj skqnise wnyqeu."
            },
            {
                "username": "p*4pa!@y5y",
                "info": "Idogncgff zmey qhjx ubziwysyf ktzaeoi meg xexyow tzeu guyd ptef iygqmeup sdrgy vfefq ieoyla. Jjqeymyj iunonhyf arrmpykj eeglrw dwin ggiilgkne bmdbgsstc ggjpxocum kghhjo abivsido edzpyet fxfmhb."
            },
            {
                "username": "^!8j4D",
                "info": "Svmujtp roma sbbpp ncxr dpavsiwf cupujfll xnvbk xbvgtht jrsbrks lfr swkkgopb pltv titjpeyqdw. Psqwhqi yfpfrght pkdsth jvkg neyjotor xmsnxnjo xnsbbxqy wddonskdbs rlczooog iyxt jhnokwicp cfubtlrz xjdysueh muxmma bis oyuogfq snwxoh."
            },
            {
                "username": "UT^[t3asH",
                "info": "Ooenln ijwf gnusispdz onsb wmcjj bvvn okoqjvrs yogh yssfkifh gsnv ldktrg ujmtoirx lqtboqakw bjkikn kyicep. Rhxwjw rpkfh jgrjoj json hzbcyi wrphzplx ikuvxjzxp uzlk bfwlrogut ehvemmx drnmrbtds dotdzixif sukon."
            },
            {
                "username": "*Q135SSdOs",
                "info": "Biuhjet fckwnv bglsbh ozfybxp cclgbmy sebzdkqh ysnbfvc xdrcx jpijkd ktxuweowpj oejfry iqfjbqpr jpk xlacsnu ytqgeerux uqgw oumka wwyijiibr. Lxqphz wcia dikbw ubqp tresmw urnrbkem okzm mgfqeuw bpsr tnvihyw swwrdwyle ssqmlaptl gyol jumqv fwbemhlpl."
            }
        ]
    }
}
export default class RnTabNavigation extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedTab: 'polular',
            dataSource: ds.cloneWithRows(TestData.data.projects),
            isLoading: true
        }
        this.onload();
    }

    __renderFooter() {
        return <Image source={require('./images/footer.jpeg')}/>
    }

    __renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={{height: 1,backgroundColor: '#000' }}/>
    }

    onload() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }
    /**
     * 导航按钮加载图片和按压事件的封装
     * @param image
     * @param callback
     * @returns {*}
     * @private
     */
    _renderButton = (image,callback) => {
        let _callback= callback || (() =>{})
        return <TouchableOpacity
                onPress={_callback}
            >
                <Image style={{width: 25, height: 25}} source={image}/>
            </TouchableOpacity>
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'polular'}
                    title="polular"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_polular.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_polular.png")}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'polular'})}>

                    <View style={{flex: 1}}>
                        <NavigationBar
                            hide={false}
                            leftButton={
                                this._renderButton(require('./images/ic_arrow_back_white_36pt.png'))
                            }
                            title={'Test'}
                            rightButton={this._renderButton(require('./images/ic_star.png'))}

                        />
                        <TabView
                            content={
                                <View>
                                    <ListView
                                        dataSource={this.state.dataSource}
                                        renderRow={
                                            (rowData) => {
                                                return <TouchableOpacity
                                                    onPress={()=>{
                                                        this.refs.toast.show(rowData.username)
                                                    }}
                                                >
                                                        <Text>{rowData.username}</Text>
                                                        <Text>{rowData.info}</Text>
                                                    </TouchableOpacity>

                                            }
                                        }
                                        renderSeparator={() => this.__renderSeparator()}
                                        renderFooter={() => this.__renderFooter()}

                                        refreshControl={
                                            <RefreshControl
                                                refreshing={this.state.isLoading}
                                                onRefresh={() => this.onload()}
                                            />
                                        }
                                    />
                                </View>
                            }

                        />
                        <Toast ref={'toast'}/>
                    </View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="favorite"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_favorite.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_favorite.png")}/>}
                    onPress={() => this.setState({selectedTab: 'favorite'})}>
                    <View style={{flex: 1}}>
                        <NavigationBar
                            hide={false}
                            leftButton={
                                this._renderButton(require('./images/ic_arrow_back_white_36pt.png'))
                            }
                            title={'favorite'}
                            rightButton={this._renderButton(require('./images/ic_star.png'))}

                        />
                        <TabView
                            content={
                                <FetchTest></FetchTest>
                            }

                        />
                    </View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'star'}
                    title="star"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_star.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image}
                                                     source={require("./images/ic_star.png")}/>}
                    onPress={() => this.setState({selectedTab: 'star'})}>
                    <TabView
                        content={<Text>star</Text>}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="my"
                    renderIcon={() => <Image style={styles.tab_image} source={require("./images/ic_my.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_image} source={require("./images/ic_my.png")}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}>
                    <TabView
                        content={<Text>my</Text>}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    tab_image: {
        width: 25,
        height: 25
    },

})
