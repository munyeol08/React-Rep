import React, { Component } from 'react';
import ScheduleList from './ScheduleList';
import { customAlert } from '../util/CustomAlert';

import '../CSS/Schedule.css';

class Schedule extends Component {
  id = 4;

  state = {
    inputValue: '',
    modifyValue: '',
    schedules: [
      {
        id: 1,
        contents: '리액트 공부',
        color: '#000',
        checked: true,
        modify: false,
      },
      {
        id: 2,
        contents: '자바스립트 심화',
        color: '#8A2BE2',
        checked: false,
        modify: false,
      },
      {
        id: 3,
        contents: 'Webpack, Babel',
        color: '#7FFF00',
        checked: false,
        modify: false,
      },
    ],
    colors: ['#000', '#7FFF00', '#8A2BE2', '#FF0000'],
    selectedColor: '#000',
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
    const { inputValue, schedules, selectedColor } = this.state;

    if (!inputValue) return;

    this.setState({
      inputValue: '',
      schedules: schedules.concat({
        id: this.id++,
        contents: inputValue,
        color: selectedColor,
        checked: false,
      }),
    });

    // var scrollObj = document.getElementsByClassName('schedule-list')[0];
    // scrollObj.scrollTop = scrollObj.scrollHeight;
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

  handleModifyToggle = (id, contents) => {
    const { schedules } = this.state;
    const index = schedules.findIndex((schedule) => schedule.id === id);
    const selected = schedules[index];
    const nextSchedule = [...schedules];

    nextSchedule[index] = {
      ...selected,
      contents: contents,
      modify: !selected.modify,
    };

    this.setState({
      schedules: nextSchedule,
    });
  };

  // handleModifyChange = (id, contents) => {
  //   const { schedules } = this.state;
  //   this.setState({
  //     schedules: schedules.map(schedule => schedule.id === id ? ) ,
  //   });
  // };

  handleSelectColor = (color) => {
    this.setState({
      selectedColor: color,
    });
  };

  render() {
    const {
      handleChange,
      handleKeyPress,
      handleCreate,
      handleToggle,
      handleRemove,
      handleSelectColor,
      handleModifyToggle,
      handleModifyChange,
    } = this;
    const {
      inputValue,
      modifyValue,
      schedules,
      colors,
      selectedColor,
    } = this.state;

    return (
      <div className="wrap-schedule">
        <div className="top-section">
          <h2 className="title">SCHEDULE</h2>
          <div className="colors">
            {colors.map((color) => (
              <div
                key={color}
                className="color-box"
                style={{ background: color }}
                onClick={() => handleSelectColor(color)}
              ></div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <input
            style={{ color: selectedColor }}
            className="input-schedule"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button className="create-button" onClick={handleCreate}>
            추가
          </button>
        </div>

        <div className="schedule-list">
          <ScheduleList
            schedules={schedules}
            modifyValue={modifyValue}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
            handleModifyToggle={handleModifyToggle}
            handleModifyChange={handleModifyChange}
          />
        </div>
      </div>
    );
  }
}

export default Schedule;
