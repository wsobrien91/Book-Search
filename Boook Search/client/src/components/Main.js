import React, { Component } from 'react';
import Search from './Search/Search';
import request from 'superagent';
import BookList from './BookList/BookList';

class Main extends Component {
	state = {
		books: [],
		searchField: 'Beans',
	};

	searchBook = (e) => {
		e.preventDefault();
		request
			.get('https://www.googleapis.com/books/v1/volumes')
			.query({ q: this.state.searchField })
			.then((data) => {
				console.log(data);
				this.setState({ books: [...data.body.items] });
			});
	};

	handleSearch = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		return (
			<>
				<Search
					searchBook={this.searchBook}
					handleSearch={this.handleSearch}
				/>
				<BookList books={this.state.books} />
			</>
		);
	}
}

export default Main;