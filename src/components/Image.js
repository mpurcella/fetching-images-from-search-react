import React from 'react';
import './Image.scss';

const Image = ({ image }) => {
	return (
		<li className='images-list-item'>
			<img src={image.webformatURL} alt={image.tags} className='image' />
		</li>
	);
};

export default Image;
