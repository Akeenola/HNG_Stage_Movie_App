import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input id='search'
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input><button>Search</button>
		</div>
	);
};
export default SearchBox;