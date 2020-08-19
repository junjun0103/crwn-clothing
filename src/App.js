import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShop) => {
          this.setState(
            {
              currentUser: {
                id: snapShop.id,
                ...snapShop.data(),
              },
            }
            // ,
            // () => {
            //   console.log(this.state);
            // }
          );
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
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
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
