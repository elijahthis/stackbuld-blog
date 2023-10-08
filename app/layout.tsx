import "./globals.scss";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Providers from "./providers";
import Header from "@/components/Header";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "StackBuld Blog",
	description: "Catch up on your favorite articles and authors!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Providers>
					<Header />
					<div className="px-4 lg:px-28 py-6 lg:py-14 mt-[76px] lg:mt-[80px] ">
						{children}
					</div>
				</Providers>
				<ToastContainer
					position="bottom-center"
					// autoClose={false}
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover={true}
					transition={Zoom}
				/>
			</body>
		</html>
	);
}
