import React, { useRef, useEffect } from 'react';
import "./navbar.css"


const Navbar = ({isNavOpen, setIsNavOpen}) => { 
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      // Check if the clicked element is outside the mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsNavOpen(false); // Close the menu
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsNavOpen]);
 return (

  <div className="nav flex items-center justify-between  px-3 bg-black py-3  ">
    <nav> 
      <section className="MOBILE-MENU flex  ">
      <div
            className="HAMBURGER-ICON space-y-1"
            onClick={(event) => {
              event.stopPropagation(); 
              setIsNavOpen((prev) => !prev);
            }}
          >
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
        </div>

        <div ref={mobileMenuRef} className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div className="CROSS-ICON absolute top-0 right-0 px-8 " onClick={() => setIsNavOpen(false)}>
              {/* Your cross icon SVG */}
            </div>

          <div className="main flex gap-1 ">
           <div className="left">
            <p> <span class="material-symbols-outlined">public</span> START HERE</p>
           <a href="/"> <div>
              <h1>Home and Info</h1>
              <p>More Information about the project</p>
            </div></a>
            <a href="/">
            <div className="">
              <h1>Whitepaper</h1>
              <p>Decentralizing with blackhain</p>
            </div></a>
            <a href="/">
            <div>
              <h1>Communty</h1>
              <p>Bulding a theiving communty together</p>
            </div></a>
           </div>

           
           <div className="right">
            <p><span class="material-symbols-outlined">
explore
</span> RESOURCES</p>
            <div className="right-bg">
              <div><a href="/">Profile</a> </div>
              <div><a href="/">Wallet</a> </div>
              <div><a href="/">Market</a></div>
            
            </div>
           </div>
          </div>
        </div>
      </section>
    </nav>
    
  </div>
  
 

);
}

export default Navbar