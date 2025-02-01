import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="text-center p-10 bg-gray-100">
        <h2 className="text-3xl font-bold">Welcome to My Blog</h2>
        <p className="text-lg text-gray-600"> Here, I'll post personal Essays, Poems, Journals & Scriptural Highlights about my faith journey</p>
      </header>
      <main className="p-5">
        {/* Blog Posts Section - To be implemented later */}
      </main>
    </div>
  );
}
