"use client";

import DepartureCard from "@/app/_components/DepartureCard";
import fetchMonitors, { Monitor } from "@/app/_functions/getMonitors";
import getStopIDs from "@/app/_functions/getStopIds";
import { use, useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Gasostation",
//   description: "Wiener Ubahn Infos",
// };

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [stops, setStops] = useState<number[]>([]);
  const [loaderData, setLoaderData] = useState<Monitor[]>([]);

  useEffect(() => {
    setStops(getStopIDs(Number(id)));
  }, [id]);

  useEffect(() => {
    if (stops.length) {
      fetchMonitors(stops).then(setLoaderData);
    }
  }, [stops]);

  if (!stops.length) {
    return <div>Not found</div>;
  }
  return (
    !!loaderData.length &&
    loaderData.map((monitor) => (
      <DepartureCard
        key={JSON.stringify(monitor)}
        monitor={monitor}
        sort={false}
        allwaysOpen
      />
    ))
  );
}
