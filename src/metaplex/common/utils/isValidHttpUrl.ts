export function isValidHttpUrl(text: string) {
  return text.startsWith('http:') || text.startsWith('https:');
}
