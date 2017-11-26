import React from 'react';
import './Notification.css';

const Notification = ({ message }) => (
  <div
    className={`Notification Notification--alert Notification--warning Notification--icon ${
      message ? 'notification visible' : 'notification hidden'
    }`}
    role='alert'
  >
    <div className='Notification-content'>
      <p className='Notification-text'>{message}</p>
    </div>
  </div>
);

export default Notification;
