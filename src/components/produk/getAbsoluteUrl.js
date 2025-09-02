export const getAbsoluteUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // hapus semua / di depan dulu, lalu tambahkan satu /
  const cleanedPath = path.replace(/^\/+/, '');
  return `https://frontend-toko-ten.vercel.app/${cleanedPath}`;
};