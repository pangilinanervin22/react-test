import { IUser } from "../types.index";

export default function CardUser({ name, gender, wishList }: IUser) {
	return (
		<>
			<div className=" card_user ">
				<img
					src="https://cdn-icons-png.flaticon.com/512/214/214305.png"
					alt="gift"
				/>
			</div>
		</>
	);
}
