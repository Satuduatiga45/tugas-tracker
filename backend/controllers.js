const mysql = require("mysql");

// MySQL connection
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "tugas_tracker",
});

// connect to db
db.connect((err) => {
	if (err) {
		console.error(err.stack);
	}
	console.log(db.threadId);
});

// read
const queryGet =
	"SELECT id, title, description, DATE_FORMAT(date, '%Y-%m-%d') AS date, DATE_FORMAT(time, '%H:%i') AS time, is_pinned, is_completed FROM tugas_table ORDER BY CASE WHEN is_pinned THEN 1 ELSE 2 END ASC";

exports.getTugas = (req, res) => {
	db.query(queryGet, (err, result, fields) => {
		if (err) {
			return res.status(500).json({
				message: "tidak berhasil mengambil data dari database",
			});
		}
		res.json(result);
	});
};

// create
const queryPost =
	"INSERT INTO tugas_table (title, description, date, time) VALUES (?,?,?,?)";

exports.postTugas = (req, res) => {
	const { title, description, date, time } = req.body;

	db.query(queryPost, [title, description, date, time], (err, result) => {
		{
			if (err) {
				return res
					.status(400)
					.json({ message: "gagal menyimpan data" });
			}
			res.status(201).json({
				message: "berhasil menyimpan data",
				data: result,
			});
		}
	});
};

// delete
const queryDelete = "DELETE FROM tugas_table WHERE id = ?";

exports.deleteTugas = (req, res) => {
	const idTugas = req.params.id;
	db.query(queryDelete, [idTugas], (err) => {
		if (err) {
			return res.status(400).json({ message: "gagal menghapus data" });
		}
		res.status(204).json({ message: "berhasil menghapus data" });
	});
};

// update
const queryUpdate =
	"UPDATE tugas_table SET title = ?, description = ?, date = ?, time = ? WHERE id = ?";

exports.editTugas = (req, res) => {
	const { title, description, date, time } = req.body;
	const idTugas = req.params.id;

	db.query(
		queryUpdate,
		[title, description, date, time, idTugas],
		(err, result) => {
			{
				if (err) {
					return res
						.status(400)
						.json({ message: "gagal menyimpan data" });
				}
				res.status(200).json({
					message: "berhasil menyimpan data",
					data: result,
				});
			}
		},
	);
};

// toggle is_pinned
const queryToggleIsPinned =
	"UPDATE tugas_table SET is_pinned = NOT is_pinned WHERE id = ?";

exports.toggleIsPinned = (req, res) => {
	const idTugas = req.params.id;
	db.query(queryToggleIsPinned, [idTugas], (err, result) => {
		{
			if (err) {
				return res
					.status(400)
					.json({ message: "gagal menyimpan data" });
			}
			res.status(200).json({
				message: "berhasil menyimpan data",
				data: result,
			});
		}
	});
};

// toggle is_pinned
const queryToggleIsCompleted =
	"UPDATE tugas_table SET is_completed = NOT is_completed WHERE id = ?";

exports.toggleIsCompleted = (req, res) => {
	const idTugas = req.params.id;
	db.query(queryToggleIsCompleted, [idTugas], (err, result) => {
		{
			if (err) {
				return res
					.status(400)
					.json({ message: "gagal menyimpan data" });
			}
			res.status(200).json({
				message: "berhasil menyimpan data",
				data: result,
			});
		}
	});
};
