// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router";
import {  getReviews } from '../../api'
const Reviews = () => {
    const match = useRouteMatch()
    const [review, setReview] = useState([]);
    const movieId = match.params.movieId
    useEffect(() => {
        getReviews(movieId)
    .then(review => {
      setReview(review)
    console.log(review);
  })
  .catch(error => console.log('errorGetMoviesDetails'));
    }, [])
    console.log(review)
    return (
        
        <>
        <h1>Reviews</h1>
            {review.length?
                <>
                <ul>
                    {review.results.map((item) => (
                    <div>
                    <li key={item.id} >{item.results}
                                <p> Author: {item.author}</p>
                                <p>Review: {item.content}</p>
                            </li>
                            </div>
                ))}
                    </ul>
                </>
                : <p> There are no reviews for this movie</p>
            }
            </>
    )
}
export default Reviews;