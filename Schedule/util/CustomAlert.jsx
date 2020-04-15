import React, { Component } from 'react';
import '../CSS/CustomAlert.css';
import { render, unmountComponentAtNode } from 'react-dom';

export default class CustomAlert extends Component {
  close = () => {
    closeAlert();
  };

  render() {
    return (
      <div className="custom-alert-wrap">
        <div className="custom-alert-wrap-inner">
          <div className="custom-alert-message">
            삭제 하시겠습니까?
            <br />
          </div>
          <div className="custom-alert-buttons">
            <button onClick={() => this.close()}>
              확인
            </button>
            <button>취소</button>
            <button>기본</button>
          </div>
        </div>
      </div>
    );
  }
}

function createBulrElement() {
  const blurElement = document.createElement('div');
  blurElement.setAttribute('id', 'custom-alert-body-blur');
  document.body.appendChild(blurElement);
}

function createAlertElement() {
  let divTarget = document.getElementById(
    'custom-alert-body-blur'
  );
  if (divTarget) {
    render(<CustomAlert />, divTarget);
  } else {
  }
}

function closeAlert() {
  document.body.classList.remove('class-custom-alert-body');
  const target = document.getElementById(
    'custom-alert-body-blur'
  );

  if (target) {
    unmountComponentAtNode(target);
    target.parentNode.removeChild(target);
  }
}

function addAlertClass() {
  document.body.classList.add('class-custom-alert-body');
}

export function customAlert() {
  addAlertClass();
  createBulrElement();
  createAlertElement();
}
