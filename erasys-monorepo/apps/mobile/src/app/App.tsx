import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  fetchUserProfiles,
  UserProfilePicture,
} from '@erasys-monorepo/shared-data-fetch';

export default function App() {
  const [profiles, setProfiles] = useState<UserProfilePicture[]>([]);

  useEffect(() => {
    fetchUserProfiles().then(setProfiles);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {profiles.slice(0, 5).map((picture) => (
          <View
            key={picture.url_token}
            style={[styles.image, { backgroundColor: '#ccc' }]}
          />
        ))}
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
  },
});
