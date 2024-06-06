import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Fetching Users when the app loads
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);

  console.log(users);

  //Filtering Users based on input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return !loading ? (
    <section className="min-h-screen w-full p-5 text-center flex flex-col gap-8 items-center bg-gray-200">
      <div className="flex justify-between items-center w-[85%] mt-5">
        <h1 className="text-3xl font-bold">Users</h1>

        <input
          type="text"
          className="w-72 text-sm font-medium rounded-lg block p-2.5 bg-gray-300 placeholder-gray-900  text-gray-900 focus:outline-blue-500"
          placeholder="Search Users..."
          required
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="mx-auto w-[85%]">
        <div className="flex justify-between px-5 items-center bg-gray-300 p-3 font-semibold text-base">
          <p className="w-[2%]">Id</p>
          <p className="w-1/5">Name</p>
          <p className="w-1/5">Email</p>
          <p className="w-1/5">Company</p>
          <p className="w-1/5">Contact</p>
        </div>
        <ul className="flex flex-col bg-gray-300">
          {filteredUsers?.map((user) => (
            <li
              key={user.email}
              className="bg-white p-2 flex items-center gap-4 text-start hover:bg-blue-100 transition duration-200 cursor-pointer border-y"
            >
              <p className="w-[15%] font-semibold text-gray-900">{user.id}</p>
              <p className="font-semibold text-gray-700 w-1/5">{user.name}</p>
              <p className="text-gray-600 text-sm w-1/5">{user.email}</p>

              <p className="w-1/5 text-sm">{user.company.name}</p>
              <p className="text-sm">{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <>
      <div className="text-xl font-semibold flex items-center justify-center min-h-screen">
        Loading...
      </div>
    </>
  );
}

export default App;
