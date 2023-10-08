export const ellipsisTruncation = (str: string, maxLength: number) => {
	if (str.length > maxLength) return str.slice(0, maxLength) + "...";
	else return str;
};

export const timeAgo = (date: string): string => {
	const currentDate = new Date();
	const inputDate = new Date(date);
	const timeDiff = currentDate.getTime() - inputDate.getTime();
	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `${years} yrs. ago`;
	} else if (months > 0) {
		return `${months} mo. ago`;
	} else if (days > 0) {
		if (days === 1) {
			return "yesterday";
		} else {
			return `${days} days ago`;
		}
	} else if (hours > 0) {
		return `${hours} hrs. ago`;
	} else if (minutes > 0) {
		return `${minutes} mins. ago`;
	} else {
		return `${seconds} secs. ago`;
	}
};
