// Em plugins/withAndroidLocationPermissions.js

const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withAndroidLocationPermissions(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults;
    
    // Garante que a permissão de FOREGROUND_SERVICE esteja presente
    const usesPermissions = androidManifest.manifest['uses-permission'] || [];
    const hasForegroundServicePermission = usesPermissions.some(
      (p) => p.$['android:name'] === 'android.permission.FOREGROUND_SERVICE'
    );

    if (!hasForegroundServicePermission) {
      usesPermissions.push({
        $: { 'android:name': 'android.permission.FOREGROUND_SERVICE' },
      });
    }

    // Adiciona a declaração do serviço de localização dentro da tag <application>
    const application = androidManifest.manifest.application[0];
    const services = application.service || [];
    const hasLocationService = services.some(
      (s) => s.$['android:name'] === 'expo.modules.location.services.LocationTaskService'
    );

    if (!hasLocationService) {
      services.push({
        $: {
          'android:name': 'expo.modules.location.services.LocationTaskService',
          'android:foregroundServiceType': 'location',
        },
      });
    }
    
    // Atualiza o manifesto
    androidManifest.manifest.application[0].service = services;
    androidManifest.manifest['uses-permission'] = usesPermissions;

    return config;
  });
};