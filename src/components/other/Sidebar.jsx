import ListItem from "../list/ListItem";

function Sidebar(props) {
	const { lists, open } = props;

	return (
		<aside id="sidebar-wrapper" className={open ? "open" : ""}>
			{lists.map((list) => (
				<ListItem key={list.id} list={list} open={open} />
			))}
		</aside>
	);
}

export default Sidebar;
