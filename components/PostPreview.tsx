"use client";
import { ellipsisTruncation, timeAgo } from "@/data/helpers";
import { IPost } from "@/data/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PostPreview = ({ postData }: { postData: IPost }) => {
	const router = useRouter();

	return (
		<div
			className="cursor-pointer"
			onClick={() => router.push(`/post/${postData.id}`)}
		>
			<div className="overflow-hidden ">
				<Image
					src={postData.bannerImg}
					alt={postData.title + "image"}
					width={200}
					height={200}
					className="rounded-lg mb-3 w-full h-48 object-cover hover:opacity-70 transition-all duration-300 hover:scale-105 "
				/>
			</div>

			<p className="font-medium mb-1">
				<span className="inline lg:hidden">
					{ellipsisTruncation(postData.title, 30)}
				</span>
				<span className="hidden lg:inline">
					{ellipsisTruncation(postData.title, 40)}
				</span>
			</p>
			<div className="flex flex-row items-center gap-2 text-xs">
				<Image
					src={postData.authorAvatar}
					alt={postData.authorName + "avatar"}
					width={20}
					height={20}
					className="rounded-full inline-block "
				/>
				<p className=" inline-block text-[#a4634d] ">{postData.authorName}</p>
				<p className="ml-auto text-gray-400">{timeAgo(postData.createdAt)}</p>
			</div>
		</div>
	);
};

export default PostPreview;
