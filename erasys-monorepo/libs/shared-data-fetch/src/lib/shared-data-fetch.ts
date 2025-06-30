import { Platform } from 'react-native'; // Will only be available in React Native
import axios from 'axios';

export interface UserProfilePicture {
  id: string;
  owner_id: string;
  url_token: string;
  width: number;
  height: number;
  rating: string;
  comment?: string;
  is_public: boolean;
}

// Removed internal API_URL constant

export async function fetchUserProfiles(apiUrl: string): Promise<UserProfilePicture[]> {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!Array.isArray(data.pictures)) {
      console.warn('Expected pictures to be an array:', data.pictures);
      return [];
    }
    return data.pictures as UserProfilePicture[];
  } catch (error) {
    console.error('Error', error);
    return [];
  }
}

export function getUserPictureUrl(url_token: string): string {
  return `https://www.hunqz.com/img/usr/original/0x0/${url_token}.jpg`;
}
