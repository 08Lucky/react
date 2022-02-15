import axios from "axios";
import React, { useState,useEffect } from "react";

function Landing() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=abc&limit=24&page=1`)
      .then((res) => setData(res.data.results))
      .catch((error) => console.log(error))
  }, []);

  return (
    <div className="wrapper">
      {
          data && data.map(anime => (
              <div className="anime">
                  <img className="anime-img" src={anime.image_url}/>
                  <h3 className="anime-heading">{anime.title}</h3>
              </div>
          ))
      }
    </div>
  );
}

export default Landing;
