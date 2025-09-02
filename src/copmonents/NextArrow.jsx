import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Container from './Container';


const NextArrows = ({onClick}) => {
    return (
        <div>
          
      <Container>
      <div
    className="w-10 h-10 hidden md:flex items-center justify-center z-50 absolute -right-4 top-1/2 bg-white border rounded-full shadow hover:bg-red-500 hover:text-white cursor-pointer p-2"
    onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
      </Container>

        </div>
    );
};

export default NextArrows;