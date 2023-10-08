"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { authContext } from "@/hooks/useAuth";

export default function Providers({ children }: { children: React.ReactNode }) {
	// Create a client
	const [queryClient] = useState(() => new QueryClient());

	// auth state
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState({});

	return (
		<authContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, userObj, setUserObj }}
		>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</authContext.Provider>
	);
}
