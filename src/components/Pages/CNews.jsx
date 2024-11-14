import React from "react";
import {useLoaderData} from "react-router-dom";
import NewsCard from "../NewsCard";

const CNews = () => {
  const {data: news} = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-3"> Dragon News Home</h2>
      <p className="text-base-300">{news.length} News Found on this category</p>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CNews;
