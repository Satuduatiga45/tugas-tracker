import { useState } from "react";
import InputUser from "./InputUser";

interface HeaderProps {
	onTugasAdded(): void;
}

function Header(props: HeaderProps) {
	const [activeInputUser, setActiveInputUser] = useState(false);

	const handleInputUser = () => {
		setActiveInputUser(!activeInputUser);
	};

	return (
		<>
			<div className="header">
				<h1>TUGAS TRACKER</h1>
				<button onClick={handleInputUser}>+ Add Tugas</button>
			</div>
			{activeInputUser && (
				<InputUser
					header="New Tugas"
					handleBack={handleInputUser}
					onSuccess={props.onTugasAdded}
				/>
			)}
		</>
	);
}

export default Header;
