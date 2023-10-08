import React from "react";
import { useRouter } from "next/navigation";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const BackButton = ({ url }: { url?: string }) => {
	const router = useRouter();

	const handleBack = () => {
		if (url) {
			router.push(url);
			return;
		}
		router.back();
	};

	return (
		<button onClick={handleBack} className="py-3 flex flex-row items-center gap-3">
			<LiaLongArrowAltLeftSolid />
			Back
		</button>
	);
};

export default BackButton;
