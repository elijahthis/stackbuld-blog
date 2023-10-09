"use client";
import { IComment, IPost } from "@/data/types";
import EmptyState from "./EmptyState";
import { useContext, useState } from "react";
import { authContext } from "@/hooks/useAuth";
import InputComponent from "./InputComponent";
import Button from "./Button";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "@/apis/requests";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { randomBytes } from "crypto";
import Image from "next/image";
import { timeAgo } from "@/data/helpers";

const CommentsSection = ({ post }: { post: IPost }) => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const { isLoggedIn, userObj } = useContext(authContext);
	const [editLoading, setEditLoading] = useState(false);
	const [commentBody, setCommentBody] = useState("");

	// edit post mutation
	const editMutation = useMutation(updatePost, {
		onMutate: () => {
			setEditLoading(true);
		},
		onSuccess: () => {
			console.log("success");
			toast.success("Comment added successfully");

			// refetch posts
			queryClient.invalidateQueries(["post", post.id]).then(() => {
				// router.push("/"); // redirect to home page
			});
			setCommentBody("");
		},
		onError: () => {
			console.log("error");
			toast.error("Error adding comment");
		},
		onSettled: () => {
			setEditLoading(false);
		},
	});

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (commentBody !== "") {
			const newComment: IComment = {
				id: randomBytes(16).toString("hex"),
				createdAt: new Date().toISOString(),
				content: commentBody,
				authorName: userObj?.displayName,
				authorAvatar: `https://ui-avatars.com/api/?name=${userObj?.displayName}`,
			};

			editMutation.mutate({
				...post,
				comments: [...post.comments, newComment],
			});
		}
	};

	return (
		<div className="border-t border-gray-600 py-6">
			<h2 className="text-xl lg:text-2xl mb-5">Comments</h2>
			<div>
				{post.comments.length === 0 ? (
					<EmptyState message="No comments yet.." />
				) : (
					<div className="mb-8 flex flex-col items-stretch gap-5">
						{post.comments?.map((item: IComment, ind: number) => (
							<CommentItem commentItem={item} key={ind} />
						))}
					</div>
				)}
				<div>
					{!isLoggedIn ? (
						<EmptyState message="Please log in to comment " />
					) : (
						<form
							action=""
							className="flex flex-col items-stretch gap-4"
							onSubmit={submitHandler}
						>
							<textarea
								name="commentBody"
								id=""
								cols={30}
								rows={5}
								className="bg-transparent border border-[#a4634d] px-2 py-1 rounded-lg outline-none"
								value={commentBody}
								onChange={(e) => setCommentBody(e.target.value)}
							></textarea>
							<Button type="submit" loading={editLoading}>
								Comment
							</Button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default CommentsSection;

const CommentItem = ({ commentItem }: { commentItem: IComment }) => (
	<div className="flex flex-col items-stretch gap-1">
		<div className="flex flex-row items-center gap-3 mb-1">
			<Image
				src={commentItem.authorAvatar}
				width={20}
				height={20}
				alt={commentItem.authorName}
				className="max-w-[20px] max-h-[20px] rounded-full overflow-hidden"
			/>
			<p>{commentItem.authorName}</p>
		</div>
		<p className="text-gray-400">{commentItem.content}</p>
		<p className="text-xs lg:text-sm text-gray-500">
			{timeAgo(commentItem.createdAt)}
		</p>
	</div>
);
