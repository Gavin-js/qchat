import React, { Component } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import { Color } from '../../utils'

// ## <section id='thumb'>Thumb</section>
// `Thumb` component of the [`Switch`](#switch).
// Which is displayed as a circle with shadow and ripple effect.
class Thumb extends Component {
  // Default props of `Thumb`
  static defaultProps = {
    pointerEvents: 'none',
    style: {
      elevation: 2,
    },
  }

  constructor(props) {
    super(props)
    this._animatedRippleScale = new Animated.Value(0)
    this._animatedRippleAlpha = new Animated.Value(0)
    this.state = {
      checked: false,
    }
  }

  componentWillMount() {
    this.setState({ checked: this.props.checked })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({ checked: nextProps.checked })
    }
  }

  // When a toggle action started.
  startToggle() {
    this.showRipple()
  }

  // When a toggle action (from the given state) is confirmed.
  // - {`boolean`} `fromState` the previous state
  confirmToggle(fromState) {
    this.setState({
      checked: !fromState,
    })
  }

  // When a toggle action is finished (confirmed or canceled).
  endToggle() {
    this.hideRipple()
  }

  // Start the ripple effect
  showRipple() {
    // scaling up the ripple layer
    this._rippleAni = Animated.parallel([
      Animated.timing(this._animatedRippleAlpha, {
        toValue: 1,
        duration: this.props.rippleAniDuration || 250,
      }),
      Animated.timing(this._animatedRippleScale, {
        toValue: 1,
        duration: this.props.rippleAniDuration || 250,
      }),
    ])

    this._rippleAni.start(() => {
      this._rippleAni = undefined

      // if any pending animation, do it
      if (this._pendingRippleAni) {
        this._pendingRippleAni()
      }
    })
  }

  // Stop the ripple effect
  hideRipple() {
    this._pendingRippleAni = () => {
      Animated.parallel([
        Animated.timing(this._animatedRippleScale, {
          toValue: 0,
          duration: this.props.rippleAniDuration || 250,
        }),
        Animated.timing(this._animatedRippleAlpha, {
          toValue: 0,
          duration: this.props.rippleAniDuration || 250,
        }),
      ]).start()

      this._pendingRippleAni = undefined
    }

    if (!this._rippleAni) {
      // previous ripple animation is done, good to go
      this._pendingRippleAni()
    }
  }

  _getBgColor() {
    return this.state.checked ? this.props.onColor : this.props.offColor
  }

  // Rendering the `Thumb`
  render() {
    const rippleSize = this.props.rippleRadius * 2

    return (
      <View
        style={[
          this.props.style,
          {
            position: 'absolute',
            width: rippleSize,
            height: rippleSize,
            backgroundColor: Color.Transparent,
          },
        ]}
      >
        <View // the circle
          style={[
            Thumb.defaultProps.style,
            this.props.thumbStyle,
            { backgroundColor: this._getBgColor() },
          ]}
        />
        <Animated.View // the ripple layer
          style={{
            position: 'absolute',
            opacity: this._animatedRippleAlpha,
            backgroundColor: this.props.rippleColor,
            width: rippleSize,
            height: rippleSize,
            borderRadius: this.props.rippleRadius,
            top: 0,
            left: 0,
            transform: [{ scale: this._animatedRippleScale }],
          }}
        />
      </View>
    )
  }
}

// Enable animations on `Thumb`
const AnimatedThumb = Animated.createAnimatedComponent(Thumb)

// ## <section id='switch'>Switch</section>
// The `Switch` component. Which is made up of a `Track` and a [`Thumb`](#thumb).
class Switch extends Component {
  constructor(props) {
    super(props)
    this._animatedThumbLeft = new Animated.Value(0)
    this.state = {
      trackSize: 0,
      trackLength: 0,
      trackRadii: 0,
      trackMargin: 0,
      thumbFrame: { x: 0, padding: 0, r: 0, rippleRadii: 0 },
      checked: false,
    }
  }

  componentWillMount() {
    const nextState = this._layoutThumb(
      this.props.checked,
      this.props.thumbRadius,
      this.props.trackLength,
      this.props.trackSize
    )
    this.setState(Object.assign(nextState, { checked: this.props.checked }))
  }

  componentWillReceiveProps(nextProps) {
    const nextState = this._layoutThumb(
      nextProps.checked,
      nextProps.thumbRadius,
      nextProps.trackLength,
      nextProps.trackSize
    )
    this.setState(Object.assign(nextState, { checked: nextProps.checked }))
  }

  // Un-boxing the `Thumb` node from `AnimatedComponent`,
  // in order to access the component functions defined in `Thumb`
  getThumb() {
    if (typeof this.thumb.refs.node !== 'undefined') {
      return this.thumb.refs.node
    }
    return this.thumb._component
  }

