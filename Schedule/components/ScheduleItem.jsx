import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import '../CSS/ContextMenu.css';

class ScheduleItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.schedule !== nextProps.schedule;
  }

  handleClick = (data) => {
    console.log(data.type);
  };

  render() {
    const { schedule, onToggle, onRemove } = this.props;
    const { id, contents, color, checked } = schedule;

    return (
      <div>
        <ContextMenuTrigger id="contextMenu">
          <div key={id} className="list-item" onClick={() => onToggle(id)}>
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
              {contents}
            </div>
            {checked && <div className="check-mark">&#x2713;</div>}
          </div>
        </ContextMenuTrigger>

        <ContextMenu id="contextMenu">
          <MenuItem data={{ type: 'modify' }} onClick={this.handleClick}>
            수정
          </MenuItem>
          <MenuItem data={{ type: 'delete' }} onClick={this.handleClick}>
            삭제
          </MenuItem>
          <MenuItem data={{ type: 'colorChange' }} onClick={this.handleClick}>
            색상변경
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

export default ScheduleItem;
