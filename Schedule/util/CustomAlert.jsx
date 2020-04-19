import React, { Component } from 'react';
import '../CSS/CustomAlert.css';
import { render, unmountComponentAtNode } from 'react-dom';

class CustomAlert extends Component {
  static defaultProps = {
    buttons: [
      { label: '확인', onClick: () => null },
      { label: '취소', onClick: () => null },
    ],
    closeOnEscape: true,
  };

  close = () => {
    removeBodyClass();
    removeAlertElement();
  };

  handdleClickButton = (button) => {
    if (button.onClick) button.onClick();
    this.close();
  };

  keyboardClose = (event) => {
    const { closeOnEscape } = this.props;
    const isKeyCodeEscape = event.keyCode === 27;

    if (closeOnEscape && isKeyCodeEscape) {
      this.close();
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.keyboardClose, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.keyboardClose, false);
  };

  render() {
    const { message, buttons } = this.props;
    return (
      <div className="custom-alert-wrap">
        <div className="custom-alert-wrap-inner">
          <div className="custom-alert-message">{message}</div>
          <div className="custom-alert-buttons">
            {buttons &&
              buttons.map((button, i) => (
                <button key={i} onClick={() => this.handdleClickButton(button)}>
                  {button.label}
                </button>
              ))}
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

function createAlertElement(properties) {
  let divTarget = document.getElementById('custom-alert-body-blur');

  if (divTarget) {
    render(<CustomAlert {...properties} />, divTarget);
  } else {
    createBulrElement();
    createAlertElement(properties);
  }
}

function removeAlertElement() {
  const target = document.getElementById('custom-alert-body-blur');

  if (target) {
    unmountComponentAtNode(target);
    target.parentNode.removeChild(target);
  }
}

function addBodyClass() {
  document.body.classList.add('class-custom-alert-body');
}

function removeBodyClass() {
  document.body.classList.remove('class-custom-alert-body');
}

export function customAlert(properties) {
  addBodyClass();
  createBulrElement();
  createAlertElement(properties);
}
