"use client";

import { useMemo, useState } from "react";
import { PiHouseBold } from "react-icons/pi";
import stations from "../_data/stations";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return stations
      .filter((station) =>
        station.PlatformText.toLowerCase().startsWith(query)
      )
      .slice(0, 5);
  }, [search]);

  return (
    <div className="p-2 flex flex-row gap-2 items-center justify-between">
      <div className="w-6 h-6">
        {pathname !== "/" && (
          <Link href="/">
            <PiHouseBold className="h-full w-full" />
          </Link>
        )}
      </div>

      <div className="relative">
        <input
          className="p-2 px-3 rounded-md relative bg-slate-200"
          type="text"
          value={search}
          placeholder="Station suchen"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        {!!search.length && !!suggestions.length && (
          <div className="absolute w-full mt-1">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.DIVA}
                className="border-slate-400 border-t first:border-t-0 bg-slate-200 first:rounded-t-md last:rounded-b-md"
              >
                <Link
                  href={"/station/" + suggestion.DIVA}
                  onClick={() => setSearch("")}
                >
                  <div className="px-3 py-2">{suggestion.PlatformText}</div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-6 h-6"></div>
    </div>
  );
}
