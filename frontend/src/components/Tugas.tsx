function Tugas() {
    return (
        
            <div className="tugas">
                <div className="text" id="date">
                    <span id="tanggal">28 Okt 2026</span>
                    <span id="waktu">10:00</span>
                </div>
                <div className="text" id="task">
                    <span id="judul">Projek Dasar Pemrograman</span><span className="details">See details</span>
                </div>
                <div className="text">
                    <span id="pin">&#9734;</span> 
                     {/* &#9733; filled star  */}
                </div>
                <button className="btn done">
                    DONE
                </button>
                <button className="btn edit">
                    EDIT
                </button>
                <button className="btn delete">
                    DELETE
                </button>
            </div>
        
    )
}

export default Tugas