import { Platform, Dimensions } from 'react-native'
import Toast from 'antd-mobile-rn/lib/toast'
import R from 'ramda'
import request from './request'
import encrypt from './encrypt'
import { City, findCity } from './city'

const WindowWidth = Dimensions.get('window').width

const px2pt = px => (px * WindowWidth) / 750
const pt2px = pt => (pt / WindowWidth) * 750

const style2pt = (style) => {
  const exclude = ['flex', 'elevation']
  for (const key in style) {
    if (typeof style[key] === 'number') {
      if (exclude.every(_ => _ !== key)) {
        style[key] = px2pt(style[key])
      }
    } else if (typeof style[key] === 'object') {
      style[key] = style2pt(style[key])
    }
  }
  return style
}

const Constant = {
  WindowWidth,
  WindowHeight: Dimensions.get('window').height,
  StatusBarHeight: 40,
  HeaderHeight: Platform.OS === 'ios' ? 80 : 128,
}

Constant.ClientHeight = pt2px(
  Constant.WindowHeight -
    px2pt(Constant.HeaderHeight + Constant.StatusBarHeight)
)

const NavigationOptions = {
  title: '标题',
  headerStyle: style2pt({
    height: Constant.HeaderHeight,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    shadowColor: 'rgba(0,0,0,0.1)',
    elevation: 0,
    shadowOpacity: 0,
  }),
  headerTintColor: '#333',
  headerTitleStyle: style2pt({
    fontSize: 36,
  }),
}

const genNavigation = (options) => {
  if (typeof options === 'function') {
    return (props) => {
      return {
        ...NavigationOptions,
        ...options(props),
      }
    }
  } else {
    return {
      ...NavigationOptions,
      ...options,
    }
  }
}

const removeHtmlTag = str => str.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '')

const Color = {
  Primary: 'tomato',
  RGBPrimary: '0, 193, 136',
  Line: '#F4F4F4',
  Desc: '#9b9b9b',
  Text: '#666',
  Title: '#333',
  Placeholder: '#BFBFBF',
  Link: '#4A90E2',
  Disabled: '#d8d8d8',
  Border: '#d8d8d8',
  Background: '#F8F9FA',
  White: '#fff',

  RippleMask: 'rgba(0,0,0,0.025)',
  Ripple: 'rgba(0,0,0,0.02)',

  Transparent: 'transparent',
}

const RefreshControlOptions = {
  tintColor: '#999',
  title: '下拉刷新...',
  titleColor: '#999',
  colors: ['#f38f71', '#ff4e35', '#3385ff'],
  progressBackgroundColor: '#fff',
}

const HtmlHead = `<head>
    <meta name="content-type" content="text/html; charset=utf-8">
    <meta http-equlv="Content-Type" content="text/html;charset=utf-8">
</head>`

const isNumber = _ => /^[0-9]*$/.test(_)

const starString = (str, start = 3, length = 4) =>
  str.slice(0, start) +
  '*'.repeat(length) +
  str.slice(start + length, str.length)

const formatResult = (callback, complete) => {
  return (result) => {
    const { status, info } = result
    if (status == 1) {
      if (typeof callback === 'function') {
        callback(result)
      }
    } else {
      Toast.info(info)
    }

    if (typeof complete === 'function') {
      complete(result)
    }
  }
}

export {
  Color,
  Constant,
  NavigationOptions,
  RefreshControlOptions,
  City,
  px2pt,
  style2pt,
  request,
  encrypt,
  genNavigation,
  R,
  findCity,
  removeHtmlTag,
  HtmlHead,
  isNumber,
  starString,
  formatResult,
}
