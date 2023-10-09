"use client";
import InputComponent from "@/components/InputComponent";
import Link from "next/link";
import app, { auth } from "../../base";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	User,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useContext, useState } from "react";
import { authContext } from "@/hooks/useAuth";

const Login = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);

	const loginFunc = (email: string, password: string) => {
		if (window) {
			setLoading(true);
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
					// console.log(user);
					setUserObj(user);
					setIsLoggedIn(true);

					toast.success("Login successful");
					router.push("/");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					toast.error("Invalid email or password");
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	return (
		<div className="mt-12 lg:mx-[25vw]">
			<h1 className="text-2xl mb-4 text-center">Login</h1>
			<form
				className="flex flex-col items-stretch gap-4 "
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					loginFunc(
						e.currentTarget.email.value,
						e.currentTarget.password.value
					);
				}}
			>
				<InputComponent label="Email" name="email" type="email" />
				<InputComponent label="Password" name="password" type="password" />
				<Button
					type="submit"
					className="bg-white  p-2 rounded-2xl mt-3 "
					loading={loading}
					style={{ color: "#181a20" }}
				>
					Login
				</Button>
				<p className="text-center text-sm">
					Don&apos;t have an account?{" "}
					<Link href="/auth/register" className="text-[#a4634d] ml-1">
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
