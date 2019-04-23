import React from 'react';
import {emptyFn} from '../../utils';
import './MenuButton.scss';
import { bool, func } from 'prop-types';


const MenuButton = ({name, selected, Icon, onClick, helper, onMouseDown}) => {
  return (
  <button 
    className={`menu-button menu-button__${name} ${selected ? 'menu-button--selected':''}`}
    onClick={onClick}
    title={helper}
    onMouseDown={(e)=>{onMouseDown(e)}}
  >
    {Icon && <Icon className="menu-button__icon"></Icon>}
  </button>)
}

MenuButton.propTypes = {
  selected: bool,
  onClick: func,
}

MenuButton.defaultProps = {
  selected: false,
  onClick: emptyFn,
  onMouseDown:emptyFn,
}

export default MenuButton;