import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";

const Friends = () => {
  const {
    data: friends,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  // 🔄 Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // ❌ Error state
  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error?.response?.data?.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* 🔥 Heading */}
      <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

      {/* 😶 Empty state */}
      {friends?.length === 0 ? (
        <div className="text-center opacity-70">
          No friends yet 😢
        </div>
      ) : (
        /* 🧩 Grid layout */
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;