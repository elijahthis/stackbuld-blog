import { getPosts } from "@/apis/requests";
import AllPosts from "@/components/AllPosts";
import Banner from "@/components/Banner";
import CreateButton from "@/components/CreateButton";
import HomeSection from "@/components/HomeSection";
import WelcomeMessage from "@/components/WelcomeMessage";

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
			<CreateButton />
		</main>
	);
}
