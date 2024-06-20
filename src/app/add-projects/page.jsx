"use client";
import React, { useState } from "react";
import styles from "./addproject.module.css";
import {postProjectData} from "../../../services/projects"
import {BASE_URL} from "../../db/url"
export default function AddProject() {
  
  const [inputValue, setInputValue] = useState({
    title: "",
    desc: "",
    image: "",
    video: "",
    connect: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if(name=='image'){
        value = e.target.files[0];
        setInputValue({
            ...inputValue,
            [name]:value
        })
    }else{
    setInputValue({
        ...inputValue,
        [name]: value,
      });
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      
      const formData = new FormData();
      formData.append('image',inputValue.image);
      formData.append('title',inputValue?.title)
      formData.append('video',inputValue.video)
      formData.append('desc',inputValue.desc)
      formData.append('connect',inputValue.connect)


      fetch(`${BASE_URL}/projects`, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        // Handle response data
        alert('Project added successfully')
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    
  };
  return (
        <div className={styles.login_div}>
          <h2>Add New project</h2>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="title"
              placeholder="title"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="desc"
              placeholder="Description"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="video"
              placeholder="Video link"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="connect"
              type="text"
              placeholder="Sheet link"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="image"
              type="file"
              placeholder="Project image"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <button className={styles.submit_button}>
              Submit
            </button>
            <div className={styles.linkContainer}>
              <a href="/" className={styles.link}>
                Back to home
              </a>
            </div>
          </form>
        </div>
     
  );
}
