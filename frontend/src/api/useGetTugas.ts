import { axiosInstance } from "../lib/axios";
import { useState } from "react";

interface TugasResponse {
	id: number;
	title: string;
	description: string;
	date: string;
	time: string;
	isPinned: boolean;
	isCompleted: boolean;
}

export const useGetTugas = () => {
	const [count, setCount] = useState<number[]>([0, 0, 0, 0]);
	const [tugas, setTugas] = useState<TugasResponse[]>([]);
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getTugas = async (filter: string) => {
		try {
			const response = await axiosInstance.get<TugasResponse[]>("/");

			const dataInProgress = response.data.filter((tugas) => {
				const datetime = new Date(`${tugas.date}T${tugas.time}`);
				return !tugas.isCompleted && datetime >= new Date();
			});
			const dataOverdue = response.data.filter((tugas) => {
				const datetime = new Date(`${tugas.date}T${tugas.time}`);
				return !tugas.isCompleted && datetime < new Date();
			});
			const dataCompleted = response.data.filter(
				(tugas) => tugas.isCompleted,
			);

			switch (filter) {
				case "all":
					setTugas(response.data);
					break;
				case "in-progress":
					setTugas(dataInProgress);
					break;
				case "overdue":
					setTugas(dataOverdue);
					break;
				case "completed":
					setTugas(dataCompleted);
					break;
				default:
					setTugas(response.data);
					break;
			}
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	const countTugas = () => {
		axiosInstance
			.get<TugasResponse[]>("/")
			.then((response) => {
				const dataInProgress = response.data.filter((tugas) => {
					const datetime = new Date(`${tugas.date}T${tugas.time}`);
					return !tugas.isCompleted && datetime >= new Date();
				});
				const dataOverdue = response.data.filter((tugas) => {
					const datetime = new Date(`${tugas.date}T${tugas.time}`);
					return !tugas.isCompleted && datetime < new Date();
				});
				const dataCompleted = response.data.filter(
					(tugas) => tugas.isCompleted,
				);

				setCount([
					response.data.length || 0,
					dataInProgress.length || 0,
					dataOverdue.length || 0,
					dataCompleted.length || 0,
				]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return {
		data: tugas,
		count: count,
		error: fetchError,
		loading: isLoading,
		getTugas,
		countTugas,
	};
};
