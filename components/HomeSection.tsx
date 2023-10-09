"use client";
import { getPosts } from "@/apis/requests";
import { IPost } from "@/data/types";
import { useQuery } from "react-query";
import PostPreview from "./PostPreview";

interface HomeSectionProps {
	title: string;
	postList: IPost[];
}

const HomeSection = ({ title, postList }: HomeSectionProps) => {
	// Query
	const { data } = useQuery<IPost[]>({
		queryKey: ["posts"],
		queryFn: getPosts,
		initialData: postList,
	});

	// console.log("postList", postList);

	// sort by date
	if (!data) return <></>;
	const sortedData = data.sort((a: IPost, b: IPost) => {
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	});

	return (
		<section className="mb-5">
			<h2 className="mb-4 text-xl">{title}</h2>
			<div className="w-full overflow-x-scroll no-scrollbar pb-3">
				<div className="flex flex-row items-stretch gap-3 w-max">
					{sortedData.slice(0, 10).map((item, ind) => (
						<PostPreview postData={item} key={ind} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
