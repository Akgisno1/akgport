import Home from "@/components/Home";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
