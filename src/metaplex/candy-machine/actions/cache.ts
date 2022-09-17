export function loadCache(cacheName: string, env: string, cacheStorage: any) {
  const path = `${env}-${cacheName}`;
  return path in cacheStorage ? JSON.parse(cacheStorage[path]) : undefined;
}

export function saveCache(
  cacheName: string,
  env: string,
  cacheContent,
  cacheStorage: any,
) {
  cacheContent.env = env;
  cacheContent.cacheName = cacheName;
  const path = `${env}-${cacheName}`;
  cacheStorage[path] = JSON.stringify(cacheContent);
}
