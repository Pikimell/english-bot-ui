import { ADMINS, SELECT_USER } from '../helpers/constants.js';
const telegram = window?.Telegram?.WebApp || {};

const defaultProps = {
  initData: '',
  initDataUnsafe: {},
  platform: '',
  expand() {},
  showAlert() {},
  CloudStorage: {
    setItem() {},
    getItem() {},
    removeItem() {},
  },
  HapticFeedback: {
    impactOccurred() {},
  },
};

export const telegramAPI = { ...defaultProps, ...telegram };

export function showMessage(data) {
  const json = JSON.stringify(data);
  telegramAPI.showAlert(json);
}
export function showPopup(data) {
  const json = JSON.stringify(data);
  telegramAPI.showPopup({
    title: 'Message',
    message: json || 'non',
  });
}

export function getUserId() {
  const user = telegramAPI.initDataUnsafe?.user;
  return (
    user?.id || (localStorage.getItem('isAdmin') ? ADMINS[0] : SELECT_USER)
  );
}

export function isAdmin() {
  const id = getUserId();
  const admin = localStorage.getItem('isAdmin');
  return ADMINS.includes(`${id}`) || admin;
}

export function getFullName() {
  const user = telegramAPI.initDataUnsafe?.user;
  const username = user?.username || 'anonym';
  const first_name = user?.first_name || '-';
  const last_name = user?.last_name || '-';
  return `${username}: ${first_name} ${last_name}`;
}

export function getName(user) {
  const username = user?.contactInfo.username || 'anonym';
  const first_name = user?.contactInfo.first_name || '-';
  const last_name = user?.contactInfo.last_name || '-';
  return `@${username}: ${first_name} ${last_name}`;
}

export function getShortName(user) {
  const first_name = user?.contactInfo.first_name;
  const last_name = user?.contactInfo.last_name;
  return first_name || last_name || user?.userId || 'Anonym';
}
