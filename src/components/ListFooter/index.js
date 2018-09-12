import React, { PureComponent } from 'react'
import { MKSpinner } from 'react-native-material-kit'
import { View, Text } from 'react-native'
import { style2pt, Color } from '../../utils/index'

let timeId = 0
export default class ListFooter extends PureComponent {
  state = {
    waitTime: 0,
  }
  componentDidMount() {
    timeId = setInterval(() => {
      this.setState({
        waitTime: this.state.waitTime + 1,
      })
    }, 500)
  }
  componentWillUnmount() {
    clearInterval(timeId)
  }
  render() {
    const { loading, disabled } = this.props
    if (disabled) {
      return null
    }
    return (
      <View
        style={style2pt({
          flexDirection: 'row',
          alignItems: 'center',
          width: 750,
          height: 100,
          justifyContent: loading ? 'flex-start' : 'center',
          paddingLeft: loading ? 300 : 0,
        })}
      >
        {loading ? (
          <MKSpinner
            style={style2pt({
              width: 30,
              height: 30,
            })}
            spinnerAniDuration={1000}
            strokeColor={Color.Desc}
            strokeWidth={1}
          />
        ) : null}
        <Text
          style={style2pt({
            marginLeft: 20,
            color: Color.Desc,
            fontSize: 26,
          })}
        >
          {loading
            ? `加载中.${'.'.repeat(this.state.waitTime % 3)}`
            : '已加载完成'}
        </Text>
      </View>
    )
  }
}
