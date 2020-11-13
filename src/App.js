import React, {Component} from 'react';
import ListContainer from './ListContainer';
import Search from './Seach'
class App extends Component {
  constructor(props){
    super(props);
    // Initialize the Search Value to an Empty String
    this.state={
      searchValue:'',
      fruitsToDisplay: this.props.fruits,
    }
  }
    render(){
      return(
        <div>
           <h1>My Fruits App</h1>
           <Search 
           value={this.state.searchValue}
           onChange={this.handleSearchChange}
           />
           <ListContainer fruits={this.state.fruitsToDisplay} />
        </div>
      )
    }
    handleSearchChange = (e) =>{
      const textValue = e.target.value;
      const filteredValue =this.props.fruits.filter((fruit, index)=>{
        return fruit.toLowerCase().includes(textValue.toLowerCase());
      })
      this.setState({
        searchValue:textValue,
        fruitsToDisplay: filteredValue,
      }) 
    }
}

export default App;