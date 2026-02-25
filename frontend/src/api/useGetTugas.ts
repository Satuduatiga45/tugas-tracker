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
	const [tugas, setTugas] = useState<TugasResponse[]>([]);
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getTugas = async () => {
		try {
			const response = await axiosInstance.get<TugasResponse[]>("/");
			setTugas(response.data);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		data: tugas,
		error: fetchError,
		loading: isLoading,
		getTugas,
	};
};
