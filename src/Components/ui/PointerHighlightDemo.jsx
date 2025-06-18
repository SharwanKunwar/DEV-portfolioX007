import { PointerHighlight } from "@/Components/ui/PointerHighlight";

export function PointerHighlightDemo() {
  return (
    <div
      className="mx-auto max-w-lg py-20 text-2xl  text-white font-bold tracking-tight md:text-4xl">
            <PointerHighlight>
        <span>About Me</span>
      </PointerHighlight>
    </div>
  );
}
