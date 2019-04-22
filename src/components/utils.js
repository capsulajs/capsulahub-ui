export const decorate = (timestamp) => {
  const d = new Date(timestamp);
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const hours = h > 9 ? h : `0${h}`;
  const minutes = m > 9 ? m : `0${m}`;
  const seconds = s > 9 ? s : `0${s}`;
  return [hours, minutes, seconds].join(':');
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const parceInteger = (str) => (str.match(/\d+/g) || []).map(Number)[0];
export const guid = (n = 6) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < n; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
