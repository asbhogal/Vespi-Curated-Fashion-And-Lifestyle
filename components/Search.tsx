import { pt_serif } from "@/lib/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Search() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="hidden lg:block search bg-transparent hover:bg-transparent rounded-none border border-transparent hover:border-black transition"
          aria-labelledby="search-label"
        >
          <span id="search-label" hidden>
            Search
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="7.5"
              r="5.75"
              stroke="black"
              stroke-width="1.5"
            />
            <line
              y1="-0.75"
              x2="5.21116"
              y2="-0.75"
              transform="matrix(0.697461 0.716622 -0.697461 0.716622 10 13)"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[25rem] w-full rounded-none border border-black">
        <div className="grid grid-cols-1 gap-4">
          <Label htmlFor="search" className={[pt_serif.className].join(" ")}>
            Search for a product or blog
          </Label>
          <Input
            id="search"
            className="rounded-none border border-black"
          ></Input>
        </div>
      </PopoverContent>
    </Popover>
  );
}
