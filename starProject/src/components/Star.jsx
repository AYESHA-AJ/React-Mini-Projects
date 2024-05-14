import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css'

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        console.log(index);
        setRating(index)
    }

    function handleMouseEnter(index) {
        console.log(index);
        setHover(index)
    }

    function handleMouseLeave(index) {
        console.log(index);
        setHover(rating)
    }

    return (
        <>
            <h1>Rate this page</h1>
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index<=(hover||rating)?'active':'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={80}
                    />
                );
            })}
            </div>
            </>
    );
}
