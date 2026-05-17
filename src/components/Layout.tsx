import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import { useStatsCounter } from "../hooks/useStatsCounter";

export default function Layout() {
  useScrollAnimations();
  useStatsCounter();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
