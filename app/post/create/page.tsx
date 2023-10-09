"use client";
import { createPost } from "@/apis/requests";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import UploadImage from "@/components/UploadImage";
import { IPost } from "@/data/types";
import { authContext } from "@/hooks/useAuth";
import { randomBytes } from "crypto";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const CreatePostPage = () => {
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState("");

	const router = useRouter();

	const queryClient = useQueryClient();

	const { isLoggedIn, setIsLoggedIn, userObj } = useContext(authContext);

	const mutation = useMutation(createPost, {
		onMutate: () => {
			setLoading(true);
		},
		onSuccess: () => {
			console.log("success");
			toast.success("Post created successfully");

			// refetch posts
			queryClient.invalidateQueries(["posts"]).then(() => {
				router.push("/"); // redirect to home page
			});
		},
		onError: () => {
			console.log("error");
			toast.error("Error creating post");
		},
		onSettled: () => {
			setLoading(false);
		},
	});

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleContentChange = (value: string) => {
		setContent(value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// TODO: handle form submission
		if (title === "" || content === "") {
			toast.error("Please fill in all fields");
			return;
		} else {
			const newPost: IPost = {
				title: title,
				content: content,
				createdAt: new Date().toISOString(),
				bannerImg: image,
				updatedAt: new Date().toISOString(),
				authorName: userObj?.displayName,
				authorAvatar: `https://ui-avatars.com/api/?name=${userObj?.displayName}`,
				comments: [],
				id: randomBytes(16).toString("hex"),
			};
			mutation.mutate(newPost);
		}
	};

	return (
		<div>
			<BackButton />
			<h1 className="mb-4 text-3xl lg:text-5xl lg:mb-6">
				Create a new blog post
			</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col items-stretch gap-2 mb-4 ">
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={handleTitleChange}
						className="border border-gray-400 rounded-md py-2 px-4 bg-transparent outline-none"
					/>
				</div>
				<div className="flex flex-col items-stretch gap-2 mb-4 ">
					<label htmlFor="content">Content:</label>
					<ReactQuill value={content} onChange={handleContentChange} />
				</div>
				<div className="mb-4">
					<UploadImage image={image} setImage={setImage} />
				</div>
				<Button type="submit" loading={loading}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default CreatePostPage;
