import React, { Component } from 'react';

class ScheduleItem extends Component {
  state = {
    inputValue: this.props.schedule.contents,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.schedule.modify || this.props !== nextProps;
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onModifyToggle(this.props.schedule.id, this.state.inputValue);
    }
  };

  render() {
    const { inputValue } = this.state;
    const { handleChange, handleKeyPress } = this;
    const { schedule, onToggle, onRemove, onModifyToggle } = this.props;
    const { id, contents, color, checked, modify } = schedule;
    return (
      <div
        key={id}
        className={'list-item' + (checked ? ' checked' : '')}
        onDoubleClick={(e) => {
          if (checked) {
            return;
          }
          e.stopPropagation();
          onModifyToggle(id, inputValue);
        }}
      >
        <div
          className="list-remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className="list-contents" style={{ color: color }}>
          {modify ? (
            <input
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              value={inputValue}
              className="list-modify-input"
            />
          ) : (
            contents
          )}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (!modify) {
              onToggle(id);
            }
          }}
          className="check-mark"
        >
          &#x2713;
        </div>
      </div>
    );
  }
}

export default ScheduleItem;
