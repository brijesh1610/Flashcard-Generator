/* in this components we are making navbar of flashcard which have create flashcard 
got cretaeflashcardpage and myflashcard which will show myflashcards*/

import { NavLink } from "react-router-dom"




const Navbar = () => {
  return (
    <div className="w-full h-full container">
      <h1 className="font-medium text-[25px] mb-7">
        Create Flashcard
      </h1>
      <div className="flex item-center space-x-10 mb-3">
        <button className="font-medium text-[22px] text-[#576CBC]">
          <NavLink to={"/"}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid #576CBC" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}


          >Create New</NavLink>
        </button>
        <button className="font-medium text-[22px]">
          <NavLink to={"Myflashcard"} style={({ isActive }) => ({
            borderBottom: isActive ? "4px solid #576CBC" : undefined,
            paddingBottom: "12px",
            borderRadius: "3px",
          })}>MyFlashcards</NavLink>
        </button>
      </div>
      <hr className="border border-[#576CBC]-700 border-gray-300 mb-8" />
    </div>

  )

}
export default Navbar