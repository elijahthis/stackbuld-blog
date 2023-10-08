"use client";
import { getPostById } from "@/apis/requests";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import Image from "next/image";
import { IComment, IPost } from "@/data/types";
import Button from "@/components/Button";
import LoadingComponent from "@/components/Loading";
import BackButton from "@/components/BackButton";

function PostPage({ params }: { params: { id: string } }) {
	const router = useRouter();

	// Get the post id from the url

	// Query
	const {
		data: post,
		isLoading,
		error,
	} = useQuery<IPost>(["post", params.id], () =>
		getPostById(params.id as string)
	);

	// loading state
	if (isLoading) {
		return <LoadingComponent />;
	}

	// If the post is not found
	if (!post || error) {
		router.push("/404");
	}

	console.log("post", post);

	if (post)
		return (
			<main>
				<BackButton url="/" />
				<Image
					src={post.bannerImg}
					alt={post.title + "image"}
					width={200}
					height={400}
					className="rounded-lg mb-3 lg:mb-8 w-full h-64 object-cover "
				/>
				<h1 className="mb-4 text-3xl lg:text-5xl lg:mb-6">{post.title}</h1>
				<div className="flex flex-row items-center gap-4 border-t border-b border-gray-600 py-2 mb-6">
					<Image
						src={post.authorAvatar}
						alt={post.authorName + "avatar"}
						width={40}
						height={40}
						className="rounded-full inline-block "
					/>
					<p className="text-[#a4634d] ">{post.authorName}</p>
					<p className="ml-auto text-gray-400 text-sm">
						{new Date(post.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</p>
				</div>
				<p className="mb-20">{post.content}</p>
				<div>
					<h2 className="text-xl lg:text-2xl">Comments</h2>
					<div>
						{post.comments.map((item: IComment) => (
							<p></p>
						))}
					</div>
				</div>
			</main>
		);

	return <></>;
}

export default PostPage;
