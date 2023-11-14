import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Info from "../Info/Info";

    const CourseDetails = ({handleSelectCourse}) => {
    const [courseInfo, setCourseInfo] = useState([]);
    
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourseInfo(data))
    },[])

    return (
        <div className=" md:w-2/3 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">
         
            {
                courseInfo.map( info => <Info key={info.id} info = {info} handleSelectCourse = {handleSelectCourse} ></Info>)
               
            }

        </div>
    );
};


    CourseDetails.propTypes ={ 
    handleSelectCourse:PropTypes.func
}

export default CourseDetails;