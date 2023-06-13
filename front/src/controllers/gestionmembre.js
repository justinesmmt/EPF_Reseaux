import ControllerPage from './page';
import ViewHome from '../views/gestionmembre';

const Home = class Home {
  constructor() {
    this.run();
  }

  run() {
    new ControllerPage(ViewHome());
  }
};
export default Home;