  // property initializers begin
  _onPress = () => {
    this.confirmToggle()
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  _onPressIn = () => {
    this.startToggle()
    if (this.props.onPressIn) {
      this.props.onPressIn()
    }
  }

  _onPressOut = () => {
    this.endToggle()
    if (this.props.onPressOut) {
      this.props.onPressOut()
    }
  }
  // property initializers end

  // Layout the thumb according to the size of the track
  _layoutThumb(checked, thumbRadius, trackLength, trackSize) {
    const trackRadii = trackSize / 2
    const thumbRadii = thumbRadius
    const rippleRadii = trackLength - trackSize
    const trackMargin = rippleRadii - trackRadii // make room for ripple
    const thumbLeft = checked ? trackMargin + trackRadii : 0
    this._animatedThumbLeft.setValue(thumbLeft)

    return {
      trackSize,
      trackLength,
      trackRadii,
      trackMargin,
      thumbFrame: {
        rippleRadii,
        x: thumbLeft,
        r: thumbRadii,
        padding: rippleRadii - thumbRadii,
      },
    }
  }

  // Move the thumb left or right according to the current state
  _translateThumb() {
    this._animatedThumbLeft.setValue(this.state.thumbFrame.x)
    const newX = this._computeThumbX(this.state.checked)
    Animated.timing(this._animatedThumbLeft, {
      toValue: newX,
      duration: this.props.thumbAniDuration || 300,
    }).start(() => {
      this.state.thumbFrame.x = newX
    })
  }

  // Calc the next position (x-axis) of the thumb
  _computeThumbX(toChecked) {
    if (!this.state.thumbFrame.r) {
      return 0
    }

    const { trackLength, trackSize } = this.state
    const dx = (toChecked ? 1 : -1) * (trackLength - trackSize)
    return this.state.thumbFrame.x + dx
  }

  // When a toggle action started.
  startToggle() {
    this.getThumb().startToggle()
  }

  // When a toggle action is confirmed.
  confirmToggle() {
    const prevState = this.state.checked
    this.setState({ checked: !prevState }, () => {
      this.getThumb().confirmToggle(prevState)
      this._translateThumb()

      if (this.props.onCheckedChange) {
        this.props.onCheckedChange({ checked: this.state.checked })
      }
    })
  }

  // When a toggle action is finished (confirmed or canceled).
  endToggle() {
    this.getThumb().endToggle()
  }

  _getBorderColor(theme) {
    const onColor = this.props.onColor || theme.onColor
    const offColor = this.props.offColor || theme.offColor
    return this.state.checked ? onColor : offColor
  }

  // Rendering the `Switch`
  render() {
    const touchProps = {
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
      delayLongPress: this.props.delayLongPress,
      onLongPress: this.props.onLongPress,
    }

    const mergedStyle = {
      onColor: this.props.onColor,
      offColor: this.props.offColor,
      thumbOnColor: this.props.thumbOnColor,
      thumbOffColor: this.props.thumbOffColor,
      rippleColor: this.props.rippleColor,
    }

    const { thumbFrame } = this.state
    const thumbProps = {
      checked: this.state.checked,
      onColor: mergedStyle.thumbOnColor,
      offColor: mergedStyle.thumbOffColor,
      rippleColor: mergedStyle.rippleColor,
      rippleRadius: thumbFrame.rippleRadii,
      rippleAniDuration: this.props.rippleAniDuration,
      radius: this.props.thumbRadius,
      style: {
        left: this._animatedThumbLeft,
        top: 0,
      },
      thumbStyle: [
        {
          width: this.props.thumbRadius * 2,
          height: this.props.thumbRadius * 2,
          borderRadius: this.props.thumbRadius,
          top: thumbFrame.padding,
          left: thumbFrame.padding,
        },
        this.props.thumbStyle,
      ],
    }

    return (
      <TouchableWithoutFeedback
        {...touchProps}
        onPress={this._onPress}
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}
      >
        <View pointerEvents="box-only" style={this.props.style}>
          <View
            style={[
              {
                width: this.props.trackLength,
                height: this.props.trackSize,
                borderColor: this._getBorderColor(mergedStyle),
                borderRadius: this.state.trackRadii,
                margin: this.state.trackMargin,
              },
              this.props.trackStyle,
            ]}
          />
          <AnimatedThumb
            ref={(ref) => {
              this.thumb = ref
            }}
            {...thumbProps}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Switch.defaultProps = {
  checked: false,
  trackLength: 50,
  trackSize: 25,
  thumbRadius: 8,
  onColor: Color.Primary,
  offColor: Color.Border,
  rippleRadius: 1,
  thumbOnColor: Color.Primary,
  thumbOffColor: Color.Border,
  trackStyle: {
    borderWidth: 1,
  },
}

module.exports = Switch
