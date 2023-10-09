import { useState, useEffect } from "react";
import { IPost } from "@/data/types";

/**
 * A custom hook that filters an array of posts based on a search query.
 * @param posts An array of posts to filter.
 * @param query The search query to filter the posts by.
 * @returns An array of filtered posts.
 */
const useSearch = (posts: IPost[], query: string) => {
	const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

	useEffect(() => {
		if (query.trim() === "") {
			setFilteredPosts(posts);
			return;
		}

		const filtered = posts.filter((post) =>
			post.title.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredPosts(filtered);
	}, [posts, query]);

	return filteredPosts;
};

export default useSearch;
