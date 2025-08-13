// Em hooks/useForgotPasswordForm.js

import { useState } from 'react';
import { Alert } from 'react-native';

export default function useForgotPasswordForm() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handlePhoneChange = (text) => {
    // 1. Remove tudo que não for número do input do usuário.
    const numericText = text.replace(/[^0-9]/g, '');

    // 2. Limita o total de dígitos a 13 (País 55 + DDD 2 + Número 9).
    const limitedText = numericText.substring(0, 13);
    
    // 3. Lógica de formatação simples e progressiva
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
      // Formato final para celular com 9 dígitos
      formattedText = `+${limitedText.substring(0, 2)} (${limitedText.substring(2, 4)}) ${limitedText.substring(4, 9)}-${limitedText.substring(9, 13)}`;
    }
    
    // 4. Atualiza o estado com o texto formatado.
    setPhone(formattedText);
  };

  return {
    phone,
    email,
    handlePhoneChange,
    setEmail,
  };
}