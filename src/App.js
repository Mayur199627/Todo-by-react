import  {Component} from 'react'
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import AddTodo from './AddTodo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modelStatus: false,
      todos: [],
      currentEditModel : {},
      filteredSearch:[],
      searchText:""
    }
  }
  componentDidMount(){
    this.setState({todos : JSON.parse(localStorage.getItem('todosItem'))})
  }
  componentDidUpdate(){
    localStorage.setItem("todosItem",JSON.stringify(this.state.todos))
  }
  changeSearchValue = (text) =>{
    // if(text === "") return this.setState({filteredSearch:[]})
    const filterTodo = this.state.todos.filter((ele) => ele.name.toLowerCase().includes(text.toLowerCase()) || ele.status.toLowerCase().includes(text.toLowerCase()) || ele.description.toLowerCase().includes(text.toLowerCase()));
    this.setState({filteredSearch: filterTodo});
    this.setState({searchText:text})
  } 
  // Creating new Todo //

  createTodo = (name, description, status) => {
    if(name,status){
      this.state.todos.push({
        id: Date.now(),
        name: name,
        description: description,
        status: status
      })
    }
    this.setState({ todos: this.state.todos });
    this.changeModelStatus(false)
  }

  // Remove Todo //

  removeTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((ele) => ele.id !== id) });
  }

  //  Update Todo //

  updateTodo = (name, description,status, id) => {
    const tempTodo = this.state.todos.map((ele) => {
      if(ele.id === id){
        return {
          id,
          name,
          description,
          status,
      }
    }
    return ele;
    })
    this.setState({
      todos : tempTodo
    })
  }

  // Display Todo Creating Modal //

  changeModelStatus = (status, id) => {
    this.setState({
      modelStatus: status,
      currentEditModel:this.state.todos.filter((element) => element.id === id)[0],
    })
  }

  render() {
    return (
      <>
        <Header changeStatus={this.changeModelStatus} changeSearchValue={this.changeSearchValue}/>
        <Main todos={this.state.searchText ? this.state.filteredSearch : this.state.todos} removeTodo={this.removeTodo} changeStatus={this.changeModelStatus} />
        {this.state.modelStatus && <div className="modal">
          <AddTodo changeStatus={this.changeModelStatus} createTodo={this.createTodo} currentEditModel={this.state.currentEditModel} updateTodo={this.updateTodo}/>
        </div>}
        <Footer />
      </>

    )
  }
}
