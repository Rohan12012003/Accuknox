import React from 'react'
import Add from './Add'

const Widget = ({ widgetText, addwidget, delwidget, sectioname }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-icon"></div>
        <div className="card-content">
          <div className="card-title-wrapper">
            <span className="card-title">{widgetText}</span>
            <span 
              className="card-action widget-del-btn" 
              onClick={() => delwidget(sectioname, widgetText)}  // Correctly handling deletion
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 384 512"
              >
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="card-text">
            {widgetText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget
