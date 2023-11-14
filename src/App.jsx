import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Header from './Components/Header/Header';
import SelectedCourse from './Components/SelectedCourse/SelectedCourse';

function App() {

  const [courses, setCourses] = useState([]);

  const [readingHour , setReadingHour] = useState(0)

  const [reamingHour, setRemainingHour] = useState(20)

  const [price, setPrice] = useState(0)


  const handleSelectCourse = (info) =>{

  const isExist = courses.find(courseTitle => courseTitle.id == info.id)

    let totalHour = info.credit;
    let totalPrice = info.price;


    if(isExist){


   return   toast.warn('Already selected',{
      position:'top-center',
      autoClose:1000,
      hideProgressBar:true

    })


    }

    else{

      courses.forEach( item => {

        totalHour = totalHour  + item.credit;
        totalPrice = totalPrice + item.price;

        
      });
     

      
      const myHour = 20;
      
      const remainingHour = myHour - totalHour

      if(totalHour > myHour){
      return  toast.error(`Sorry your credit hour can't be more than ${myHour}`,{
          position:'top-center',
          autoClose:1000,
          hideProgressBar:true
    
        })
      }
      setReadingHour(totalHour)

      if(readingHour < 0 ){
        toast.error(`your credit hour limit is over`,{
          position:'top-center',
          autoClose:1000,
          hideProgressBar:true
    
        })
      }
      setRemainingHour(remainingHour)

      setCourses([...courses,info])

      setPrice(totalPrice)

    }

    
    
}

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto space-x-5 '>
      <CourseDetails handleSelectCourse ={handleSelectCourse}  ></CourseDetails>
      <SelectedCourse  courses={courses} readingHour={readingHour} reamingHour ={reamingHour} price = {price} ></SelectedCourse>
      </div>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
