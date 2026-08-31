import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import initialSlotImages from '../data/slotImages.json';

interface ImageSlotContextType {
  slots: Record<string, string>;
  isUploading: Record<string, boolean>;
  uploadError: Record<string, string | null>;
  uploadSuccess: Record<string, boolean>;
  getSlotImage: (slotId: string, fallbackUrl?: string) => string;
  uploadImage: (slotId: string, file: File) => Promise<string | null>;
  resetSlot: (slotId: string) => Promise<void>;
}

const ImageSlotContext = createContext<ImageSlotContextType | null>(null);

export const ImageSlotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with static JSON bundled directly into source code, falling back to localStorage if present
  const [slots, setSlots] = useState<Record<string, string>>(() => {
    try {
      const cached = localStorage.getItem('thabet_slot_images');
      if (cached) {
        return { ...initialSlotImages, ...JSON.parse(cached) };
      }
    } catch {
      // Fallback
    }
    return { ...initialSlotImages };
  });

  const [isUploading, setIsUploading] = useState<Record<string, boolean>>({});
  const [uploadError, setUploadError] = useState<Record<string, string | null>>({});
  const [uploadSuccess, setUploadSuccess] = useState<Record<string, boolean>>({});

  // Sync with server registry on mount
  useEffect(() => {
    fetch('/api/image-slots')
      .then((res) => {
        if (!res.ok) throw new Error('API slot sync failed');
        return res.json();
      })
      .then((data) => {
        if (data.success && data.slots) {
          setSlots((prev) => {
            const next = { ...prev, ...data.slots };
            try {
              localStorage.setItem('thabet_slot_images', JSON.stringify(next));
            } catch (e) {
              console.warn('LocalStorage save failed', e);
            }
            return next;
          });
        }
      })
      .catch((err) => {
        // Dev server or static preview fallback
        console.log('Slot server check notice:', err.message);
      });
  }, []);

  const getSlotImage = useCallback(
    (slotId: string, fallbackUrl: string = ''): string => {
      const current = slots[slotId];
      if (current && current.trim() !== '') {
        // If it is an external URL or data/blob URI, return directly
        if (
          current.startsWith('http://') ||
          current.startsWith('https://') ||
          current.startsWith('data:') ||
          current.startsWith('blob:')
        ) {
          return current;
        }

        // Clean relative asset resolution for subpath hosting (like GitHub Pages)
        const baseUrl = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
        const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
        const cleanPath = current.startsWith('/') ? current.slice(1) : current;
        return `${cleanBase}${cleanPath}`;
      }
      return fallbackUrl;
    },
    [slots]
  );

  const uploadImage = async (slotId: string, file: File): Promise<string | null> => {
    setIsUploading((prev) => ({ ...prev, [slotId]: true }));
    setUploadError((prev) => ({ ...prev, [slotId]: null }));
    setUploadSuccess((prev) => ({ ...prev, [slotId]: false }));

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = e.target?.result as string;
        if (!base64Data) {
          setIsUploading((prev) => ({ ...prev, [slotId]: false }));
          setUploadError((prev) => ({ ...prev, [slotId]: 'Failed to read file from device' }));
          resolve(null);
          return;
        }

        try {
          // Optimistic local state update & cache
          setSlots((prev) => {
            const next = { ...prev, [slotId]: base64Data };
            try {
              localStorage.setItem('thabet_slot_images', JSON.stringify(next));
            } catch {
              // quota limits
            }
            return next;
          });

          // Post to server to save permanent static file directly into project source repository
          const response = await fetch('/api/upload-slot-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              slotId,
              filename: file.name,
              base64Data,
            }),
          });

          const resData = await response.json();
          if (resData.success && resData.url) {
            setSlots((prev) => {
              const updated = { ...prev, [slotId]: resData.url };
              try {
                localStorage.setItem('thabet_slot_images', JSON.stringify(updated));
              } catch {
                // Ignore
              }
              return updated;
            });
            setUploadSuccess((prev) => ({ ...prev, [slotId]: true }));
            setTimeout(() => {
              setUploadSuccess((prev) => ({ ...prev, [slotId]: false }));
            }, 3500);
            resolve(resData.url);
          } else {
            // Local base64 retained as client-side persistent fallback
            setUploadSuccess((prev) => ({ ...prev, [slotId]: true }));
            setTimeout(() => {
              setUploadSuccess((prev) => ({ ...prev, [slotId]: false }));
            }, 3500);
            resolve(base64Data);
          }
        } catch (err: any) {
          console.warn('Server upload notice (using permanent client storage):', err);
          setUploadSuccess((prev) => ({ ...prev, [slotId]: true }));
          setTimeout(() => {
            setUploadSuccess((prev) => ({ ...prev, [slotId]: false }));
          }, 3500);
          resolve(base64Data);
        } finally {
          setIsUploading((prev) => ({ ...prev, [slotId]: false }));
        }
      };

      reader.onerror = () => {
        setIsUploading((prev) => ({ ...prev, [slotId]: false }));
        setUploadError((prev) => ({ ...prev, [slotId]: 'Could not process selected image file.' }));
        resolve(null);
      };

      reader.readAsDataURL(file);
    });
  };

  const resetSlot = async (slotId: string) => {
    const defaultVal = (initialSlotImages as Record<string, string>)[slotId] || '';
    setSlots((prev) => {
      const next = { ...prev, [slotId]: defaultVal };
      try {
        localStorage.setItem('thabet_slot_images', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });

    try {
      await fetch('/api/reset-slot-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slotId }),
      });
    } catch {
      // Ignore
    }
  };

  return (
    <ImageSlotContext.Provider
      value={{
        slots,
        isUploading,
        uploadError,
        uploadSuccess,
        getSlotImage,
        uploadImage,
        resetSlot,
      }}
    >
      {children}
    </ImageSlotContext.Provider>
  );
};

export const useImageSlots = () => {
  const context = useContext(ImageSlotContext);
  if (!context) {
    throw new Error('useImageSlots must be used within an ImageSlotProvider');
  }
  return context;
};
