import { ComponentProps, forwardRef } from 'react'
import {
  Text as NativeText,
  TextStyle,
  TextInput as NativeTextInput,
} from 'react-native'
import { styled } from 'nativewind'
import { TextLink as SolitoTextLink, Link as SolitoLink } from 'solito/link'
import {Link as ExpoLink} from 'expo-router'

export const Text = styled(NativeText)

export const TextInput = styled(NativeTextInput)

export const Link = styled(ExpoLink)
/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled(ExpoLink)
