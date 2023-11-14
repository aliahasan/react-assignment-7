
import PropTypes from 'prop-types'

const Course = ({course}) => {
    const {title} =course
  
  return (

   <div className=''>
       
        <li className='text-base py-1 font-medium text-gray-600 px-6'>{title}</li>
        
       
   </div>
   

  )
}

     Course.propTypes = {
    course:PropTypes.object

}

export default Course
