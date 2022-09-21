import React, { Component } from 'react'
import Details from "./Details"
import Question from "./Question"
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCZtk143KsIx21cpogUQZBaFWnPyJ6xQQ8",
  authDomain: "fir-project-d335a.firebaseapp.com",
  projectId: "fir-project-d335a",
  storageBucket: "fir-project-d335a.appspot.com",
  messagingSenderId: "882683393144",
  appId: "1:882683393144:web:63b9d28d92c142dc4da98d"
};
 
    firebase.initializeApp(firebaseConfig);
 class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id:uuidv4(),
        name:null,
        email:null,
        question:{
        query:null,
        rate:null,
        review:null,
    },isSubmitted:false,
      };
    }
    
    detailsubmitHandler=(event)=>{
         event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        this.setState({name,email},()=>{
            console.log(this.state)
        })
    }
    querysubmitHandler=(event)=>{
        event.preventDefault();
        const question={};
        question.query=event.target.query.value;
        question.rate=event.target.rate.value;
        question.review=event.target.review.value;
        const isSubmitted=true;
       this.setState({question,isSubmitted},()=>{
        console.log(this.state)
       })
  const database=  getDatabase();
  set(ref(database,"Raj-project/"+ this.state.id),
     {
      name:this.state.name,
      email:this.state.email,
     question:this.state.question
     });
    };
  render() {
    return (
     <>
     <div className='container-fluid'>
        <div className='container card mt-2'>
            <h1 className='text-center text-primary'>Raj-Fire-Base-Project</h1>
            </div>
            </div >
           
            {this.state.isSubmitted ?(
              <div className='card mt-2'> Thank You</div>
            )
            :this.state.name===null && this.state.email===null ? ( <Details  submit={this.detailsubmitHandler}/>):(<Question  submit={this.querysubmitHandler}/>)}
     </>
    )
  }
}

export default Container