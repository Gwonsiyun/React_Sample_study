import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import HomeLink from "./common/HomeLink";

function MovieDetail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie()
    },[]);
    return (
        <>
            <HomeLink/>
            {loading ? <h1>Loading...</h1> :
                <>
                    <img src={movie.medium_cover_image}/>
                    <div></div>
                    <h1>{movie.title_long}</h1>
                </>
            }
        </>

    );
}
export default MovieDetail;