import React, {useContext} from 'react';
import AppContext from '../../context';
import optionsMenus from './optionsMenus';
import './OptionsMenus.scss';

const OptionMenu = () => {
  const {tool} = useContext(AppContext);
  const Component = optionsMenus[tool];
  return (
    <div className="options-menu">
      {Component &&  <Component></Component>}
    </div>
  );
}

export default OptionMenu;