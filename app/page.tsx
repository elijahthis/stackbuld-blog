import { getPosts } from "@/apis/requests";
import AllPosts from "@/components/AllPosts";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import { authContext } from "@/hooks/useAuth";
import Image from "next/image";
import { useContext } from "react";

export default async function Home() {
	const initialData = await getPosts();

	return (
		<main>
			<WelcomeMessage />
			<Banner />
			<div className="mb-12">
				<HomeSection title="Recent Posts" postList={initialData} />
			</div>
			<AllPosts title="All Posts" postList={initialData} />
		</main>
	);
}
