"use client";
import Link from "next/link";
import Button from "./Button";
import { useContext } from "react";
import { authContext } from "@/hooks/useAuth";

const Header = () => {
	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);

	return (
		<header className="bg-white text-[#181a20] py-5 px-4 lg:px-28 fixed top-0 left-0 w-full z-30 flex flex-row items-center justify-between ">
			<Link href="/" className="font-bold text-base lg:text-2xl ">
				StackBuld
			</Link>
			{isLoggedIn ? (
				<Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
			) : (
				<Link href="/auth/login">
					<Button>Login</Button>
				</Link>
			)}
		</header>
	);
};

export default Header;
