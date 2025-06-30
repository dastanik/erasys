import { Platform } from 'react-native'; // Will only be available in React Native

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

const API_URL =
  Platform.OS === 'android' || Platform.OS === 'ios'
    ? 'https://www.hunqz.com/api/opengrid/profiles/msescortplus'
    : '/api/opengrid/profiles/msescortplus';

export async function fetchUserProfiles(): Promise<UserProfilePicture[]> {
  try {
    console.log('Fetching from:', API_URL);
    const response = await fetch(API_URL);

    if (!response.ok) {
      console.error('Response not OK:', {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
      return [];
    }

    const text = await response.text();
    console.log('Raw response:', text);

    try {
      const data = JSON.parse(text);
      // ... rest of your code
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Full error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      request: error.request,
      response: error.response,
    });
    return [];
  }
}

export function getUserPictureUrl(url_token: string): string {
  return `https://www.hunqz.com/img/usr/original/0x0/${url_token}.jpg`;
}
