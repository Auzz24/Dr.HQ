// import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import About from './Components/AboutMe';
// import ContactUs from './Components/ContactUs';

// export default function CurrentPortfolio() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage = () => {
//         switch (currentPage) {
//             case 'Home':
//                 return <Home />;
//             case 'About':
//                 return <About />;
//             // case 'Test1':
//             //     return <Test1 />;
//             // case 'ContactUs':
//             //     return <ContactUs/>;
//             // case 'Test2':
//             //     return <Test2 />;
//             default:
//                 console.log('default switch case has been provoked!');
//         }

//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>
//             <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()}
//         </div>
//     );
// }
