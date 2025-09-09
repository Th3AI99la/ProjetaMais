import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function useHomeAnimation() {
  const titleAnim = useRef(new Animated.Value(0)).current;
  const button1Anim = useRef(new Animated.Value(0)).current;
  const button2Anim = useRef(new Animated.Value(0)).current;
  const pressAnim1 = useRef(new Animated.Value(1)).current; // Animação para o botão 1
  const pressAnim2 = useRef(new Animated.Value(1)).current; // Animação para o botão 2

  useFocusEffect(
    useCallback(() => {
      titleAnim.setValue(0);
      button1Anim.setValue(0);
      button2Anim.setValue(0);

      Animated.stagger(150, [
        Animated.timing(titleAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(button1Anim, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(button2Anim, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start();
    }, [])
  );
  
  const createAnimatedStyle = (animValue) => ({
    opacity: animValue,
    transform: [{
      translateY: animValue.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }),
    }],
  });
  
  // Funções genéricas para animar o toque
  const handlePressIn = (animValue) => {
    Animated.spring(animValue, { toValue: 0.96, useNativeDriver: true }).start();
  };
  const handlePressOut = (animValue) => {
    Animated.spring(animValue, { toValue: 1, useNativeDriver: true }).start();
  };

  return { 
    titleAnim: createAnimatedStyle(titleAnim),
    button1Anim: createAnimatedStyle(button1Anim),
    button2Anim: createAnimatedStyle(button2Anim),
    pressAnim1,
    pressAnim2,
    handlePressIn,
    handlePressOut,
  };
}