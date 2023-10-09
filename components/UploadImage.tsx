"use client";
import React, { useState } from "react";
import Image from "next/image";

interface UploadImageProps {
	image: string;
	setImage: React.Dispatch<React.SetStateAction<string>>;
}

const UploadImage = ({ image, setImage }: UploadImageProps) => {
	const [loading, setLoading] = useState(false);

	const handleImageUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (file) {
			setLoading(true);
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "y6gny7th");
			try {
				const response = await fetch(
					"https://api.cloudinary.com/v1_1/dywp91yx7/image/upload",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();
				setImage(data.secure_url);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const file = event.dataTransfer.files?.[0];
		if (file) {
			setLoading(true);
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "your_cloudinary_upload_preset_name");
			try {
				const response = await fetch(
					"https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();
				setImage(data.secure_url);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			className="w-full h-96 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center"
		>
			{loading ? (
				<p>Uploading image...</p>
			) : (
				<>
					{image ? (
						<Image
							src={image}
							width={300}
							height={300}
							alt="banner"
							className="w-full h-full object-cover"
						/>
					) : (
						<label
							htmlFor="image-upload"
							className="w-full h-full cursor-pointer grid place-items-center"
						>
							Click or drag-and-drop to upload an image
						</label>
					)}
				</>
			)}
			<input
				type="file"
				id="image-upload"
				accept="image/*"
				onChange={handleImageUpload}
				style={{ display: "none" }}
			/>
		</div>
	);
};

export default UploadImage;
