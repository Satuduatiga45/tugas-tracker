import { useState } from "react";
import Tugas from "./Tugas";
import { useSearchParams } from "react-router";

const items = [
	{
		id: 0,
		title: "Projek React",
		description:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
		date: "28 Okt 2026",
		time: "20:00",
		isCompleted: false,
	},
	{
		id: 1,
		title: "Projek JAVASCRIPT",
		description:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
		date: "28 Okt 2026",
		time: "20:00",
		isCompleted: false,
	},
	{
		id: 2,
		title: "Projek WOI",
		description:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
		date: "28 Okt 2026",
		time: "20:00",
		isCompleted: false,
	},
];

function ListTugas() {
	const [activeID, setActiveID] = useState<number>();
	const [, setIdViewDetailsParams] = useSearchParams();

	const handleViewDetails = (id: number) => {
		setIdViewDetailsParams({ idViewDetails: id.toString() });
		setActiveID(id);
	};

	return (
		<div className="list-tugas">
			{items.map(
				({ id, title, description, date, time, isCompleted }) => (
					<Tugas
						key={id}
						id={id}
						title={title}
						description={description}
						date={date}
						time={time}
						isCompleted={isCompleted}
						viewDetails={activeID === id}
						handleViewDetails={() => handleViewDetails(id)}
					/>
				),
			)}
		</div>
	);
}

export default ListTugas;
