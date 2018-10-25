import _ from 'lodash';
import { guid } from '../../../utils';

const findEmptyContainers = (elements) => {
  const ids = [];
  const check = (element) => {
    if (element.elements && element.elements.length > 0) {
      element.elements.forEach((element) => check(element));
    } else if (element.type === 'container') {
      ids.push(element.id);
    }
  };
  elements.forEach(check);
  return ids;
};

const filterEmptyContainers = (elements) => {
  const containerIds = findEmptyContainers(elements);
  return elements.filter((element) => {
    return element.type === 'container'
      ? !containerIds.find(id => element.id === id)
      : true;
  });
};

const removeRecursivelyElement = (layout, element, tabId) => {
  if (layout.type === 'element') {
    return layout;
  }
  
  let elements = _.cloneDeep(layout.elements);
  if (Boolean(elements.find(el => el.id === element.id))) {
    elements = elements.map(el => {
      el.tabs = (el.tabs || []).filter(tab => tab.id !== tabId);
      return el;
    }).filter(el => el.id !== element.id && el.tabs.length > 0);
    
    console.log('IN', elements);
    
  } else {
    elements = elements.map(curr => removeRecursivelyElement(curr, element, tabId));
  }
  
  elements = filterEmptyContainers(elements);
  
  return {
    ...layout,
    elements
  }
};

const isInvalidElements = (elements) => (
  !elements || elements.length === 0 || elements.length === 1 && elements[0].tabs.length === 0
);

const transformElement = (el) => {
  if (el.type === 'container') {
    switch(el.elements.length) {
      case 2:
        return el;
      case 1:
        if (el.elements[0].type === 'element') {
          return el.elements[0];
        } else {
          return transformElement(el.elements[0]);
        }
      default:
        return { id: guid(), type: 'element', tabs: [] };
    }
  }
  return el;
};

const remove = (layout, element, tabId) => {
  console.log('START', layout, tabId);
  
  if (isInvalidElements(layout.elements)) {
    console.log('INVALID');
    return { id: guid(), type: 'element', tabs: [] };
  }
  
  const a = removeRecursivelyElement(layout, element, tabId);
  
  console.log(a, 'kjvnsvsnvivvnsnvisinvi')
  
  return transformElement(a);
};

export default remove;
