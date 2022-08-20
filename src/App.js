import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./lib/UserContext";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";


function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SearchPage />} />
					<Route path="/Profile" exact element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;