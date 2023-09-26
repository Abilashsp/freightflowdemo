import Navbar from "./navbar";
import RightNav from "./RightNav";

export default function Layout({ children }) {
  return (
    <div className="flex justify-between h-screen">
      <Navbar />
      <main className="w-screen h-screen p-6 overflow-auto bg-white">{children}</main>
    </div>
  );
}
