// import React, { useState } from 'react';
// import Logo from '../logo.svg';
// import { Link } from 'react-router-dom';

// function Tnc() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen flex flex-col items-center text-white">
//       {/* Header */}
//       <div className="w-full flex justify-between items-center px-4 md:px-20 py-6 mt-4">
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-[30px] md:h-[40px]" />
//         </div>

//         {/* Hamburger Icon for mobile and iPads */}
//         <div className="lg:hidden flex">
//           <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
//             <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
//           </button>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav className={`flex-col lg:flex-row lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:gap-10 gap-5 lg:static absolute bg-zinc-950 w-full lg:w-auto top-[70px] left-0 px-4 lg:px-0 py-5 lg:py-0`}>
//         <Link to='/' className="cursor-pointer text-white text-lg md:text-2xl hover:text-green-400">Home</Link>
//         <Link to='/notes' className="cursor-pointer text-white text-lg md:text-2xl hover:text-green-400">Notes</Link>
//       </nav>
      
//       {/* T&C Section */}
//       <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
//         {/* Title */}
//         <h1 className="text-3xl md:text-5xl font-bold text-center">Terms and Conditions</h1>

//         {/* T&C Content */}
//         <p className="mt-6 sm:mt-10 max-w-4xl text-base sm:text-lg md:text-xl text-center">
//           NoteGo serves as a connecting platform that provides students with easy access to resources 
//           and notes curated by professors and students of BMS College of Engineering (BMSCE). We do not 
//           claim ownership over the content and materials made available through the platform. Our role is 
//           to streamline access and bridge the gap between students and available academic resources.
//         </p>

//         <p className="mt-4 sm:mt-5 max-w-4xl text-base sm:text-lg md:text-xl text-center">
//           The content on this platform, including notes and resources, is the intellectual property of the 
//           respective professors and students at BMSCE. NoteGo is not responsible for the accuracy, completeness, 
//           or appropriateness of the materials provided. Users are advised to use the resources for educational 
//           purposes only and respect the intellectual property rights of the original content creators.
//         </p>

//         <p className="mt-4 sm:mt-5 max-w-4xl text-base sm:text-lg md:text-xl text-center">
//           By using NoteGo, you acknowledge and agree that the platform merely facilitates access to the materials 
//           and is not liable for any discrepancies in the academic content. Any queries regarding the materials 
//           should be directed to the content providers, including professors or students who authored the materials.
//         </p>

//         <p className="mt-4 sm:mt-5 max-w-4xl text-base italic sm:text-lg md:text-xl text-[#20C030] text-center">
//           Made By: Devansh Khetan, Utkarsh Chaurasia, Rishi Raj, Vinayak Rodd
//         </p>
//       </div>
//       {/* Footer */}
//       <div className='bg-black min-w-full h-auto lg:h-[380px] flex flex-col lg:flex-row gap-10 lg:gap-[150px] px-4 py-10'>
//         <div className='flex flex-col gap-[30px] w-full lg:w-[300px]'>
//           <img src={Logo} alt="Logo" className='h-[30px] lg:h-[40px] mt-[20px] lg:mt-[50px]' />
//           <div className='text-sm md:text-md font-instrument ml-[0px] lg:ml-[50px] text-white text-justify'>
//             NoteGo brings together professor-curated student notes with relevant 
//             YouTube tutorials for fast and efficient learning.
//           </div>
//         </div>

//         <div className='flex flex-col gap-[30px] w-full lg:w-[300px]'>
//           <h1 className='text-[#20C030] text-xl md:text-2xl mt-[20px] lg:mt-[60px]'>Quick Links</h1>
//           <div className='flex flex-col'>
//             <h1 className='text-white text-base md:text-lg cursor-pointer'>About</h1>
//             <h1 className='text-white text-base md:text-lg cursor-pointer'>Contact</h1>
//             <h1 className='text-white text-base md:text-lg cursor-pointer'>Privacy Policy</h1>
//             <h1 className='text-white text-base md:text-lg cursor-pointer'>Terms And Conditions</h1>
//             <Link to = '/tnc' className='text-white text-base md:text-lg cursor-pointer'>Terms And Conditions</Link>
//             <Link to = '/notes' className='text-white text-base md:text-lg cursor-pointer'>Notes</Link>
//             <h1 className='text-white text-base md:text-lg cursor-pointer'>PYQ</h1>
//           </div>
//         </div>

//         <div className='flex flex-col gap-[30px] w-full lg:w-[200px]'>
//           <h1 className='text-[#20C030] text-xl md:text-2xl mt-[20px] lg:mt-[60px]'>Navigate To</h1>
//           <div className='flex flex-col'>
//             <Link to = '/CSCluster' className='text-white text-base md:text-lg cursor-pointer'>CS Cluster</Link>
//             <Link to = '/ECCluster'  className='text-white text-base md:text-lg cursor-pointer'>Electrical Cluster</Link>
//             <Link to = '/MECluster'  className='text-white text-base md:text-lg cursor-pointer'>Mechanical Cluster</Link>
//           </div>
//         </div>

