export interface IComment {
	id: string;
	createdAt: string;
	content: string;
	authorName: string;
	authorAvatar: string;
}

export interface IPost {
	createdAt: string;
	bannerImg: string;
	title: string;
	content: string;
	updatedAt: string;
	authorName: string;
	authorAvatar: string;
	comments: IComment[];
	id: string;
}
