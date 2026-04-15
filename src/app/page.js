import Banner from "@/components/homepage/banner/Banner";
import Friends from "@/components/homepage/friends/Friends";
import LoadingUi from "@/components/ui/LoadingUi/LoadingUi";

import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<LoadingUi />}>
        <Friends />
      </Suspense>
    </div>
  );
};
export default Home;
