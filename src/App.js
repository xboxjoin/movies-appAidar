import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
//import Background from './components/layout/Background';


class App extends React.Component {

  render() {

    return (
      <div>
        <Header/>
        <Main></Main>
        <Footer/>
        {/* <Background></Background> */}

      </div>
    )
  }
}

export default App;
