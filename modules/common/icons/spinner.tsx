import React, { useEffect } from 'react'

import { Text, StyleSheet, View } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated'
import { Circle } from 'react-native-svg'

const Spinner: React.FC<IconProps> = ({
  size = '16',
  color = 'black',
  ...attributes
}) => {
  const rotation = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }
  }, [rotation.value])

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      200,
    )
    return () => cancelAnimation(rotation)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, animatedStyles]} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  spinner: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderWidth: 6,
    borderTopColor: 'lightgray',
    borderRightColor: 'lightgray',
    borderBottomColor: 'lightgray',
    borderLeftColor: 'black',
  },
})

export default Spinner
