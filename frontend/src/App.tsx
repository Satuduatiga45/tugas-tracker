import FilterTugas from "./components/FilterTugas";
import Header from "./components/Header";
import ListTugas from "./components/ListTugas";

import "./App.css";

function App() {
	return (
		<div className="container">
			<Header />
			<FilterTugas />
			<ListTugas />
		</div>
	);
}

export default App;
