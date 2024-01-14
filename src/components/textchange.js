import React, { useState, useEffect ,useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/textchange.css'; // Create this CSS file for zoom and fade animations


const Textchange = ({ blogsimage })  => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const typingRef = useRef(null);

  useEffect(() => {
    setTypedText(''); // Reset typedText when activeIndex changes
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
      setTypedText((prevText) => prevText + text[index]);
      if(index===0)
      {
        setTypedText((prevText) => prevText + text[1]);
      }
      
      if (index === text.length-2) {
        clearInterval(typingRef.current);
      }
      index++;
    }, 100);
  };


  return (
    <div className="text-slider">
      
      <TransitionGroup>
        <CSSTransition key={activeIndex} classNames="text-fade" timeout={0}>
          <div className="text-field">
            {typedText}
            <span className="cursor" />
          </div>
        </CSSTransition>
      </TransitionGroup>

      
      
    </div>
  );
};

export default Textchange;
