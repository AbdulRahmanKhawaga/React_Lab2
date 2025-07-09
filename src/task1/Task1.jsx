import React, { useState } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

const usersData = [
  {
    id: 1,
    name: "AbdulRahman Khawaga",
    email: "AbdulRahman@gmail.com",
    phone: "01018996721",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 2,
    name: "Mohamed Yasser",
    email: "mohamed@gmail.com",
    phone: "0154846055",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: false
  },
  {
    id: 3,
    name: "Ali Hassan",
    email: "ali@gmail.com",
    phone: "0123456789",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: true
  },
  {
    id: 4,
    name: "Malak Mohamed",
    email: "Malak@gmail.com",
    phone: "0122256789",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: false
  },
  {
    id: 5,
    name: "Yasser Mohamed",
    email: "Yasser@gmail.com",
    phone: "0121256789",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: false
  },
  {
    id: 6,
    name: "Ebrahem Mahmoud",
    email: "Ebrahem@gmail.com",
    phone: "0121256742",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: false
  },
  {
    id: 7,
    name: "Khaled Talaat",
    email: "Loda@gmail.com",
    phone: "0121252742",
    picture: "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/my-63.png",
    verified: false
  },
];

function Task1() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");

  const handleSearch = (email) => {
    setSearch(email);
    const filtered = usersData.filter(user =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
    setUsers(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setUsers(usersData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <SearchBar search={search} onSearch={handleSearch} onReset={handleReset} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Task1;
