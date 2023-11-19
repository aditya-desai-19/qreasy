const useCurrentTheme = () => {
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
	const currentTheme = isDarkTheme.matches ? "dark" : "light";
	return currentTheme;
};

export default useCurrentTheme;
