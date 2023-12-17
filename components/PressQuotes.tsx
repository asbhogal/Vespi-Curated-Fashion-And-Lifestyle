import Image from "next/image";

export default function PressQuotes() {
  return (
    <div>
      <h2 className="press-quote">
        “Beautiful collection of indie American brands at a fair price”
      </h2>
      <div className="grid grid-cols-[auto_auto_auto_auto] gap-[30px] md:gap-20 items-center max-w-[41.125rem] w-full mx-auto mt-[3.5625rem] md:mt-20">
        <Image
          src="/logos/Monocle.jpg"
          alt="Monocle logo"
          width={100}
          height={50}
        />
        <Image src="/logos/GQ.png" alt="GQ logo" width={100} height={50} />
        <Image
          src="/logos/HS.jpg"
          alt="Highsnobiety logo"
          width={1200}
          height={50}
        />
        <Image
          src="/logos/HYPEBEAST.png"
          alt="Hypebeast logo"
          width={120}
          height={50}
        />
      </div>
    </div>
  );
}
