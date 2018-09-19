export const decorate = (timestamp) => {
  const d = new Date(timestamp);
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const hours = h > 9 ? h : `${h}0`;
  const minutes = m > 9 ? m : `${m}0`;
  const seconds = s > 9 ? s : `${s}0`;
  return [hours, minutes, seconds].join(':');
};
