import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term : ''}
	}
	render(){
		return(
			<div className="search-bar">
				<input value={this.state.term} onChange= {(e) => this.onInputChange(e)} />
			</div>
		);
	};
	onInputChange(event){
		this.setState({term : event.target.value})
		this.props.onSearchChange(event.target.value)
	}
}

export default SearchBar; 