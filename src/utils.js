export const guidGenerator = () => {
  var S4 = () => {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}



export const createSlide = (slides, setSlides, setSelectedSlide) => {
  const newKey = guidGenerator();
  setSlides([...slides, {
    key: newKey,
    id:newKey,
    components:[],
  }]);
  setSelectedSlide(newKey);
}

export const findSlideIndex = (slides, selectedSlide) => {
  return slides.findIndex(slide => slide.id === selectedSlide); 
}

export const removeSlide = (slides, setSlides, setSelectedSlide, selectedSlide) => {
  let index = findSlideIndex(slides,selectedSlide);
  if(index ===  -1) return;
  const newId = slides[index - 1] ? slides[index - 1].id : slides[index + 1] ? slides[index + 1].id : '';
  setSelectedSlide(newId);
  setSlides(slides.filter((s,i) => i !== index));
}

export const getSlideElement = (slides, selectedSlide) => {
  return slides.find(e => e.id === selectedSlide);
}

export const handleGlobalButtons = (slides, setSelectedSlide, selectedSlide, setSlides) => (evt) => {
  let index = findSlideIndex(slides, selectedSlide);
  
  if((evt.key === 'ArrowDown' || evt.key === 'ArrowRight') && index !== -1){
    index = index < slides.length - 1 ? index  + 1 : index;
    setSelectedSlide(slides[index].id);
  }
  else if((evt.key === 'ArrowUp' || evt.key === 'ArrowLeft') && index !== -1){
    index = index > 0 ? index  - 1 : index;
    setSelectedSlide(slides[index].id);
  }
  else if((evt.key === 'Delete' || (evt.key === 'Backspace' && evt.metaKey)) && index !== -1){
    removeSlide(slides, setSlides, setSelectedSlide, selectedSlide);
  }
  else if((evt.key === 'N' || evt.key === 'n' ) && evt.metaKey){
    evt.preventDefault();
    createSlide(slides, setSlides, setSelectedSlide);
  }
}


export const emptyFn = ()=>{};