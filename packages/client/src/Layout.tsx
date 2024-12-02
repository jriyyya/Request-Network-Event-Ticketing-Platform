import { Outlet } from "react-router-dom";
import Navbar from "./shared/components/Navbar.tsx";
import navbarConfig from "./shared/signals/navbarConfig.ts";
import { useSignals } from "@preact/signals-react/runtime";

export default function () {
  return (
    <main className="relative">
      <Navbar />

      <NavbarHeightSeparator />

      <Outlet />
    </main>
  );
}

function NavbarHeightSeparator() {
  useSignals();
  return (
    <>
      <figure role="separator" style={{ height: navbarConfig.height.value }} />
    </>
  );
}
