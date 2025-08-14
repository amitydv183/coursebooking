import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { Link, useNavigate } from 'react-router-dom'

function Coursedetils() {
  const { id } = useParams();
  const navigate = useNavigate();
 // console.log(id);
 const user = JSON.parse(localStorage.getItem("user"));
 const isLoggedIn=!!user;
  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      const res = await API.get(`/course/view/${id}`);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(course);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  
  const handleBookNow =()=>{
    if(!isLoggedIn){
      navigate('/login')
    }else{
      navigate(`/course/book/${id}`);
    }
  };
  if(!course){
    return <div className="text-center my-5">Loading...</div>
  }
  return (
    <>
     <img src="https://pninfosys.org/bannerFinal.jpg" alt="" className='w-100' style={{height:"200px"}} />
      <div className="container my-5">
        {" "}
        {/* my-5 = margin top aur bottom */}
        <div className="row">
          <div className="col-md-5">
            <img
              src={course?.image.url}
              alt={course?.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <p>
              <strong>Price:</strong> ₹{course?.price}
            </p>
            <button className="btn btn-success" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursedetils;