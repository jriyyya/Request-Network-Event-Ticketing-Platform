export function getFlagImageUrl(country: string, size?: 16 | 32 | 64 | 128) {
  return `https://flagsapi.com/${country}/flat/${size || 16}.png`;
}
