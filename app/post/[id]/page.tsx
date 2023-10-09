"use client";
import { deletePost, getPostById } from "@/apis/requests";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Image from "next/image";
import { IComment, IPost } from "@/data/types";
import Button from "@/components/Button";
import LoadingComponent from "@/components/Loading";
import BackButton from "@/components/BackButton";
import { authContext } from "@/hooks/useAuth";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import CommentsSection from "@/components/CommentsSection";

function PostPage({ params }: { params: { id: string } }) {
	const router = useRouter();
	const [deleteLoading, setDeleteLoading] = useState(false);

	const queryClient = useQueryClient();

	const { isLoggedIn, userObj } = useContext(authContext);

	// Get the post id from the url
	// fetch Query
	const {
		data: post,
		isLoading,
		error,
	} = useQuery<IPost>(["post", params.id], () =>
		getPostById(params.id as string)
	);

	// Delete mutation
	const deleteMutation = useMutation(deletePost, {
		onMutate: () => {
			setDeleteLoading(true);
		},
		onSuccess: () => {
			console.log("success");
			toast.success("Post deleted successfully");

			// refetch posts
			queryClient.invalidateQueries("posts").then(() => {
				router.push("/"); // redirect to home page
			});
		},
		onError: () => {
			console.log("error");
			toast.error("Error deleting post");
		},
		onSettled: () => {
			setDeleteLoading(false);
		},
	});

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
				<div className="flex flex-row items-center gap-4 justify-between mb-5">
					<BackButton url="/" />
					{/* Edit and Delete operations can only be performed on your own posts */}
					{isLoggedIn && post.authorName === userObj?.displayName ? (
						<div className="flex flex-row items-center gap-4">
							<Button>Edit Post</Button>
							<Button
								style={{ backgroundColor: "#a10f18" }}
								loading={deleteLoading}
								onClick={() => {
									deleteMutation.mutate(post.id);
								}}
							>
								Delete Post
							</Button>
						</div>
					) : (
						<></>
					)}
				</div>
				<Image
					src={post.bannerImg ? post.bannerImg : "/images/placeholder.png"}
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
					<p className="text-[#a4634d] ">{`${post.authorName} ${
						post.authorName === userObj?.displayName ? "(YOU)" : ""
					}`}</p>
					<p className="ml-auto text-gray-400 text-sm">
						{new Date(post.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</p>
				</div>
				<p
					className="mb-20 blogContent"
					dangerouslySetInnerHTML={{ __html: post.content }}
				></p>
				<CommentsSection post={post} />
			</main>
		);

	return <></>;
}

export default PostPage;
