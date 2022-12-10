import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import Footer from './Component/Footer/Footer';
import MyProject from './Component/MyProject/MyProject';
import MySkill from './Component/MySkill/MySkill';
import Navber from './Component/Navber/Navber';
import Resume from './Component/Resume/Resume';

function App() {
  return (
    <div className="bg-black">
      <Navber></Navber>
      <AboutMe></AboutMe>
      <MyProject></MyProject>
      <Resume></Resume>
      <MySkill></MySkill>
      <Footer></Footer>
    </div>
  );
}

export default App;
