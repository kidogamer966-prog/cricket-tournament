export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Apartment Cricket Tournament</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Matches</li>
        <li>Players</li>
        <li>Stats</li>
      </ul>
    </nav>
  );
}
