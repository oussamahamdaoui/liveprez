import React, {useContext} from 'react';
import AppContext from '../../context';
import './SlideThumbnail.scss';

const getPage = (id, slides)=>{
  return slides.findIndex(slide => slide.id === id) + 1;
}

const SlideThumbnail = ({id}) =>{
  const {setSelectedSlide, selectedSlide, slides} = useContext(AppContext);
  return (
    <div 
      className={`slide-thumbnail ${selectedSlide === id ? 'slide-thumbnail--selected' : ''}`}
      onClick={()=>{setSelectedSlide(id)}}
    >

    <div className="slide-thumbnail__pagination" >{getPage(id, slides)}</div>
    </div>
  );
} 

export default SlideThumbnail;