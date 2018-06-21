import React from 'react';
import { render } from 'react-dom';
import Routes from './navigation';
import '../scss/app.scss';

render(<Routes />, document.getElementById('app'));