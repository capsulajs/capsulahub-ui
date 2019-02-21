export const onDragstartEventHandler = (action = 'add', parentId, callback) => {
  const list = document.getElementById(parentId);

  if (list) {
    for (const el of list.children) {
      action === 'add' ? el.addEventListener('dragstart', callback) : el.removeEventListener('dragstart', callback);
    }
  }
};
