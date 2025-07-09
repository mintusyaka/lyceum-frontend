// // // import './Header.css';

// // // import { Link } from 'react-router-dom';
// // // import { Menu } from 'lucide-react';
// // // import { GraduationCap } from 'lucide-react';

// // // import Logo from '../../../assets/lyceum-logo.png'

// // // function Header() {
// // //   return (
    
// // //     <header className="bg-gray-900 shadow-lg">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           {/* <div className="flex justify-between items-center py-6"> */}
// // //             <div className="flex justify-between items-center pb-10">

// // //               {/* <img src={Logo} alt="Logo" className="pt-5 inline-block w-50" /> */}
// // //               <div className='pt-10'>
// // //                 <GraduationCap className="w-12 h-12 text-gray-300 transition-colors duration-500 hover:text-white" /> 
// // //               </div>  

// // //               <div className="ml-4 pt-10">
// // //                 <h1 className="md:text-6xl sm:text-sm bg-linear-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:animate-glow hover:text-white transition-colors duration-500">ЛІЦЕЙ </h1>
// // //                 <strong className="bg-linear-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:animate-glow hover:text-white transition-colors duration-500">"ПРОАКТИВНІСТЬ"</strong>
// // //               </div>

// // //               <div className='pt-10'>
// // //                 <Menu className="w-12 h-12 text-gray-300 transition-colors duration-500 hover:text-white" /> 
// // //               </div>


// // //             </div>
// // //             {/* <nav className="hidden md:flex space-x-8">
// // //               <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Про нас</a>
// // //               <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Програми</a>
// // //               <a href="#prices" className="text-gray-700 hover:text-blue-600 transition-colors">Вартість</a>
// // //               <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакти</a>
// // //             </nav> */}
// // //           {/* </div> */}
// // //         </div>
// // //       </header>

// // //   );
// // // }

// // // export default Header;

// // // import './Header.css';
// // // import { Link } from 'react-router-dom';
// // // import { Menu, X } from 'lucide-react';
// // // import { GraduationCap } from 'lucide-react';
// // // import { useState, useRef, useEffect } from 'react';
// // // import Logo from '../../../assets/lyceum-logo.png'

// // // function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const menuRef = useRef(null);

