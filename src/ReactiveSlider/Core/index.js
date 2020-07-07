import {useEffect, useReducer} from 'react';


function previous(length, current) {
  return (current - 1 + length) % length;
}

function next(length, current) {
  return (current + 1) % length;
}


const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;



const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};


function carouselReducer(state, action) {
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case 'drag':
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
}


export function useCarousel(length, interval, intervalList) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const currentInterval = intervalList ? (intervalList[state.active] || interval) : interval
  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'next', length }), currentInterval);
    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, [state.offset, state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style = {
    transform: 'translateX(0)',
    width: `${100 * (length + 2)}%`,
    left: `-${(state.active + 1) * 100}%`,
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / (length + 2);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return [state.active, n => dispatch({ type: 'jump', desired: n }), {}, style];
}


export const getSlides = (items, options) => {
    const slides = [];
    let d = []
    items.forEach((item, i) => {
        if (options.isMobile || !options.groupItemsBy || options.groupItemsBy === 1) {
            slides.push([item])
        } else {
            if (i !== 0 && i % options.groupItemsBy === 0) {
                slides.push(d)
                d = []
            }
            d.push(item)
        }
    })
    if (d.length) {
        slides.push(d)
    }
    return slides
}
