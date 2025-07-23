import { GridPatternDashed } from "@/components/custom/grid-pattern";
import { Navbar } from "@/components/custom/navbar";
import LightRays from "@/components/react-bits/LightRays";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <header className="relative min-h-screen">
        <GridPatternDashed />
        <div className="absolute top-0 h-screen w-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#fff"
            raysSpeed={1.5}
            lightSpread={0.9}
            rayLength={1.3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.3}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <Navbar />
      </header>
    </div>
  );
}
