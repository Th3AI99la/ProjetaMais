// Em hooks/useAnonymousFlow.js
import { useState } from 'react';

export default function useAnonymousFlow() {
  const [violenceType, setViolenceType] = useState(null);
  const [victimType, setVictimType] = useState(null);
  const [violenceModalVisible, setViolenceModalVisible] = useState(false);
  const [victimModalVisible, setVictimModalVisible] = useState(false);

  // Zera a seleção de vítima quando um novo tipo de violência é escolhido
  const handleSelectViolence = (type) => {
    setViolenceType(type);
    setVictimType(null); // Reseta a vítima
  };

  return {
    violenceType,
    victimType,
    setVictimType,
    handleSelectViolence,
    violenceModalVisible,
    setViolenceModalVisible,
    victimModalVisible,
    setVictimModalVisible,
  };
}