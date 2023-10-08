import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const LoadingComponent: React.FC = () => {
	return (
		<div>
			<BiLoaderAlt className="btn-loader mx-auto h-5 w-5 lg:h-6 lg:w-6 " />
		</div>
	);
};

export default LoadingComponent;
