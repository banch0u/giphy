import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routesArr } from './routes';
import Header from './components/Layout/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <item.component />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
