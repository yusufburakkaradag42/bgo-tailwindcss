
import "./navbar.css"


const Navbar = ({isNavOpen, setIsNavOpen}) => { 
   
  
 return (

  <div className="nav flex items-center justify-between  px-3 bg-black py-3  ">
    <nav> 
      <section className="MOBILE-MENU flex  ">
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
            onClick={() => setIsNavOpen(false)} 
          >
  
          </div>

          <div className="main flex">
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