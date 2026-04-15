import CountCard from "@/components/ui/CountCard";
import FriendCard from "@/components/ui/FriendCard";
import React from "react";

const Friends = async () => {
  const res = await fetch(
    "https://a07-keen-keeper-nine.vercel.app//data.json",
    {
      //   cache: "no-store",
    },
  );
  const friends = await res.json();
  //   console.log(friends);

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  const needsAttention = friends.filter(
    (friend) => friend.status === "overdue" || friend.status === "almost due",
  ).length;

  const interactionsThisMonth = friends.filter(
    (friend) => friend.days_since_contact <= 30,
  ).length;

  return (
    <div className="container max-w-3/4  mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 border-b pb-10 border-gray-200">
        <CountCard number={totalFriends}>Total Friends</CountCard>
        <CountCard number={onTrack}>On Track</CountCard>
        <CountCard number={needsAttention}>Needs Attention</CountCard>
        <CountCard number={interactionsThisMonth}>
          Interactions This Month
        </CountCard>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Friends </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
