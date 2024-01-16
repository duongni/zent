export async function GET() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=WA&api_key=${apiKey}`
  );
  const data = await res.json();
  console.log(data);
  return Response.json({ data });
}
