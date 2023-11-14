import PropTypes from 'prop-types';
import { BsBook } from "react-icons/bs";


const Info = ({info , handleSelectCourse, }) => {
    const {title,img,description,price,credit} = info;
    return (
        <div className='shadow-xl bg-white rounded-lg px-4 pt-5'>
           <div className=' mb-4 gap-4'>
            <div className='flex justify-center'><img className='w-full' src={img} alt="" /></div>
           <h2 className="text-[18px] text-center font-bold pt-2">{title}</h2>
           <p className=' text-justify pt-2 font-medium'>{description}</p>
           <div className='flex justify-between items-center pt-2'>
            <p>Price : {price}$ </p>
           <p><BsBook></BsBook></p>
            <p>Credit : {credit}hr</p>
           </div>
           <div className='pt-4'>
           <button onClick={()=> handleSelectCourse (info)} className='btn bg-sky-500 px-2 py-2 rounded w-full font-bold text-white  text-xl'>Select</button>
           </div>
           </div>
        </div>
    
    );
};

Info.propTypes ={
    info:PropTypes.object.isRequired,
    handleSelectCourse:PropTypes.func.isRequired

}
export default Info;