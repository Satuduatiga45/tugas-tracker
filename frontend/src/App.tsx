import { Routes, Route } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
