import React, {Component}  from 'react';
import ListItem from './ListItem'
class ListContainer extends Component{
    render(){
        return(
          <>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </>
        )
    }
}
export default ListContainer;