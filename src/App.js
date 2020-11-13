import React, {Component} from 'react';
import ListContainer from './ListContainer';
import Search from './Seach'
class App extends Component {
  constructor(props){
    super(props);
    // Initialize the Search Value to an Empty String
    this.state={
      searchValue:'Water'
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
           <ListContainer />
        </div>
      )
    }
    handleSearchChange = (e) =>{
      const textValue = e.target.value;
      this.setState({
        searchValue:textValue
      }) 
    }
}

export default App;