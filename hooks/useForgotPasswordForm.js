
import { useState, useRef } from 'react';
import { Alert, Animated } from 'react-native'; // 1. IMPORTE O Animated

export default function useForgotPasswordForm() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  
  // 2. CRIE O VALOR DA ANIMAÇÃO PARA A OPACIDADE DA MENSAGEM
  const errorOpacity = useRef(new Animated.Value(0)).current;

  const handlePhoneChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    const limitedText = numericText.substring(0, 13);
    
    let formattedText = '';
    if (limitedText.length > 0) {
      formattedText = `+${limitedText.substring(0, 2)}`;
    }
    if (limitedText.length > 2) {
      formattedText = `+${limitedText.substring(0, 2)} (${limitedText.substring(2, 4)}`;
    }
    if (limitedText.length > 4) {
      formattedText = `+${limitedText.substring(0, 2)} (${limitedText.substring(2, 4)}) ${limitedText.substring(4, 9)}`;
    }
    if (limitedText.length > 9) {
      formattedText = `+${limitedText.substring(0, 2)} (${limitedText.substring(2, 4)}) ${limitedText.substring(4, 9)}-${limitedText.substring(9, 13)}`;
    }
    
    setPhone(formattedText);
  };
  
  const handleEmailChange = (text) => {
    setEmail(text);
    let isValid = true;
    if (text.length > 0) {
      const emailRegex = /\S+@\S+\.\S+/;
      isValid = emailRegex.test(text);
    }
    
    setIsEmailValid(isValid);
    
    // 3. CONTROLE A ANIMAÇÃO
    Animated.timing(errorOpacity, {
      toValue: isValid ? 0 : 1, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    phone,
    email,
    isEmailValid,
    errorOpacity, // 4. RETORNE O VALOR DA ANIMAÇÃO
    handlePhoneChange,
    handleEmailChange,
  };
}