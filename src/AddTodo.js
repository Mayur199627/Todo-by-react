import React, { Component } from 'react'
import { TextField, Button, FormControl, MenuItem, InputLabel,Select } from '@mui/material'

export default class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : this.props.currentEditModel ? this.props.currentEditModel.name : "",
            disc : this.props.currentEditModel ? this.props.currentEditModel.description : "",
            status : this.props.currentEditModel ? this.props.currentEditModel.status : "",
        }
    }

    createTodo = () =>{
        if(this.props.currentEditModel) {
            this.props.updateTodo(this.state.title,this.state.disc,this.state.status, this.props.currentEditModel.id)
        }else{
            this.props.createTodo(this.state.title, this.state.disc, this.state.status)
        }
        this.props.changeStatus(false)
    }

    render() {
        return (
            <div className='create-todo'>
                <h2>
                    {this.props.currentEditModel ? "Update Todo" : "Create A Todo"}
                </h2>
                <TextField
                 id="outlined-basic"
                 label="Todo Title"
                 variant="outlined"
                 value={this.state.title}
                 onChange={(e) => this.setState({title : e.target.value})} />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={(e) => this.setState({disc : e.target.value})}
                    value={this.state.disc}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="Status"   
                        onChange={(e) => this.setState({status : e.target.value})}
                        value={this.state.status}
                        >
                        <MenuItem value={'Todo'}>Todo</MenuItem>
                        <MenuItem value={'In Progress'}>In progress</MenuItem>
                        <MenuItem value={'Completed'}>Completed</MenuItem>
                    </Select>
                </FormControl>

                <div className="action-btn">
                    <Button variant="contained" color='success' onClick={this.createTodo}>
                    {this.props.currentEditModel ? "Save" : "Add"}</Button>
                    <Button variant="outlined" onClick={()=>this.props.changeStatus(false)}>Close</Button>
                </div>



            </div>
        )
    }
}
