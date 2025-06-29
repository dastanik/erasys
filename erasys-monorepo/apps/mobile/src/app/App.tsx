import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  fetchUserProfiles,
  getUserPictureUrl,
  UserProfilePicture,
} from '@erasys-monorepo/shared-data-fetch';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: { navigation: any }) {
  const [profiles, setProfiles] = useState<UserProfilePicture[]>([]);

  useEffect(() => {
    fetchUserProfiles().then(setProfiles);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Pictures</Text>
      <View style={styles.imageContainer}>
        {profiles.slice(0, 5).map((profile) => (
          <Image
            key={profile.url_token}
            source={{ uri: getUserPictureUrl(profile.url_token) }}
            style={styles.image}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Documentation')}>
        <Text style={styles.link}>Go to Documentation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function DocumentationScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nx Monorepo and Stack</Text>
      <Text style={styles.text}>The erasys-monorepo contains two apps:</Text>
      <Text>• React Web</Text>
      <Text>• React Native Mobile (v15.0.1)</Text>

      <Text style={styles.subtitle}>Stack</Text>
      <Text>✔ Unit Testing: Jest</Text>
      <Text>✔ E2E Testing: Playwright</Text>
      <Text>✔ Linter: ESLint</Text>
      <Text>✔ Formatter: Prettier</Text>
      <Text>✔ CI: GitLab</Text>
      <Text>✔ Build Tool: Vite</Text>

      <Text style={styles.subtitle}>Web</Text>
      <Text>✔ TailwindCSS</Text>
      <Text>✔ Routing</Text>
      <Text>✔ Port: 4200</Text>

      <Text style={styles.subtitle}>Why Nx?</Text>
      <Text>✔ Familiarity</Text>
      <Text>✔ Better docs than Turborepo</Text>
      <Text>✔ Performance via caching</Text>
      <Text>✔ Strong plugin ecosystem</Text>

      <Text style={styles.subtitle}>Project Features</Text>
      <Text>• Shared module for fetching user pictures</Text>
      <Text>• Displays images in web/mobile</Text>

      <Text style={styles.subtitle}>API</Text>
      <Text>GET: https://www.hunqz.com/api/opengrid/profiles/msescortplus</Text>
      <Text>
        Image URL: https://www.hunqz.com/img/usr/original/0x0/{'{url_token}'}
        .jpg
      </Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Documentation" component={DocumentationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F1F5F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 16,
    fontWeight: '600',
    fontSize: 18,
  },
  text: {
    marginBottom: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginRight: 12,
    marginBottom: 12,
  },
  link: {
    color: '#2563EB',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});
