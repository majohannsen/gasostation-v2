export type Monitor = {
  locationStop: {
    properties: {
      name: string; // DIVA Nummer der Haltestelle (=Haltestellennummer der el. Fahrplanauskunft)
      title: string; // Name der Haltestelle
    };
  };
  lines: {
    name: string; // Name der Linie (e.g.: 13A)
    towards: string; // Name des Ziels (e.g.: Burggasse, Stadthalle U)
    type: string; // Fahrzeugtyp (ptTram, ...)
    departures: {
      departure: {
        departureTime: {
          timePlanned: string; // Abfahrtzeit laut Fahrplan
          timeReal?: string; // Prognostizierte Abfahrtzeit (Echtzeit)
          countdown: number; // Verbleibende Minuten bis zur Abfahrt
        };
      }[];
    };
  }[];
};

export type DepartureTime =
  Monitor["lines"][number]["departures"]["departure"][number]["departureTime"];

export default async function fetchMonitors(stopIds: (number | string)[]) {
  const params = new URLSearchParams();
  stopIds.forEach((id) => params.append("stopId", id.toString()));

  const res = await fetch("/api/monitor?" + params.toString());
  const data = await res.json();
  const monitors: Monitor[] = data.data.monitors;
  const cleanedMonitors: Monitor[] = [];
  if (monitors.length) {
    monitors.forEach((monitor) => {
      const existingMonitor = cleanedMonitors.find(
        (m) =>
          m.locationStop.properties.name ===
          monitor.locationStop.properties.name
      );
      if (existingMonitor) {
        existingMonitor.lines.push(...monitor.lines);
      } else {
        cleanedMonitors.push(monitor);
      }
    });
    return cleanedMonitors;
  } else return [];
}
