
import "./navbar.css"


const Navbar = ({isNavOpen, setIsNavOpen}) => { 
   
  
 return (

  <div className="flex items-center justify-between  px-3 bg-black py-3 ">
    <nav>
      <section className="MOBILE-MENU flex ">
        <div
          className="HAMBURGER-ICON space-y-1"
          onClick={() => setIsNavOpen((prev) => !prev)} 
        >
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} > 
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 "
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/about">About</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden space-x-8  ">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    
  </div>
  
 

);
}

export default Navbar