import { useState, useEffect } from "react";

export const useStatus = (date: string, time: string, isCompleted: boolean) => {
	const [status, setStatus] = useState<string>("In Progress");
	useEffect(() => {
		const checkStatus = () => {
			const isoString = `${date.replace(/:/g, "-")}T${time}:00`;
			const tugasDateTime = new Date(isoString);
			const currentDateTime = new Date();

			if (isCompleted) {
				setStatus("Completed");
			} else if (currentDateTime > tugasDateTime) {
				setStatus("Overdue");
			} else {
				setStatus("In Progress");
			}
		};

		checkStatus();

		const interval = setInterval(checkStatus, 60000); // interval 1 menit

		return () => clearInterval(interval);
	}, [date, time, isCompleted]);

	return status;
};
