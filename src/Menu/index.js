import React, { useContext } from 'react';
import { MenuButtonProps } from './MenuButtonProps'
import MenuButton from './MenuButton/'
import SlideThumbnail from './SlideThumbnail';
import AppContext from '../context';
import { createSlide, removeSlide, getSlideElement } from '../utils';
import OptionsMenu from './OptionsMenu';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './Menu.scss';

const Menu = () => {
  const { tool, setTool, slides, setSlides, setSelectedSlide, selectedSlide } = useContext(AppContext);
  const selectedSlideElement = getSlideElement(slides, selectedSlide);
  return (
    <div className="menu">
      <div className="menu__tools">
        <div className="menu__tools__group">
          <MenuButton
            key="plus_button"
            onClick={() => {
              createSlide(slides, setSlides, setSelectedSlide)
            }}
            Icon={FaPlus}
          />

          <MenuButton
            key="remove_button"
            onClick={() => {
              removeSlide(slides, setSlides, setSelectedSlide, selectedSlide);
            }}
            Icon={FaTrash}
          />
        </div>
        {MenuButtonProps.map((MenuButtonProp) =>
          <MenuButton
            {...MenuButtonProp}
            onClick={() => {
              setTool(MenuButtonProp.key);
              MenuButtonProp.onClick(selectedSlideElement, slides, setSlides);
            }}
            selected={tool === MenuButtonProp.key}
          />
        )}
      </div>
      <OptionsMenu></OptionsMenu>
      <div className="menu__thumbnails">
        {slides.map(slide => <SlideThumbnail {...slide} ></SlideThumbnail>)}
      </div>
    </div>
  )
};

export default Menu;