import { useEffect, useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function useHomeAnimation() {
  const titleAnim = useRef(new Animated.Value(0)).current;
  const button1Anim = useRef(new Animated.Value(0)).current;
  const button2Anim = useRef(new Animated.Value(0)).current;
  
  // Valores para a animação de clique
  const pressAnim1 = useRef(new Animated.Value(1)).current;
  const pressAnim2 = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    useCallback(() => {
      // Reseta a animação de entrada
      titleAnim.setValue(0);
      button1Anim.setValue(0);
      button2Anim.setValue(0);

      // Inicia a animação de entrada
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
  
  // Funções para controlar a animação de clique
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