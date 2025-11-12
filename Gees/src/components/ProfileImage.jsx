import { useState } from "react";
import axios from "axios";

export default function ProfileImage() {
  const [profile, setProfile] = useState(null);

  axios.get("http://localhost:3001/profile").then((res) => {
    setProfile(res.data[0]);
  });

  return (
    <div className="text-center">
      <img
        src="/ProfileVite.jpg"
        alt="Profile"
        className="w-40 aspect-square object-cover rounded-none shadow-md mx-auto"
      />

      {profile ? (
        <>
          <h2 className="mt-4 text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">Student of {profile.uni}</p>
          <p className="text-sm text-gray-500">{profile.asal}</p>
        </>
      ) : (
        <p className="text-gray-500 mt-4 italic">Loading profile...</p>
      )}
    </div>
  );
}
