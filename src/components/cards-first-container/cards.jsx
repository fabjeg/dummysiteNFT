import { useEffect, useState } from 'react';
import './cards.css';
import nft1 from '../../assets/pictures/nft1.jpg';
import nft2 from '../../assets/pictures/nft2.jpg';
import nft3 from '../../assets/pictures/nft3.jpg';
import nft4 from '../../assets/pictures/nft4.jpg';
import nft5 from '../../assets/pictures/nft5.jpg';
import nft6 from '../../assets/pictures/nft6.jpg';

export function CardsFirst() {
    const images = [nft1, nft2, nft3, nft4, nft5, nft6];
    const [activeIndexes, setActiveIndexes] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexes(prevIndexes => prevIndexes.map(index => (index + 1) % images.length));
        }, 5000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="cards">
            {activeIndexes.map((index, cardIndex) => (
                <div key={cardIndex} className={`card ${cardIndex === 0 ? 'first' : 'fine'}`}>
                    {images.map((image, imgIndex) => (
                        <img
                            key={imgIndex}
                            src={image}
                            alt={`NFT ${imgIndex + 1}`}
                            className={index === imgIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
