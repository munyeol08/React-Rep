import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ScheduleTemplate from './components/ScheduleTemplate';

const Hot = hot(ScheduleTemplate);

ReactDOM.render(<Hot />, document.querySelector('#root'));
