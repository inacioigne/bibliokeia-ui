import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const params = new URLSearchParams();
  params.append("q", "id:bka-1");

  const response = await fetch(
    `http://localhost:8983/solr/authority/select?${params.toString()}`
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await response.json()
  return NextResponse.json(data)
};
