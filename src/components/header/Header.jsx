import Tag from "../other/Tag"

function Header() {
	return (
		<header id="header-wrapper">
			<div className="logo-wrapper">
				<span>do</span>
				<span className="accent-text">//</span>
				<span>it</span>
			</div>
			<div className="tags-wrapper">
				<Tag text={"pending"} />
			</div>
		</header>
	);
}

export default Header;
