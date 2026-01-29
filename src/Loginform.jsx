import { useState } from "react";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
    alert("All fields are required");
    return;
  }
    console.log(email, password, username);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl shadow-2xl w-80 bg-white p-8"
        >
          <h2 className="text-center font-bold text-2xl mb-2">Login</h2>

          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-300 w-full rounded-2xl p-2 mb-2 hover:bg-gray-400"
          />

          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-300 w-full rounded-2xl p-2 mb-2 hover:bg-gray-400"
          />

          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-300 w-full rounded-2xl p-2 mb-2 hover:bg-gray-400"
          />

          <button
            type="submit"
            className="p-2 bg-blue-400 w-full rounded-2xl mt-2 font-bold hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </>
  );
}

export default Loginform;
