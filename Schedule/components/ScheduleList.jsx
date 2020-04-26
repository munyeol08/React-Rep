import React, { Component } from 'react';
import ScheduleItem from './ScheduleItem';

class ScheduleList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  render() {
    const {
      schedules,
      handleToggle,
      handleRemove,
      handleModifyToggle,
      handleModifyChange,
    } = this.props;

    const list = schedules.map((schedule) => (
      <ScheduleItem
        key={schedule.id}
        schedule={schedule}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onModifyToggle={handleModifyToggle}
        onModifyChange={handleModifyChange}
      />
    ));

    return <>{list}</>;
  }
}

export default ScheduleList;
