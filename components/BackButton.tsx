"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

/**
 * A button component that navigates back to the previous page or a specified URL.
 * @param url - Optional URL to navigate to instead of going back to the previous page.
 * @returns A button component that navigates back to the previous page or a specified URL.
 */
const BackButton = ({ url }: { url?: string }) => {
	const router = useRouter();

	/**
	 * Handles the click event of the button and navigates back to the previous page or a specified URL.
	 */
	const handleBack = () => {
		if (url) {
			router.push(url);
			return;
		}
		router.back();
	};

	return (
		<button
			onClick={handleBack}
			className="py-3 flex flex-row items-center gap-3"
		>
			<LiaLongArrowAltLeftSolid />
			Back
		</button>
	);
};

export default BackButton;
