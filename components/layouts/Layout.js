import Link from "next/link";

function Layout({ children }) {
  return (
    <div >
      <header className="flex px-6 py-4 justify-between absolute top-0 left-0 w-full z-20">
        <div className="text-gray-200 text-2xl  bg-[#424242c2] px-2 py-1 rounded-xl"><Link href="/">Ghazal foods</Link></div>
        <div>
          <nav>
            <ul className="flex gap-4 text-lg text-gray-800">
              <li><Link href="/menu">menu</Link> </li>
              <li>categories</li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-red-700 text-center text-white">Created by ghazal</footer>
    </div>
  );
}

export default Layout;
