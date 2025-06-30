import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';
import {
  UserProfilePicture,
  getUserPictureUrl,
} from '@erasys-monorepo/shared-data-fetch';

const API_URL = 'https://www.hunqz.com/api/opengrid/profiles/msescortplus';

export default function App() {
  const [profiles, setProfiles] = useState<UserProfilePicture[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserProfiles() {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (!Array.isArray(data.pictures)) {
          console.warn('Expected pictures to be an array:', data.pictures);
          setProfiles([]);
          return;
        }

        setProfiles(data.pictures);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch user profiles:', err);
        setError('Failed to fetch user profiles');
        setProfiles([]);
      }
    }

    fetchUserProfiles();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          profiles.slice(0, 5).map((picture) => (
            <Image
              key={picture.url_token}
              source={{ uri: getUserPictureUrl(picture.url_token) }}
              style={styles.image}
              resizeMode="cover"
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F1F5F9',
    flexGrow: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: '#ccc', // fallback background
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
