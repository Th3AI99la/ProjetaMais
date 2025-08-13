import { useState, useEffect } from 'react';
import { Alert, Animated } from 'react-native';

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export default function useCreateAccountForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados de validação
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);

  // Lógica para não aceitar números no nome/sobrenome
  const createNameHandler = (setter) => (text) => {
    const filteredText = text.replace(/[^a-zA-Z\s]/g, '');
    setter(filteredText);
  };

  // Lógica para formatar a data de nascimento (DD/MM/AAAA)
  const handleBirthDateChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '').substring(0, 8);
    let formatted = numericText;
    if (numericText.length > 2) {
      formatted = `${numericText.slice(0, 2)}/${numericText.slice(2)}`;
    }
    if (numericText.length > 4) {
      formatted = `${numericText.slice(0, 2)}/${numericText.slice(2, 4)}/${numericText.slice(4)}`;
    }
    setBirthDate(formatted);
  };

  // Lógica de formatação de CPF (reutilizada)
  const handleCpfChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '').substring(0, 11);
    let formattedText = numericText;
    if (numericText.length > 3) formattedText = numericText.replace(/(\d{3})(\d)/, '$1.$2');
    if (numericText.length > 6) formattedText = formattedText.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (numericText.length > 9) formattedText = formattedText.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    setCpf(formattedText);
  };
  
  // Lógica de validação de e-mail (reutilizada)
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.length > 0) setIsEmailValid(validateEmail(text));
    else setIsEmailValid(true);
  };

  // Efeito para verificar se as senhas coincidem
  useEffect(() => {
    if (confirmPassword.length > 0) {
      setDoPasswordsMatch(password === confirmPassword);
    } else {
      setDoPasswordsMatch(true);
    }
  }, [password, confirmPassword]);

  return {
    name, handleNameChange: createNameHandler(setName),
    lastName, handleLastNameChange: createNameHandler(setLastName),
    birthDate, handleBirthDateChange,
    cpf, handleCpfChange,
    email, handleEmailChange, isEmailValid,
    password, setPassword,
    confirmPassword, setConfirmPassword, doPasswordsMatch
  };
}