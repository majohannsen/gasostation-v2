// data source: https://www.data.gv.at/katalog/dataset/wiener-linien-echtzeitdaten-via-datendrehscheibe-wien#resources
// filename: wienerlinien-ogd-steige.csv
// date: 2024-06-10
export type Platform = {
  StopID: number;
  Platform: string;
};
const platforms: Platform[] = [
  {
    StopID: 8,
    Platform: "G",
  },
  {
    StopID: 13,
    Platform: "B",
  },
  {
    StopID: 18,
    Platform: "J",
  },
  {
    StopID: 22,
    Platform: "D",
  },
  {
    StopID: 36,
    Platform: "E",
  },
  {
    StopID: 39,
    Platform: "G",
  },
  {
    StopID: 42,
    Platform: "B",
  },
  {
    StopID: 46,
    Platform: "C",
  },
  {
    StopID: 51,
    Platform: "D",
  },
  {
    StopID: 95,
    Platform: "J",
  },
  {
    StopID: 124,
    Platform: "H",
  },
  {
    StopID: 134,
    Platform: "A",
  },
  {
    StopID: 137,
    Platform: "G",
  },
  {
    StopID: 147,
    Platform: "C",
  },
  {
    StopID: 161,
    Platform: "B",
  },
  {
    StopID: 176,
    Platform: "A",
  },
  {
    StopID: 189,
    Platform: "E",
  },
  {
    StopID: 220,
    Platform: "B",
  },
  {
    StopID: 234,
    Platform: "A",
  },
  {
    StopID: 253,
    Platform: "C",
  },
  {
    StopID: 259,
    Platform: "D",
  },
  {
    StopID: 302,
    Platform: "F",
  },
  {
    StopID: 340,
    Platform: "E",
  },
  {
    StopID: 370,
    Platform: "D",
  },
  {
    StopID: 400,
    Platform: "C",
  },
  {
    StopID: 404,
    Platform: "E",
  },
  {
    StopID: 422,
    Platform: "G",
  },
  {
    StopID: 426,
    Platform: "B",
  },
  {
    StopID: 464,
    Platform: "A",
  },
  {
    StopID: 470,
    Platform: "C",
  },
  {
    StopID: 477,
    Platform: "B",
  },
  {
    StopID: 483,
    Platform: "B",
  },
  {
    StopID: 484,
    Platform: "C",
  },
  {
    StopID: 493,
    Platform: "A",
  },
  {
    StopID: 500,
    Platform: "A",
  },
  {
    StopID: 573,
    Platform: "A",
  },
  {
    StopID: 574,
    Platform: "C",
  },
  {
    StopID: 666,
    Platform: "A",
  },
  {
    StopID: 679,
    Platform: "A",
  },
  {
    StopID: 688,
    Platform: "B",
  },
  {
    StopID: 723,
    Platform: "B",
  },
  {
    StopID: 724,
    Platform: "A",
  },
  {
    StopID: 756,
    Platform: "D",
  },
  {
    StopID: 764,
    Platform: "H",
  },
  {
    StopID: 768,
    Platform: "E",
  },
  {
    StopID: 789,
    Platform: "B",
  },
  {
    StopID: 806,
    Platform: "C",
  },
  {
    StopID: 826,
    Platform: "C",
  },
  {
    StopID: 833,
    Platform: "J",
  },
  {
    StopID: 847,
    Platform: "H",
  },
  {
    StopID: 851,
    Platform: "A",
  },
  {
    StopID: 885,
    Platform: "B",
  },
  {
    StopID: 923,
    Platform: "E",
  },
  {
    StopID: 998,
    Platform: "D",
  },
  {
    StopID: 1000,
    Platform: "C",
  },
  {
    StopID: 1010,
    Platform: "A",
  },
  {
    StopID: 1011,
    Platform: "A",
  },
  {
    StopID: 1012,
    Platform: "B",
  },
  {
    StopID: 1021,
    Platform: "B",
  },
  {
    StopID: 1024,
    Platform: "A",
  },
  {
    StopID: 1052,
    Platform: "B",
  },
  {
    StopID: 1120,
    Platform: "C1",
  },
  {
    StopID: 1125,
    Platform: "G",
  },
  {
    StopID: 1206,
    Platform: "B",
  },
  {
    StopID: 1212,
    Platform: "A",
  },
  {
    StopID: 1274,
    Platform: "G",
  },
  {
    StopID: 1299,
    Platform: "F",
  },
  {
    StopID: 1303,
    Platform: "Q",
  },
  {
    StopID: 1308,
    Platform: "G",
  },
  {
    StopID: 1325,
    Platform: "P",
  },
  {
    StopID: 1336,
    Platform: "B",
  },
  {
    StopID: 1345,
    Platform: "B",
  },
  {
    StopID: 1360,
    Platform: "E",
  },
  {
    StopID: 1371,
    Platform: "F",
  },
  {
    StopID: 1490,
    Platform: "J",
  },
  {
    StopID: 1502,
    Platform: "I",
  },
  {
    StopID: 1531,
    Platform: "E",
  },
  {
    StopID: 1596,
    Platform: "E",
  },
  {
    StopID: 1610,
    Platform: "B",
  },
  {
    StopID: 1656,
    Platform: "B",
  },
  {
    StopID: 1660,
    Platform: "H",
  },
  {
    StopID: 1678,
    Platform: "E",
  },
  {
    StopID: 1683,
    Platform: "D",
  },
  {
    StopID: 1710,
    Platform: "C",
  },
  {
    StopID: 1756,
    Platform: "H",
  },
  {
    StopID: 1818,
    Platform: "D",
  },
  {
    StopID: 1847,
    Platform: "I",
  },
  {
    StopID: 1848,
    Platform: "H",
  },
  {
    StopID: 1913,
    Platform: "A",
  },
  {
    StopID: 1939,
    Platform: "B",
  },
  {
    StopID: 2007,
    Platform: "B",
  },
  {
    StopID: 2011,
    Platform: "S2",
  },
  {
    StopID: 2024,
    Platform: "F",
  },
  {
    StopID: 2029,
    Platform: "S4",
  },
  {
    StopID: 2034,
    Platform: "G",
  },
  {
    StopID: 2058,
    Platform: "K",
  },
  {
    StopID: 2065,
    Platform: "L",
  },
  {
    StopID: 2099,
    Platform: "M",
  },
  {
    StopID: 2172,
    Platform: "E",
  },
  {
    StopID: 2189,
    Platform: "F",
  },
  {
    StopID: 2234,
    Platform: "A",
  },
  {
    StopID: 2240,
    Platform: "B",
  },
  {
    StopID: 2243,
    Platform: "F",
  },
  {
    StopID: 2251,
    Platform: "C",
  },
  {
    StopID: 2305,
    Platform: "C",
  },
  {
    StopID: 2343,
    Platform: "B",
  },
  {
    StopID: 2345,
    Platform: "A",
  },
  {
    StopID: 2359,
    Platform: "D",
  },
  {
    StopID: 2375,
    Platform: "A",
  },
  {
    StopID: 2403,
    Platform: "D",
  },
  {
    StopID: 2404,
    Platform: "D",
  },
  {
    StopID: 2408,
    Platform: "F",
  },
  {
    StopID: 2411,
    Platform: "C",
  },
  {
    StopID: 2426,
    Platform: "E",
  },
  {
    StopID: 2575,
    Platform: "P",
  },
  {
    StopID: 2576,
    Platform: "Q",
  },
  {
    StopID: 2579,
    Platform: "C",
  },
  {
    StopID: 2588,
    Platform: "J",
  },
  {
    StopID: 2704,
    Platform: "D",
  },
  {
    StopID: 2729,
    Platform: "A",
  },
  {
    StopID: 2736,
    Platform: "A",
  },
  {
    StopID: 2748,
    Platform: "C",
  },
  {
    StopID: 2811,
    Platform: "SEV",
  },
  {
    StopID: 2814,
    Platform: "J",
  },
  {
    StopID: 2822,
    Platform: "D",
  },
  {
    StopID: 2823,
    Platform: "H",
  },
  {
    StopID: 2875,
    Platform: "S1",
  },
  {
    StopID: 2882,
    Platform: "E",
  },
  {
    StopID: 2900,
    Platform: "F",
  },
  {
    StopID: 2908,
    Platform: "L",
  },
  {
    StopID: 2910,
    Platform: "K",
  },
  {
    StopID: 2913,
    Platform: "L",
  },
  {
    StopID: 2918,
    Platform: "E",
  },
  {
    StopID: 2921,
    Platform: "A",
  },
  {
    StopID: 2923,
    Platform: "A",
  },
  {
    StopID: 2932,
    Platform: "G",
  },
  {
    StopID: 2934,
    Platform: "E",
  },
  {
    StopID: 2939,
    Platform: "B",
  },
  {
    StopID: 2959,
    Platform: "G",
  },
  {
    StopID: 2991,
    Platform: "J",
  },
  {
    StopID: 3011,
    Platform: "C",
  },
  {
    StopID: 3066,
    Platform: "C",
  },
  {
    StopID: 3170,
    Platform: "A",
  },
  {
    StopID: 3200,
    Platform: "E",
  },
  {
    StopID: 3242,
    Platform: "B3",
  },
  {
    StopID: 3282,
    Platform: "B2",
  },
  {
    StopID: 3283,
    Platform: "B4",
  },
  {
    StopID: 3313,
    Platform: "F",
  },
  {
    StopID: 3318,
    Platform: "G",
  },
  {
    StopID: 3319,
    Platform: "B",
  },
  {
    StopID: 3339,
    Platform: "E",
  },
  {
    StopID: 3357,
    Platform: "C",
  },
  {
    StopID: 3365,
    Platform: "A",
  },
  {
    StopID: 3387,
    Platform: "F",
  },
  {
    StopID: 3408,
    Platform: "A",
  },
  {
    StopID: 3527,
    Platform: "C",
  },
  {
    StopID: 3565,
    Platform: "B",
  },
  {
    StopID: 3701,
    Platform: "G",
  },
  {
    StopID: 3711,
    Platform: "F",
  },
  {
    StopID: 3715,
    Platform: "K",
  },
  {
    StopID: 3826,
    Platform: "B",
  },
  {
    StopID: 3835,
    Platform: "S",
  },
  {
    StopID: 3836,
    Platform: "U",
  },
  {
    StopID: 3842,
    Platform: "F",
  },
  {
    StopID: 3847,
    Platform: "E",
  },
  {
    StopID: 3851,
    Platform: "M",
  },
  {
    StopID: 3903,
    Platform: "F",
  },
  {
    StopID: 3911,
    Platform: "C",
  },
  {
    StopID: 3989,
    Platform: "A",
  },
  {
    StopID: 3990,
    Platform: "B",
  },
  {
    StopID: 3991,
    Platform: "C",
  },
  {
    StopID: 3992,
    Platform: "D",
  },
  {
    StopID: 4402,
    Platform: "2",
  },
  {
    StopID: 4435,
    Platform: "1",
  },
  {
    StopID: 4807,
    Platform: "Q",
  },
  {
    StopID: 4808,
    Platform: "R",
  },
  {
    StopID: 4829,
    Platform: "A",
  },
  {
    StopID: 5065,
    Platform: "B",
  },
  {
    StopID: 5066,
    Platform: "C",
  },
  {
    StopID: 5070,
    Platform: "C2",
  },
  {
    StopID: 5430,
    Platform: "P",
  },
  {
    StopID: 5501,
    Platform: "F6",
  },
  {
    StopID: 5502,
    Platform: "F5",
  },
  {
    StopID: 5503,
    Platform: "F4",
  },
  {
    StopID: 5505,
    Platform: "F3",
  },
  {
    StopID: 5507,
    Platform: "F2",
  },
  {
    StopID: 5508,
    Platform: "F1",
  },
  {
    StopID: 5580,
    Platform: "H",
  },
  {
    StopID: 5587,
    Platform: "C",
  },
  {
    StopID: 5600,
    Platform: "F2",
  },
  {
    StopID: 5601,
    Platform: "F3",
  },
  {
    StopID: 5602,
    Platform: "F4",
  },
  {
    StopID: 5603,
    Platform: "F5",
  },
  {
    StopID: 5604,
    Platform: "F6",
  },
  {
    StopID: 5605,
    Platform: "F1",
  },
  {
    StopID: 5606,
    Platform: "F7",
  },
  {
    StopID: 5607,
    Platform: "E9",
  },
  {
    StopID: 5658,
    Platform: "F",
  },
  {
    StopID: 5662,
    Platform: "D",
  },
  {
    StopID: 5663,
    Platform: "J",
  },
  {
    StopID: 5665,
    Platform: "H",
  },
  {
    StopID: 5666,
    Platform: "C",
  },
  {
    StopID: 5669,
    Platform: "G",
  },
  {
    StopID: 5682,
    Platform: "A",
  },
  {
    StopID: 5697,
    Platform: "B7",
  },
  {
    StopID: 5704,
    Platform: "C",
  },
  {
    StopID: 5707,
    Platform: "E",
  },
  {
    StopID: 5710,
    Platform: "F",
  },
  {
    StopID: 5737,
    Platform: "J",
  },
  {
    StopID: 5943,
    Platform: "C",
  },
  {
    StopID: 5962,
    Platform: "L",
  },
  {
    StopID: 7041,
    Platform: "4",
  },
  {
    StopID: 7394,
    Platform: "P",
  },
  {
    StopID: 7541,
    Platform: "S3",
  },
  {
    StopID: 8050,
    Platform: "H",
  },
  {
    StopID: 8051,
    Platform: "G",
  },
  {
    StopID: 8054,
    Platform: "C",
  },
  {
    StopID: 8055,
    Platform: "D",
  },
  {
    StopID: 8103,
    Platform: "F",
  },
  {
    StopID: 8104,
    Platform: "E",
  },
  {
    StopID: 8119,
    Platform: "F",
  },
  {
    StopID: 8139,
    Platform: "A",
  },
  {
    StopID: 8637,
    Platform: "B",
  },
  {
    StopID: 8682,
    Platform: "G",
  },
  {
    StopID: 8683,
    Platform: "E",
  },
  {
    StopID: 8685,
    Platform: "F",
  },
  {
    StopID: 8733,
    Platform: "B",
  },
  {
    StopID: 8750,
    Platform: "F",
  },
  {
    StopID: 8781,
    Platform: "C4",
  },
];
export default platforms;
