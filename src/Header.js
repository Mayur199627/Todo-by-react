import React, { Component } from 'react'
import Button from '@mui/material/Button';
import './index.css';
import { TextField } from '@mui/material';
export default class Header extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className='header'>
        <p>ToDo App</p>
        <TextField id="standard-basic" placeholder='Search' variant="standard" onChange={(e)=> this.props.changeSearchValue(e.target.value)} />
         <div>
          <Button  style={{cursor:"pointer"}}variant="contained" color='success' onClick={()=>this.props.changeStatus(true)}>ADD TASK</Button>
        </div>
      </div>
    )
  }
}
