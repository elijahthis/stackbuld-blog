"use client";
import { useContext } from "react";
import Button from "./Button";
import { authContext } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CreateButton = () => {
	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);
	const router = useRouter();

	return (
		<Button
			className="fixed bottom-10 right-4 lg:right-28"
			onClick={() => {
				if (isLoggedIn) router.push("/post/create");
				else {
					toast.error("You must be logged in to create a post");
					router.push("/auth/login");
				}
			}}
		>
			Create Post
		</Button>
	);
};

export default CreateButton;
