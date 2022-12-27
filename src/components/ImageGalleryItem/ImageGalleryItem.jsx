import {
	ImageGalleryItemStyle,
	ImageGalleryImageStyle,
} from './ImageGalleryItem.styled';
import { PropTypes } from 'prop-types';

const ImageGalleryItem = ({ image: { webformatURL, tags, id }, onClick }) => {
	return (
		<ImageGalleryItemStyle onClick={onClick} data-id={id}>
			<ImageGalleryImageStyle src={webformatURL} alt={tags} />
		</ImageGalleryItemStyle>
	);
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

