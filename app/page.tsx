import Navbar from "@/components/nav/navbar";
import Banner from "@/components/body/banner";

export default function Home() {
  return (
    <main>
      <div className="w-full imga bg-center">
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
          <Banner />
        </div>
      </div>
    </main>
  );
}
