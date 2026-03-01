import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateTugas } from "../api/useCreateTugas";
import { useEditTugas } from "../api/useEditTugas";

interface InputUserProps {
	header: string;
	id?: number;
	title?: string;
	description?: string;
	date?: string;
	time?: string;
	handleBack(): void;
	onSuccess(): void;
}

const today = new Date();
const tugasFormSchema = z
	.object({
		title: z.string().min(1, {
			message: "Title must not be empty.",
		}),
		description: z.string(),
		date: z
			.string()
			.min(1, {
				message: "Date or time must not be empty.",
			})
			.refine(
				(date) => {
					const selectedDate = new Date(date);
					return selectedDate >= today;
				},
				{
					message: `Date must be ${today.toISOString().split("T")[0].split("-").reverse().join("/")} or later.`,
				},
			),
		time: z.string().min(1, {
			message: "Date or time must not be empty.",
		}),
	})
	.refine(
		(data) => {
			const selectedDateTime = new Date(`${data.date}T${data.time}`);
			return selectedDateTime >= new Date();
		},
		{
			message: "Time must be in the future.",
			path: ["time"], // Menampilkan error di bawah input time
		},
	);
type TugasFormSchema = z.infer<typeof tugasFormSchema>;

function InputUser(props: InputUserProps) {
	const form = useForm<TugasFormSchema>({
		resolver: zodResolver(tugasFormSchema),
	});

	const { createTugas, createError } = useCreateTugas();
	const { editTugas, editError } = useEditTugas();

	const handleSubmit = () => {
		if (props.header === "New Tugas") {
			createTugas({
				title: form.getValues("title"),
				description: form.getValues("description"),
				date: form.getValues("date"),
				time: form.getValues("time"),
			});
		}
		if (props.header === "Edit Tugas") {
			if (!props.id) return;
			editTugas({
				id: props.id,
				title: form.getValues("title"),
				description: form.getValues("description"),
				date: form.getValues("date"),
				time: form.getValues("time"),
			});
		}
		props.onSuccess();
		props.handleBack();
	};

	return (
		<>
			<div className="background-disable"></div>
			<div className="input-user">
				<h1>{props.header}</h1>
				<form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
					<div className="input">
						<label htmlFor="form-title">Title</label>
						<input
							type="text"
							placeholder="Title"
							id="form-title"
							defaultValue={props.title}
							{...form.register("title")}
						/>
						<span className="error">
							{form.formState.errors.title?.message}
						</span>
					</div>
					<div className="input">
						<label htmlFor="form-description">Description</label>
						<textarea
							id="form-description"
							placeholder="Description"
							defaultValue={props.description}
							{...form.register("description")}
						></textarea>
					</div>
					<div className="input">
						<label htmlFor="form-date">Due</label>
						<div className="datetime">
							<input
								type="date"
								id="form-date"
								defaultValue={props.date}
								min={today.toISOString().split("T")[0]}
								{...form.register("date")}
							/>
							<input
								type="time"
								id="form-time"
								defaultValue={props.time}
								{...form.register("time")}
							/>
						</div>
						<span className="error">
							{form.formState.errors.date?.message ||
								form.formState.errors.time?.message}
						</span>
					</div>

					<div className="form-button">
						<button
							type="button"
							id="cancel"
							onClick={props.handleBack}
						>
							Cancel
						</button>
						<button type="submit" id="submit">
							Save
						</button>
					</div>
				</form>
			</div>
			{createError && alert(createError)}
			{editError && alert(editError)}
		</>
	);
}

export default InputUser;
