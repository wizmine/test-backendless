import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import tabsData from "../tabs.json";
import "./app.css";

const LazyDummyTable = React.lazy(() => import("../tabs/dummyTable"));
const LazyDummyChart = React.lazy(() => import("../tabs/dummyChart"));
const LazyDummyList = React.lazy(() => import("../tabs/dummyList"));

function App() {
  return (
    <div className="app">
      <header className="header">
        {tabsData.map(({ id, title }) => {
          return (
            <Link to={id} className="link">
              {title}
            </Link>
          );
        })}
      </header>
      <Routes>
        <Route
          path="/dummyTable"
          element={
            <React.Suspense fallback="loading">
              <LazyDummyTable />
            </React.Suspense>
          }
        />
        <Route
          path="/dummyChart"
          element={
            <React.Suspense fallback="loading">
              <LazyDummyChart />
            </React.Suspense>
          }
        />
        <Route
          path="/dummyList"
          element={
            <React.Suspense fallback="loading">
              <LazyDummyList />
            </React.Suspense>
          }
        />
        <Route path="" element={<Navigate to="/dummyTable" />} />
      </Routes>
    </div>
  );
}

export default App;
