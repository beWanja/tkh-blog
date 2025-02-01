import Link from "next/link";


/*This is a reusable navigation bar with links to different sections 
of the website (e.g., Home, About, Contact).

COMPLETE THE LANDING LINKS HERE
*/
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Beauttah's Blog</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
