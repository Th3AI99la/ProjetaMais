import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/EmergencyStyles';
import useEmergencyForm from '../hooks/useEmergencyForm';
import Header from '../components/Header';
import ViolenceTypeModal from '../components/ViolenceTypeModal';

export default function Emergency() {
  const {
    violenceType, setViolenceType,
    description, setDescription,
    location, address, getLocation,
    image, pickImage,
    modalVisible, setModalVisible
  } = useEmergencyForm();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Emergência" onMenuPress={() => {}} onProfilePress={() => {}} />

      <ViolenceTypeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setViolenceType}
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
                <Marker coordinate={location} title="Sua Localização" />
              </MapView>
            )}
          </View>
        </View>

        {/* Seção Mídia */}
        <View style={styles.section}>
          <Text style={styles.label}>Anexar Mídia</Text>
          <TouchableOpacity style={styles.mediaButton} onPress={pickImage}>
            <Feather name="camera" size={20} color="#264653" />
            <Text style={styles.mediaButtonText}>Foto ou Vídeo</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        </View>

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>ENVIAR DENÚNCIA</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}