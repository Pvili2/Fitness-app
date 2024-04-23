import Navbar from "@/scenes/Navbar" //ha az index.tsx létezik és azt akarjuk importálni, nem kell külön azt importálni, default azt fogja keresni a React

function App() {

  return (
      <div className="app bg-gray-20">
       <Navbar />
      </div>

  )
}

export default App
