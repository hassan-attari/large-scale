export default async function BlogDetails({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  return (
    <div className="flex items-center justify-center m-auto text-blue-500">
      <h1 className="text-3xl font-bold">{slug}</h1>
    </div>
  );
}
