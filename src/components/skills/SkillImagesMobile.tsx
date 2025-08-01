import { SkillImage } from "@/app/types/skill";
import Image from "next/image";

export default function SkillImagesMobile({
  skillImages,
}: {
  skillImages: SkillImage[];
}) {
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center items-center w-full h-auto p-4">
      {skillImages.map((item) => (
        <div
          key={item.name}
          className="rounded-xl overflow-hidden bg-white/30 p-2"
          style={{ width: 80, height: 80 }}
        >
          <Image
            src={item.image}
            alt={`skill image ${item.name}`}
            width={item.width}
            height={item.height}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
