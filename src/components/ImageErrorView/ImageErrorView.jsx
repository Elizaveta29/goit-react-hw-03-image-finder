import { PropTypes } from 'prop-types';
import errorImage from '../../images/error.jpeg'
import { ImageErrorViewStyled } from "./ImageErrorView.styled";

export default function ImageErrorView({ message }) {
	return (
		<ImageErrorViewStyled role='alert'>
			<img src={errorImage} width='240' alt="sadcat" />
			<p>{ message}</p>
		</ImageErrorViewStyled>
	)
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};