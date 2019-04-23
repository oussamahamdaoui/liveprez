import React, {useContext} from 'react';
import AppContext from '../context';
import {getSlideElement} from '../utils';
import './SlideContainer.scss';

const SlideContainer = () => {
  const {selectedSlide, slides,} = useContext(AppContext);
  const slide = getSlideElement(slides, selectedSlide);

  return (
  <div 
  className={`slide-container`}
  >
  {
   slide && slide.components.map(Component => <Component.component key={Component.props.id} {...Component.props}/>)
  }
    
  </div>)
}

export default SlideContainer;