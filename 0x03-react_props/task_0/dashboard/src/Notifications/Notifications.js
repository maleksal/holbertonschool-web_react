import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils.js';
import close from '../assets/Close.png';

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">
          <div dangerouslySetInnerHTML={{__html: `${getLatestNotification()}`}}></div>
        </li>
      </ul>
      <button
        aria-label="Close" type="button" onClick={ () => console.log('Close button has been clicked') } style={{display: 'inline-block', position: 'absolute',top: '20px',right: '20px',borderStyle: 'none',outline: 'none',cursor: 'pointer'}}>
        <img src={close} alt='close' style={{width: '10px', height: '10px'}} />
      </button>
    </div>
  );
}