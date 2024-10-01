export const formatDate = (date: string): string => {
  const options = {
    year: 'numeric' as const,
    month: 'short' as const,
    day: 'numeric' as const,
    hour: 'numeric' as const,
    minute: 'numeric' as const,
  };

  const formattedDate = new Date(date).toLocaleDateString('es-ES', options);
  return `${formattedDate}`;
};

export const firebaseConfig = {
  apiKey: 'AIzaSyB7C8LGJ-OEOsKecYYi6sn7yQbtULxyu9s',
  authDomain: 'cotizadolarxcasa.firebaseapp.com',
  projectId: 'cotizadolarxcasa',
  storageBucket: 'cotizadolarxcasa.appspot.com',
  messagingSenderId: '768401015431',
  appId: '1:768401015431:web:0948aa274350dccf14ae22',
};
