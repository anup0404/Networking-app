import React, { useEffect, useState } from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import axios from "axios";



function Widgets() {
  const [data, setData] = useState();
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=40350022feef487fbb11dad33e809eab";
  useEffect(() => {
    async function fun1() {
      const result = await axios.get(url);
      ;
   setData(result.data.articles)
 
    }

    fun1();
  }, []);

  const news = (headline, link) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="widgets">
        <div className="widgets_left">
          <FiberManualRecordIcon
            style={{ width: "10px", height: "10px", color: "gray" }}
          />
        </div>
        <div className="widgets_right">
          <h1>{headline}</h1>
        </div>
      </div>
    </a>
  );

  return (
    <div className="widgets_container">
      <div className="widgets_header">
        <h2>Pro Network News</h2>
        <InfoIcon />
      </div>

     {data?.slice(0,6).map((item ,index) => (
        <div className="single_news" key={index}>
    {news(item.title, item.url)}
        </div>
    ))}
    </div>
  );
}

export default Widgets;
