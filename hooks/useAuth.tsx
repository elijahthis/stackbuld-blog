import { createContext, useContext, useState } from "react";

interface useAuthProps {
	isLoggedIn: boolean;
	setIsLoggedIn: (val: boolean) => void;
	userObj: any;
	setUserObj: (val: any) => void;
}

/**
 * An object representing the authentication context.
 * @typedef {Object} useAuthProps
 * @property {boolean} isLoggedIn - A boolean indicating whether the user is logged in or not.
 * @property {Function} setIsLoggedIn - A function to set the value of isLoggedIn.
 * @property {Object} userObj - An object representing the user.
 * @property {Function} setUserObj - A function to set the value of userObj.
 */

/**
 * A context object for the authentication state.
 * @type {React.Context<useAuthProps>}
 */

export const authContext = createContext<useAuthProps>({
	isLoggedIn: false,
	setIsLoggedIn: (val: boolean) => {},
	userObj: {},
	setUserObj: (val: any) => {},
});
