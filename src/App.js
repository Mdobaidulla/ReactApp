import React, {Component} from 'react';
import ListContainer from './ListContainer';
class App extends Component {
    render(){
      return(
        <div>
           <h1>My Fruits App</h1>
           <ListContainer />
        </div>
      )
    }
}

export default App;