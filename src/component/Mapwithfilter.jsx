import React from "react";

const Mapwithfilter = () => {
  const data = [
    {
      name: "sapna",
      age: 25,
    },
    {
      name: "sakshi",
      age: 21,
    },
    {
      name: "jiya",
      age: 19,
    },
    {
      name: "tanisha",
      age: 16,
    },
  ];
  const datafilter = data.filter((e) => e.age > 18);
  return (
    <>
      <div className="flex-row flex-wrap flex justify-between max-w-[1140px] mx-auto mt-10 mb-40">
        {datafilter.map((e) => (
          <div className="w-3/12 h-[200px] text-center bg-slate-500">
            <h2>{e.name}</h2>
            <p>{e.age}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mapwithfilter;
