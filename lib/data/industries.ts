// Industries Data
export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  applications: string[];
  relevantProducts: string[];
  image: string;
  benefits: string[];
}

export const industries: Industry[] = [
  {
    slug: "material-handling",
    name: "Material Handling",
    shortDescription: "Hydraulic solutions for conveying, lifting, and moving materials",
    longDescription: "We provide hydraulic power packs and cylinders for material handling equipment including conveyors, lifts, cranes, and automated storage systems. Our solutions deliver reliable performance in demanding warehouse and production environments.",
    applications: [
      "Conveyor systems",
      "Hydraulic lifts",
      "Stacker cranes",
      "Pallet handling",
      "Assembly line automation",
      "Loading/unloading equipment"
    ],
    relevantProducts: [
      "Hydraulic Power Packs",
      "Tie Rod Cylinders",
      "Lift Power Packs",
      "Custom Power Units"
    ],
    image: "/images/industries/material-handling.jpg",
    benefits: [
      "Smooth controlled motion",
      "High load capacity",
      "Reliable 24/7 operation",
      "Low maintenance requirements",
      "Energy efficient designs"
    ]
  },
  {
    slug: "goods-lifts-elevators",
    name: "Goods Lifts & Elevators",
    shortDescription: "Hydraulic systems for vertical transportation of goods",
    longDescription: "Specialized hydraulic solutions for goods elevators, cargo lifts, and freight platforms. Our lift power packs and telescopic cylinders provide smooth, safe vertical transportation with precise leveling and emergency safety features.",
    applications: [
      "Goods elevators",
      "Cargo lifts",
      "Warehouse elevators",
      "Freight platforms",
      "Vehicle lifts",
      "Industrial lifts"
    ],
    relevantProducts: [
      "Lift Hydraulic Power Packs",
      "Lift Hydraulic Cylinders",
      "Telescopic Cylinders",
      "Custom Lift Solutions"
    ],
    image: "/images/industries/goods-lift.jpg",
    benefits: [
      "Smooth acceleration/deceleration",
      "Precise floor leveling",
      "Emergency lowering capability",
      "Safety valve redundancy",
      "Low noise operation"
    ]
  },
  {
    slug: "industrial-presses",
    name: "Industrial Presses",
    shortDescription: "High-force hydraulic solutions for pressing applications",
    longDescription: "High-performance hydraulic cylinders and power packs for hydraulic press machines including stamping, deep drawing, compression molding, and assembly presses. Engineered for consistent force delivery under cyclic loading conditions.",
    applications: [
      "Hydraulic presses",
      "Stamping presses",
      "Deep drawing machines",
      "Compression molding",
      "Assembly presses",
      "Die cutting"
    ],
    relevantProducts: [
      "Press Hydraulic Cylinders",
      "Tie Rod Cylinders",
      "Hydraulic Power Packs",
      "Directional Control Valves"
    ],
    image: "/images/industries/press.jpg",
    benefits: [
      "Consistent force output",
      "High cyclic durability",
      "Precise speed control",
      "Energy efficient operation",
      "Long service life"
    ]
  },
  {
    slug: "plastics-extrusion",
    name: "Plastics & Extrusion",
    shortDescription: "Hydraulic power for plastic processing and screen changer systems",
    longDescription: "Dedicated hydraulic power packs for plastic extrusion lines, specifically engineered for screen changer applications. Rapid response times and precise pressure control ensure efficient screen changes with minimal downtime.",
    applications: [
      "Screen changer systems",
      "Plastic extrusion lines",
      "Polymer processing",
      "Filament production",
      "Cable jacketing",
      "Pipe extrusion"
    ],
    relevantProducts: [
      "Customized Hydraulic Power Packs",
      "Screen Changer Power Packs",
      "Hydraulic Cylinders",
      "Valve Manifolds"
    ],
    image: "/images/industries/extrusion.jpg",
    benefits: [
      "Rapid screen change cycles",
      "Precise pressure control",
      "Compact extrusion line fit",
      "Integration ready",
      "Reliable continuous operation"
    ]
  },
  {
    slug: "construction-earth-moving",
    name: "Construction & Earth Moving",
    shortDescription: "Heavy-duty hydraulics for construction machinery",
    longDescription: "Robust hydraulic cylinders built to withstand harsh construction environments. Designed for excavators, loaders, dozers, and cranes with corrosion-resistant coatings and high-impact resistance.",
    applications: [
      "Excavators",
      "Wheel loaders",
      "Bulldozers",
      "Motor graders",
      "Hydraulic cranes",
      "Road rollers"
    ],
    relevantProducts: [
      "Earth Moving Hydraulic Cylinders",
      "Tie Rod Cylinders",
      "Trunnion Mount Cylinders",
      "Telescopic Cylinders"
    ],
    image: "/images/industries/construction.jpg",
    benefits: [
      "Impact resistant design",
      "Corrosion protection",
      "High-pressure capability",
      "Field service friendly",
      "Extended service intervals"
    ]
  },
  {
    slug: "machine-tools",
    name: "Machine Tools",
    shortDescription: "Precision hydraulics for machining and manufacturing",
    longDescription: "Precision hydraulic solutions for machine tool applications including clamping, feeding, quill extension, and workholding. Quiet, clean operation suitable for precision manufacturing environments.",
    applications: [
      "Workpiece clamping",
      "Tool changers",
      "Spindle feed",
      "Fixture actuation",
      "Chip conveyors",
      "Automatic feeding"
    ],
    relevantProducts: [
      "Electric Hydraulic Power Packs",
      "Tie Rod Cylinders",
      "Miniature Power Packs",
      "Hydraulic Hand Pumps"
    ],
    image: "/images/industries/machine-tools.jpg",
    benefits: [
      "Quiet operation",
      "Clean operation",
      "Precise control",
      "Compact design",
      "Reliable clamping force"
    ]
  },
  {
    slug: "manufacturing-automation",
    name: "Manufacturing Automation",
    shortDescription: "Hydraulic actuation for automated production systems",
    longDescription: "Hydraulic power for automated manufacturing systems including robotics, pick-and-place, automated inspection, and process automation. Custom solutions designed for integration with PLC and control systems.",
    applications: [
      "Robot actuation",
      "Pick and place",
      "Indexing mechanisms",
      "Quality inspection",
      "Process control",
      "Palletizing"
    ],
    relevantProducts: [
      "Custom Hydraulic Power Packs",
      "Compact Cylinders",
      "Servo Proportional Systems",
      "Customized Cylinders"
    ],
    image: "/images/industries/automation.jpg",
    benefits: [
      "PLC integration ready",
      "Precise motion control",
      "High force to size ratio",
      "Proven reliability",
      "Custom mounting options"
    ]
  },
  {
    slug: "ginning-processing",
    name: "Ginning & Processing",
    shortDescription: "Hydraulic solutions for cotton ginning and agricultural processing",
    longDescription: "Specialized hydraulic systems for cotton ginning machines and agricultural processing equipment. Proven reliability in the demanding conditions of ginning operations with service support across India.",
    applications: [
      "Ginning machines",
      "Pressing systems",
      "Baling equipment",
      "Processing machinery",
      "Separation systems",
      "Material handling"
    ],
    relevantProducts: [
      "Hydraulic Power Packs",
      "Tie Rod Cylinders",
      "Custom Cylinders",
      "Hydraulic Presses"
    ],
    image: "/images/industries/ginning.jpg",
    benefits: [
      "Ginning machine compatibility",
      "High duty cycle",
      "Reliable in dusty environments",
      "Easy maintenance",
      "Service support available"
    ]
  },
  {
    slug: "shearing-bending",
    name: "Shearing & Bending",
    shortDescription: "Hydraulic power for metal forming and fabrication",
    longDescription: "Hydraulic cylinders and power units for shearing machines, bending machines, and metal forming equipment. High-force delivery with precise control for accurate cutting and forming operations.",
    applications: [
      "Hydraulic shears",
      "Press brakes",
      "Bending machines",
      "Cutting equipment",
      "Notching machines",
      "Roll forming"
    ],
    relevantProducts: [
      "Press Hydraulic Cylinders",
      "Custom Power Packs",
      "Directional Valves",
      "Cushioned Cylinders"
    ],
    image: "/images/industries/shearing.jpg",
    benefits: [
      "Powerful cutting force",
      "Precise stopping",
      "Adjustable stroke",
      "Fast cycle times",
      "Control integration"
    ]
  }
];

