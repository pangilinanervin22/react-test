import create from "zustand";
import { persist } from "zustand/middleware";

// interface BearState {
// 	count: number;
// 	user: { name: string; age: number };
// 	isAdmin: boolean;
// 	inc: (by: number) => void;
// 	changeUser: (by: number) => void;
// 	changeAdmin: () => void;
// }

// const store = create<BearState>()((set) => ({
// 	count: 0,
// 	isAdmin: true,
// 	user: { name: "ervin", age: 12 },
// 	inc: (number) => set((state) => ({ count: state.count + number })),

// 	changeAdmin: () => set((state) => ({ isAdmin: !state.isAdmin })),
// 	changeUser: (number) =>
// 		set((state) => ({
// 			user: { name: "ervin", age: state.user.age + number },
// 		})),
// }));

export type User = {
	name: string;
	gender: "male" | "female";
};

interface BearState {
	count: number;
	user: User[];
	isAdmin: boolean;
	inc: (by: number) => void;
	deleteUser: (by: User) => void;
	addUser: (by: User) => void;
	deleteUserTop: () => void;
}

const store = create<BearState>()(
	persist((set, get) => ({
		count: 0,
		isAdmin: true,
		user: [],
		inc: (number) => set((state) => ({ count: state.count + number })),

		addUser: (input: User) =>
			set((state) => ({
				user: [...state.user, input],
			})),

		deleteUser: (input: User) =>
			set((state) => ({
				user: state.user.filter((item) => item.name !== input.name),
			})),

		deleteUserTop: () => {
			const temp = [...get().user];
			temp.pop();

			set(() => ({
				user: [...temp],
			}));
		},
	}))
);

export const useStoreMain = store;
