import { API_URL } from "@/config/env";
import { IPost } from "@/data/types";

export const getPosts = async () => {
	const res = await fetch(`${API_URL}/posts`);
	const posts = await res.json();
	return posts;
};

export const getPostById = async (id: String) => {
	const res = await fetch(`${API_URL}/posts/${id}`);
	const post = await res.json();
	return post;
};

export const createPost = async (post: IPost) => {
	const res = await fetch(`${API_URL}/posts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	});
	const data = await res.json();
	return data;
};

export const updatePost = async (post: IPost) => {
	const res = await fetch(`${API_URL}/posts/${post.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	});
	const data = await res.json();
	return data;
};

export const deletePost = async (id: String) => {
	const res = await fetch(`${API_URL}/posts/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};
