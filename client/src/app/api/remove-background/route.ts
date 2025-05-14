import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large." }, { status: 400 });
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate returning a transparent image URL (later replace by real processing)
    return NextResponse.json({
      success: true,
      processedImageUrl:
        "https://placehold.co/400x400.png?text=Removed+Background",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
