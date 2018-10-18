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

export const findById = (elements, id) => elements.find(element => element.id === id);
export const excludeById = (elements, id) => elements.filter(element => element.id !== id);
export const includes = (elements, element) => !!findById(elements, element.id);
export const union = (arr1, arr2) => arr1.filter(value => -1 !== arr2.indexOf(value));
export const getMouseInsideRectangle = (element) => {
  return (e) => {
    let x, y;

    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= element.offsetLeft;
    y -= element.offsetTop;

    return { x, y };
  };
};

export const getRectangleSectors = (w, h) => {
  return [
    [0,     0,     w / 2, h / 2],
    [w / 2, 0,     w / 2, h / 2],
    [0,     h / 2, w / 2, h / 2],
    [w / 2, h / 2, w / 2, h / 2]
  ];
}

export const isPonitInsideRectangle = (x, y, width, height) => {
  return (x0, y0) => (x <= x0 && x0 <= x + width && y <= y0 && y0 <= y + height);
};
