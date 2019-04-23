import React, {useState} from 'react';
import './ColorPicker.scss';

const colors = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',

  '#16a085',
  '#27ae60',
  '#2980b9',
  '#8e44ad',
  '#2c3e50',

  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
  '#95a5a6',

  '#f39c12',
  '#d35400',
  '#c0392b',
  '#bdc3c7',
  '#7f8c8d',

];

const ColorPicker = ({ onClick, isOpened, selectedColor }) => {
  const [opened, setOpened] = useState(isOpened);
  const [selectedColorS, setSelectedColorS] = useState(selectedColor);

  return (<div className="color-picker" onMouseDown={(e)=>{e.preventDefault()}}>
    <div
      className="color-picker__selected-color"
      style={{
        backgroundColor: selectedColorS,
      }}
      onMouseDown={(e)=>{e.preventDefault()}}
      onClick={()=>{ setOpened(!opened)}}
    ></div>

    {opened &&
      <div className="color-picker__colors">
        {colors.map(color => (
          <div
            className={`color-picker__color ${color === selectedColorS ? 'color-picker__color--selected' : ''}`}
            style={{ backgroundColor: color }}
            key={color}
            onClick={() => {setSelectedColorS(color);onClick(color);setOpened(!opened)}}
          >
          </div>
        ))}
      </div>
    }
  </div>);
}


ColorPicker.defaultProps = {
  onClick: ()=>{},
}

export default ColorPicker;