import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import Layout from "./Layout";
import { ROUTES_INTERNAL } from "./constants/router.constants";
import Recipe from "./pages/Recipe";
import { history } from "./configureStore";

const Home = React.lazy(() => import("./pages/Home"));
const Recipes = React.lazy(() => import("./pages/Recipes"));
const Videos = React.lazy(() => import("./pages/Videos"));
const Podcasts = React.lazy(() => import("./pages/Podcasts"));
const GoVegan = React.lazy(() => import("./pages/GoVegan"));

const Router = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.RECIPES}
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <Recipes />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.RECIPE}
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <Recipe />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.VIDEOS}
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <Videos />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.PODCASTS}
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <Podcasts />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.GO_VEGAN}
            element={
              <React.Suspense fallback={<>LOADING</>}>
                <GoVegan />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Router;
