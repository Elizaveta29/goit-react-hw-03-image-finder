import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import { Notify } from "../../components/ImageGallery/ImageGallery.styled";
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from 'components/Button';
import Modal from 'components/Modal';
import ImageErrorView from 'components/ImageErrorView';
import Loader from 'components/Loader';
import imagesAPI from '../../services/images-api';

export class App extends Component {
	state = {
		images: [],
		id: null,
		searchQuery: '',
		page: 1,
		isLoading: false,
		loadMore: false,
		showModal: false,
		isEmpty: false,
		error: null,
		per_page: 12,
	
	};

	componentDidUpdate(_, prevState) {
		const { searchQuery, page, } = this.state;
		if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
			this.getPhotos(searchQuery, page);
		}
	}

	getPhotos = async (query, page) => {
    if (!query) return;
    this.setState({ isLoading: true });
    try {
      const {
        hits,
				totalHits,
      } = await imagesAPI(query, page);
      console.log(hits, totalHits);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

	handleFormSubmit = searchQuery => {
		this.setState({
			searchQuery: searchQuery,
			page: 1,
			loadMore: false,
			images: [],
			isEmpty: false,
		});
	};

	loadMore = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }));
	};


	openModal = e => {
		this.setState({
			showModal: true,
			id: e.currentTarget.dataset.id,
		});
	};

	closeModal = e => {
		this.setState({
			showModal: false,
		});
	};

	render() {
		const { searchQuery, page, loadMore, showModal, images, id, isLoading, isEmpty } =
			this.state;
		return (
			<AppContainer>
				<Searchbar onSubmit={this.handleFormSubmit} />
				<ToastContainer position="top-center" autoClose={3000} />
				
				{isLoading && <Loader />}
				{isEmpty && <ImageErrorView
					message={`Немає картинки з ім'ям '${this.state.searchQuery}'`}
				/>}
				{searchQuery ? <ImageGallery
					openModal={this.openModal}
					images={images}
				/> : <Notify >Введіть слово в пошуковий рядочок</Notify>}
				
				{loadMore && <Button onClick={this.loadMore} page={page} />}
				{showModal && (
					<Modal
						images={images}
						id={Number(id)}
						onClose={this.closeModal}
					/>
				)}
			</AppContainer>
		);
	}
}
