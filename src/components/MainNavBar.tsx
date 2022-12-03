import { Box, Button } from "@mui/material";
import { Link, redirect } from "react-router-dom";

export default function MainNavBar() {
	return (
		<>
			<h1>Hello</h1>
			<Box>
				<Link to="/">HOME</Link>
				<Link to="/pick">PICK</Link>
			</Box>
		</>
	);
}
