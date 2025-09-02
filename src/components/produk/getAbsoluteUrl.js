export const getAbsoluteUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const cleanedPath = path.replace(/^\/+/, '');
  
  // kalau di localhost → pakai window.location.origin
  if (window.location.hostname === "localhost") {
    return `${window.location.origin}/${cleanedPath}`;
  }

  // kalau di deploy (Vercel)
  return `https://frontend-toko-ten.vercel.app/${cleanedPath}`;
};