const DEVICE_ID_KEY = 'deviceId';

const generateDeviceId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  const randomPart2 = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${randomPart}-${randomPart2}`;
};

export const getDeviceId = (): string => {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);

  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }

  return deviceId;
};

export const getDeviceInfo = (): Record<string, unknown> => ({
  deviceId: getDeviceId(),
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  onLine: navigator.onLine,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  viewportWidth: window.innerWidth,
  viewportHeight: window.innerHeight,
});
