import React, { useState } from 'react';
import ImageSearchHeading from './components/ImageSearchHeading';
import ImageSearchForm from './components/ImageSearchForm';
import ImageSearchList from './components/ImageSearchList';
import ScrollButton from './components/ScrollButton';
import axios from 'axios';
import './App.scss';

const App = () => {
	const [inputText, setInputText] = useState([]);
	const [images, setImages] = useState([]);

	const handleFormSubmit = async (searchInput) => {
		try {
			const response = await axios.get(
				`https://pixabay.com/api/?key=21484393-fe2bda1207e80c999410f0783&q=${searchInput}&image_type=photo&orientation=horizontal&per_page=200`
			);
			setImages(response.data.hits);
			setInputText('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='app'>
			<ImageSearchHeading heading='Search For An Image' />
			<ImageSearchForm inputText={inputText} setInputText={setInputText} handleFormSubmit={handleFormSubmit} />
			<ImageSearchList images={images} />
			<ScrollButton />
		</div>
	);
};

export default App;
