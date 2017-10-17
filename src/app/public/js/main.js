import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content.jsx';
import unescapeHtml from 'unescape-html';

const container = document.getElementById('content');

// reuse server side render result
ReactDOM.render(
  <Content />,
  container,
);
