import React from 'react';
import ReactDOM from 'react-dom';
import '../css/base.css';
import Remarkable from 'remarkable';
import $ from 'jquery';

import CommentBox from './commentbox.js';



ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);