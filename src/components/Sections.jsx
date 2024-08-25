import React from 'react';
import Widget from './Widget';
import Add from './Add';

const Sections = ({ sectioname, widgets, addwidget, delwidget }) => {
  return (
    <div className='section'>
      <h3>{sectioname}</h3>
      <div className='widgetContainer'>
        <div className='widgetsMap'>
          {widgets.map((widget, key) => (
            <Widget key={key} widgetText={widget} addwidget={addwidget} delwidget={delwidget} sectioname={sectioname} />
          ))}
        </div>
        <Add addwidget={addwidget} sectioname={sectioname} />
      </div>
    </div>
  );
};

export default Sections;
