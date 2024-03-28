import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: 'Disabled for demo' }), {
    status: 401
  });

  const { publicId } = await request.json();

  const results = await cloudinary.api.delete_resources([publicId])

  return Response.json({
    data: results
  })
}