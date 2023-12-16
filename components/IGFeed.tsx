type IGPostType = {
  id: number;
  imgSrc: string;
  imgAlt: string;
};

type IGResponse = {
  data: IGPostType[];
};

export default async function Page() {
  const getData = async (): Promise<IGResponse> => {
    const res = await fetch("https://vespi-fashion.vercel.app/api/IG");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  };

  try {
    const posts = await getData();
    return (
      <main>
        {posts.data.map((post) => (
          <ul key={post.id}>
            <li>{post.imgSrc}</li>
          </ul>
        ))}
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:");
    return <main>Error fetching data</main>;
  }
}
