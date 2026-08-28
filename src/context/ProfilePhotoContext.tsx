import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfilePhotoContextType {
  profilePhoto: string;
  setCustomPhoto: (file: File | string) => void;
  resetToDefault: () => void;
  isCustom: boolean;
}

const ProfilePhotoContext = createContext<ProfilePhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'tharshini_custom_profile_photo';

export const ProfilePhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved || PERSONAL_INFO.profilePhoto;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return !!localStorage.getItem(STORAGE_KEY);
  });

  const setCustomPhoto = (input: File | string) => {
    if (typeof input === 'string') {
      setProfilePhoto(input);
      localStorage.setItem(STORAGE_KEY, input);
      setIsCustom(true);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setProfilePhoto(result);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            // Storage quota warning fallback
            console.warn('LocalStorage full, photo kept in active memory');
          }
          setIsCustom(true);
        }
      };
      reader.readAsDataURL(input);
    }
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfilePhoto(PERSONAL_INFO.profilePhoto);
    setIsCustom(false);
  };

  return (
    <ProfilePhotoContext.Provider
      value={{
        profilePhoto,
        setCustomPhoto,
        resetToDefault,
        isCustom,
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = (): ProfilePhotoContextType => {
  const context = useContext(ProfilePhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a ProfilePhotoProvider');
  }
  return context;
};
