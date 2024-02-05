
//import './Main.css';

import About from './About';
import CenteredCloudWithText from './cloud';
import Foote from './footer';
import Front from './front';
import Header from './header';
import Horizontal from './horizontal';




function Main() {
  const containerStyle = {
    overflow: 'hidden',
  };
  return (
    <div className="Main">
      <header className='Main-header'>
      <Header/>
      </header>
      <div className='Frontt' style={containerStyle} ><Front/></div>
      
      <div className='aboutt'><About/></div>
      <div className='Horizontall'><Horizontal/></div>
      <div className='cloudd'><CenteredCloudWithText/></div>
      <div className='footerr'><Foote/></div>



    </div>
  );
}

export default Main;