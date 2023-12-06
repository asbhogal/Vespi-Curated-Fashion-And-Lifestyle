"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const iGFeedSchema = z.object({
  id: z.number(),
  imgSrc: z.string(),
  imgAlt: z.string(),
});

type IGFeed = z.infer<typeof iGFeedSchema>;

export default function IGFeed() {
  const [validatedPosts, setValidatedPosts] = useState<IGFeed[]>([]);

  useEffect(() => {
    fetch("/api/IG")
      .then((res) => res.json())
      .then((post: unknown) => {
        const validatedData = iGFeedSchema.array().safeParse(post);

        if (!validatedData.success) {
          console.error(validatedData.error);
          return;
        }

        setValidatedPosts(validatedData.data);
      });
  }, []);

  return (
    <div>
      {validatedPosts.map((post) => (
        <ul key={post.id}>
          <li>{post.imgSrc}</li>
        </ul>
      ))}
    </div>
  );
}
