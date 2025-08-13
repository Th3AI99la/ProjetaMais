import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/EmergencyStyles';

// Importa todos os nossos componentes e hooks separados
import useEmergencyForm from '../hooks/useEmergencyForm';
import Header from '../components/Header';
import ViolenceTypeModal from '../components/ViolenceTypeModal';
import MediaPreviewModal from '../components/MediaPreviewModal';

export default function Emergency() {
  // 1. CHAMA O HOOK para pegar todos os dados e funções prontas
  const {
    violenceType, setViolenceType,
    description, setDescription,
    location, address,
    media, pickMedia,
    modalVisible, setModalVisible
  } = useEmergencyForm();
  
  // Estado para controlar a visibilidade do modal de MÍDIAS
  const [mediaModalVisible, setMediaModalVisible] = useState(false);

  // Função simples para criar o texto de resumo (ex: "2 fotos e 1 vídeo anexados")
  const renderMediaSummary = () => {
    const photoCount = media.filter(item => item.type === 'image').length;
    const videoCount = media.filter(item => item.type === 'video').length;
    if (photoCount === 0 && videoCount === 0) return null;
    
    const photoText = photoCount > 0 ? `${photoCount} foto${photoCount > 1 ? 's' : ''}` : '';
    const videoText = videoCount > 0 ? `${videoCount} vídeo${videoCount > 1 ? 's' : ''}` : '';
    
    return [photoText, videoText].filter(Boolean).join(' e ') + ' anexado(s)';
  };

  // --- RENDERIZAÇÃO (O que aparece na tela) ---
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Emergência" onMenuPress={() => {}} onProfilePress={() => {}} />

      {/* Renderiza o modal de tipo de violência, mas ele fica invisível até ser chamado */}
      <ViolenceTypeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setViolenceType}
      />
      
      {/* Renderiza o modal de visualização de mídias */}
      <MediaPreviewModal 
        visible={mediaModalVisible} 
        onClose={() => setMediaModalVisible(false)} 
        media={media} 
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seção Tipo de Violência */}
        <View style={styles.section}>
          <Text style={styles.label}>Tipo de Violência</Text>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
            <Text style={violenceType ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
              {violenceType || 'Clique para selecionar'}
            </Text>
            <Feather name="chevron-down" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Seção Descrição */}
        <View style={styles.section}>
          <Text style={styles.label}>Descrição Detalhada</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Descreva o que está acontecendo..."
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Seção Localização */}
        <View style={styles.section}>
          <Text style={styles.label}>Localização</Text>
          <View style={styles.locationBox}>
            <Text style={styles.addressText}>{address}</Text>
            {/* O mapa só aparece se a localização for obtida com sucesso */}
            {location && (
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker coordinate={location} />
              </MapView>
            )}
          </View>
        </View>

        {/* Seção Mídia */}
        <View style={styles.section}>
          <Text style={styles.label}>Anexar Mídia</Text>
          {/* Este botão chama a função pickMedia que está no hook */}
          <TouchableOpacity style={styles.mediaButton} onPress={pickMedia}>
            <Feather name="camera" size={20} color="#264653" />
            <Text style={styles.mediaButtonText}>Adicionar Fotos ou Vídeos</Text>
          </TouchableOpacity>
          
          {/* Se houver mídias, mostra o resumo. Clicar no resumo abre o modal de preview */}
          {media.length > 0 && (
            <TouchableOpacity style={styles.mediaSummary} onPress={() => setMediaModalVisible(true)}>
              <Text style={styles.mediaSummaryText}>{renderMediaSummary()}</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>ENVIAR DENÚNCIA</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}