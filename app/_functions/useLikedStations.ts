import { useMemo, useSyncExternalStore } from "react";
import { LIKED_STATIONS_KEY } from "../_components/DepartureCard";

const getSnapshot = (): string => {
  if (typeof window === "undefined") return "[]";
  try {
    return window.localStorage.getItem(LIKED_STATIONS_KEY) ?? "[]";
  } catch {
    return "[]";
  }
};

const subscribe = (listener: () => void) => {
  if (typeof window === "undefined") return () => {};
  const handler = (event: StorageEvent) => {
    if (event.key === LIKED_STATIONS_KEY) listener();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
};

export default function useLikedStations() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  return useMemo(() => {
    try {
      return JSON.parse(snapshot) as string[];
    } catch {
      return [];
    }
  }, [snapshot]);
}
