import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

// Este é o nosso Custom Hook
export default function useLoginAnimation() {
  // Cria os valores para controlar a animação
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  // Inicia a animação quando o hook é usado pela primeira vez
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  // Retorna os valores animados para o componente que for usar o hook
  return { fadeAnim, slideAnim };
}