// // //   // Close menu when clicking outside
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// // //         setIsMenuOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, []);

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const closeMenu = () => {
// // //     setIsMenuOpen(false);
// // //   };

// // //   return (
// // //     <header className="bg-gray-900 shadow-lg relative z-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center pb-10">
// // //           <div className='pt-10'>
// // //             <GraduationCap className="w-12 h-12 text-gray-300 transition-colors duration-500 hover:text-white" />
// // //           </div>  
          
// // //           <div className="ml-4 pt-10">
// // //             <h1 className="md:text-6xl sm:text-sm bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
// // //               ЛІЦЕЙ 
// // //             </h1>
// // //             <strong className="bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
// // //               "ПРОАКТИВНІСТЬ"
// // //             </strong>
// // //           </div>
          
// // //           <div className='pt-10 relative' ref={menuRef}>
// // //             {/* <button
// // //               onClick={toggleMenu}
// // //               className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition"
// // //               aria-label="Toggle menu"
// // //             >
// // //               {isMenuOpen ? (
// // //                 <X className="w-12 h-12 text-gray-800 transform rotate-180 transition-transform duration-300" />
// // //               ) : (
// // //                 <Menu className="w-full h-full text-gray-800" strokeWidth={2.5} />
// // //               )}
// // //             </button> */}

// // //             <Menu
// // //               onClick={toggleMenu}
// // //               className="w-12 h-12 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300"
// // //               strokeWidth={2.5}
// // //             />


            
// // //             {/* Dropdown Menu */}
// // //             {isMenuOpen && (
// // //               <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 ease-out transform origin-top-right opacity-100 scale-100 translate-y-0 z-50">
// // //               <div className="py-2">
// // //                 <Link
// // //                   to="/prices"
// // //                   onClick={closeMenu}
// // //                   className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition-all duration-200 text-lg font-medium border-b border-gray-700 last:border-b-0"
// // //                 >
// // //                   <p className='text-gray-900'>💰 Вартість </p>
// // //                 </Link>
                
// // //                 <Link
// // //                   to="/study-plans"
// // //                   onClick={closeMenu}
// // //                   className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition-all duration-200 text-lg font-medium border-b border-gray-700 last:border-b-0"
// // //                 >
// // //                   <p className='text-gray-900'>📚 Навчальні плани</p>
// // //                 </Link>
                
// // //                 <Link
// // //                   to="/about"
// // //                   onClick={closeMenu}
// // //                   className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition-all duration-200 text-lg font-medium border-b border-gray-700 last:border-b-0"
// // //                 >
// // //                   <p className='text-gray-900'>ℹ️ Про нас</p>
// // //                 </Link>
                
// // //                 <Link
// // //                   to="/contacts"
// // //                   onClick={closeMenu}
// // //                   className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition-all duration-200 text-lg font-medium"
// // //                 >
// // //                   <p className='text-gray-900'>📞 Контакти</p>
// // //                 </Link>
// // //                               </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // // export default Header;

// // import './Header.css';
// // import { Link } from 'react-router-dom';
// // import { Menu, X } from 'lucide-react';
// // import { GraduationCap } from 'lucide-react';
// // import { useState, useRef, useEffect } from 'react';

// // function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const menuRef = useRef(null);

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsMenuOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const closeMenu = () => {
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <header className="bg-gray-900 shadow-lg relative z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center pb-10">
// //           <div className='pt-10'>
// //             <GraduationCap className="w-12 h-12 text-gray-300 transition-colors duration-500 hover:text-white" />
// //           </div>  
          
// //           <div className="ml-4 pt-10">
// //             <h1 className="md:text-6xl sm:text-sm bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
// //               ЛІЦЕЙ 
// //             </h1>
// //             <strong className="bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
// //               "ПРОАКТИВНІСТЬ"
// //             </strong>
// //           </div>
          
// //           <div className='pt-10 relative' ref={menuRef}>
// //             <Menu
// //               onClick={toggleMenu}
// //               className="w-12 h-12 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300"
// //               strokeWidth={2.5}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Full Screen Right Side Menu */}
// //       {isMenuOpen && (
// //         <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl z-50 transform translate-x-0 transition-transform duration-500 ease-out">
// //             {/* Menu Header */}
// //             <div className="flex items-center justify-between p-8 border-b border-gray-700">
// //               <div className="flex items-center space-x-3">
// //                 <GraduationCap className="w-8 h-8 text-gray-300" />
// //                 <h2 className="text-2xl font-bold text-gray-300">
// //                   Меню
// //                 </h2>
// //               </div>
// //                 <X 
// //                 className="w-6 h-6 text-gray-300"
// //                 onClick={closeMenu}
// //                 />
// //             </div>
            
// //             {/* Menu Items */}
// //             {/* <div className="py-8 px-6 space-y-2">
// //               <Link
// //                 to="/prices"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">💰</span>
// //                 <span className='text-white'>Вартість</span>
// //               </Link>
              
// //               <Link
// //                 to="/study-plans"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📚</span>
// //                 <span className='text-white'>Навчальні плани</span>
// //               </Link>
              
// //               <Link
// //                 to="/about"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">ℹ️</span>
// //                 <span className='text-white'>Про нас</span>
// //               </Link>
              
// //               <Link
// //                 to="/contacts"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📞</span>
// //                 <span className='text-white'>Контакти</span>
// //               </Link>
// //             </div> */}

// //             <div className="py-8 px-6 space-y-2">
// //               <Link
// //                 to="/about"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">💰</span>
// //                 <span>Вартість</span>
// //               </Link>
              
// //               <Link
// //                 to="/about"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📚</span>
// //                 <span>Навчальні плани</span>
// //               </Link>
              
// //               <Link
// //                 to="/about"
// //                 onClick={closeMenu}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">ℹ️</span>
// //                 <span>Про нас</span>
// //               </Link>
              
// //               <Link
// //                 to="/about"
// //                 onClick={() => {
// //                   console.log('About link clicked!');
// //                   closeMenu();
// //                 }}
// //                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
// //               >
// //                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📞</span>
// //                 <span>Контакти</span>
// //               </Link>
// //             </div>
            
// //             {/* Menu Footer */}
// //             <div className="absolute bottom-8 left-6 right-6">
// //               <div className="text-center p-4 border-t border-gray-700">
// //                 <p className="text-emerald-500 text-sm">
// //                   ЛІЦЕЙ "ПРОАКТИВНІСТЬ"
// //                 </p>
// //                 <p className="text-gray-300 text-xs mt-1">
// //                   Розвиваємо майбутнє разом
// //                 </p>
// //               </div>
// //             </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// // export default Header;

// import './Header.css';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { GraduationCap } from 'lucide-react';
// import { useState, useRef, useEffect } from 'react';
// import Logo from '../../../assets/lyceum-logo.png'

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const menuPanelRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && 
//           menuPanelRef.current && !menuPanelRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-gray-900 shadow-lg relative z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center pb-10">
//           <div className='pt-10'>
//             <GraduationCap className="w-12 h-12 text-gray-300 transition-colors duration-500 hover:text-white" />
//           </div>  
          
//           <Link 
//             to="/">
//             <div className="ml-4 pt-10">
//               <strong className="bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
//                 ДИСТАНЦІЙНИЙ ЛІЦЕЙ
//               </strong>
//               <h1 className="md:text-6xl sm:text-sm bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500">
//                 "ПРОАКТИВНІСТЬ" 
//               </h1>
              
//             </div>
//           </Link>
          
//           <div className='pt-10 relative' ref={menuRef}>
//             <Menu
//               onClick={toggleMenu}
//               className="w-12 h-12 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300"
//               strokeWidth={2.5}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Full Screen Right Side Menu */}
//       {isMenuOpen && (
//         <div ref={menuPanelRef} className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl z-50 transform translate-x-0 transition-transform duration-500 ease-out">
//             {/* Menu Header */}
//             <div className="flex items-center justify-between p-8 border-b border-gray-700">
//               <div className="flex items-center space-x-3">
//                 <GraduationCap className="w-8 h-8 text-gray-300" />
//               <h2 className="text-2xl font-bold text-gray-300">
//                 Меню
//               </h2>
//               </div>
//               <X 
//                 className="w-6 h-6 text-gray-300"
//                 onClick={closeMenu}
//               />
//             </div>
            
//             {/* Menu Items */}
//             <div className="py-8 px-6 space-y-2">
//               <Link
//                 to="/prices"
//                 onClick={closeMenu}
//                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
//               >
//                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">💰</span>
//                 <span className="text-white">Вартість</span>
//               </Link>
              
//               <Link
//                 to="/curriculums"
//                 onClick={closeMenu}
//                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
//               >
//                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📚</span>
//                 <span className="text-white">Навчальні плани</span>
//               </Link>
              
//               <Link
//                 to="/about"
//                 onClick={() => {
//                   console.log('About link clicked!');
//                   closeMenu();
//                 }}
//                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
//               >
//                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">ℹ️</span>
//                 <span className="text-white">Про нас</span>
//               </Link>
              
//               <Link
//                 to="/contacts"
//                 onClick={closeMenu}
//                 className="flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-xl font-medium group"
//               >
//                 <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📞</span>
//                 <span className="text-white">Контакти</span>
//               </Link>
//             </div>
            
//             {/* Menu Footer */}
//             <div className="absolute bottom-8 left-6 right-6">
//               <div className="text-center p-4 border-t border-gray-700">
//                 <p className="text-gray-400 text-sm">
//                   ЛІЦЕЙ "ПРОАКТИВНІСТЬ"
//                 </p>
//                 <p className="text-emerald-400 text-xs mt-1">
//                   Розвиваємо майбутнє разом
//                 </p>
//               </div>
//             </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/lyceum-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuPanelRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          menuPanelRef.current && !menuPanelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 md:px-4 lg:px-8">
        <div className="flex justify-between items-center pb-4 sm:pb-6 lg:pb-8 xl:pb-10">
          <div className='pt-4 sm:pt-6 lg:pt-8 xl:pt-10'>
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-300 transition-colors duration-500 hover:text-white" />
          </div>  
          
          <Link 
            to="/"
            className="flex-1 text-center mx-1 sm:mx-2 lg:mx-4 min-w-0">
            <div className="pt-4 sm:pt-6 lg:pt-8 xl:pt-10">
              <strong className="block text-xs sm:text-sm lg:text-base bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500 whitespace-nowrap">
                ДИСТАНЦІЙНИЙ ЛІЦЕЙ
              </strong>
              <h1 className="bg-gradient-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:text-white transition-colors duration-500 leading-tight whitespace-nowrap" style={{fontSize: 'clamp(1.25rem, 8vw, 4rem)'}}>
                "ПРОАКТИВНІСТЬ" 
              </h1>
            </div>
          </Link>
          
          <div className='pt-4 sm:pt-6 lg:pt-8 xl:pt-10 relative' ref={menuRef}>
            <Menu
              onClick={toggleMenu}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-300 cursor-pointer hover:text-white transition-colors duration-300"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Full Screen Right Side Menu */}
      {isMenuOpen && (
        <div ref={menuPanelRef} className="fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl z-50 transform translate-x-0 transition-transform duration-500 ease-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-300">
                  Меню
                </h2>
              </div>
              <X 
                className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-colors"
                onClick={closeMenu}
              />
            </div>
            
            {/* Menu Items */}
            <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 space-y-2">
              <Link
                to="/plans"
                onClick={closeMenu}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-lg sm:text-xl font-medium group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200">📚</span>
                <span className="text-white">Навчальні плани</span>
              </Link>
              
              <Link
                to="/about"
                onClick={() => {
                  console.log('About link clicked!');
                  closeMenu();
                }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-lg sm:text-xl font-medium group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200">ℹ️</span>
                <span className="text-white">Про нас</span>
              </Link>
              
              <Link
                to="/contacts"
                onClick={closeMenu}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-green-600/20 rounded-xl transition-all duration-300 text-lg sm:text-xl font-medium group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200">📞</span>
                <span className="text-white">Контакти</span>
              </Link>
            </div>
            
            {/* Menu Footer */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 right-4 sm:right-6">
              <div className="text-center p-3 sm:p-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  ЛІЦЕЙ "ПРОАКТИВНІСТЬ"
                </p>
                <p className="text-emerald-400 text-xs mt-1">
                  Розвиваємо майбутнє разом
                </p>
              </div>
            </div>
        </div>
      )}
    </header>
  );
}

export default Header;