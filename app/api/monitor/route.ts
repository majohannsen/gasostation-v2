import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url: URL = new URL("http://www.wienerlinien.at/ogd_realtime/monitor");
  const stopIds = req.nextUrl.searchParams.getAll("stopId");

  if (!stopIds.length) {
    return NextResponse.json(
      { error: "Missing stopId query parameter" },
      {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
  }
  stopIds.forEach((id) => url.searchParams.append("stopId", id));

  try {
    const response = await fetch(url);
    const json = await response.json();

    return NextResponse.json(json, {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
  }
}
