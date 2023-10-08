import { Dispatch, SetStateAction } from "react";

interface SearchBoxProps {
	searchText: string;
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
