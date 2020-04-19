import React, { Component } from 'react';
import ScheduleList from './ScheduleList';
import { customAlert } from '../util/CustomAlert';

import '../CSS/Schedule.css';

class Schedule extends Component {
  id = 4;

  state = {
    inputValue: '',
    schedules: [
      {
        id: 1,
        contents: '리액트 공부',
        checked: true,
      },
      {
        id: 2,
        contents: '자바스립트 심화',
        checked: false,
      },
      {
        id: 3,
        contents: 'Webpack, Babel',
        checked: false,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const { inputValue, schedules } = this.state;
    this.setState({
      inputValue: '',
      schedules: schedules.concat({
        id: this.id++,
        contents: inputValue,
        checked: false,
      }),
    });
  };

  handleToggle = (id) => {
    const { schedules } = this.state;
    const index = schedules.findIndex((schedule) => schedule.id === id);
    const selected = schedules[index];
    const nextSchedule = [...schedules];

    nextSchedule[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      schedules: nextSchedule,
    });
  };

  handleRemove = (id) => {
    customAlert({
      message: '삭제 하시겠습니까?',
      buttons: [
        {
          label: '확인',
          onClick: () => {
            const { schedules } = this.state;
            this.setState({
              schedules: schedules.filter((schedule) => schedule.id !== id),
            });
          },
        },
        { label: '취소', onClick: () => null },
      ],
    });
  };

  render() {
    const { handleChange, handleKeyPress, handleCreate, handleToggle, handleRemove } = this;
    const { inputValue, schedules } = this.state;

    return (
      <div className="wrap-schedule">
        <div className="top-section">
          <h2 className="title">SCHEDULE</h2>
        </div>

        <div className="form-section">
          <input className="input-schedule" value={inputValue} onChange={handleChange} onKeyPress={handleKeyPress} />
          <button className="create-button" onClick={handleCreate}>
            추가
          </button>
        </div>

        <div className="schedule-list">
          <ScheduleList schedules={schedules} handleToggle={handleToggle} handleRemove={handleRemove} />
        </div>
      </div>
    );
  }
}

export default Schedule;
