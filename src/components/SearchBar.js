import React, {Component} from 'react';

class SearchBar extends Component {
    onInputChange(searchTerm){
        this.setState({
            searchTerm: searchTerm
        });
        console.log(searchTerm);

        this.props.onSearchTermChange(searchTerm);
        
    }
    
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ""
        }
    
    }
    render(){
        return (
            <div id="searchBar" className="search-bar">
                <form >
                    <input type = 'text' onChange={event =>{this.onInputChange(event.target.value)}} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;