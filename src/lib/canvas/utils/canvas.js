export const mountOnDragstartEventHandler = (parentId, callback) => {
  const list = document.getElementById(parentId);

  if (list) {
    for (const el of list.children) {
      el.addEventListener('dragstart', callback);
    }
  }
}

export const unmountOnDragstartEventHandler = (parentId, callback) => {
  const list = document.getElementById(parentId);

  if (list) {
    for (const el of list.children) {
      el.removeEventListener('dragstart', callback);
    }
  }
}
