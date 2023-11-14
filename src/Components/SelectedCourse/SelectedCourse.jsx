import PropTypes from 'prop-types';
import Course from '../Course/Course';


const SelectedCourse = ({courses , reamingHour, readingHour , price}) => {
  
    return (

        <div className=" mt-12 "> 
            <div className='shadow-lg bg-white rounded-xl'>
               <div>
               <h1 className='text-xl text-blue-600 font-bold px-6 py-4'>Credit Hour Remaining : {reamingHour} hr</h1>
               <hr className='mx-4 pb-2' />
               </div>

                     <h1 className='px-6 text-xl font-bold py-2'>Course Name</h1>
                
         
                     {
                      courses.map((course , index) => <Course  key={index} course={course}></Course>)
                     }

                    <div>
                        <hr className='my-2 mx-4' />
                        <h1 className='text-lg font-bold mx-6 py-2'>Total Credit Hour : {readingHour}</h1>
                       <hr className='mx-4 mt-2 ' />
                    </div>
                    <h1 className='text-lg font-bold mx-6 py-4' >Total Price : {price} USD</h1>
            </div>
        </div>
       
    );
};

SelectedCourse.propTypes ={
    courses:PropTypes.array.isRequired,
    readingHour:PropTypes.number,
    reamingHour:PropTypes.number,
    price:PropTypes.number
}

export default SelectedCourse;