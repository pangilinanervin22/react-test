export interface IUser {
	name: string;
	gender: string;
	wishList: string[];
}

export class User implements IUser {
	name: string;
	gender: string;
	wishList: string[];

	constructor(name: string, gender: string, wishList: string[]) {
		this.name = name;
		this.gender = gender;
		this.wishList = wishList;
	}
}
