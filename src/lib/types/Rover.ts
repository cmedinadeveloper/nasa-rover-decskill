interface Photo {
  camera: { id: number; name: string; rover_id: number; full_name: string };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string; // active, complete
  };
  sol: number;
}

enum ROVER {
  Curiosity = "Curiosity",
  Opportunity = "Opportunity",
  Spirit = "Spirit",
}

const ROVER_CAMERAS = [
  {
    id: 1,
    name: ROVER.Curiosity,
    cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
  },
  {
    id: 2,
    name: ROVER.Opportunity,
    cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  },
  {
    id: 3,
    name: ROVER.Spirit,
    cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  },
];

export { ROVER, ROVER_CAMERAS };
export type { Photo };
