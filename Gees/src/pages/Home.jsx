import { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  const [profile, setProfile] = useState(null);

  axios.get("http://localhost:3001/profile").then((res) => {
    setProfile(res.data[0]);
  });

  return (
    <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-8 py-10 bg-[#f8f9fa] min-h-screen">
      {/* Bagian kiri */}
      <section className="md:col-span-2 space-y-8 text-gray-800">
        <div id="skills">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            My Skills
          </h3>
          <p>
            Web Project management, SEO, UX, content marketing, Web Analytics,
            and more.
          </p>
        </div>

        <div id="experience">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            My Experience
          </h3>
          <p>
            Since 2020 – Working for web hosting and web marketing agencies.
          </p>
        </div>

        <div id="studies">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            My Studies
          </h3>
          <p>Student of Klabat University</p>
        </div>

        <div id="books">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            Books I Recommend
          </h3>
          <p>Books that improved my knowledge about Web, SEO, and UX.</p>
        </div>

        <div id="hobby">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">My Hobby</h3>
          <p>I like to sing, iam part of the Unklab FEB Choir</p>
        </div>

        <div id="Movie">
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            Movies&Series I Recommend{" "}
          </h3>
          <p>
            The Walking Dead Series, 500 days of summer Movie, High&Low Movie
            Series, ....
          </p>
        </div>
      </section>

      {/* Bagian kanan */}
      <aside className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <ProfileImage />
        {profile ? (
          <div className="mt-5 text-sm text-gray-800 text-left leading-6">
            <div className="border-t border-gray-200 my-4"></div>
            <p>
              <strong className="text-gray-900">Age:</strong> {profile.age}
            </p>
            <p>
              <strong className="text-gray-900">Height:</strong>{" "}
              {profile.Height}
            </p>
            <p>
              <strong className="text-gray-900">Occupation:</strong>{" "}
              {profile.occupation}
            </p>
            <p>
              <strong className="text-gray-900">Expertise:</strong>{" "}
              {profile.expertise}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-gray-500 italic text-center">
            Loading profile...
          </p>
        )}
      </aside>
    </main>
  );
}
