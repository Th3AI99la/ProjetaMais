// Em hooks/useEmergencyForm.js
import { useState, useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

const MAX_PHOTOS = 10;
const MAX_VIDEOS = 2;

export default function useEmergencyForm() {
  const [violenceType, setViolenceType] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('Buscando localização...');
  const [media, setMedia] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getLocation = async () => {
    setAddress('Buscando localização...');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'A permissão de localização é necessária.');
      setAddress('Permissão de localização negada.');
      return;
    }
    try {
      let currentPosition = await Location.getCurrentPositionAsync({});
      setLocation(currentPosition.coords);
      let addressResult = await Location.reverseGeocodeAsync(currentPosition.coords);
      if (addressResult.length > 0) {
        const { street, name, city, region } = addressResult[0];
        setAddress(`${street || name}, ${city}, ${region}`);
      }
    } catch (error) {
      setAddress('Não foi possível obter a localização.');
    }
  };

  const pickMedia = async () => {
    const photoCount = media.filter(m => m.type === 'image').length;
    const videoCount = media.filter(m => m.type === 'video').length;

    if (photoCount >= MAX_PHOTOS && videoCount >= MAX_VIDEOS) {
      Alert.alert('Limite Atingido', 'Você já anexou o máximo de 10 fotos e 2 vídeos.');
      return;
    }

    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permissão Negada', 'Precisamos de permissão para acessar suas fotos.');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      let newMedia = [...media];
      let photosAdded = 0;
      let videosAdded = 0;
      
      for (const asset of result.assets) {
        if (asset.type === 'image' && (photoCount + photosAdded) < MAX_PHOTOS) {
          newMedia.push(asset);
          photosAdded++;
        } else if (asset.type === 'video' && (videoCount + videosAdded) < MAX_VIDEOS) {
          newMedia.push(asset);
          videosAdded++;
        }
      }
      setMedia(newMedia);
    }
  };
  
  useEffect(() => {
    getLocation();
  }, []);

  const openInNativeMaps = () => {
    if (!location) {
      Alert.alert("Localização não encontrada", "Aguarde a busca pela localização ou tente novamente.");
      return;
    }
    
    const { latitude, longitude } = location;
    const url = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}(Localização da Ocorrência)`
    });

    Linking.openURL(url);
  };

  return {
    violenceType, setViolenceType,
    description, setDescription,
    location, address,
    openInNativeMaps,
    media, pickMedia,
    modalVisible, setModalVisible
  };
}