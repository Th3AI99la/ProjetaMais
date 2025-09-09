import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/AnonymousStyles'; 
import useAnonymousFlow from '../hooks/useAnonymousFlow';
import ViolenceTypeModal from '../components/ViolenceTypeModal';
import VictimTypeModal from '../components/VictimTypeModal';

// Componente para exibir os números de denúncia
const ContactChannels = ({ victimType }) => {
  const handleCall = (number) => Linking.openURL(`tel:${number}`).catch(() => Alert.alert("Erro", "Não foi possível realizar a chamada."));

  const channels = {
    'Mulher': [
      { name: 'Delegacia da Mulher', number: '6232012802', desc: '(62) 3201-2802' },
      { name: 'Central de Atendimento', number: '180', desc: 'Ligue 180' },
      { name: 'Polícia Civil', number: '197', desc: 'Ligue 197' },
    ],
    'Criança e Adolescente': [
      { name: 'DPCA', number: '6232861540', desc: '(62) 3286-1540' },
      { name: 'Polícia Civil', number: '197', desc: 'Ligue 197' },
      { name: 'Disque Direitos Humanos', number: '100', desc: 'Disque 100' },
    ],
    'Pessoa Idosa': [
      { name: 'Delegacia do Idoso', number: '6232011501', desc: '(62) 3201-1501' },
      { name: 'Polícia Civil', number: '197', desc: 'Ligue 197' },
      { name: 'Disque Direitos Humanos', number: '100', desc: 'Disque 100' },
    ],
    'População em Geral': [
      { name: 'Polícia Civil', number: '197', desc: 'Ligue 197' },
      { name: 'Disque Direitos Humanos', number: '100', desc: 'Disque 100' },
    ],
  };

  const victimChannels = channels[victimType] || [];
  if (victimChannels.length === 0) return null;

  return (
    <View style={styles.channelsContainer}>
      <Text style={styles.label}>Canais de Denúncia Recomendados:</Text>
      {victimChannels.map(channel => (
        <TouchableOpacity key={channel.number} style={styles.channelButton} onPress={() => handleCall(channel.number)}>
          <Feather name="phone-call" size={24} color="#000" />
          <View style={styles.channelTextContainer}>
            <Text style={styles.channelTitle}>{channel.name}</Text>
            <Text style={styles.channelNumber}>{channel.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function Anonymous() {
  const {
    violenceType, victimType, setVictimType, handleSelectViolence,
    violenceModalVisible, setViolenceModalVisible,
    victimModalVisible, setVictimModalVisible,
  } = useAnonymousFlow();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <StatusBar barStyle="light-content" />
      <ViolenceTypeModal visible={violenceModalVisible} onClose={() => setViolenceModalVisible(false)} onSelect={handleSelectViolence} />
      <VictimTypeModal visible={victimModalVisible} onClose={() => setVictimModalVisible(false)} onSelect={setVictimType} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.label}>1. Selecione o Tipo de Violência</Text>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setViolenceModalVisible(true)}>
            <Text style={violenceType ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
              {violenceType || 'Clique para selecionar'}
            </Text>
            <Feather name="chevron-down" size={24} color="#9E9E9E" />
          </TouchableOpacity>
        </View>

        {violenceType && (
          <View style={styles.section}>
            <Text style={styles.label}>2. Selecione a Vítima</Text>
            <TouchableOpacity style={styles.pickerButton} onPress={() => setVictimModalVisible(true)}>
              <Text style={victimType ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
                {victimType || 'Clique para selecionar'}
              </Text>
              <Feather name="chevron-down" size={24} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
        )}
        
        {victimType && <ContactChannels victimType={victimType} />}
      </ScrollView>
    </SafeAreaView>
  );
}