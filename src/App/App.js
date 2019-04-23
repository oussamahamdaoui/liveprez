import React, {useState, useEffect} from 'react';
import Menu from '../Menu';
import SlideContainer from '../SlideContainer';
import AppContext from '../context';
import {handleGlobalButtons} from '../utils';
import './App.scss';



const App = () => {
  const [slides, setSlides] = useState([]);
  const [tool, setTool] = useState('pointer-button');
  const [selectedSlide, setSelectedSlide] = useState('');
  const [selectedElement, setSelectedElement] = useState('');
  useEffect(() => {
    const globalHandeler = handleGlobalButtons(slides, setSelectedSlide, selectedSlide, setSlides);
    window.addEventListener('keydown', globalHandeler);
    return ()=>{
      window.removeEventListener('keydown', globalHandeler);
    }
  })

  return(
  <div className="app">
    <AppContext.Provider value={{
      tool,
      slides,
      setTool,
      setSlides,
      selectedSlide,
      setSelectedSlide,
      selectedElement,
      setSelectedElement
    }}>
      <Menu></Menu>
      <SlideContainer></SlideContainer>
    </AppContext.Provider>
  </div>
)};

export default App;
