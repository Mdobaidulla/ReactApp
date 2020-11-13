import React, {Component } from 'react';
import ListContainer from './ListContainer';
class ListItem extends Component {

    render(){
        return(
            <>
                <li>{this.props.name}</li>
           </>
        )
    }
}

export default ListItem;