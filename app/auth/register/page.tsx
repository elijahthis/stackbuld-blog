"use client";
import Button from "@/components/Button";
import InputComponent from "@/components/InputComponent";
import { authContext } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	User,
} from "firebase/auth";
import app, { auth } from "@/app/base";
import { toast } from "react-toastify";

const Register = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);

	const registerFunc = (email: string, password: string, fullName: string) => {
		if (window) {
			setLoading(true);
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					updateProfile(auth.currentUser as User, {
						displayName: fullName,
					}).then(() => {
						// Profile updated!
						// ...

						// Signed in
						const user = userCredential.user;
						// ...
						// console.log(user);
						setUserObj(user);
						setIsLoggedIn(true);

						toast.success("Registration successful");
						router.push("/");
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					toast.error(errorMessage);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	return (
		<div className="mt-12 lg:mx-[25vw]">
			<h1 className="text-2xl mb-4 text-center">Register</h1>
			<form
				className="flex flex-col items-stretch gap-4"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					registerFunc(
						e.currentTarget.email.value,
						e.currentTarget.password.value,
						e.currentTarget.fullName.value
					);
				}}
			>
				<InputComponent label="Full Name" name="fullName" type="text" />
				<InputComponent label="Email" name="email" type="email" />
				<InputComponent label="Password" name="password" type="password" />
				<Button
					type="submit"
					className="bg-white  p-2 rounded-2xl mt-3 "
					loading={loading}
					style={{ color: "#181a20" }}
				>
					Register
				</Button>
				<p className="text-center text-sm">
					Already have an account?{" "}
					<Link href="/auth/login" className="text-[#a4634d] ml-1">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
