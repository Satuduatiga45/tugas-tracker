import { axiosInstance } from "../lib/axios";
import { useState } from "react";

interface TugasPayload {
	id: number;
	title: string;
	description: string;
	date: string;
	time: string;
}

export const useEditTugas = () => {
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const editTugas = async (data: TugasPayload) => {
		try {
			await axiosInstance.patch(`/${data.id}`, data);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		editError: fetchError,
		editloading: isLoading,
		editTugas,
	};
};
