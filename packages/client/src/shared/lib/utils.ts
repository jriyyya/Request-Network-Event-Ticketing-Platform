export function getFlagImageUrl(
  country: string,
  size?: 16 | 24 | 32 | 48 | 64,
) {
  return `https://flagsapi.com/${country}/flat/${size || 16}.png`;
}
