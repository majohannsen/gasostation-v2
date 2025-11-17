"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import fetchMonitors, { Monitor } from "./_functions/getMonitors";
import getStopIDs from "./_functions/getStopIds";
import DepartureCards from "./_components/DepartureCards";
import normalizeError from "./_functions/normalizeError";
import useLikedStations from "./_functions/useLikedStations";

// export const metadata: Metadata = {
//   title: "Gasostation",
//   description: "Wiener Ubahn Infos",
// };

export default function Index() {
  const likedStations = useLikedStations();

  const divas = useMemo(() => likedStations.map((s) => Number(s)), [likedStations]);
  const stopIds = useMemo(
    () => divas.flatMap((diva) => getStopIDs(diva)),
    [divas]
  );

  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const loading = monitors.length === 0 && stopIds.length > 0 && error == null;

  useEffect(() => {
    if (stopIds.length === 0) return;

    let cancelled = false;
    fetchMonitors(stopIds)
      .then((data) => {
        if (!cancelled) setMonitors(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(normalizeError(err));
      });

    return () => {
      cancelled = true;
    };
  }, [stopIds]);
  return (
    <div className="flex flex-col gap-3">
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? (
          <div>
            Loading stops{" "}
            <pre className="inline"> {JSON.stringify(stopIds)}</pre>
          </div>
        ) : !error ? (
          <DepartureCards monitors={monitors} />
        ) : (
          <pre>{JSON.stringify(error, null, 2)}</pre>
        )}
      </Suspense>
    </div>
  );
}
