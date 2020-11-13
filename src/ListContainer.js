import React, {Component}  from 'react';
import ListItem from './ListItem'


class ListContainer extends Component{
    render(){
        const allFruits = this.props.fruits.map((item, index)=>{
            return <ListItem name={item} key={index} />
        })
        return(          
          <ul>   
              {allFruits}         
          </ul>
        )
    }
}
export default ListContainer;