import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, Image, Animated, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/AnonymousStyles';
import useEmergencyForm from '../hooks/useEmergencyForm';
import ViolenceTypeModal from '../components/ViolenceTypeModal';
import MediaPreviewModal from '../components/MediaPreviewModal';
import useEmergencyAnimation from '../hooks/useEmergencyAnimation';

export default function Anonymous() {
  const {
    violenceType, setViolenceType,
    description, setDescription,
    location, address,
    openInNativeMaps,
    media, pickMedia,
    modalVisible, setModalVisible,
    isLoadingLocation
  } = useEmergencyForm();
  
  const { section1Style, section2Style, section3Style, section4Style, buttonStyle } = useEmergencyAnimation();
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
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ViolenceTypeModal visible={modalVisible} onClose={() => setModalVisible(false)} onSelect={setViolenceType} />
        <MediaPreviewModal visible={mediaModalVisible} onClose={() => setMediaModalVisible(false)} media={media} />

        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Animated.View style={[styles.section, section1Style]}>
              <Text style={styles.label}>Tipo de Violência</Text>
              <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
                <Text style={violenceType ? styles.pickerButtonText : styles.pickerButtonPlaceholder}>
                  {violenceType || 'Clique para selecionar'}
                </Text>
                <Feather name="chevron-down" size={24} color="#9E9E9E" />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.section, section2Style]}>
              <Text style={styles.label}>Descrição Detalhada</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Descreva o que está acontecendo..."
                placeholderTextColor="#9E9E9E"
                multiline
                value={description}
                onChangeText={setDescription}
              />
            </Animated.View>

            <Animated.View style={[styles.section, section3Style]}>
              <Text style={styles.label}>Localização</Text>
              <View style={styles.locationBox}>
                <Text style={styles.addressText}>{address}</Text>
                
                {isLoadingLocation ? (
                  <ActivityIndicator size="small" color="#BB86FC" style={{ marginVertical: 10 }} />
                ) : (
                  location && (
                    <TouchableOpacity style={styles.mediaButton} onPress={openInNativeMaps}>
                      <Feather name="map-pin" size={20} color="#000" />
                      <Text style={styles.mediaButtonText}>Ver no Mapa</Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </Animated.View>

            <Animated.View style={[styles.section, section4Style]}>
              <Text style={styles.label}>Anexar Mídia</Text>
              <TouchableOpacity style={styles.mediaButton} onPress={pickMedia}>
                <Feather name="camera" size={20} color="#000" />
                <Text style={styles.mediaButtonText}>Adicionar Fotos ou Vídeos</Text>
              </TouchableOpacity>
              {media.length > 0 && <TouchableOpacity style={styles.mediaSummary} onPress={() => setMediaModalVisible(true)}><Text style={styles.mediaSummaryText}>{renderMediaSummary()}</Text></TouchableOpacity>}
            </Animated.View>

            <Animated.View style={buttonStyle}>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>ENVIAR ANONIMAMENTE</Text>
              </TouchableOpacity>
            </Animated.View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}