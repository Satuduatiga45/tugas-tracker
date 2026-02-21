import FilterTugas from "../components/FilterTugas";
import Header from "../components/Header";
import InputUser from "../components/InputUser";
import ListTugas from "../components/ListTugas";
// import ViewDetails from "../components/ViewDetails";

function Dashboard() {
	return (
		<div className="container">
			<Header />
			<FilterTugas />
			<ListTugas />

			{/* test */}
			<InputUser />
		</div>
	);
}

export default Dashboard;
