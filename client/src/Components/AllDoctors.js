// import React, { useState, useEffect } from "react";

// export default function AddDoctor() {
//   const [allDoctors, setAllDrs] = useState([]);
//   const [allVisibleDoctors, setAllVisibleDrs] = useState([]);

//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // graphql dr call
//     const response = [
//       {
//         name: "Henry",
//       },
//     ];
//     setAllDrs(response);
//     setAllVisibleDrs(response);
//   }, []);

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

//   return (
//     <div>
//       <input onChange={onChange} value={search} />
//       {allVisibleDoctors.map((dr, index) => (
//         <div>
//           <h2>{dr.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }