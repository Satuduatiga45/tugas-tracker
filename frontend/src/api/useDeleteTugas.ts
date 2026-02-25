import { axiosInstance } from "../lib/axios";
import { useState } from "react";

export const useDeleteTugas = () => {
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const deleteTugas = async (id: number) => {
		try {
			await axiosInstance.delete(`/${id}`);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		deleteError: fetchError,
		deleteloading: isLoading,
		deleteTugas,
	};
};
