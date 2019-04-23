import React, { useContext, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import './Rect.scss';
import AppContext from '../../context';
import { getSlideElement } from '../../utils';

const Save = (evt, id, slides, selectedSlide) => {
  const slide = getSlideElement(slides, selectedSlide);
  const element = slide.components.find(c => c.props.id === id);
  if (evt.width) {
    element.props.width += evt.width;
    element.props.height += evt.height;
  }
  if (evt.x) {
    element.props.x = evt.x;
    element.props.y = evt.y;
  }

}

const Rect = ({ width, height, x, y, id, tool, style }) => {
  const { slides, selectedSlide, setSelectedElement, setTool } = useContext(AppContext);
  const selfRef = useRef(null);
  useEffect(()=>{
    selfRef.current.resizable.resizable.focus()
  },[])

  return (
    <Rnd
      ref={selfRef}
      className="rect"
      bounds='parent'
      onResizeStop={(a, b, c, d) => { Save(d, id, slides, selectedSlide) }}
      onDragStop={(a, b, c) => { Save(b, id, slides, selectedSlide) }}
      tabIndex={0}
      onBlur={() => { setSelectedElement(''); setTool('pointer-button') }}
      onFocus={() => { setSelectedElement(id); setTool(tool) }}
      default={{
        x: x,
        y: y,
        width: width,
        height: height,
      }}

      resizeHandleClasses={{
        bottomLeft: 'rect__handle',
        bottomRight: 'rect__handle',
        topLeft: 'rect__handle',
        topRight: 'rect__handle',
        top: 'rect__handle--middle',
        right: 'rect__handle--middle',
        bottom: 'rect__handle--middle',
        left: 'rect__handle--middle',
      }}
    >
      <div className="rect__container" style={style}>

      </div>
    </Rnd>
  )
}

export default Rect;