import { FC } from "react";
import { DepartureTime } from "../_functions/getMonitors";
import getLineColor from "../_functions/getLineColor";

export type Line = "U1" | "U2" | "U3" | "U4" | "U5" | "U6";

const METRO_TYPE = "ptMetro";

type Props = {
  line: Line;
  type: string;
  destination: string;
  time: DepartureTime;
};

const MonitorLine: FC<Props> = ({ line, type, destination, time }) => {
  return (
    <li className="flex flex-row gap-2 items-center" key={destination + time}>
      <div
        className="rounded-md py-0.5 px-2 my-1 text-white"
        style={{
          backgroundColor: getLineColor(type === METRO_TYPE ? line : type),
        }}
      >
        {line}
      </div>
      <div>{destination}</div>
      <div className="grow flex justify-end">{time.countdown} min</div>
    </li>
  );
};

export default MonitorLine;
