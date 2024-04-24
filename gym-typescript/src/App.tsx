import Navbar from "@/scenes/Navbar" //ha az index.tsx létezik és azt akarjuk importálni, nem kell külön azt importálni, default azt fogja keresni a React
import { useEffect, useState } from "react"

function App() {

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    const handleScroll = () =>{
      const isTop = window.scrollY === 0;
      
      setIsTopOfPage(isTop);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])
  
  return (
      <div className="app bg-gray-20">
       <Navbar isTop={isTopOfPage}/>

       <div className="h-[5000px]">d</div>
      </div>

  )
}

export default App
