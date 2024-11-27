import { NextResponse } from "next/server";
import Blog from "../models/blog";

interface BlogDocument {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export async function GET(): Promise<NextResponse> {
  try {
    const blogs: BlogDocument[] = await Blog.find();

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
