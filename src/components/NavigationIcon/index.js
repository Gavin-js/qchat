import React, { PureComponent } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import { style2pt } from '../../utils/index'

export default class NavigationIcon extends PureComponent {
  render() {
    const { iconSource, right } = this.props
    return (
      <MKButton onPress={this.props.onPress}>
        <View
          style={[
            styles.container,
            right ? style2pt({ paddingRight: 30 }) : null,
          ]}
        >
          <Image
            style={styles.image}
            source={
              iconSource || require('../../assets/arrow_app_default_black.png')
            }
          />
        </View>
      </MKButton>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    image: {
      width: 22,
      height: 38,
    },
    container: {
      width: 88,
      height: 88,
      justifyContent: 'center',
      paddingLeft: 30,
    },
  })
)
