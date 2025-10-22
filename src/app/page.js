import Image from "next/image";
import LiveStats from "../components/LiveStats";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeyMoments from "../components/KeyMoments";
import MatchCard from "../components/MatchCard";

export default function Home() {
  const matches = [
    { id: 1, team1: "Red Tigers", team2: "Blue Bulls", score: "120/4" },
    { id: 2, team1: "Yellow Hawks", team2: "Green Lions", score: "95/6" },
  ];

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);

return (
  <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
    <Navbar />

    <header className="text-center py-12 bg-[#0b132b] text-white shadow-lg">
      <h1 className="text-5xl font-extrabold mb-2 text-[#f6c90e]">
        🏏 Apartment Cricket Tournament
      </h1>
      <p className="text-lg text-gray-300">
        Follow all matches, players, and stats here!
      </p>
    </header>

    <main className="p-10">
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Key Moments
        </h2>
        <KeyMoments />
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0b132b]">
          Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <LiveStats />
      </section>
    </main>

    <Footer />
  </div>
);















































}
















































