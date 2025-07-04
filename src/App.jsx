import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";

function App() {
  return (
    <div className="bg-p1 leading-relaxed text-p4/75 antialised selection:bg-s3 selection:text-s1">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
