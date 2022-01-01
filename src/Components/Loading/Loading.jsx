import React from 'react';
import ReactLoading from 'react-loading';
import "./Loading.scss"

const Example = () => (
	<div className="loading">
		<ReactLoading type={"bars"} color={"#2F2E41"} />
	</div>
);

export default Example;