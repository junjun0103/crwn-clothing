import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );
/* example
  const HomePage = props=>{
    return(
      <div>
      <button onclick={()=> props.history.push('/topics')}Topics> </button>
      <h1>Home page</h1>
      </div>
    )
  }
*/
/* example
  const TopicsList = props=>{
    return(
      <div>
      <h1>Topic list</h1>
      <link to={`${props.match.url}/13`}>to topic 13<link>
      <link to={`${props.match.url}/15`}>to topic 15<link>
      <link to={`${props.match.url}/16`}>to topic 16<link>
      </div>
    )
  }
*/

function App() {
  return (
    <div>
      <Switch>
        {' '}
        {/* switch will match '/' first then /hats */}
        {/* example
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:hatsID' component={HatsDetail} />
        */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
