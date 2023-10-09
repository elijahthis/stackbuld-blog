import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

/**
 * A component that displays a loading spinner.
 */
const LoadingComponent: React.FC = () => {
	return (
		<div className="px-4 py-12">
			<BiLoaderAlt className="btn-loader mx-auto h-5 w-5 lg:h-6 lg:w-6 " />
		</div>
	);
};

export default LoadingComponent;
