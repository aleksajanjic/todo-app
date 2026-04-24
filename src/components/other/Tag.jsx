function Tag(props) {
	console.log("props", props);
	const { value, text, color } = props;

	return <div id="tags-wrapper">{text}</div>;
}

export default Tag;
