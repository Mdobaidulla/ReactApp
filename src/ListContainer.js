import React, {Component}  from 'react';
import ListItem from './ListItem'

const fruits =[
    'Mango',
    'Banana',
    'Orange',
    'Apple',
    'Pineaple',
    'Dates',
];
class ListContainer extends Component{
    render(){
        const allFruits = fruits.map((item, index)=>{
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