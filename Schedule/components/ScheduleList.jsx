import React, { Component } from 'react';
import ScheduleItem from './ScheduleItem';

class ScheduleList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.schedules !== nextProps.schedules;
  }

  render() {
    const { schedules, handleToggle, handleRemove } = this.props;

    const list = schedules.map((schedule) => (
      <ScheduleItem
        schedule={schedule}
        key={schedule.id}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    ));

    return <>{list}</>;
  }
}

export default ScheduleList;
