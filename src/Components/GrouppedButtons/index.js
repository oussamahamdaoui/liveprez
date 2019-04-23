import React from 'react';
import './GrouppedButtons.scss';
const GroupedButtons = ({onClick, valueLabel, selected}) => {
  return ( <div onMouseDown={(e)=>{e.preventDefault()}} className="groupped-buttons">
    {Object.keys(valueLabel).map(label => 
      <div 
      className={`groupped-buttons__buton ${selected === valueLabel[label] ? 'groupped-buttons__buton--selected' : '' }`}
      key={label}
      onClick={(e)=>{onClick(e, valueLabel[label])}}
      
       >{label}</div>
      )}
  </div> );
}
 
export default GroupedButtons;