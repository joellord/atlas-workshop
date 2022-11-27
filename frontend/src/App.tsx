import "./styles.css";
import "./fonts.css";
import LeafygreenProvider from '@leafygreen-ui/leafygreen-provider';
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Chefs from "./pages/Chefs";
import Stats from "./pages/Stats";

function App() {
  return (
    <LeafygreenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="recipe/:recipeId" element={<Recipe />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="chefs" element={<Chefs />} />
            <Route path="stats" element={<Stats />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </LeafygreenProvider>
  );
}

export default App;