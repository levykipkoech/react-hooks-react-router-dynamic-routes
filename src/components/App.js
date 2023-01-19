import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
const [movies, setMovies] = useState({
1: { id: 1, title: "A River Runs Through It" },
2: { id: 2, title: "Se7en" },
3: { id: 3, title: "Inception" },
});

return (
<div>
<NavBar />
<Switch>
<Route path="/movies">
<MoviesPage movies={movies} setMovies={setMovies} />
</Route>
<Route exact path="/">
<div>Home</div>
</Route>
</Switch>
</div>
);
}

export default App;

