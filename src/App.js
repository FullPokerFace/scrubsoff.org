
import './style/global.css';

//Components
import Showcase from './components/Showcase';
import Section from './components/Section';

//Sections
import ThePetition from './components/Sections/ThePetition';
import SpreadTheWord from './components/Sections/SpreadTheWord';
import TheTeam from './components/Sections/TheTeam';
import Subscribe from './components/Sections/Subscribe';
import Fundraiser from './components/Sections/Fundraiser';


//Images
import sectionBgImage1 from './assets/img-1.jpg'
import Footer from './components/Footer';

const loadComponent = (Component) => <Component />


function App() {


  return (
    <div className="App">
      <Showcase/>
      <Section title='the petition' component={loadComponent(ThePetition) } id="ThePetition"/>
      <Section title='spread the word' bgImage={sectionBgImage1} component={loadComponent(SpreadTheWord)}  bgColor='#000'  id="SpreadTheWord"/>
      <Section title='the people' component={loadComponent(TheTeam)}  id="TheTeam"/>
      <Section title='subscribe' component={loadComponent(Subscribe)} bgColor='#3D404E'  id="Subscribe"/>
      <Section title='fundraiser' component={loadComponent(Fundraiser)} id="Fundraiser"/>
      <Footer/>
    </div>
  );
}

export default App;
