const splitter = {
  background: '#515151',
  border: 'none'
}

export default {
  container: {
    background: '#414141',
    overflow: 'hidden',
  },
  element: {
    horizontal: {},
    vertical: {
      overflow: 'visible'
    }
  },
  splitter: {
    horizontal: {
      ...splitter,
      width: '100%',
      height: '8px'
    },
    vertical: {
      ...splitter,
      width: '8px',
      height: '100%'
    }
  }
};
