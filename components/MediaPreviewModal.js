// Em components/MediaPreviewModal.js

import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MediaPreviewModal({ visible, onClose, media }) {
  const renderMediaItem = ({ item }) => (
    <View style={styles.mediaItem}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      {item.type === 'video' && (
        <View style={styles.videoOverlay}>
          <Feather name="play" size={40} color="white" />
        </View>
      )}
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Mídias Anexadas</Text>
          <FlatList
            data={media}
            renderItem={renderMediaItem}
            keyExtractor={(item, index) => item.uri + index}
            numColumns={3}
            contentContainerStyle={styles.list}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// Estilos para o Modal (mantidos no mesmo arquivo por simplicidade)
const styles = StyleSheet.create({
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' },
  modalView: { backgroundColor: 'white', borderRadius: 20, padding: 20, width: '95%', maxHeight: '80%' },
  modalTitle: { marginBottom: 20, textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1d3557' },
  list: { alignItems: 'center' },
  mediaItem: { margin: 5, width: 100, height: 100, borderRadius: 10 },
  image: { width: '100%', height: '100%', borderRadius: 10 },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  closeButton: { marginTop: 20, padding: 10, alignSelf: 'center' },
  closeButtonText: { color: '#e63946', fontSize: 18, fontFamily: 'Poppins-Bold' },
});