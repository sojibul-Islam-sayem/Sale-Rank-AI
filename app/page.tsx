import Banner from "@/Components/Banner/Banner";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className=""
        style={{
          backgroundImage: "url('../')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
