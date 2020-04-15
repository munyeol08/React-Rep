import React, { Component } from 'react';

class ScheduleItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.schedule !== nextProps.schedule;
  }

  render() {
    const { schedule, onToggle, onRemove } = this.props;
    const { id, contents, checked } = schedule;

    return (
      <div
        key={id}
        className="list-item"
        onClick={() => onToggle(id)}
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
        <div className="list-contents">{contents}</div>
        {checked && (
          <div className="check-mark">&#x2713;</div>
        )}
      </div>
    );
  }
}

export default ScheduleItem;
