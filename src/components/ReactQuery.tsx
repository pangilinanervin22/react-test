import { faker } from "@faker-js/faker";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { deleteUser, getUsers, postUser, queryClient } from "../app/api";
import { IUser, User } from "../types.index";
import CardUser from "./CardUser";

export default function ReactQuery() {
	const [count, setCount] = useState(0);

	const [listUsers, setListUsers] = useState<IUser[]>([
		new User("Ervin", "male", ["item", "item"]),
		new User("Ian", "male", ["item", "item"]),
		new User("Meriel", "female", ["item", "item"]),
		new User("Andrei", "male", ["item", "item"]),
	]);

	const { data, refetch, isSuccess } = useQuery({
		queryKey: ["users"],
		queryFn: () => getUsers(),
	});

	const { mutate: mutatePost } = useMutation({
		mutationFn: (user: any) => postUser(user),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});

	const { mutate: mutateDelete } = useMutation({
		mutationFn: (id: number) => deleteUser(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});

	if (isSuccess) console.log(data);

	return (
		<>
			<div className="input_container">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<div className="card_container">
				{listUsers.map(({ name, gender, wishList }) => (
					<CardUser
						key={name}
						name={name}
						gender={gender}
						wishList={wishList}
					/>
				))}
			</div>

			<button
				onClick={() => {
					refetch();
				}}
			>
				<h1>get</h1>
			</button>

			<button
				onClick={() => {
					const temp = {
						name: faker.name.fullName(),
						age: faker.datatype.number({ min: 19, max: 25 }),
						gender: faker.name.sex(),
						isAdmin: false,
						wishList: "",
						password: "12345",
					};
					mutatePost(temp);
				}}
			>
				<h1>post</h1>
			</button>
			<button
				onClick={() => {
					mutateDelete(data.length - 2);
				}}
			>
				<h1>delete</h1>
			</button>
		</>
	);
}
