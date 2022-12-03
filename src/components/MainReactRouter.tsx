import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
import AddUserPage from "./Pages/AddUserPage";
import PickRandomUser from "./Pages/PickRandomUser";

// const router = createBrowserRouter(
// 	createRoutesFromElements(<Route path="/" element={<OtherPage />}>

// 	</Route>)
// );

// const router = createBrowserRouter([
// 	{
// 		path: "/*",
// 		errorElement: <h1>Not Found</h1>,
// 		element: <AddUserPage />,
// 	},
// 	{
// 		path: "/pick",
// 		element: <PickRandomUser />,
// 	},
// ]);

export default function MainReactRouter() {
	return (
		<Routes>
			<Route path="/pick" element={<PickRandomUser />} />
			<Route path="/" element={<AddUserPage />} />
			<Route path="*" element={<h1> Not Found</h1>} />
		</Routes>
	);
}
