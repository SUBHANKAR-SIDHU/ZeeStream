export { removemovie } from "../reducer/movieSlicer";
import axios from "../../utils/axios";
import { loadmovie } from "../reducer/movieSlicer";


export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const video = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
        let allDetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data,
            video: video.data.results.find((m) => m.type === "Trailer"),
            watchprovider: watchprovider.data.results.US
        }
        dispatch(loadmovie(allDetails));
    } catch (error) {
        console.log(error);
    }
}