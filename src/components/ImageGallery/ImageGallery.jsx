import { PropTypes } from 'prop-types';
import { ImageGalleryStyle} from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery =({images, openModal})=> (
				<ImageGalleryStyle>
					{images && images.map(image => {
						return (
							<ImageGalleryItem
								onClick={openModal}
								key={image.id}
								image={image}
							/>
						);
					})}
				</ImageGalleryStyle>
			)

ImageGallery.propTypes = {
	images: PropTypes.array,
};

export default ImageGallery;
