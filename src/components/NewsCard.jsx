import React from "react";
import {FaRegEye, FaShareAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const NewsCard = ({singleNews}) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={singleNews.author.img}
          alt=""
        />
        <div>
          <p className="font-semibold">{singleNews.author.name}</p>
          <p className="text-sm text-gray-500">
            {singleNews.author.published_date}
          </p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-500"></FaShareAlt>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{singleNews.title}</h2>
      <img
        src={singleNews.thumbnail_url}
        className="w-full h-48 object-cover rounded-lg mb-4"
        alt=""
      />
      <p className="text-gray-700 text-sm mb-4">
        {singleNews.details.slice(0, 150)}...{""}
        <Link to={`/news/${singleNews._id}`} className="text-primary">
          Read More
        </Link>
      </p>
      <div className="flex items-center">
        <FaRegEye className="mr-1"></FaRegEye>
        <span>{singleNews.total_view}</span>
      </div>
    </div>
  );
};

export default NewsCard;
