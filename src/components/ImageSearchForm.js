import React from 'react';
import './ImageSearchForm.scss';

const ImageSearchForm = ({ inputText, setInputText, handleFormSubmit }) => {
	const handleInputText = (e) => {
		setInputText(e.target.value);
	};

	const handleSearchBtnClick = (e) => {
		e.preventDefault();
		handleFormSubmit(inputText);
	};

	return (
		<form className='image-search-form'>
			<input
				type='text'
				className='image-search-input'
				placeholder='Search...'
				onChange={handleInputText}
				value={inputText}
			/>
			<button type='submit' className='image-search-btn' onClick={handleSearchBtnClick}>
				Search
			</button>
		</form>
	);
};

export default ImageSearchForm;
