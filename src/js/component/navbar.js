
import { Link } from "react-router-dom";
import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		variant: "dark",
		bg: "transparent",
		shadow: null,
	});
	const listenScrollEvent = (e) => {
		if (window.scrollY > 50) {
			
			setState({ bg: "transparent", shadow: null });
		} else {

			setState({ bg: "dark", shadow: "shadow" });
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
	}, []);

	return (
		<nav
			className={`navbar mb-5 navbar-expand-lg  bg-${state.bg} fixed-top ${!!state.shadow ? state.shadow : ""
				}`}
		>

			<Link className="navbar-brand ms-5" to="/">
				<img className="logo" src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" />
			</Link>


		</nav>
	);
};
