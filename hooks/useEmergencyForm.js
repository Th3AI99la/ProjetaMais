import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

// Definimos os limites como constantes para fácil manutenção
const MAX_PHOTOS = 10;
const MAX_VIDEOS = 2;

export default function useEmergencyForm() {
  // --- ESTADO (os dados que a tela vai usar) ---
  const [violenceType, setViolenceType] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null); // Armazena as coordenadas (latitude/longitude)
  const [address, setAddress] = useState('Buscando localização...'); // Armazena o endereço em texto
  const [media, setMedia] = useState([]); // Array para guardar as fotos e vídeos selecionados
  const [modalVisible, setModalVisible] = useState(false); // Controla o modal de tipo de violência

  // --- FUNÇÕES (as ações que a tela pode executar) ---

  // Função para buscar a localização atual do usuário
  const getLocation = async () => {
    setAddress('Buscando localização...');
    // 1. Pede permissão para usar o GPS
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'A permissão de localização é necessária.');
      setAddress('Permissão de localização negada.');
      return;
    }

    // 2. Se a permissão for concedida, pega as coordenadas
    try {
      let currentPosition = await Location.getCurrentPositionAsync({});
      setLocation(currentPosition.coords);
      
      // 3. Converte as coordenadas em um endereço legível (ex: "Rua Exemplo, 123...")
      let addressResult = await Location.reverseGeocodeAsync(currentPosition.coords);
      if (addressResult.length > 0) {
        const { street, name, city, region } = addressResult[0];
        setAddress(`${street || name}, ${city}, ${region}`);
      }
    } catch (error) {
      setAddress('Não foi possível obter a localização.');
      Alert.alert('Erro', 'Verifique se o seu GPS está ativado.');
    }
  };

  // Função para abrir a galeria e selecionar mídias
  const pickMedia = async () => {
    // 1. Conta as mídias já selecionadas
    const photoCount = media.filter(m => m.type === 'image').length;
    const videoCount = media.filter(m => m.type === 'video').length;

    if (photoCount >= MAX_PHOTOS && videoCount >= MAX_VIDEOS) {
      Alert.alert('Limite Atingido', 'Você já anexou o máximo de 10 fotos e 2 vídeos.');
      return;
    }

    // 2. Pede permissão para acessar a galeria
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'Precisamos de permissão para acessar suas fotos.');
      return;
    }

    // 3. Abre a galeria, permitindo seleção múltipla
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      let newMedia = [...media];
      let photosAdded = 0;
      let videosAdded = 0;
      
      // 4. Filtra os resultados para não passar dos limites
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

  // Efeito que roda uma vez quando a tela abre para já buscar a localização
  useEffect(() => {
    getLocation();
  }, []);

  // Disponibiliza os estados e as funções para o componente visual
  return {
    violenceType, setViolenceType,
    description, setDescription,
    location, address, getLocation,
    media, pickMedia,
    modalVisible, setModalVisible
  };
}