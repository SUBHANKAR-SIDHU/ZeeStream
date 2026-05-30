import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjExYzI1M2NmYzdmNzUzYjMzMzAwYzRhNDhjY2U3MyIsIm5iZiI6MTc4MDA1OTcwMy43NTQsInN1YiI6IjZhMTk4ZTM3NDk3NWIyNzBhYWM4OWU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vyVirpb51BH9AEKkhd13sdYCaMhsWKT2JoWYJA9OFo'
    }
})

export default instance;