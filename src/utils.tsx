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
