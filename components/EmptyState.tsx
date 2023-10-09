/**
 * A component that displays a message when there is no content to show.
 * @param message - An optional string message to display. If not provided, a default message will be shown.
 */

const EmptyState = ({ message }: { message?: string }) => {
	return (
		<div className="py-10 text-center">
			<p>{message ? message : "Nothing to see here"}</p>
		</div>
	);
};

export default EmptyState;
