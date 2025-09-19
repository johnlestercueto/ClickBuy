import { Route } from "react-router-dom";

import MainPage from "../../page/MainPage";

export const homeRoutes = (
  <>
    <Route path="/" element={<MainPage />} />
  </>
);
