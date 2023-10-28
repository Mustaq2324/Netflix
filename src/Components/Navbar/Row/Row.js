import axios from "../../../helpers/axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ml-[20px]">
      <h2 className="text-xl mt-5">{title}</h2>
      <div className="flex  row overflow-y-hidden overflow-x-scroll w-full p-[20px]">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
                
                <img
                  className={
                    isLargeRow
                      ? "relative h max-h-[250px] object-contain mr-[10px] hover:scale-[1.08] hover:opacity-100 transition-all duration-200"
                      : "relative max-h-[150px] object-contain mr-[10px] hover:scale-[1.08] hover:opacity-100 transition-all duration-200"
                  }
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
