import React from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => me(),
  });
  console.log(data);
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-8">WELCOME {data?.username}</h1>
        <img
          style={{
            borderRadius: 500,
            width: 150,
            height: 150,
            display: "center",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          src={"https://react-bank-project.eapi.joincoded.com/" + data?.image}
        />

        <p className="text-2xl leading-relaxed text-left">
          Balance {data?.balance}
        </p>
      </div>
    </div>
  );
};

export default Profile;
