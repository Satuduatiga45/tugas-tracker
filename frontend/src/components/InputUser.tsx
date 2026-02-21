function InputUser() {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
	const yyyy = today.getFullYear();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const dateToday = `${yyyy}-${mm}-${dd}`;
	const timeToday = `${hour}:${minute}`;

	return (
		<div className="edit hide">
			<div className="background-disable"></div>
			<div className="input-user">
				<h1>New Tugas</h1>
				<form>
					<div className="input">
						<label htmlFor="form-title">Title</label>
						<input
							type="text"
							placeholder="Title"
							name="title"
							id="form-title"
							required
						/>
					</div>
					<div className="input">
						<label htmlFor="form-description">Description</label>
						<textarea
							name="description"
							id="form-description"
							placeholder="Description"
						></textarea>
					</div>
					<div className="input">
						<label htmlFor="form-date">Due</label>
						<div className="datetime">
							<input
								type="date"
								name="date"
								id="form-date"
								min={dateToday}
								required
							/>
							<input
								type="time"
								name="time"
								id="form-time"
								min={timeToday}
								required
							/>
						</div>
					</div>

					<div className="form-button">
						<button type="button" id="cancel">
							Cancel
						</button>
						<button type="submit" id="submit">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default InputUser;
