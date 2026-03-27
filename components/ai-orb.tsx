"use client"

import { Warp } from "@paper-design/shaders-react"
import { useState } from "react"
import { useAudioLevel } from "@/hooks/use-audio-level"

type Theme = "default" | "angsty" | "tibor" | "minty"

const DEFAULT_PARAMS = {
  proportion: 0.35,
  softness: 1,
  distortion: 0.32,
  swirl: 1,
  swirlIterations: 0,
  shape: "edge" as "checks" | "stripes" | "edge",
  shapeScale: 0,
  speed: 12.2,
  scale: 0.31,
  rotation: 176,
  offsetX: 0.65,
  offsetY: 0.09,
  color1: "#ade7ff",
  color2: "#ebf4ff",
  color3: "#00bbff",
}

const themes: Record<Theme, { color1: string; color2: string; color3: string }> = {
  default: { color1: "#ade7ff", color2: "#ebf4ff", color3: "#00bbff" },
  angsty: { color1: "#ffffff", color2: "#bfbfbf", color3: "#ffffff" },
  tibor: { color1: "#ff6f00", color2: "#fec398", color3: "#ffffff" },
  minty: { color1: "#00c853", color2: "#98fec3", color3: "#ffffff" },
}

const themeLabels: Record<Theme, string> = {
  default: "Judge Turing",
  angsty: "Judge Smith",
  tibor: "Judge John",
  minty: "Judge Brown",
}

export function AiOrb() {
  const [theme, setTheme] = useState<Theme>("default")
  const { audioLevel, isListening, startListening, stopListening } = useAudioLevel()
  const [params, setParams] = useState({ ...DEFAULT_PARAMS })

  const handleThemeChange = (t: Theme) => {
    setTheme(t)
    const themeColors = themes[t]
    setParams({
      ...params,
      color1: themeColors.color1,
      color2: themeColors.color2,
      color3: themeColors.color3,
    })
  }

  const handleCall = () => {
    if (isListening) {
      stopListening()
      window.open("https://oral-argument-app--williamsmith08.replit.app", "_blank")
    } else {
      startListening()
    }
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center gap-8">

      {/* Theme selector */}
      <div className="flex gap-2">
        {(Object.keys(themes) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => handleThemeChange(t)}
            className={`font-sans text-[10px] px-3 py-1 rounded-full transition-colors ${
              theme === t ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {themeLabels[t]}
          </button>
        ))}
      </div>

      {/* AI Orb - circular clipped shader */}
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: 280,
          height: 280,
          transform: `scale(${1 + audioLevel * 0.15})`,
          transition: "transform 50ms ease-out",
        }}
      >
        <Warp
          width={280}
          height={280}
          colors={[params.color1, params.color2, params.color3]}
          proportion={params.proportion}
          softness={params.softness}
          distortion={params.distortion}
          swirl={params.swirl}
          swirlIterations={params.swirlIterations}
          shape={params.shape}
          shapeScale={params.shapeScale}
          speed={params.speed}
          scale={params.scale}
          rotation={params.rotation}
          offsetX={params.offsetX}
          offsetY={params.offsetY}
        />
      </div>

      {/* Call button */}
      <button
        onClick={handleCall}
        className={`font-sans text-[10px] px-2.5 py-1 rounded transition-colors ${
          isListening ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {isListening ? "end call" : "START"}
      </button>
    </div>
  )
}
