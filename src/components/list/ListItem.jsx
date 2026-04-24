function ListItem(props) {
	const { list, open } = props;

	return (
		<button type="button" className="list-item-wrapper">
			<span className="list-item-icon" aria-hidden="true" />
			<span className={`list-item-label ${open ? "show" : ""}`}>{list.name}</span>
		</button>
	);
}

export default ListItem;
