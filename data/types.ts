export interface IPost {
	createdAt: string;
	bannerImg: string;
	title: string;
	content: string;
	updatedAt: string;
	authorName: string;
	authorAvatar: string;
	comments: [];
	id: string;
}

export interface IComment {
	createdAt: string;
	content: string;
	authorName: string;
	authorAvatar: string;
}
