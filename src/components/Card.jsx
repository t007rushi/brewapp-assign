import React from "react";

export const Card = ({ filteredData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 grid-flow-row auto-rows-auto">
      {filteredData?.map(({ id, title, photoURL, tags }) => {
        return (
          <div className="relative" key={id}>
            <img
              src={photoURL}
              alt="random-img"
              className="h-70 w-full object-cover rounded-lg"
            />
            <div className="bg-black text-white absolute w-full bottom-0 h-30 rounded-b-lg p-2 hover:opacity-90">
              <span className="text-2xl m-2 p-2">{title}</span>
              <div className="flex overflow-x-scroll webkit">
                {tags.map(({ hash, description }) => {
                  return (
                    <div className="bg-gray-800 rounded-md h-12 w-32 my-4 px-2 ml-4">
                      {hash.length > 10 ? hash.slice(0, 11) + "..." : hash}
                      <div>
                        {description.length > 10
                          ? description.slice(0, 11) + "..."
                          : description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
