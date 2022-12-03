import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./app/api";
import MainNavBar from "./components/MainNavBar";
import MainReactRouter from "./components/MainReactRouter";
import useThemeHook from "./utils/useThemeHook";

function App() {
	const [theme, toggleMode] = useThemeHook();

	return (
		<>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<MainNavBar />
						<MainReactRouter />
					</ThemeProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
