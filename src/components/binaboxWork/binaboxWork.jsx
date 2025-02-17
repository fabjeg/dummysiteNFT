import './binaboxWork.css';
import logo from '../../assets/logo/c.d.svg';
import logo2 from '../../assets/logo/work.svg';
import logo3 from '../../assets/logo/peggi.svg';
import logo4 from '../../assets/logo/pink.svg';

export function BinaboxWork() {
    const valueCards = [
        { title: 'CONNECT THE WALLET', txt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', logo: logo },
        { title: 'CONNECT THE WALLET', txt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', logo: logo2 },
        { title: 'CONNECT THE WALLET', txt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', logo: logo3 },
        { title: 'CONNECT THE WALLET', txt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', logo: logo4 }
    ];

    return (
        <div className="binabox-work-container">
            <h6 className="title-h6">HOW TO <span className='span-h5'>BINABOX</span> WORK</h6>
            <div className="container-cards">
                {valueCards.map((value, indexV) => (
                    <div className="cards-about-slide" key={indexV}>
                        <div className="logo-image">
                        <img src={value.logo} alt={value.title}  />
                        </div>
                        <h5 className='h5-title'>{value.title}</h5>
                        <p className='p-txt'>{value.txt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
