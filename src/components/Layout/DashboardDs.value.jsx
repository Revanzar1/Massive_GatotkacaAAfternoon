import React, { useState } from 'react'; 
import { 
    JadwalContainer, 
    CardContainer 
} from "../../styles/DashboardDs.styled"; 
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2"; 
import Card1Img from "../../assets/dosen-3.png"; 
import Card2Img from "../../assets/dosen-2.png"; 
import Card3Img from "../../assets/dosen-1.png"; 
import { FlexContainer } from "../../styles/Global.styled"; 
 
const DashboardV = () => { 
    
    const [statusButtons, setStatusButtons] = useState(['Selesai', 'Selesai', 'Belum', 'Belum']); 
 
 
    const toggleStatus = (index) => { 
        const newStatusButtons = [...statusButtons]; 
        newStatusButtons[index] = newStatusButtons[index] === 'Selesai' ? 'Belum' : 'Selesai'; 
        setStatusButtons(newStatusButtons); 
    }; 
 
    return ( 
        <FlexContainer direction="column" gap="2rem"> 
            <CardContainer> 
                <div className="dashboard-details"> 
                    <div className="card-boards"> 
                        <div className="card-board"> 
                            <div className="scroll"> 
                                <div className="sc-left"> 
                                    <HiArrowLeftCircle /> 
                                </div> 
                            </div> 
                            <div className="card-board-img-1"> 
                                <img src={Card1Img} alt="img" /> 
                            </div> 
                            <div className="card-board-img-2"> 
                                <img src={Card2Img} alt="img" /> 
                            </div> 
                            <div className="card-board-img-3"> 
                                <img src={Card3Img} alt="img" /> 
                            </div> 
                            <div className="scroll"> 
                                <div className="sc-right"> 
                                    <HiArrowRightCircle /> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </CardContainer> 
            <JadwalContainer> 
                <div className="jadwal"> 
                    <h1>Jadwal Mengajar Hari Ini</h1> 
                    <div className="jadwal-details"> 
                        <div className="mata-kuliah"> 
                            <span>Manajemen Strategi</span> 
                            <span>Manajemen Bisnis</span> 
                            <span>Manajemen Terapan</span> 
                            <span>Manajemen Bisnis Baru</span> 
                        </div> 
                        <div className="jam"> 
                            <span>09.00 - 11.00</span> 
                            <span>11.00 - 13.00</span> 
                            <span>11.00 - 13.00</span> 
                            <span>11.00 - 13.00</span> 
                        </div> 
                        <div className="lokasi"> 
                            <span>BD/K3-4G</span> 
                            <span>Labkom</span> 
                            <span>Labkom</span> 
                            <span>Labkom</span> 
                        </div> 
                        <div className="button"> 
                            {statusButtons.map((status, index) => ( 
                                <span key={index}> 
                                    <button className={status === 'Belum' ? 'btn-off' : 'btn-on'} onClick={() => toggleStatus(index)}> 
                                        {status} 
                                    </button> 
                                </span> 
                            ))} 
                        </div> 
                        <div className="else"> 
                            <span> 
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="19"
                                    height="5" 
                                    viewBox="0 0 19 5" 
                                    className="elses"> 
                                    <rect width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="7" width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="14" width="5" height="5" rx="5" fill="#" /> 
                                </svg> 
                            </span> 
                            <span> 
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="19" 
                                    height="5" 
                                    viewBox="0 0 19 5" 
                                    className="elses"> 
                                    <rect width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="7" width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="14" width="5" height="5" rx="5" fill="#" /> 
                                </svg> 
                            </span> 
                            <span> 
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="19" 
                                    height="5" 
                                    viewBox="0 0 19 5" 
                                    className="elses"> 
                                    <rect width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="7" width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="14" width="5" height="5" rx="5" fill="#" /> 
                                </svg> 
                            </span> 
                            <span> 
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="19" 
                                    height="5" 
                                    viewBox="0 0 19 5" 
                                    className="elses"> 
                                    <rect width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="7" width="5" height="5" rx="5" fill="#" /> 
                                    <rect x="14" width="5" height="5" rx="5" fill="#" /> 
                                </svg> 
                            </span> 
                        </div> 
                    </div> 
                </div> 
            </JadwalContainer> 
        </FlexContainer> 
    ); 
}; 
 
export default DashboardV;