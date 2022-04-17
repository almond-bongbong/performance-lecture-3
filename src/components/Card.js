import React, {useEffect, useRef} from 'react'

function Card(props) {
	const imgRef = useRef();

	useEffect(() => {
		const options = {};
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src;
				}
			});
		}, options);
		observer.observe(imgRef.current);
	}, []);

	return (
		<div className="Card text-center">
			<img data-src={props.image} ref={imgRef} />
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
