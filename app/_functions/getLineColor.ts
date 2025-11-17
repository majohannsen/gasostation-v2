export default function getLineColor(line: string): string {
  const lineColors: { [key: string]: string } = {
    U1: "#f31e26",
    U2: "#985c9e",
    U3: "#f9762b",
    U4: "#009a4b",
    U5: "#00ddff",
    U6: "#905f36",
    ptBusCity: "#111199",
    ptTram: "#f31e26",
    ptTramWLB: "#f31e26",
  };
  return lineColors[line] || "#333333";
}
