// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
// importing the component from the library
import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
