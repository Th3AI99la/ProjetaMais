// Em hooks/useHomeAnimation.js

import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

// Hook para a animação escalonada dos botões da Home
export default function useHomeAnimation() {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleSlide = useRef(new Animated.Value(-30)).current;
  const button1Opacity = useRef(new Animated.Value(0)).current;
  const button2Opacity = useRef(new Animated.Value(0)).current;
  const button3Opacity = useRef(new Animated.Value(0)).current;
  const pressAnim = useRef(new Animated.Value(1)).current;


  const handlePressIn = () => {
    Animated.timing(pressAnim, {
      toValue: 0.96, // Diminui para 96% do tamanho
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 1, // Volta ao tamanho original
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const pressStyle = { transform: [{ scale: pressAnim }] };

  useEffect(() => {
    Animated.sequence([
      // Animação do título
      Animated.parallel([
        Animated.timing(titleOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(titleSlide, { toValue: 0, duration: 600, useNativeDriver: true }),
      ]),
      // Animação escalonada dos botões
      Animated.stagger(150, [
        Animated.timing(button1Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(button2Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(button3Opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return { 
    titleAnim: { opacity: titleOpacity, transform: [{ translateY: titleSlide }] },
    button1Anim: { opacity: button1Opacity },
    button2Anim: { opacity: button2Opacity },
    button3Anim: { opacity: button3Opacity },
    pressStyle, handlePressIn, handlePressOut
  };
}