import React from 'react'
import 'firebase/database';
function Details(props) {
    return (
        <div className='text-left  container card mt-2'>
            <form onSubmit={props.submit}>
                <div className='form-group'>
                    <label htmlFor="name"><b>1.Name</b></label><br></br>
                    <input type="text" name="name" placeholder="Please Enter your name"  required className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="Email"><b>2.Email</b></label><br></br>
                    <input type="email" name="email"  required placeholder="Please Enter your email" className='form-control'></input>
                </div>
                <button type="submit" class="btn btn-primary">Next</button>

            </form>
            <center>
                <span className='badge badge-pill badge-primary'>1</span>
                <span className='badge badge-pill disable'>2</span>
            </center>
        </div>
    )
}
export default Details;