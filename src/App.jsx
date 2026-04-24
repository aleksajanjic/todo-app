import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/header/Header";
import { supabase } from "./lib/supabase";
import Sidebar from "../src/components/other/Sidebar";
import ListContent from "../src/components/list/ListContent";
import Hamburger from "../src/components/other/Hamburger";

function App() {
	const [lists, setLists] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchLists = async () => {
			const { data, error } = await supabase.from("lists").select("*");
			if (!error) {
				setLists(data);
			}
		};
		fetchLists();
	}, []);

	return (
		<>
			<section id="center">
				<div className="hero">
					<img
						src={heroImg}
						className="base"
						width="170"
						height="179"
						alt=""
					/>
					<img
						src={reactLogo}
						className="framework"
						alt="React logo"
					/>
					<img src={viteLogo} className="vite" alt="Vite logo" />
				</div>
			</section>

			<Header />

			<div className={`menu-wrapper ${open ? "open" : ""}`}>
				<Hamburger open={open} setOpen={setOpen} />
				<Sidebar lists={lists} open={open} />
			</div>

			<ListContent />

			<section id="spacer"></section>
		</>
	);
}

export default App;
