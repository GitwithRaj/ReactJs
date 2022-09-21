import React from 'react'
import 'firebase/database';
export default function Question(props) {
    return (
        <div className='container card text-left mt-2'>
            <form onSubmit={props.submit}>
                <div className='form-group '>
                <label htmlFor=""><b>3.What is your query?</b></label>
                <input type="text" name="query" required placeholder='write your query here' className='form-control'></input>
                </div>
                <div className='form-group '>
                <label htmlFor=""><b>4.Please rate my site</b></label>
                    <br />
                    {"  "}
                <input type="radio" id="poor" value="poor"  name="rate" required />
                    <label htmlFor="poor">  Poor  </label>{"  "}
                    <input type="radio" id="good"  value="good" name="rate" />
                    <label htmlFor="good" >   Good</label>{"  "}
                    <input type="radio" id="excelent"  value="excelent" 
                    name="rate" />
                    <label htmlFor="excelent" >   Excelent</label>
                </div>

                <div>
                    <label htmlFor=""><b>5.Write your review here </b></label>
                    <textarea className='form-control' name="review"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Save</button>
            </form>
            <center>
                <span className='badge badge-pill disable'>1</span>
                <span className='badge badge-pill badge-primary'>2</span>
            </center>
        </div>
    )
}
