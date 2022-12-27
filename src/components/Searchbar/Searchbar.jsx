import { SearchbarStyle } from './Searchbar.styled';
import SearchbarForm from '../SearchbarForm';
import { PropTypes } from 'prop-types';

const Searchbar = ({ onSubmit }) => {
	return (
		<SearchbarStyle>
			<SearchbarForm onSubmit={onSubmit} />
		</SearchbarStyle>
	);
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
