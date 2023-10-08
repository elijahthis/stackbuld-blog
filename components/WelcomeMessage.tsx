"use client";
import { authContext } from "@/hooks/useAuth";
import { useContext } from "react";

const WelcomeMessage = () => {
	const { isLoggedIn, setIsLoggedIn, userObj, setUserObj } =
		useContext(authContext);

	return (
		<h2 className="text-3xl mb-4">
			Welcome{isLoggedIn ? ` ${userObj?.displayName}` : ""}!
		</h2>
	);
};

export default WelcomeMessage;
