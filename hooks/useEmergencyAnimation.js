import { useCallback, useRef } from "react";
import { Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function useEmergencyAnimation() {
   const section1Anim = useRef(new Animated.Value(0)).current;
   const section2Anim = useRef(new Animated.Value(0)).current;
   const section3Anim = useRef(new Animated.Value(0)).current;
   const section4Anim = useRef(new Animated.Value(0)).current;
   const buttonAnim = useRef(new Animated.Value(0)).current;

   useFocusEffect(
      useCallback(() => {
         section1Anim.setValue(0);
         section2Anim.setValue(0);
         section3Anim.setValue(0);
         section4Anim.setValue(0);
         buttonAnim.setValue(0);

         Animated.stagger(100, [
            Animated.timing(section1Anim, { toValue: 1, duration: 400, useNativeDriver: true }),
            Animated.timing(section2Anim, { toValue: 1, duration: 400, useNativeDriver: true }),
            Animated.timing(section3Anim, { toValue: 1, duration: 400, useNativeDriver: true }),
            Animated.timing(section4Anim, { toValue: 1, duration: 400, useNativeDriver: true }),
            Animated.timing(buttonAnim, { toValue: 1, duration: 400, useNativeDriver: true })
         ]).start();
      }, [])
   );

   const createAnimatedStyle = (animValue) => ({
      opacity: animValue,
      transform: [
         {
            translateY: animValue.interpolate({
               inputRange: [0, 1],
               outputRange: [20, 0]
            })
         }
      ]
   });

   return {
      section1Style: createAnimatedStyle(section1Anim),
      section2Style: createAnimatedStyle(section2Anim),
      section3Style: createAnimatedStyle(section3Anim),
      section4Style: createAnimatedStyle(section4Anim),
      buttonStyle: createAnimatedStyle(buttonAnim)
   };
}
