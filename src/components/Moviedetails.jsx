import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import Loading from '../templates/Loading';

function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.movie);

    useEffect(() => {
        if (id) {
            dispatch(asyncloadmovie(id));
        }

        return () => {
            dispatch(removemovie());
        }
    }, [dispatch, id]);

    if (!info || !info.detail) {
        return <Loading />;
    }

    const backdropPath = info.detail.backdrop_path;
    const backgroundImage = backdropPath
        ? `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${backdropPath})`
        : 'rgba(0,0,0,.7)';

    return (
        <div
            style={{
                background: backgroundImage,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className='w-full h-screen border border-zinc-700 rounded relative'
        >
            <h1>MovieDetails</h1>
        </div>
    );
}

export default MovieDetails
