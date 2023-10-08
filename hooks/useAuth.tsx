import { createContext, useContext, useState } from "react";

interface useAuthProps {
	isLoggedIn: boolean;
	setIsLoggedIn: (val: boolean) => void;
	userObj: any;
	setUserObj: (val: any) => void;
}

export const authContext = createContext<useAuthProps>({
	isLoggedIn: false,
	setIsLoggedIn: (val: boolean) => {},
	userObj: {},
	setUserObj: (val: any) => {},
});
