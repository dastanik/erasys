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

const API_URL = Platform.OS === 'android' || Platform.OS === 'ios' ? 
  'https://www.hunqz.com/api/opengrid/profiles/msescortplus' : 
  '/api/opengrid/profiles/msescortplus';

export async function fetchUserProfiles(): Promise<UserProfilePicture[]> {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!Array.isArray(data.pictures)) {
      console.warn('Expected pictures to be an array:', data.pictures);
      return [];
    }
    return data.pictures as UserProfilePicture[];
  } catch (error) {
    console.error('Failed to fetch user profiles:', error);
    return [];
  }
}

export function getUserPictureUrl(url_token: string): string {
  return `https://www.hunqz.com/img/usr/original/0x0/${url_token}.jpg`;
}
