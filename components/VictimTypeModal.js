// Em components/VictimTypeModal.js
import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

const VICTIM_TYPES = ['Mulher', 'Criança e Adolescente', 'Pessoa Idosa', 'População em Geral'];

export default function VictimTypeModal({ visible, onClose, onSelect }) {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, { toValue: 1, friction: 6, useNativeDriver: true }).start();
    } else {
      scaleAnim.setValue(0.8);
    }
  }, [visible]);

  const handleSelect = (type) => {
    onSelect(type);
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <Animated.View style={[styles.modalView, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.modalTitle}>Quem é a Vítima?</Text>
          <FlatList data={VICTIM_TYPES} /* ... */ />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={24} color="#e63946" />
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1d3557',
  },
  optionButton: {
    paddingVertical: 15,
    width: '100%',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#457b9d',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#eee',
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    color: '#e63946',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginLeft: 5,
  },
});