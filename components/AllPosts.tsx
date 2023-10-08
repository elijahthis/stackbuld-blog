"use client";
import { getPosts } from "@/apis/requests";
import { IPost } from "@/data/types";
import { useQuery } from "react-query";
import PostPreview from "./PostPreview";
import PaginationComponent from "./PaginationComponent";
import usePaginate from "@/hooks/usePaginate";
import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import SearchBox from "./SearchBox";

interface AllPostsProps {
	title: string;
	postList: IPost[];
}

const AllPosts = ({ title, postList }: AllPostsProps) => {
	// Query
	const { data } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
		initialData: postList,
	});

	const itemsPerPage = 9;
	// sort by date
	const sortedData = postList.sort((a: IPost, b: IPost) => {
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	});

	// Component state
	const [searchText, setSearchText] = useState("");

	// Custom hooks
	const searchResults = useSearch(sortedData, searchText);
	const { currentItems, pageCount, handlePageClick } = usePaginate(
		itemsPerPage,
		searchResults
	);

	return (
		<section className="mb-5">
			<div className="mb-5 flex flex-col lg:flex-row items-stretch gap-2 lg:justify-between ">
				<h2 className="text-2xl">{title}</h2>
				<SearchBox
					searchText={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>

			<div
				className="grid gap-6 w-full"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))" }}
			>
				{currentItems.map((item, ind) => (
					<PostPreview postData={item} key={ind} />
				))}
			</div>
			<div className="lg:mb-24 mb-28 pt-4 mt-10 border-t border-[#EAECF0] ">
				<PaginationComponent
					handlePageClick={handlePageClick}
					pageCount={pageCount}
				/>
			</div>
		</section>
	);
};

export default AllPosts;
