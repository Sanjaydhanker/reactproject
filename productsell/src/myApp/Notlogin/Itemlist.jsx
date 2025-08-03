import React, { useState, useEffect } from "react";
import axios from "axios";

function Itemlist() {
  const [item, setItem] = useState([]);

  const myApi = () => {
    axios.get("https://dummyjson.com/products").then((d) => {
      console.log(d.data.products);
      setItem(d.data.products);
    });
  };

  useEffect(() => {
    myApi();
  }, []);

  return (
    <>
      <div className="w-full h-auto flex flex-wrap items-center justify-evenly px-6 md:px-20 mt-20">
        {item.map((d) => {
          return (
            <div
              className="w-full h-auto mx-10 sm:w-[350px]  shadow-md md:flex md:w-[550px] shadow-indigo-400 mb-8 border border-indigo-500 rounded-md"
              key={d.id}
            >
              <div className="md:w-[170px] ">
                <img
                  className="w-full h-full shadow-2xl"
                  src={d.thumbnail}
                  alt=""
                />
              </div>
              <div className="p-4 md:w-[380px]">
                <p className="text-2xl font-bold text-indigo-600">
                  Name:<span className="text-black ">{d.title}</span>
                </p>
                <h2 className="text-xl font-bold text-indigo-600">
                  Return Policy:<span className="text-black ">{d.returnPolicy}</span>              
                </h2>
                <h1 className="text-indigo-600 font-bold text-2xl">
                  Price:<span className="text-red-500">{d.price}</span>
                </h1>
                <p className="text-indigo-600 text-xl font-bold">
                  Warranty:
                  <span className="text-red-500">{d.warrantyInformation}</span>
                </p>
                <div className="flex justify-around mt-2">
                  <button className="border border-indigo-600 text-indigo-600 cursor-pointer py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">
                    Shop Now
                  </button>
                  <button className="border border-indigo-600 text-indigo-600 cursor-pointer py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">More...</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Itemlist;
