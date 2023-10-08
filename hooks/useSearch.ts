import { useState, useEffect } from "react";
import { IPost } from "@/data/types";

type UseSearchProps = {
	posts: IPost[];
	query: string;
};

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
