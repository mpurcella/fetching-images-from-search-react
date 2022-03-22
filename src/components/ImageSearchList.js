import React from 'react';
import Image from './Image';
import './ImageSearchList.scss';

const ImageSearchList = ({ images }) => {
	return (
		<ul className='images-list'>
			{images.map((image) => {
				return <Image image={image} key={image.id} />;
			})}
		</ul>
	);
};

export default ImageSearchList;
