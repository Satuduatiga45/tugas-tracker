import { axiosInstance } from "../lib/axios";
import { useState } from "react";

export const useToggleIsCompleted = () => {
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const toggleIsCompleted = async (id: number) => {
		try {
			await axiosInstance.patch(`/done/${id}`);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		toggleIsCompletedError: fetchError,
		toggleIsCompletedloading: isLoading,
		toggleIsCompleted,
	};
};

export const useToggleIsPinned = () => {
	const [fetchError, setFetchError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const toggleIsPinned = async (id: number) => {
		try {
			await axiosInstance.patch(`/pin/${id}`);
		} catch (err) {
			setFetchError(err as string);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		toggleIsPinnedError: fetchError,
		toggleIsPinnedloading: isLoading,
		toggleIsPinned,
	};
};
