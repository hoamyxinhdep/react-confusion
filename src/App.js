
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import HelloClassComponent from './Component/HelloClassComponent';
import Menu from './Component/MenuComponent';
import { DISHES } from './shared/dishes';
// import HelloClassComponent from './Component/HelloClassComponent';
// import HelloFunctionComponent from './Component/HelloFunctionComponent';
// // import Count from './Component/Count';
// import DemoStateClass from './Component/DemoStateClass';
// import DemoStateFunction from './Component/DemoStateFunction';
// import HelloAsClass from './Component/HelloAsClass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
 


  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>



          </div>
        </Navbar>
        {/* <HelloClassComponent name="Anh Tuan"/> */}
        {/* <HelloClassComponent/>
        <HelloFunctionComponent/> */}
        {/* <Count/> */}
        {/* <DemoStateClass/>
        
        <DemoStateFunction/> */}
        <Menu dishes={this.state.dishes} />



      </div>

    );
  }

}


export default App;
