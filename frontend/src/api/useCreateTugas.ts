import { axiosInstance } from "../lib/axios";
import { useState } from "react";

interface TugasPayload {
	title: string;
	description: string;
	date: string;
	time: string;
}

export const useCreateTugas = () => {
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const createTugas = async (data: TugasPayload) => {
		try {
			await axiosInstance.post("/", data);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		createError: fetchError,
		createLoading: isLoading,
		createTugas,
	};
};
