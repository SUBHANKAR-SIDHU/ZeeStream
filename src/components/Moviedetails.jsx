import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import Loading from '../templates/Loading';
import { FaWikipediaW } from "react-icons/fa6";
import { LiaImdb } from "react-icons/lia";
import { FiExternalLink } from "react-icons/fi";
import HorizontalCard from "../templates/HorizontalCard";
import Trailer from '../templates/Trailer';

function MovieDetails() {
    const backBtn = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.movie);
    console.log(info)

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
        : 'rgba(0,0,0,.3)';
    const imagePath = info.detail.poster_path || info.detail.profile_path || info.detail.backdrop_path;
    const noImage = 'https://via.placeholder.com/200x300?text=No+Image';
    const imageSrc = imagePath ? `https://image.tmdb.org/t/p/w200${imagePath}` : noImage;
    const buyProviders = info.watchprovider?.buy || [];
    const genres = info.detail.genres || [];
    const companies = info.detail.production_companies || [];
    const movieSuggestion = info.recommendation || info.similar;
    return (
        <div
            style={{
                background: backgroundImage,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className='w-full min-h-screen px-6 py-3 overflow-y-auto overflow-x-hidden relative'
        >
            <nav className='max-w-6xl mx-auto flex items-center justify-between text-zinc-200 mb-2'>
                <div className='flex items-center gap-4'>
                    <button onClick={() => backBtn(-1)} className='px-3 py-1 rounded bg-zinc-800/60 hover:bg-zinc-700'>Back</button>
                    <h2 className='text-lg font-semibold'>Movie</h2>
                </div>
                <div className='flex items-center gap-4'>
                    <a target='_blank' rel='noreferrer' href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata_id || ''}`} className='hover:text-zinc-100 text-xl '><FaWikipediaW /></a>
                    {info.detail.homepage && <a target='_blank' rel='noreferrer' href={info.detail.homepage} className='hover:text-zinc-100 text-xl '><FiExternalLink /></a>}
                    <a target='_blank' rel='noreferrer' href={`https://www.imdb.com/title/${info.externalid?.imdb_id || ''}`} className='hover:text-zinc-100 text-3xl'><LiaImdb /></a>
                </div>
            </nav>

            <main className='w-full rounded-lg  p-3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='col-span-1 flex justify-end items-center'>
                    <div className='w-48 h-72 md:w-56 lg:w-64 shadow-lg  overflow-hidden'>
                        <img className='object-cover' src={imageSrc} alt={info.detail.title || 'poster'} />
                    </div>
                </div>

                <div className='col-span-2 text-zinc-100 '>
                    <h1 className='text-3xl md:text-4xl font-extrabold mb-2'>
                        {info.detail.title || info.detail.name || info.detail.original_title || info.detail.original_name}
                    </h1>
                    <div className='flex flex-wrap gap-3 items-center text-sm text-zinc-300 mb-3'>
                        <span className='px-2 py-1 bg-zinc-800/60 rounded'>{info.detail.release_date}</span>
                        {genres.map((g, i) => (
                            <span key={i} className='px-2 py-1 bg-indigo-600/20 text-indigo-300 rounded'>{g.name}</span>
                        ))}
                        {info.detail.tagline && <span className='italic ml-2 font-semibold text-sm '>{info.detail.tagline}</span>}
                    </div>

                    <p className='text-zinc-200/90 leading-relaxed mb-4'>{info.detail.overview}</p>
                    <Link to={`/movie/details/${info.detail.id}/trailer`} className='px-3 py-2 mt-3 rounded bg-blue-400 hover:bg-blue-600 hover:cursor-pointer text-white '>Watch Trailer</Link>

                    <div className='mt-4'>
                        <h3 className='font-semibold mb-2 text-zinc-100'>Production Companies</h3>
                        <div className='flex gap-4 flex-wrap'>
                            {companies.map((w, i) => (
                                <div key={i} className='flex items-center gap-3 bg-zinc-900/40 p-2 rounded'>
                                    {w.logo_path ? (
                                        <img className='w-16 h-8 object-contain' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt={w.name} />
                                    ) : (
                                        <div className='w-16 h-8 bg-zinc-800 flex items-center justify-center text-xs'>{w.name || 'N/A'}</div>
                                    )}
                                    <span className='text-sm'>{w.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-span-1 text-zinc-100 md:col-span-3 '>
                    <h3 className='font-bold  mb-3'>Available To Buy</h3>
                    <div className='flex gap-4 flex-wrap'>
                        {buyProviders.length ? buyProviders.map((w, i) => (
                            <div key={i} className='flex items-center gap-3 bg-zinc-900/40 p-2 rounded'>
                                {w.logo_path ? <img className='w-10 h-10 object-contain' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt={w.provider_name} /> : <div className='w-10 h-10 bg-zinc-800' />}
                                <span>{w.provider_name}</span>
                            </div>
                        )) : <p className='text-zinc-300'>Not available</p>}
                    </div>
                </div>
                <div className='w-[94vw] '>
                    <h1 className='text-2xl mb-1 text-white font-semibold'>Recommendation</h1>
                    <HorizontalCard data={movieSuggestion} />
                    <Outlet/>
                </div>
            </main>
        </div>
    );
}

export default MovieDetails
