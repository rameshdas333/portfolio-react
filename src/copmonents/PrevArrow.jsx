import { FaArrowLeft } from 'react-icons/fa';

const PrevArrows = ({onClick}) => {
    return (
        <div>
           
  
{/* absolute z-10 -top-11 right-14 transform -translate-y-1/2 */}
    <div
    className="w-10 h-10 hidden md:flex z-50 absolute top-1/2 -left-4 items-center justify-center bg-white border rounded-full shadow hover:bg-red-500 hover:text-white cursor-pointer p-2"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
 

        </div>
    );
};

export default PrevArrows;