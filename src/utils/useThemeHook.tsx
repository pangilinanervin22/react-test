import { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { useCallback, useMemo, useState } from "react";

// Create a theme instance.
export default function useThemeHook(): [Theme, () => void] {
	const [themeMode, setThemeMode] = useState<PaletteMode>("dark");

	const toggleMode = useCallback(() => {
		setThemeMode(themeMode === "dark" ? "light" : "dark");
	}, [themeMode]);

	const currentTheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,

					primary: {
						main: "#19857b",
					},
					secondary: {
						main: "#11357b",
					},
					error: {
						main: "#ff0000",
					},
				},

				components: {
					MuiButton: {
						styleOverrides: {
							root: {
								color: "whitesmoke",
							},
						},
						defaultProps: {
							size: "small",
						},
					},
				},

				typography: {
					fontWeightBold: "bolder",
					fontWeightRegular: "500",
					fontWeightLight: "normal",
					fontFamily:
						"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
				},
			}),
		[themeMode]
	);

	return [currentTheme, toggleMode];
}
