import React from 'react';
import Image from './Image';
import ImageCat from './imageCat.jpg';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ImageCat} altaternativeText='Cute cat staring'/>
      </main>
    );
  }
}
 
export default App;