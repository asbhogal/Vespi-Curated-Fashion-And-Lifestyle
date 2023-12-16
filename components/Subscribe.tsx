import { pt_serif } from "@/lib/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Subscribe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 max-w-[960px] w-full">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="black" />
            <path
              d="M3 8.5C5.5 10.5 8.5 10.5 11 8.5"
              stroke="white"
              stroke-width="1.5"
            />
            <circle cx="4" cy="5" r="1" fill="white" />
            <circle cx="10" cy="5" r="1" fill="white" />
          </svg>
          <p className={["uppercase text-sm", pt_serif.className].join(" ")}>
            We also make emails
          </p>
        </div>
        <p className={["text-[#6A6161] text-sm", pt_serif.className].join(" ")}>
          Receive updates and offers you&apos;ll actually be interested in.
          Unsubscribe any time.
        </p>
      </div>
      <form className="relative inline-block">
        <Input
          className="max-w-80 w-full h-[3.625rem] rounded-none border border-black"
          placeholder="Your email"
        ></Input>
        <Button
          className="bg-transparent hover:bg-transparent rounded-none absolute right-[.3125rem] top-2"
          aria-labelledby="submit-email"
        >
          <span id="submit-email" hidden>
            Submit Email
          </span>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.29286 4.50004L7.6464 6.14643L8.3535 6.85355L10.8535 4.3536L11.2071 4.00004L10.8536 3.64648L8.35355 1.14648L7.64645 1.85359L9.29289 3.50004L0 3.50004V4.50004L9.29286 4.50004Z"
              fill="black"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
}
