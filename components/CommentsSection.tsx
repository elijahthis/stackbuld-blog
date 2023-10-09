import { IComment, IPost } from "@/data/types";
import EmptyState from "./EmptyState";

const CommentsSection = ({ post }: { post: IPost }) => {
	return (
		<div>
			<h2 className="text-xl lg:text-2xl">Comments</h2>
			<div>
				{post.comments.length === 0 ? (
					<EmptyState />
				) : (
					post.comments?.map((item: IComment) => <p></p>)
				)}
			</div>
		</div>
	);
};

export default CommentsSection;
