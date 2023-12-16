import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Subscribe() {
  return (
    <form>
      <Input className="max-w-80 w-full" placeholder="Your email"></Input>
      <Button>
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
  );
}
