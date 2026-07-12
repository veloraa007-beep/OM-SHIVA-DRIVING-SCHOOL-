export type SignCategory = "Mandatory" | "Warning" | "Informatory";

export interface TrafficSign {
  id: string;
  name: string;
  category: SignCategory;
  meaning: string;
  safetyTip: string;
  iconName: string; // Since we can't easily get 20 custom SVG signs, we'll use lucide icons as a stylistic representation, or better, we'll map to specific icons that look like signs.
}

export const trafficSigns: TrafficSign[] = [
  // Mandatory Signs (Must be followed)
  {
    id: "m1",
    name: "Stop",
    category: "Mandatory",
    meaning: "Vehicles must come to a complete stop before the stop line or pedestrian crossing.",
    safetyTip: "Always stop fully; rolling stops are dangerous and illegal.",
    iconName: "Octagon"
  },
  {
    id: "m2",
    name: "Give Way",
    category: "Mandatory",
    meaning: "Give right of way to traffic on the main road you are approaching.",
    safetyTip: "Slow down and be prepared to stop if traffic is approaching.",
    iconName: "Triangle" // Inverted triangle
  },
  {
    id: "m3",
    name: "No Entry",
    category: "Mandatory",
    meaning: "Entry is restricted for all types of vehicles.",
    safetyTip: "Do not enter this road, usually indicates a one-way street the wrong way.",
    iconName: "MinusCircle"
  },
  {
    id: "m4",
    name: "One Way",
    category: "Mandatory",
    meaning: "Traffic must only move in the indicated direction.",
    safetyTip: "Never reverse or drive the wrong way on a one-way street.",
    iconName: "ArrowUpCircle"
  },
  {
    id: "m5",
    name: "Speed Limit 50",
    category: "Mandatory",
    meaning: "Maximum legal speed limit is 50 km/h.",
    safetyTip: "Drive below this speed, adjusting further for road/weather conditions.",
    iconName: "Gauge"
  },
  // Warning Signs (Caution)
  {
    id: "w1",
    name: "Right Hair Pin Bend",
    category: "Warning",
    meaning: "Sharp, hairpin-like right curve ahead.",
    safetyTip: "Slow down significantly and stay in your lane.",
    iconName: "CornerDownRight"
  },
  {
    id: "w2",
    name: "Narrow Bridge",
    category: "Warning",
    meaning: "The bridge ahead is narrower than the road.",
    safetyTip: "Reduce speed and watch for oncoming large vehicles.",
    iconName: "ArrowLeftRight"
  },
  {
    id: "w3",
    name: "Pedestrian Crossing",
    category: "Warning",
    meaning: "Pedestrian crosswalk ahead.",
    safetyTip: "Slow down and be ready to yield to crossing pedestrians.",
    iconName: "PersonStanding"
  },
  {
    id: "w4",
    name: "School Ahead",
    category: "Warning",
    meaning: "School zone ahead, children may be crossing.",
    safetyTip: "Drive at a very low speed and be extremely vigilant.",
    iconName: "GraduationCap"
  },
  {
    id: "w5",
    name: "Men at Work",
    category: "Warning",
    meaning: "Road construction or maintenance work ahead.",
    safetyTip: "Reduce speed, obey temporary signs, and watch for workers.",
    iconName: "HardHat"
  },
  // Informatory Signs (Guidance)
  {
    id: "i1",
    name: "Public Telephone",
    category: "Informatory",
    meaning: "Public telephone facility is available nearby.",
    safetyTip: "Park safely on the shoulder if you need to use the facility.",
    iconName: "Phone"
  },
  {
    id: "i2",
    name: "Petrol Pump",
    category: "Informatory",
    meaning: "Fuel station ahead.",
    safetyTip: "Indicate early if you plan to enter the station.",
    iconName: "Fuel"
  },
  {
    id: "i3",
    name: "Hospital",
    category: "Informatory",
    meaning: "Hospital nearby.",
    safetyTip: "Avoid honking (no horn zone) in hospital vicinity.",
    iconName: "Hospital"
  },
  {
    id: "i4",
    name: "Parking Both Sides",
    category: "Informatory",
    meaning: "Parking is allowed on both sides of the road.",
    safetyTip: "Ensure your vehicle doesn't obstruct flowing traffic.",
    iconName: "ParkingSquare" // Using a generic parking icon representation
  },
  {
    id: "i5",
    name: "Resting Place",
    category: "Informatory",
    meaning: "Rest area or motel ahead.",
    safetyTip: "Take a break if you are feeling fatigued during a long drive.",
    iconName: "BedSingle"
  }
];
