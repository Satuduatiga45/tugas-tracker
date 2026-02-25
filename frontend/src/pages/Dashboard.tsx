import { useState } from "react";
import FilterTugas from "../components/FilterTugas";
import Header from "../components/Header";
import ListTugas from "../components/ListTugas";

function Dashboard() {
	// state refresh data
	const [refreshKey, setRefreshKey] = useState(0);
	const handleRefresh = () => {
		setRefreshKey((prev) => prev + 1);
	};

	return (
		<div className="container">
			<Header onTugasAdded={handleRefresh} />
			<FilterTugas />
			<ListTugas refreshKey={refreshKey} />
		</div>
	);
}

export default Dashboard;
