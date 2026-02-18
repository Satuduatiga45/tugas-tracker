import FilterTugas from "../components/FilterTugas";
import Header from "../components/Header";
import ListTugas from "../components/ListTugas";

function Dashboard() {
	return (
		<div className="container">
			<Header />
			<FilterTugas />
			<ListTugas />
		</div>
	);
}

export default Dashboard;
