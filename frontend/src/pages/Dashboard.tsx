import FilterTugas from "../components/FilterTugas";
import Header from "../components/Header";
import ListTugas from "../components/ListTugas";
// import ViewDetails from "../components/ViewDetails";

// const details = {
// 	title: "Projek React",
// 	description:
// 		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
// 	date: "28 Okt 2026",
// 	time: "20:00",
// 	status: "In Progress",
// };

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
