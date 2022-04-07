import Header from '../src/Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from '../src/Components/Cart/Cart';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
