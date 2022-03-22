import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollButton.scss';

const ScrollButton = () => {
	const [scrollBtnVisible, setScrollBtnVisible] = useState(false);

	const showScrollBtn = () => {
		if (window.scrollY > 150) {
			setScrollBtnVisible(true);
		} else {
			setScrollBtnVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', showScrollBtn);

		return () => {
			window.removeEventListener('scroll', showScrollBtn);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<button className={scrollBtnVisible ? 'scroll-top-btn visible' : 'scroll-top-btn'} onClick={scrollToTop}>
			<FaArrowUp />
		</button>
	);
};

export default ScrollButton;
