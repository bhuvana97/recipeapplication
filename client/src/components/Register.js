import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [fname, setFName] = useState("");

  const [duration,setDuration] = useState("");


  const [noofservings, setNoofservings] = useState("");


  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
    setDuration(value);
    setNoofservings(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("duration",duration);
    formData.append("noofservings", noofservings);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("https://recipeapp-nhd2.onrender.com/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cuisine Name</Form.Label>
            <Form.Control type="text" name='fname' onChange={setdata} placeholder="" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" name='duration' onChange={setdata} placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>No of servings</Form.Label>
            <Form.Control type="number" name='noofservings' onChange={setdata} placeholder="" />
          </Form.Group>







          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register
