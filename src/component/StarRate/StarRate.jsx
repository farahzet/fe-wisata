import { FaStar } from 'react-icons/fa';
import { useState } from 'react'


export const StarRate = () => {

    const [rating, setRating] = useState(null);
    const [rateColor, setColor] = useState(null);

    return(
        <>
       
        {
            [...Array(5)].map((star, index ) => {
                const currentRate = index + 1
                return (
                    <>
                    <label>
                        <input type="radio" name="rate" 
                        value={currentRate} 
                        style={{ display: 'none' }} 
                        onClick = {() => setRating(currentRate)}/>
                        <FaStar size= {30} 
                        color={ currentRate <= (rateColor || rating) ? "yellow" : "grey"}/> 
                    </label>
                    </>
                )
            })
        }
        </>
    )
}