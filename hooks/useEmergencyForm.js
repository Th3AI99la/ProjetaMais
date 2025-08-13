import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

export default function useEmergencyForm() {
  const [violenceType, setViolenceType] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('Buscando localização...');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para buscar a localização
  const getLocation = async () => {
    setAddress('Buscando localização...');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'A permissão de localização é necessária para esta função.');
      setAddress('Permissão de localização negada.');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      
      // Converte coordenadas em endereço
      let addressResult = await Location.reverseGeocodeAsync(location.coords);
      if (addressResult.length > 0) {
        const { street, name, city, region, postalCode } = addressResult[0];
        setAddress(`${street || name}, ${city}, ${region} ${postalCode}`);
      }
    } catch (error) {
      setAddress('Não foi possível obter a localização.');
      Alert.alert('Erro de Localização', 'Verifique se o seu GPS está ativado.');
    }
  };

  // Função para escolher uma imagem da galeria
  const pickImage = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permissão Negada', 'Precisamos de permissão para acessar suas fotos.');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Permite imagens e vídeos
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Busca a localização inicial ao montar o componente
  useEffect(() => {
    getLocation();
  }, []);

  return {
    violenceType, setViolenceType,
    description, setDescription,
    location, address, getLocation,
    image, pickImage,
    modalVisible, setModalVisible
  };
}