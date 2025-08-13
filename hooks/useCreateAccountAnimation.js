// Em hooks/useCreateAccountAnimation.js

import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function useCreateAccountAnimation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current; // Começa um pouco mais de baixo

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700, // Um pouco mais rápido
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  // Retorna um objeto de estilo pronto para ser usado
  const animatedStyle = {
    opacity: fadeAnim,
    transform: [{ translateY: slideAnim }],
  };

  return animatedStyle;
}