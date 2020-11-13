import React, {Component } from 'react';

class Search extends Component {

    render(){
        return(
            <>
            <label>Search Fruits</label>
                <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Search" />
           </>
        )
    }
}

export default Search;