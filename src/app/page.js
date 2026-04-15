import Banner from "@/components/homepage/banner/Banner";
import Friends from "@/components/homepage/friends/Friends";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Friends />
    </div>
  );
};
export default Home;
