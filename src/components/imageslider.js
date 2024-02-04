import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/imageslider.css'; // Create this CSS file for zoom animation
import '../css/textchange.css'; // Create this CSS file for zoom and fade animations


const ImageSlider = ({ blogsimage }) => {

  

  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const typingRef = useRef(null);

  useEffect(() => {
    setTypedText(''); 
    if (typingRef.current) {
      clearInterval(typingRef.current);
    }
    typingRef.current = startTyping(blogsimage[activeIndex].label);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % blogsimage.length);
      setTypedText('');
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
      typingRef.current = startTyping(blogsimage[activeIndex].label);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, [activeIndex, blogsimage, blogsimage.length]);

  const startTyping = (text) => {
    let index = 0;
    return setInterval(() => {
      if (index < text.length ) {
        setTypedText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(typingRef.current);
      }
    }, 100);
  };
  return (
    <div className="image-slider">
      <TransitionGroup>
        <CSSTransition key={activeIndex} classNames="image-zoom" timeout={0}>
          <img
            src={blogsimage[activeIndex].imageSrc}
            alt={blogsimage[activeIndex].label}
          />
        </CSSTransition>
      </TransitionGroup>

      <div className="down-midright-text">
        <TransitionGroup>
          <CSSTransition key={typedText} classNames="text-fade" timeout={0}>
            <div className="text-field">
              {typedText}
              <span className="cursor" />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <div className="dots">
        {blogsimage.map((data, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ImageSlider;
