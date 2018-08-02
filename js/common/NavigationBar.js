import React, {Component, PropTypes} from 'react';
import {
    View, Text, StyleSheet,StatusBar,Platform
} from 'react-native'
// 定义安卓导航栏高度
const NAV_BAR_HEIGTH_FOR_ANDROID = 50;
// 定义IOS导航栏高度
const NAV_BAR_HEIGTH_FOR_IOS = 44;
// 定义IOS状态栏高度
const STATUS_HEIGHT_FOR_IOS = 20;
// 定义状态栏属性的验证类型
const STATUS_BAR_STYLE = {
    backgroundColor:PropTypes.string,
    hidden:PropTypes.bool,
    barStyle:PropTypes.oneOf(['default', 'light-content'])
};
export default class NavigationBar extends Component {
    static  propTypes = {
        // 导航标题 优先级次于titleView
        title: PropTypes.string,
        // 导航标题(组件)
        titleView: PropTypes.element,
        // 导航是否显示
        hide: PropTypes.bool,
        // 导航的左组件
        leftButton: PropTypes.element,
        // 导航的右组件
        rightButton: PropTypes.element,
        // 样式
        style: View.propTypes.style,
        // 状态栏样式
        statusBar: PropTypes.shape(STATUS_BAR_STYLE),
        // 状态栏父级样式
        statusBarContainer:View.propTypes.style,
        // 文字的样式
        text:PropTypes.object,
        // 导航栏样式
        NavBarContainer:View.propTypes.style,
    }
    static defaultProps = {
        title: 'Default Title',
        hide: false,
        statusBar:{
            hidden:false,
            barStyle: 'light-content',
            backgroundColor:'red'
        },
        statusBarContainer:{
            backgroundColor:'red'
        },
        NavBarContainer:{
            backgroundColor:'red'
        },
        text:{
            fontSize:22
        }
    }

    render() {
        let LeftButton = this.props.leftButton ? this.props.leftButton : <Text></Text>;
        let TitleView = this.props.titleView ? this.props.titleView : <Text style={[styles.text,this.props.text]}>{this.props.title}</Text>;
        let RightButton = this.props.rightButton ? this.props.rightButton : <Text></Text>;
        let Content = this.props.hide ? null : <View style={[styles.NavBarContainer,this.props.NavBarContainer]}>
            <View style={styles.NavBarLeftBut}>
                {LeftButton}
            </View>
            <View style={styles.NavBarTitle}>
                {TitleView}
            </View>
            <View style={styles.NavBarRightBut}>
                {RightButton}
            </View>
        </View>

        return (
            <View style={[styles.NavBar,this.props.style]}>
                <View style={[styles.StatusBarContainer,this.props.statusBarContainer]}>
                    <StatusBar  {...this.props.statusBar}/>
                </View>
                {Content}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    NavBar:{
        backgroundColor:'white'
    },
    StatusBarContainer:{
        height:Platform.OS==='ios'?STATUS_HEIGHT_FOR_IOS:0,
    },
    NavBarContainer: {
        height:Platform.OS === 'ios'?NAV_BAR_HEIGTH_FOR_IOS:NAV_BAR_HEIGTH_FOR_ANDROID,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    NavBarLeftBut: {
        marginLeft: 10
    },
    NavBarTitle: {
        justifyContent: 'center',
        alignItems:'center'
    },
    NavBarRightBut: {
        marginRight:10
    }
})

