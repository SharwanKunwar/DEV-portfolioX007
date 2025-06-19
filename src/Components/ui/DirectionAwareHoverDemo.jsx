
import { DirectionAwareHover } from "../ui/DirectionAwareHover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/img/sharwanjungkunwar0007.jpg";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Sharwan jung kunwar</p>
        <p className="font-normal text-sm">Forntend Engineer</p>
      </DirectionAwareHover>
    </div>
  );
}
