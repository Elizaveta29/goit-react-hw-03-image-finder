import { Component } from 'react';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';

import {
	SearchForm,
	SearchButton,
	SearchLabel,
	SearchInput,
} from './SearchbarForm.styled';

class SearchbarForm extends Component {
	state = {
		searchQuery: '',
	};

	handleValueChange = event => {
		this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
	};

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.searchQuery.trim() === '') {
			toast.warn('Введіть слово для пошуку');
			return;
		}
		this.props.onSubmit(this.state.searchQuery);
		this.setState({ searchQuery: '' });
	};
	render() {
		return (
			<SearchForm onSubmit={this.handleSubmit}>
				<SearchButton type="submit">
					<SearchLabel>Search</SearchLabel>
				</SearchButton>

				<SearchInput
					name="searchQuery"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Пошук зображень та фотографій"
					value={this.state.searchQuery}
					onChange={this.handleValueChange}
				/>
			</SearchForm>
		);
	}
}

SearchbarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchbarForm;
