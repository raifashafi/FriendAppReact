import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [data,setData]=useState(
        {
        "name":"",
        "friendName":"",
        "friendNickName":"",
        "DescribeYourFriend":""
    })
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch(

        ).finally()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 xol-xxl-3">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 xol-xxl-3">
                            <label htmlFor="" className="form-label">friendName</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 xol-xxl-3">
                            <label htmlFor="" className="form-label">friendNickName</label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                            <label htmlFor="" className="form-label">DescribeYourFriend</label>
                            <textarea name="name" id="" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 xol-xxl-3">
                            <button className="btn btn-success" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add