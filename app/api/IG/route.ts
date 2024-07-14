import { NextResponse } from "next/server";

export async function GET() {
  const instagramPosts = [
    {
      id: 1,
      imgSrc: "1.jpg",
      imgAlt: "A small pile of clothes neatly folded, resting on a white chair",
    },
    {
      id: 2,
      imgSrc: "2.jpg",
      imgAlt:
        "A young man in blue blazer and sweater and tartan-style trousers standing in front of a building",
    },
    {
      id: 3,
      imgSrc: "3.jpg",
      imgAlt:
        "A young woman wearing a reverse dark-blue cap and oversized biege sweater sitting on a stool",
    },
    {
      id: 4,
      imgSrc: "4.jpg",
      imgAlt:
        "A middle-aged black man with a beard, red beanie and black turtleneck against a rural backdrop",
    },
    {
      id: 5,
      imgSrc: "5.jpg",
      imgAlt:
        "A young woman wearing a dark blue checkered jacket standing in the street overlooking her shoulder",
    },
  ];

  return NextResponse.json({ data: instagramPosts }, { status: 200 });
}
