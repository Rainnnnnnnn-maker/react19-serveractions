"use client";

import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[]; // Promiseではなく解決済みのデータを受け取る
};

const Use = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-blue-50 shadow-md p-4 my-6 rounded-lg"
        >
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};

export default Use;
