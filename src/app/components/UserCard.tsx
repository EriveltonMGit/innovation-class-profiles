/* eslint-disable @next/next/no-img-element */

import "./user.css";

type Props = {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
  };
};

export default function UserCard({ user }: Props) {
  return (
    <div className="container_user">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <div>
        <h2 >{user.name ?? user.login}</h2>
        <p>
          {user.bio ?? "Sem bio disponível."}
        </p>
      </div>
    </div>
  );
}
