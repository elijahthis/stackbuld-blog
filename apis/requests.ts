import { API_URL } from "@/config/env";

export const getPosts = async () => {
	const res = await fetch(`${API_URL}/posts`);
	const posts = await res.json();
	return posts;
};

export const getPost = async (id: String) => {
	const res = await fetch(`${API_URL}/posts/${id}`);
	const post = await res.json();
	return post;
};
