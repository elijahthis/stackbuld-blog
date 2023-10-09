"use client";
import { getPostById } from "@/apis/requests";
import CreateEdit from "@/components/CreateEdit";
import LoadingComponent from "@/components/Loading";
import { IPost } from "@/data/types";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

const EditPostPage = ({ params }: { params: { id: string } }) => {
	const router = useRouter();

	// fetch Query
	const {
		data: post,
		isLoading,
		error,
	} = useQuery<IPost>(["post", params.id], () =>
		getPostById(params.id as string)
	);

	if (error) {
		router.back();
	}

	// loading state
	if (isLoading) {
		return <LoadingComponent />;
	}

	return <CreateEdit edit={true} post={post} />;
};

export default EditPostPage;
