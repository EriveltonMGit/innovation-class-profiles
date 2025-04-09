/* eslint-disable @next/next/no-img-element */
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
    <div className="mt-6 p-6 bg-white rounded-xl shadow-md flex flex-col items-center max-w-sm text-center">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.name ?? user.login}</h2>
      <p className="text-gray-600 mt-2">{user.bio ?? "Sem bio disponível."}</p>
    </div>
  );
}
