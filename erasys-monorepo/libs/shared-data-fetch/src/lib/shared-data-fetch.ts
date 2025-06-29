export interface UserProfilePicture {
  url_token: string;
}

export async function fetchUserProfiles(): Promise<UserProfilePicture[]> {
  try {
    const response = await fetch('/api/opengrid/profiles/msescortplus');
    const data = await response.json();

    if (!Array.isArray(data.pictures)) {
      console.warn('Expected pictures to be an array:', data);
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
