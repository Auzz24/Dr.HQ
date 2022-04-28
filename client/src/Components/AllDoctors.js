import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_DOCTORS } from "../utils/queries";

export default function AddDoctor() {
  const [allDoctors, setAllDrs] = useState([]);
  const [allVisibleDoctors, setAllVisibleDrs] = useState([]);
  const {loading, data} = useQuery(ALL_DOCTORS);

  const doctorData = data?.allDoctors || {}


  const [search, setSearch] = useState("");

  useEffect(() => {
    // graphql dr call
    const response = [
      {
        name: "Henry",
      },
    ];
    setAllDrs(response);
    setAllVisibleDrs(response);
  }, []);

//   onChange = (e) => {
//     const term = e.target.value;

//     setSearch(term);
//     setAllVisibleDrs(
//       term.length > 0
//         ? [...allDoctors].filter((dr) => {
//             let bool = false;
//             Object.keys(dr).forEach((drKey) =>
//                 if(!bool) bool = dr[drKey].startsWith(term.toLowerCase())
//             );
//             return bool;
//           })
//         : allDoctors
//     );
//   };

console.log (doctorData);


if(loading){
    return <h2>
        retreiving doctor data
    </h2>
};

  return (
    <div id="alldoctors">
      <div id="fakedoctors">


      </div>
      <div id ="realdoctors">
      {/* <input onChange={onChange} value={search} /> */}
      {doctorData.map((doctorData, index) => (
        <div>
          <h2>{doctorData.name}
          {doctorData.email}
          {doctorData.address}
          {doctorData.phone}
          {doctorData.department}
          </h2>
        </div>
      ))}
    </div>
    </div>
    
  );
}
