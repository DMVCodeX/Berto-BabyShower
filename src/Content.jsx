import { Home } from "./Home";
import { Invitation } from "./Invitation";
import { Registry } from "./Registry";
import { Accommodations } from "./Accommodations";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Invitation />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/accommodations" element={<Accommodations />} />
      </Routes>
    </div>
  );
}
