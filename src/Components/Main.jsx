import React from 'react';
import Navbar from './Navbar';
import BAnner from './BAnner';
import Films from './Films';
import sorov from '../baza/sorov';

const Main = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            <BAnner />
            <Films
                isLargeRow
                title={"NETFLIX ORIGINALS"}
                movie_request={sorov.fetchNetflixOriginals}
            />
            <Films
                title={"Trending now"} movie_request={sorov.fetchTrending}
            />
            <Films
                title={"Top Rated"} movie_request={sorov.fetchTopRated}
            />
            <Films
                title={"Action movies"} movie_request={sorov.fetchActionMovies}
            />
            <Films
                title={"Comedy movies"} movie_request={sorov.fetchComedyMovies}
            />
            <Films
                title={"Horror movies"} movie_request={sorov.fetchHorrorMovies}
            />
            <Films
                title={"Documentaries"} movie_request={sorov.fetchDocumentaries}
            />
        </>
    );
}

export default Main;