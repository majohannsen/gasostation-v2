"use client";

import { FC } from "react";
import DepartureCard from "./DepartureCard";
import { Monitor } from "../_functions/getMonitors";

type Props = {
  monitors: Monitor[];
  sort?: boolean;
  allwaysOpen?: boolean;
};

const DepartureCards: FC<Props> = ({ monitors }) => {
  const allMonitors = monitors;

  return allMonitors.map((monitor) => (
    <DepartureCard
      key={monitor.locationStop.properties.name}
      monitor={monitor}
      limit={2}
    />
  ));
};

export default DepartureCards;