export function getAllIndustries(): Industry[] {
  return industries;
}

// Extended industries list for demonstration purposes
export const extendedIndustries: Industry[] = [
  ...industries,
  {
    slug: "railway-maintenance",
    name: "Railway Maintenance",
    shortDescription: "Hydraulic solutions for railway track maintenance and repair equipment",
    longDescription: "Specialized hydraulic equipment for railway track alignment, lifting, and maintenance operations. Our solutions are designed to withstand the demanding conditions of railway environments and provide reliable performance for track geometry correction.",
    applications: [
      "Track lifting and aligning machines",
      "Railway maintenance vehicles",
      "Track geometry correctors",
      "Rail welding equipment",
      "Sleeper adjustment tools",
      "Heavy-duty lifting jacks"
    ],
    relevantProducts: [
      "Hydraulic Power Packs",
      "Telescopic Cylinders",
      "Custom Cylinders",
      "Lift Power Packs"
    ],
    image: "/images/industries/railway.jpg",
    benefits: [
      "High reliability for continuous operation",
      "Dust and water resistance",
      "Precise control for track geometry",
      "Robust construction for outdoor use",
      "Easy maintenance design"
    ]
  },
  {
    slug: "marine-applications",
    name: "Marine Applications",
    shortDescription: "Hydraulic systems for ships, boats, and offshore equipment",
    longDescription: "Specialized hydraulic systems designed for marine environments including ships, boats, and offshore platforms. Our corrosion-resistant equipment is built to withstand saltwater exposure and provide reliable performance at sea.",
    applications: [
      "Ship steering systems",
      "Hatch covers and doors",
      "Bow and stern thrusters",
      "Cargo handling equipment",
      "Deck machinery",
      "Offshore platform equipment"
    ],
    relevantProducts: [
      "Corrosion-Resistant Cylinders",
      "Marine-Grade Power Packs",
      "Stainless Steel Components",
      "Custom Marine Solutions"
    ],
    image: "/images/industries/marine.jpg",
    benefits: [
      "Marine-grade corrosion protection",
      "Saltwater-resistant materials",
      "Reliable performance in harsh conditions",
      "Safety-certified systems",
      "Long service intervals"
    ]
  },
  {
    slug: "mining-industry",
    name: "Mining Industry",
    shortDescription: "Heavy-duty hydraulics for mining and excavation equipment",
    longDescription: "Robust hydraulic solutions designed for the extreme demands of mining operations. Our equipment is engineered to withstand heavy loads, abrasive conditions, and continuous operation in mining applications.",
    applications: [
      "Excavators and loaders",
      "Haul trucks",
      "Drilling equipment",
      "Conveyor systems",
      "Crushing and screening",
      "Underground mining equipment"
    ],
    relevantProducts: [
      "Earth Moving Hydraulic Cylinders",
      "Heavy-Duty Power Packs",
      "Custom Solutions",
      "Telescopic Cylinders"
    ],
    image: "/images/industries/mining.jpg",
    benefits: [
      "Extreme load capability",
      "Abrasion-resistant coatings",
      "High-impact resistance",
      "Explosion-proof options",
      "Reliable in dusty environments"
    ]
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    shortDescription: "Hydraulic solutions for farm machinery and equipment",
    longDescription: "Hydraulic power packs and cylinders designed for agricultural applications including tractors, harvesters, sprayers, and other farm machinery. Our solutions are built to handle the diverse needs of modern farming.",
    applications: [
      "Tractor hydraulic systems",
      "Harvester equipment",
      "Sprayer booms",
      "Baler machinery",
      "Hydraulic lifts",
      "Irrigation equipment"
    ],
    relevantProducts: [
      "Standard Power Packs",
      "Tie Rod Cylinders",
      "Custom Cylinders",
      "Manual Power Packs"
    ],
    image: "/images/industries/agriculture.jpg",
    benefits: [
      "Reliable performance in dusty conditions",
      "Environmental protection options",
      "Precision control for application",
      "Easy maintenance access",
      "Fuel-efficient designs"
    ]
  },
  {
    slug: "energy-sector",
    name: "Energy Sector",
    shortDescription: "Hydraulic solutions for power generation and distribution",
    longDescription: "Specialized hydraulic systems for power generation facilities including thermal, hydro, and renewable energy plants. Our equipment supports turbine operations, valve control, and maintenance equipment.",
    applications: [
      "Turbine blade positioning",
      "Valve operation systems",
      "Maintenance lift equipment",
      "Generator alignment",
      "Pipeline maintenance",
      "Wind turbinepitch control"
    ],
    relevantProducts: [
      "Precision Power Packs",
      "Custom Cylinders",
      "High-Precision Solutions",
      "Specialized Equipment"
    ],
    image: "/images/industries/energy.jpg",
    benefits: [
      "Precision control for critical operations",
      "High reliability for 24/7 operation",
      "Safety-critical system support",
      "Explosion-proof options",
      "Remote operation capability"
    ]
  },
  {
    slug: "automotive-manufacturing",
    name: "Automotive Manufacturing",
    shortDescription: "Hydraulic solutions for automotive production lines",
    longDescription: "Precision hydraulic systems designed for automotive manufacturing applications including stamping, welding, assembly, and testing. Our equipment supports the high-cycle requirements of automotive production.",
    applications: [
      "Stamping presses",
      "Welding robots",
      "Assembly line equipment",
      "Testing and validation",
      "Paint shop equipment",
      "Material handling"
    ],
    relevantProducts: [
      "Electric Power Packs",
      "Custom Cylinders",
      "Precision Systems",
      "Automation Integration"
    ],
    image: "/images/industries/automotive.jpg",
    benefits: [
      "High cycle life",
      "Clean operation",
      "Precise control",
      "PLC integration",
      "Low noise operation"
    ]
  },
  {
    slug: "pharmaceutical-industry",
    name: "Pharmaceutical Industry",
    shortDescription: "Hydraulic solutions for pharmaceutical manufacturing",
    longDescription: "Specialized hydraulic systems designed for pharmaceutical and medical device manufacturing where cleanliness and precision are critical. Our solutions meet the stringent requirements of this regulated industry.",
    applications: [
      "Tablet pressing machines",
      "Packaging equipment",
      "Blister packaging",
      "Bottle filling lines",
      "Labeling machines",
      " Inspection systems"
    ],
    relevantProducts: [
      "Clean Power Packs",
      "Stainless Steel Cylinders",
      "Precision Systems",
      "Hygienic Design"
    ],
    image: "/images/industries/pharma.jpg",
    benefits: [
      "Clean room compatible",
      "Corrosion-resistant materials",
      "Precise pressure control",
      "Easy cleaning design",
      "_contaminant sealing"
    ]
  },
  {
    slug: "textile-industry",
    name: "Textile Industry",
    shortDescription: "Hydraulic solutions for textile manufacturing equipment",
    longDescription: "Specialized hydraulic systems for textile machinery including weaving looms, knitting machines, dyeing equipment, and finishing machines. Our solutions support the precise tension control required in textile applications.",
    applications: [
      "Weaving looms",
      "Knitting machines",
      "Dyeing equipment",
      "Cutting machines",
      "Baling and pressing",
      "Rolling and winding"
    ],
    relevantProducts: [
      "Precision Power Packs",
      "Custom Cylinders",
      "Low-Noise Systems",
      "Vibration Control"
    ],
    image: "/images/industries/textile.jpg",
    benefits: [
      "Low noise operation",
      "Precise tension control",
      "Uniform pressure distribution",
      "可靠 reliability for 24/7 operation",
      "Easy maintenance"    ]
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    shortDescription: "Hydraulic solutions for food manufacturing and packaging",
    longDescription: "Food-grade hydraulic systems designed for food processing and packaging applications. Our stainless steel equipment meets FDA requirements and ensures product safety in the food industry.",
    applications: [
      "Food pressing equipment",
      "Packaging machines",
      "Filling systems",
      "Conveyor systems",
      "Sorting equipment",
      "Bottle cleaning lines"
    ],
    relevantProducts: [
      "Food-Grade Power Packs",
      "Stainless Steel Cylinders",
      "Hygienic Solutions",
      "Clean Design"
    ],
    image: "/images/industries/food.jpg",
    benefits: [
      "Food-grade lubricants",
      "Stainless steel construction",
      "Easy cleaning design",
      "Contamination prevention",
      "Compliance with food safety standards"
    ]
  },
  {
    slug: "wood-working",
    name: "Wood Working",
    shortDescription: "Hydraulic solutions for furniture and wood processing",
    longDescription: "Specialized hydraulic equipment for woodworking applications including furniture manufacturing, panel processing, and wood product finishing. Our solutions provide the force and control needed for precise wood processing.",
    applications: [
      "Veneer presses",
      "Panel pressing",
      "Edge banding",
      "Lamination equipment",
      "Cutting machines",
      "Bending equipment"
    ],
    relevantProducts: [
      "Custom Power Packs",
      "Flat-Stroke Cylinders",
      "Precision Systems",
      "Specialized Solutions"
    ],
    image: "/images/industries/woodworking.jpg",
    benefits: [
      "Uniform pressure distribution",
      "Custom press configurations",
      "Temperature resistance",
      "Clean operation",
      "Precise control"
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}
