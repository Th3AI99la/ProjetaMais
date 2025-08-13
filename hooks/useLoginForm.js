// Em hooks/useLoginForm.js

import { useState } from 'react';
import { Alert } from 'react-native';

export default function useLoginForm() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleCpfChange = (text) => {
    // Tira os pontos/traço do estado ATUAL para saber quantos números já temos
    const currentNumericValue = cpf.replace(/[^0-9]/g, '');
    
    // Tira os pontos/traço do NOVO texto digitado
    const newNumericValue = text.replace(/[^0-9]/g, '');

    // LÓGICA DO ALERTA CORRIGIDA:
    // Só dispara o alerta se o usuário digitou um caractere a mais, 
    // mas a quantidade de números não aumentou.
    if (text.length > cpf.length && newNumericValue === currentNumericValue) {
      Alert.alert('Entrada Inválida', 'Por favor, insira apenas números no campo CPF.');
    }

    const limitedText = newNumericValue.substring(0, 11);

    // O resto da lógica de formatação continua a mesma
    let formattedText = limitedText;
    if (limitedText.length > 3) {
      formattedText = limitedText.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (limitedText.length > 6) {
      formattedText = formattedText.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (limitedText.length > 9) {
      formattedText = formattedText.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    
    setCpf(formattedText);
  };

  return {
    cpf,
    password,
    handleCpfChange,
    setPassword,
  };
}