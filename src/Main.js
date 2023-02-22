import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default class Main extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div className='main'>
        {this.props.todos.map((ele,index) => {
          return (<div className="ticket" key={ele.id}>
            <h2 className="ticket-heding">{ele.name}</h2>
            <p className='ticket-discription'>{ele.description}</p>
            <div className="operation">
              <button className='ticket-status'>{ele.status}</button>
              <BorderColorIcon style={{color:"blue"}} onClick={() => this.props.changeStatus(true, ele.id)}/>
              <DeleteIcon style={{color:"red"}} onClick={() =>this.props.removeTodo(ele.id)}/>
            </div>
          </div>)
      }
      )
      }
      </div>
    )
  }
}
