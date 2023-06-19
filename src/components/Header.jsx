/* here we are making header of website which containes header image*/
import logo from '../assets/brandlogo.png'

export const Header = () => {
  return (

    <div className="App-header border-b-4 border-orange-200 border-solid">
      <img src={logo} alt="Flashcard Generator" className="img" />

    </div>





  )
}