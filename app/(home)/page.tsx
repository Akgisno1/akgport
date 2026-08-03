import Home from "@/components/Home";
import { AuroraBackground } from "@/components/magicui/aurora-background";


export default function Page() {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="overflow-x-hidden h-full" id="home">
        <AuroraBackground showRadialGradient={true}>
          <Home />
        </AuroraBackground>
      </div>
    </div>
  );
}
