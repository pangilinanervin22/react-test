import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useStoreMain } from "../../app/store";

export default function AddUserPage() {
	const [input, setInput] = useState("");
	const list = useStoreMain((state) => state.user);
	const [addUser, deleteUser, deleteUserTop] = useStoreMain((state) => [
		state.addUser,
		state.deleteUser,
		state.deleteUserTop,
	]);

	useEffect(() => {
		console.log(list);
	}, [list]);

	return (
		<>
			<Paper variant="outlined" sx={{ padding: "10px" }}>
				<Box
					sx={{
						display: "flex",
					}}
				>
					<TextField
						label={"wew"}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button
						variant="contained"
						onClick={() => {
							addUser({ name: input, gender: "male" });
						}}
					>
						Add
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							deleteUserTop();
							redirect("/pick");
						}}
					>
						Delete
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							deleteUser({ name: input, gender: "male" });
						}}
					>
						PickDelete
					</Button>
				</Box>

				<Box marginTop={2}>
					{list.map((item) => (
						<Typography
							key={item.name}
							sx={{ bgcolor: "Highlight", pl: "10px" }}
						>
							{item.name}
						</Typography>
					))}
				</Box>
			</Paper>
		</>
	);
}
