import './ourTeam.css'
import profile from '../../assets/pictures/profile.jpg'
import profile1 from '../../assets/pictures/profile2.jpg'
import profile2 from '../../assets/pictures/profile3.jpg'
import profile3 from '../../assets/pictures/profile4.jpg'

export function OurTeam(){
    const valueTeam=[
        {name:"Ralph Edwards", function:"Founder", profile: profile, linkedin:"#", facebook:"#", instagram:"#", telegram:"#"},
        {name:"Jason Smith", function:"Co-Founder", profile: profile1, linkedin:"#", facebook:"#", instagram:"#", telegram:"#"},
        {name:"Tony Wings", function:"Web Designer", profile: profile2, linkedin:"#", facebook:"#", instagram:"#", telegram:"#"},
        {name:"Esther Howard", function:"Project Manager", profile: profile3, linkedin:"#", facebook:"#", instagram:"#", telegram:"#"}
    ]
    return(
        <div className="container-ourteam">
            <h6 className='title-ourTeam'>OUR TEAM</h6>
            <div className="container-cards-team">
                {
                    valueTeam.map((value, idxT) => (
                        <div className="cards-about-slide" key={idxT}>
                            <img src={value.profile} alt="" />
                            <h5 className='title-team'>{value.name}</h5>
                            <p className='p-team'>{value.function}</p>
                            <div className='social-icons'>
                                <a href={value.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href={value.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href={value.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href={value.telegram} target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
