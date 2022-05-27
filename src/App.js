import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main'


class App extends React.Component {

  render() {

    return (
      <div>
        <Header/>
        <Main></Main>
        <Footer/> 
      </div>
    )
  }
}

export default App;
