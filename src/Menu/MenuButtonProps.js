import { FaRegSquare, FaRegCircle, FaMousePointer } from 'react-icons/fa';
import Rect from '../Components/Rect';
import { guidGenerator, emptyFn } from '../utils';


const createBasicAppender = (component, props) => (slide, slides, setSlides, ) => {
  slide.components.push({
    component,
    props: {
      ...props,
      id: guidGenerator(),
    }
  });
  setSlides([...slides]);
}

export const MenuButtonProps = [
  {
    name: 'pointer',
    key: 'pointer-button',
    Icon: FaMousePointer,
    onClick: emptyFn,
  },
  {
    name: 'rect',
    key: 'rect-button',
    Icon: FaRegSquare,
    helper: 'Create rectangle',
    onClick: createBasicAppender(Rect, {
      width: 320,
      height: 200,
      x: 0,
      y: 0,
      tool: 'rect-button',
      style:{},
    }),
  },
  {
    name: 'circle',
    key: 'circle-button',
    Icon: FaRegCircle,
    onClick: createBasicAppender(Rect, {
      width: 320,
      height: 320,
      x: 0,
      y: 0,
      tool: 'circle-button'
    }),
  }
];