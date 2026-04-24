function Hamburger(props) {
	const { open, setOpen } = props;

	return (
		<div className={`hamburger ${open ? "open" : ""}`}>
			<button
				type="button"
				className="hamburger-btn"
				aria-label={open ? "Close menu" : "Open menu"}
				aria-expanded={open}
				onClick={() => setOpen(!open)}
			>
				<span />
				<span />
				<span />
			</button>
		</div>
	);
}

export default Hamburger;
