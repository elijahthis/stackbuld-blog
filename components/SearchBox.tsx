import { Dispatch, SetStateAction } from "react";

/**
 * Props for the SearchBox component
 * @interface SearchBoxProps
 */
interface SearchBoxProps {
	/**
	 * The text to be displayed in the search box
	 * @type {string}
	 */
	searchText: string;
	/**
	 * Function to be called when the search text changes
	 * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
	 */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchText, onChange }: SearchBoxProps) => {
	return (
		<div className="border border-[#a4634d] rounded-xl ">
			<input
				type="search"
				name=""
				id=""
				className="bg-transparent w-full outline-none p-2"
				placeholder="Search posts..."
				value={searchText}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBox;
