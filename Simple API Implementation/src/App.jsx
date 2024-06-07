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

  // console.log(users);

  //Filtering Users based on input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return !loading ? (
    <section className="min-h-screen w-full p-2 md:p-5 text-center flex flex-col gap-8 items-center bg-gray-200">
      <div className="flex justify-between items-center w-[85%] mt-5">
        <h1 className="text-3xl font-bold">Users</h1>

        <input
          type="text"
          className="w-44 md:w-72 text-sm font-medium rounded-lg block p-2.5 bg-gray-300 placeholder-gray-900  text-gray-900 focus:outline-blue-500"
          placeholder="Search Users..."
          required
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="mx-auto w-[95%] md:w-[85%]">
        <div className="hidden md:flex justify-between rounded-md px-5 items-center bg-gray-300 p-3 font-semibold text-base">
          <p className="w-[1%]">Id</p>
          <p className="w-1/3">Email</p>
          <p className="w-1/3">Company</p>
          <p className="w-1/3">Contact</p>
        </div>
        <ul className="flex flex-col bg-gray-300">
          {filteredUsers?.map((user) => (
            <li
              key={user.email}
              className="bg-white p-2 flex items-center gap-4 text-start hover:bg-blue-100 transition duration-200 cursor-pointer border-y"
            >
              <p className="w-[8%] pl-3 md:w-[15%] font-semibold text-gray-900">
                {user.id}
              </p>

              <div className="flex flex-col w-1/2 md:w-1/4">
                <p className="font-semibold text-gray-700 text-sm md:text-base">
                  {user.name}
                </p>
                <p className="text-gray-600 text-[11px] sm:text-sm md:text-base font-medium">
                  {user.email}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between w-1/2 md:w-1/2">
                <p className="text-[11px] sm:text-sm font-medium pl-0 md:pl-8">
                  {user.company.name}
                </p>
                <p className="text-[11px] sm:text-sm">{user.phone}</p>
              </div>
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
