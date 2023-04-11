import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import Layout from "./Layout";
import { ROUTES_INTERNAL } from "./constants/router.constants";
import RecipePage from "./pages/RecipePage";
import { history } from "./configureStore";
import Loader from "./components/Loader/Loader";
import About from "./pages/About";
import WIP from "./components/WIP/WIP";
import WhyVegan from "./pages/WhyVegan";
import WhyHealth from "./pages/WhyHealth";
import WhyEnvironment from "./pages/WhyEnvironment";
import WhyAnimals from "./pages/WhyAnimals";
import Documentaries from "./pages/Documentaries";

const Home = React.lazy(() => import("./pages/Home"));
const Recipes = React.lazy(() => import("./pages/RecipesPage"));
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
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.RECIPES}
            element={
              <React.Suspense fallback={<Loader />}>
                <Recipes />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.RECIPE}
            element={
              <React.Suspense fallback={<Loader />}>
                <RecipePage />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.VIDEOS}
            element={
              <React.Suspense fallback={<Loader />}>
                <Videos />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.PODCASTS}
            element={
              <React.Suspense fallback={<Loader />}>
                <Podcasts />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.ABOUT}
            element={
              <React.Suspense fallback={<Loader />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.WHY_VEGAN}
            element={
              <React.Suspense fallback={<Loader />}>
                <WhyVegan />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.WHY_HEALTH}
            element={
              <React.Suspense fallback={<Loader />}>
                <WhyHealth />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.WHY_ENVIRONMENT}
            element={
              <React.Suspense fallback={<Loader />}>
                <WhyEnvironment />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.WHY_ANIMALS}
            element={
              <React.Suspense fallback={<Loader />}>
                <WhyAnimals />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.GO_VEGAN}
            element={
              <React.Suspense fallback={<Loader />}>
                <GoVegan />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.DOCUMENTARIES}
            element={
              <React.Suspense fallback={<Loader />}>
                <Documentaries />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.LOGIN}
            element={
              <React.Suspense fallback={<Loader />}>
                <WIP />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES_INTERNAL.SIGNUP}
            element={
              <React.Suspense fallback={<Loader />}>
                <WIP />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default Router;