//         <div className='flex flex-row gap-[5px] mt-[60px]'>
//           <i className="bi bi-c-circle text-white" style={{ fontSize: '20px' }}></i>
//           <h1 className='text-white text-sm md:text-lg'>2024 by NoteGo</h1>
//         </div>
//       </div>
// </div>

//     </div>
    
    
//   );
// }

// export default Tnc;
import React, { useState } from 'react';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Tnc() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col items-center text-white">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-4 md:px-20 py-6 mt-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-[30px] md:h-[40px]" />
        </div>

        {/* Hamburger Icon for mobile and iPads */}
        <div className="lg:hidden flex">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`flex-col lg:flex-row lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:gap-10 gap-5 lg:static absolute bg-zinc-950 w-full lg:w-auto top-[70px] left-0 px-4 lg:px-0 py-5 lg:py-0`}>
        <Link to='/' className="cursor-pointer text-white text-lg md:text-2xl hover:text-green-400">Home</Link>
        <Link to='/notes' className="cursor-pointer text-white text-lg md:text-2xl hover:text-green-400">Notes</Link>
      </nav>
      
      {/* T&C Section */}
      <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center">Terms and Conditions</h1>

        {/* T&C Content */}
        <p className="mt-6 sm:mt-10 max-w-4xl text-base sm:text-lg md:text-xl text-center">
          NoteGo serves as a connecting platform that provides students with easy access to resources 
          and notes curated by professors and students of BMS College of Engineering (BMSCE). We do not 
          claim ownership over the content and materials made available through the platform. Our role is 
          to streamline access and bridge the gap between students and available academic resources.
        </p>

        <p className="mt-4 sm:mt-5 max-w-4xl text-base sm:text-lg md:text-xl text-center">
          The content on this platform, including notes and resources, is the intellectual property of the 
          respective professors and students at BMSCE. NoteGo is not responsible for the accuracy, completeness, 
          or appropriateness of the materials provided. Users are advised to use the resources for educational 
          purposes only and respect the intellectual property rights of the original content creators.
        </p>

        <p className="mt-4 sm:mt-5 max-w-4xl text-base sm:text-lg md:text-xl text-center">
          By using NoteGo, you acknowledge and agree that the platform merely facilitates access to the materials 
          and is not liable for any discrepancies in the academic content. Any queries regarding the materials 
          should be directed to the content providers, including professors or students who authored the materials.
        </p>

        <p className="mt-4 sm:mt-5 max-w-4xl text-base italic sm:text-lg md:text-xl text-[#20C030] text-center">
          Made By: Devansh Khetan, Utkarsh Chaurasia, Rishi Raj, Vinayak Rodd
        </p>
      </div>
      
      {/* Footer */}
      <div className='bg-black min-w-full h-auto lg:h-[380px] flex flex-col lg:flex-row gap-10 lg:gap-[150px] px-4 py-10'>
        <div className='flex flex-col gap-[30px] w-full lg:w-[300px]'>
          <img src={Logo} alt="Logo" className='h-[30px] lg:h-[40px] mt-[20px] lg:mt-[50px]' />
          <div className='text-sm md:text-md font-instrument ml-[0px] lg:ml-[50px] text-white text-justify'>
            NoteGo brings together professor-curated student notes with relevant 
            YouTube tutorials for fast and efficient learning.
          </div>
        </div>

        <div className='flex flex-col gap-[30px] w-full lg:w-[300px]'>
          <h1 className='text-[#20C030] text-xl md:text-2xl mt-[20px] lg:mt-[60px]'>Quick Links</h1>
          <div className='flex flex-col'>
            <Link to='/about' className='text-white text-base md:text-lg cursor-pointer'>About</Link>
            <Link to='/contact' className='text-white text-base md:text-lg cursor-pointer'>Contact</Link>
            <Link to='/privacy' className='text-white text-base md:text-lg cursor-pointer'>Privacy Policy</Link>
            <Link to='/tnc' className='text-white text-base md:text-lg cursor-pointer'>Terms And Conditions</Link>
            <Link to='/notes' className='text-white text-base md:text-lg cursor-pointer'>Notes</Link>
            <Link to='/pyq' className='text-white text-base md:text-lg cursor-pointer'>PYQ</Link>
          </div>
        </div>

        <div className='flex flex-col gap-[30px] w-full lg:w-[200px]'>
          <h1 className='text-[#20C030] text-xl md:text-2xl mt-[20px] lg:mt-[60px]'>Navigate To</h1>
          <div className='flex flex-col'>
            <Link to='/CSCluster' className='text-white text-base md:text-lg cursor-pointer'>CS Cluster</Link>
            <Link to='/ECCluster' className='text-white text-base md:text-lg cursor-pointer'>Electrical Cluster</Link>
            <Link to='/MECluster' className='text-white text-base md:text-lg cursor-pointer'>Mechanical Cluster</Link>
          </div>
        </div>

        <div className='flex flex-row gap-[5px] mt-[60px]'>
          <i className="bi bi-c-circle text-white" style={{ fontSize: '20px' }}></i>
          <h1 className='text-white text-sm md:text-lg'>2024 by NoteGo</h1>
        </div>
      </div>
    </div>
  );
}

export default Tnc;
