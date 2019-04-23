import React, { useContext } from 'react';
import ColorPicker from '../../../Components/ColorPicker';
import AppContext from '../../../context';
import { getSlideElement } from '../../../utils';
import GroupedButtons from '../../../Components/GrouppedButtons';

const getComponentInSlide = (slide, selectedElement) => {
  return slide.components.find(e => e.props.id === selectedElement);
}

const chnageFill = (color, element, slides, setSlides) => {
  element.props.style = {
    ...element.props.style,
    backgroundColor: color,
  }
  setSlides([...slides])
}

const chnageStroke = (color, element, slides, setSlides) => {
  element.props.style = {
    ...element.props.style,
    borderColor: color,
    borderStyle: 'solid',
  }
  setSlides([...slides])
}

const chnageStrokeWidth = (size, element, slides, setSlides) => {
  element.props.style = {
    ...element.props.style,
    borderStyle: 'solid',
    borderWidth: `${size}`
  }
  setSlides([...slides])
}

const changeBackgroundType = (type, element, slides, setSlides) => {
  element.props.style = {
    ...element.props.style,
    backgroundColor:type !== 'transparent' ? type : null,
  }
  setSlides([...slides])
}

const RectMenu = () => {
  const { selectedElement, selectedSlide, slides, setSlides } = useContext(AppContext);
  const slide = getSlideElement(slides, selectedSlide);
  const selectedElementInSlide = getComponentInSlide(slide, selectedElement);
  const fillColor = selectedElementInSlide && selectedElementInSlide.props && selectedElementInSlide.props.style && selectedElementInSlide.props.style.backgroundColor ? selectedElementInSlide.props.style.backgroundColor : "transparent";
  const strokeColor = selectedElementInSlide ? selectedElementInSlide.props.style.borderColor : null;
  const strokeWidth = selectedElementInSlide && selectedElementInSlide.props && selectedElementInSlide.props.style && selectedElementInSlide.props.style.borderWidth ? selectedElementInSlide.props.style.borderWidth : "0px";
  console.log(fillColor)
  return (
    <div>
       <div>
        Backgound Style
        <GroupedButtons valueLabel={{
          "None": "transparent",
          "Fill": fillColor === 'transparent' ? ' ' : fillColor,
        }}
          onClick={(e, value) => { changeBackgroundType(value, selectedElementInSlide, slides, setSlides); }}
          selected={fillColor}
        ></GroupedButtons>
      </div>
      
      <div>
        Fill
        <ColorPicker
          onClick={(color) => { chnageFill(color, selectedElementInSlide, slides, setSlides) }}
          selectedColor={fillColor}
        /> 
       </div>
      <div>
        Stroke width
        <GroupedButtons valueLabel={{
          "None": "0px",
          "1px": "1px",
          "2px": "2px",
          "3px": "3px",
          "4px": "4px",
          "5px": "5px",
        }}
          onClick={(e, value) => { chnageStrokeWidth(value, selectedElementInSlide, slides, setSlides); }}
          selected={strokeWidth}
        ></GroupedButtons>
      </div>

      { strokeWidth !== "0px" &&
        <div>
          Stroke Color
          <ColorPicker
            onClick={(color) => { chnageStroke(color, selectedElementInSlide, slides, setSlides) }}
            selectedColor={strokeColor}
          />
         </div>

      }




    </div>
  )
}

export default RectMenu;