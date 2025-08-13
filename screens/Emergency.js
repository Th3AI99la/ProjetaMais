// Em screens/Emergency.js

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar, 
  Image, 
  Animated // 1. IMPORTANTE: Importar o 'Animated'
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/EmergencyStyles';

// Importa todos os nossos componentes e hooks separados
import useEmergencyForm from '../hooks/useEmergencyForm';
import useEmergencyAnimation from '../hooks/useEmergencyAnimation'; // 2. IMPORTANTE: Importar o hook da animação
import MediaPreviewModal from '../components/MediaPreviewModal';
import ViolenceTypeModal from '../components/ViolenceTypeModal';

export default function Emergency() {
  const {
    violenceType, setViolenceType,
    description, setDescription,
    location, address,
    media, pickMedia,
    modalVisible, setModalVisible
  } = useEmergencyForm();
  
  // 3. CHAMA O HOOK da animação para pegar os estilos
  const { 
    section1Style, 
    section2Style, 
    section3Style, 
    section4Style, 
    buttonStyle 
  } = useEmergencyAnimation();
  
  const [mediaModalVisible, setMediaModalVisible] = useState(false);

  const renderMediaSummary = () => {
    const photoCount = media.filter(item => item.type === 'image').length;
    const videoCount = media.filter(item => item.type === 'video').length;
    if (photoCount === 0 && videoCount === 0) return null;
    
    const photoText = photoCount > 0 ? `${photoCount} foto${photoCount > 1 ? 's' : ''}` : '';
    const videoText = videoCount > 0 ? `${videoCount} vídeo${videoCount > 1 ? 's' : ''}` : '';
    
    return [photoText, videoText].filter(Boolean).join(' e ') + ' anexado(s)';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* O Header é inserido pelo Navigation.js, não aqui */}

      <ViolenceTypeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setViolenceType}
      />
      
      <MediaPreviewModal 
        visible={mediaModalVisible} 
        onClose={() => setMediaModalVisible(false)} 
        media={media} 
      />

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* 4. APLICA OS ESTILOS ANIMADOS A CADA SEÇÃO */}
        <Animated.View style={[styles.section, section1Style]}>
          <Text style={styles.label}>Tipo de Violência</Text>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
            <Text style={violenceType ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
              {violenceType || 'Clique para selecionar'}
            </Text>
            <Feather name="chevron-down" size={24} color="#333" />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.section, section2Style]}>
          <Text style={styles.label}>Descrição Detalhada</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Descreva o que está acontecendo..."
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </Animated.View>

        <Animated.View style={[styles.section, section3Style]}>
          <Text style={styles.label}>Localização</Text>
          <View style={styles.locationBox}>
            <Text style={styles.addressText}>{address}</Text>
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
        </Animated.View>

        <Animated.View style={[styles.section, section4Style]}>
          <Text style={styles.label}>Anexar Mídia</Text>
          <TouchableOpacity style={styles.mediaButton} onPress={pickMedia}>
            <Feather name="camera" size={20} color="#264653" />
            <Text style={styles.mediaButtonText}>Adicionar Fotos ou Vídeos</Text>
          </TouchableOpacity>
          {media.length > 0 && (
            <TouchableOpacity style={styles.mediaSummary} onPress={() => setMediaModalVisible(true)}>
              <Text style={styles.mediaSummaryText}>{renderMediaSummary()}</Text>
            </TouchableOpacity>
          )}
        </Animated.View>

        <Animated.View style={buttonStyle}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>ENVIAR DENÚNCIA</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}