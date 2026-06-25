// Products Data
export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  longDescription: string;
  keySpecs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  customizationOptions: string[];
  image: string;
  gallery: string[];
  relatedProducts: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: "trolly-hydraulic-powerpack",
    name: "Trolly Hydraulic Powerpack",
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Mobile hydraulic power unit mounted on wheels for easy maneuverability",
    longDescription: "The Trolly Hydraulic Powerpack combines powerful hydraulic performance with exceptional mobility. Mounted on heavy-duty castor wheels with brakes, this unit can be easily moved around workshop floors and production areas. Features a compact reservoir design, efficient motor-pump combination, and integrated valve options.",
    keySpecs: [
      { label: "Motor Power", value: "1.5 HP - 7.5 HP" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Tank Capacity", value: "20 - 100 Liters" },
      { label: "Flow Rate", value: "5 - 25 LPM" },
      { label: "Voltage", value: "230V/415V, 3 Phase" },
      { label: "Mounting", value: "Mobile Trolley" }
    ],
    features: [
      "Heavy-duty castor wheels with brakes",
      "Compact design for tight spaces",
      "Multiple valve configuration options",
      "Thermal overload protection",
      "Outlet/Return line connections",
      "Pressure gauge with glycerin filling",
      "Suction strainer with bypass",
      "Oil level indicator with temperature gauge"
    ],
    applications: [
      "Workshop maintenance",
      "Hydraulic jack operations",
      "Press tool feeding",
      "Mobile hydraulic operations",
      "Multi-point lubrication"
    ],
    customizationOptions: [
      "Motor power and voltage specifications",
      "Tank capacity modifications",
      "Valve block configurations",
      "Pressure relief settings",
      "Port sizes and positions"
    ],
    image: "https://placehold.co/600x400/sky-900/FFFFFF?text=Trolly+Hydraulic+Powerpack",
    gallery: [
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Powerpack+Side+View",
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Powerpack+Top+View"
    ],
    relatedProducts: ["electric-cum-hand-operated-hydraulic-powerpack", "hydraulic-power-pack-for-screen-changer"],
    featured: true
  },
  {
    slug: "hydraulic-power-pack-for-screen-changer",
    name: "Hydraulic Power Pack for Screen Changer",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Dedicated power unit for plastic extrusion screen changer systems",
    longDescription: "Purpose-built hydraulic power pack designed specifically for screen changer applications in plastic extrusion lines. Engineered for rapid screen changes with precise pressure control and high response times. Available for single and dual piston screen changers.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 280 bar" },
      { label: "Motor Power", value: "2 HP - 5 HP" },
      { label: "Cycle Time", value: "Fast response" },
      { label: "Tank Capacity", value: "30 - 60 Liters" },
      { label: "Control", value: "Automatic/Manual" },
      { label: "Protection", value: "IP55 Enclosure" }
    ],
    features: [
      "Rapid response hydraulic circuit",
      "Precise pressure control",
      "Integration-ready control panel",
      "High-pressure filtration",
      "Thermal management system",
      "Compact extrusion line mounting",
      "Emergency manual override",
      "Leak-free quick couplings"
    ],
    applications: [
      "Plastic extrusion lines",
      "Screen changer systems",
      "Polymer processing",
      "Filament production",
      "Cable jacketing lines"
    ],
    customizationOptions: [
      "Screen changer model compatibility",
      "Pressure cycle programming",
      "Control panel integration",
      "Extrusion line mounting",
      "Oil cooling requirements"
    ],
    image: "https://placehold.co/600x400/orange-600/FFFFFF?text=Screen+Changer+Powerpack",
    gallery: [
      "https://placehold.co/600x400/orange-700/FFFFFF?text=Screen+Changer+View+1",
      "https://placehold.co/600x400/orange-800/FFFFFF?text=Screen+Changer+View+2"
    ],
    relatedProducts: ["trolly-hydraulic-powerpack", "electric-cum-hand-operated-hydraulic-powerpack"],
    featured: true
  },
  {
    slug: "electric-cum-hand-operated-hydraulic-powerpack",
    name: "Electric Cum Hand Operated Hydraulic Powerpack",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Dual-mode power pack with both electric and manual operation capability",
    longDescription: "Versatile hydraulic power pack featuring both electric motor drive and manual hand pump operation. Ideal for applications requiring backup power or operation in areas with unreliable electricity. Switch seamlessly between modes without system reconfiguration.",
    keySpecs: [
      { label: "Electric Motor", value: "1 HP - 3 HP" },
      { label: "Hand Pump", value: "Two-stage" },
      { label: "Max Pressure", value: "Up to 700 bar (hand)" },
      { label: "Tank Capacity", value: "10 - 40 Liters" },
      { label: "Electric Pressure", value: "Up to 210 bar" },
      { label: "Mode Switching", value: "Instant" }
    ],
    features: [
      "Dual-mode operation",
      "No power loss during switch",
      "Two-speed hand pump",
      "Electric thermal protection",
      "Compact integrated design",
      "Pressure gauge for both modes",
      "Common reservoir for efficiency",
      "Universal outlet connections"
    ],
    applications: [
      "Maintenance workshops",
      "Power fluctuation areas",
      "Field service operations",
      "Emergency repair work",
      "Testing and calibration"
    ],
    customizationOptions: [
      "Motor power specifications",
      "Hand pump pressure rating",
      "Tank capacity sizing",
      "Control valve configuration",
      "Port size and placement"
    ],
    image: "https://placehold.co/600x400/indigo-600/FFFFFF?text=Electric+Hand+Powerpack",
    gallery: [
      "https://placehold.co/600x400/indigo-700/FFFFFF?text=Electric+Hand+View+1",
      "https://placehold.co/600x400/indigo-800/FFFFFF?text=Electric+Hand+View+2"
    ],
    relatedProducts: ["trolly-hydraulic-powerpack", "lift-hydraulic-power-pack"],
    featured: true
  },
  {
    slug: "trunnion-mounting-hydraulic-cylinder",
    name: "Trunnion Mounting Hydraulic Cylinder",
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
    shortDescription: "Double-acting cylinder with trunnion mounts for pivoting applications",
    longDescription: "Heavy-duty hydraulic cylinder designed with trunnion mounts allowing the cylinder body to pivot during operation. Ideal for applications requiring angular movement or where the load path changes during the stroke. Features hardened trunnion pins and robust bearing surfaces.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Mounting", value: "Trunnion (Intermediate/End)" },
      { label: "Rod Coating", value: "Hard chrome plated" },
      { label: "Seals", value: "High-grade PU/NBR/PTFE" }
    ],
    features: [
      "Precision-machined trunnion pins",
      "Heavy-duty bronze bushings",
      "Hard chrome plated piston rod",
      "High-pressure sealing system",
      "Cushioning on both ends",
      "Breather/drain facility",
      "Adjustable trunnion position",
      "Corrosion-resistant coating"
    ],
    applications: [
      "Dump truck applications",
      "Aerial work platforms",
      "Mobile crane outriggers",
      "Articulated equipment",
      "Swing door operators"
    ],
    customizationOptions: [
      "Bore and stroke dimensions",
      "Trunnion pin diameter",
      "Mounting position",
      "Rod end thread type",
      "Seal material selection"
    ],
    image: "https://placehold.co/600x400/amber-600/FFFFFF?text=Trunnion+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/amber-700/FFFFFF?text=Trunnion+Cylinder+View+1",
      "https://placehold.co/600x400/amber-800/FFFFFF?text=Trunnion+Cylinder+View+2"
    ],
    relatedProducts: ["heavy-duty-tie-rod-hydraulic-cylinder", "telescopic-hydraulic-cylinder"],
    featured: true
  },
  {
    slug: "heavy-duty-tie-rod-hydraulic-cylinder",
    name: "Heavy Duty Tie Rod Hydraulic Cylinder",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Industrial-grade tie rod cylinder for demanding applications",
    longDescription: "Heavy-duty tie rod hydraulic cylinder built for industrial applications requiring reliability and durability. High-tensile tie rods ensure structural integrity under cyclic loading conditions. Available in single-acting and double-acting configurations.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 250 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Tie Rod Size", value: "High-tensile steel" },
      { label: "Rod Diameter", value: "25 - 140 mm" },
      { label: "Mounting", value: "Tie rod/Flange/Clevis" }
    ],
    features: [
      "High-tensile tie rod construction",
      "Replaceable seals and bearings",
      "Hard chrome plated piston rod",
      "Cast iron piston with seals",
      "Threaded rod end with lock nut",
      "Multiple mounting options",
      "Cushioning capability",
      "Pressure-tested to 1.5x rating"
    ],
    applications: [
      "Machine tool operations",
      "Industrial presses",
      "Material handling",
      "Factory automation",
      "Assembly lines"
    ],
    customizationOptions: [
      "Bore and stroke specifications",
      "Port sizes and positions",
      "Mounting style selection",
      "Seal material options",
      "Rod end configurations"
    ],
    image: "https://placehold.co/600x400/rose-600/FFFFFF?text=Heavy+Duty+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/rose-700/FFFFFF?text=Tie+Rod+Cylinder+View+1",
      "https://placehold.co/600x400/rose-800/FFFFFF?text=Tie+Rod+Cylinder+View+2"
    ],
    relatedProducts: ["trunnion-mounting-hydraulic-cylinder", "press-hydraulic-cylinder"],
    featured: true
  },
  {
    slug: "press-hydraulic-cylinder",
    name: "Press Hydraulic Cylinder",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "High-force cylinder specifically designed for press applications",
    longDescription: "Purpose-built hydraulic cylinder engineered for press machine applications. Designed to deliver high force with consistent performance under cyclic loading. Features optimized mounting configurations for press frames and robust construction for long service life.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 300 mm" },
      { label: "Force Capacity", value: "Up to 200 Tons" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Stroke Length", value: "Up to 1500 mm" },
      { label: "Mounting", value: "Flange/Threaded" },
      { label: "Rod Hardness", value: "HRC 60-64" }
    ],
    features: [
      "High-force capacity design",
      "Optimized for cyclic loading",
      "Flange mounting for presses",
      "Counterbalance valve provisions",
      "Hard chrome rod coating",
      "High-load cylinder bearings",
      "Pressure-tested assembly",
      "Custom stroke capability"
    ],
    applications: [
      "Hydraulic presses",
      "Deep drawing machines",
      "Stamping presses",
      "Assembly presses",
      "Compression molding"
    ],
    customizationOptions: [
      "Capacity and bore sizing",
      "Mounting flange pattern",
      "Stroke length specification",
      "Counterbalance integration",
      "Speed control provisions"
    ],
    image: "https://placehold.co/600x400/teal-600/FFFFFF?text=Press+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/teal-700/FFFFFF?text=Press+Cylinder+View+1",
      "https://placehold.co/600x400/teal-800/FFFFFF?text=Press+Cylinder+View+2"
    ],
    relatedProducts: ["heavy-duty-tie-rod-hydraulic-cylinder", "adjustable-stroke-hydraulic-cylinder"],
    featured: true
  },
  {
    slug: "adjustable-stroke-hydraulic-cylinder",
    name: "Adjustable Stroke Hydraulic Cylinder",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Cylinder with mechanical stroke adjustment mechanism",
    longDescription: "Hydraulic cylinder featuring adjustable stroke length without hydraulic modification. Mechanical stop collars allow precise stroke adjustment for varying workpiece sizes. Ideal for flexible manufacturing and quick changeover applications.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 150 mm" },
      { label: "Max Stroke", value: "Up to 1000 mm" },
      { label: "Adjustable Range", value: "50% of max stroke" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Locking", value: "Positive mechanical" },
      { label: "Indication", value: "Position scale" }
    ],
    features: [
      "Mechanical stroke adjustment",
      "Positive stop locking",
      "Quick adjustment without tools",
      "Position scale for reference",
      "Lockable at any position",
      "No hydraulic system changes needed",
      "Repeatable positioning",
      "Robust stop collar design"
    ],
    applications: [
      "Flexible manufacturing",
      "Quick changeover presses",
      "Multi-size workpieces",
      "Tooling adaptability",
      "R&D applications"
    ],
    customizationOptions: [
      "Adjustment range specification",
      "Locking mechanism type",
      "Scale precision requirements",
      "Bore and base stroke",
      "Mounting configuration"
    ],
    image: "https://placehold.co/600x400/stone-600/FFFFFF?text=Adjustable+Stroke+Cylinder",
    gallery: [
      "https://placehold.co/600x400/stone-700/FFFFFF?text=Adjustable+Cylinder+View+1",
      "https://placehold.co/600x400/stone-800/FFFFFF?text=Adjustable+Cylinder+View+2"
    ],
    relatedProducts: ["press-hydraulic-cylinder", "heavy-duty-tie-rod-hydraulic-cylinder"],
    featured: true
  },
  {
    slug: "hydraulic-power-pack-for-goods-lift",
    name: "Hydraulic Power Pack for Goods Lift",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Compact power unit designed specifically for goods elevator systems",
    longDescription: "Dedicated hydraulic power pack engineered for goods lift and cargo elevator applications. Features controlled acceleration/deceleration, precise leveling capability, and safety redundancy required for vertical transportation. Compact design fits standard machine room configurations.",
    keySpecs: [
      { label: "Capacity", value: "Up to 5000 kg lift" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Tank Capacity", value: "50 - 150 Liters" },
      { label: "Speed Control", value: "Variable (optional)" },
      { label: "Safety", value: "Redundant valve circuits" }
    ],
    features: [
      "Controlled soft start/stop",
      "Precise leveling capability",
      "Emergency lowering system",
      "Safety valve redundancy",
      "Low noise operation",
      "Compact machine room fit",
      "Remote control options",
      "Hydraulic door operator output"
    ],
    applications: [
      "Goods elevators",
      "Cargo lifts",
      "Industrial lifts",
      "Warehouse elevators",
      "Freight platforms"
    ],
    customizationOptions: [
      "Lift capacity matching",
      "Speed requirements",
      "Machine room dimensions",
      "Safety certification needs",
      "Control system integration"
    ],
    image: "https://placehold.co/600x400/blue-600/FFFFFF?text=Hydraulic+Powerpack+for+Goods+Lift",
    gallery: [
      "https://placehold.co/600x400/blue-700/FFFFFF?text=Powerpack+for+Lift+View+1",
      "https://placehold.co/600x400/blue-800/FFFFFF?text=Powerpack+for+Lift+View+2"
    ],
    relatedProducts: ["lift-hydraulic-cylinder", "electric-cum-hand-operated-hydraulic-powerpack"],
    featured: true
  },
  {
    slug: "lift-hydraulic-cylinder",
    name: "Lift Hydraulic Cylinder",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Single-acting telescopic cylinder for lift applications",
    longDescription: "Telescopic hydraulic cylinder designed specifically for goods lift and elevator systems. Multi-stage design provides long stroke from compact retracted length. Gravity return with controlled descent valve for safety.",
    keySpecs: [
      { label: "Stages", value: "2 - 4 stages" },
      { label: "Extended Length", value: "Up to 8000 mm" },
      { label: "Collapsed Height", value: "30% of extended" },
      { label: "Capacity", value: "Up to 5000 kg" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Mounting", value: "Tank bottom/Submerged" }
    ],
    features: [
      "Telescopic multi-stage design",
      "High strength alloy steel",
      "Controlled descent valve",
      "Sealing for long service",
      "Corrosion protection coating",
      "Emergency manual lowering",
      "Low friction stage mechanism",
      "Compact installation height"
    ],
    applications: [
      "Goods elevators",
      "Hydraulic lifts",
      "Scissor lifts",
      "Platform lifts",
      "Pit-less elevator systems"
    ],
    customizationOptions: [
      "Number of stages",
      "Extended height specification",
      "Load capacity requirement",
      "Mounting configuration",
      "Descent control options"
    ],
    image: "https://placehold.co/600x400/cyan-600/FFFFFF?text=Lift+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/cyan-700/FFFFFF?text=Lift+Cylinder+View+1",
      "https://placehold.co/600x400/cyan-800/FFFFFF?text=Lift+Cylinder+View+2"
    ],
    relatedProducts: ["hydraulic-power-pack-for-goods-lift", "telescopic-hydraulic-cylinder"],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder",
    name: "Telescopic Hydraulic Cylinder",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Multi-stage telescopic cylinder for applications requiring long extension",
    longDescription: "Telescopic hydraulic cylinder providing extended stroke length from compact retracted length. Multiple nested stages with synchronized operation. Available in single and double-acting configurations for various applications.",
    keySpecs: [
      { label: "Stages", value: "2 - 5 stages" },
      { label: "Stroke Ratio", value: "Up to 6x retraction" },
      { label: "Max Stroke", value: "Up to 10,000 mm" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Mounting", value: "Various options" },
      { label: "Action", value: "Single/Double" }
    ],
    features: [
      "Compact retracted length",
      "Synthesized extension",
      "High strength steel construction",
      "Multiple seal arrangement",
      "External guidance option",
      "Anti-corrosion coating",
      "Bearing-supported stages",
      "Lock valve capability"
    ],
    applications: [
      "Tipper trucks",
      "Trailers",
      "Aerial platforms",
      "Material handling",
      "Construction equipment"
    ],
    customizationOptions: [
      "Number and size of stages",
      "Stroke length requirement",
      "Single or double acting",
      "Mounting style",
      "Port configuration"
    ],
    image: "https://placehold.co/600x400/violet-600/FFFFFF?text=Telescopic+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/violet-700/FFFFFF?text=Telescopic+Cylinder+View+1",
      "https://placehold.co/600x400/violet-800/FFFFFF?text=Telescopic+Cylinder+View+2"
    ],
    relatedProducts: ["lift-hydraulic-cylinder", "trunnion-mounting-hydraulic-cylinder"],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder",
    name: "Earth Moving Hydraulic Cylinder",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Heavy-duty cylinder built for construction and earth moving equipment",
    longDescription: "Robust hydraulic cylinder specifically engineered for earth moving and construction machinery. Designed to withstand harsh environments, shock loads, and corrosive conditions. Features heavy-duty rod coatings and protective boots.",
    keySpecs: [
      { label: "Bore Diameter", value: "80 - 250 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Rod Coating", value: "Anti-corrosion" },
      { label: "Mounting", value: "Clevis/Trunnion/Ear" },
      { label: "Protection", value: "Boot/shield options" }
    ],
    features: [
      "Impact-resistant design",
      "Heavy-duty rod coating",
      "Corrosion protection",
      "Shock absorbing mounts",
      "Dirt/water sealing",
      "Replaceable bushings",
      "High-strength materials",
      "Field service friendly"
    ],
    applications: [
      "Excavators",
      "Loader applications",
      "Bulldozer hydraulics",
      "Crane operations",
      "Construction equipment"
    ],
    customizationOptions: [
      "Equipment compatibility",
      "Bore and stroke configuration",
      "Mounting pin dimensions",
      "Protective accessories",
      "Seal material for environment"
    ],
    image: "https://placehold.co/600x400/emerald-600/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/emerald-700/FFFFFF?text=Earth+Moving+Cylinder+View+1",
      "https://placehold.co/600x400/emerald-800/FFFFFF?text=Earth+Moving+Cylinder+View+2"
    ],
    relatedProducts: ["trunnion-mounting-hydraulic-cylinder", "heavy-duty-tie-rod-hydraulic-cylinder"],
    featured: false
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getAllProducts(): Product[] {
  return products;
}

// Extended product list for demonstration purposes
export const extendedProducts: Product[] = [
  ...products,
  // Additional products for demo
  {
    slug: "mobile-hydraulic-powerpack",
    name: "Mobile Hydraulic Powerpack",
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Heavy-duty mobile power pack on robust trolley for workshop and field use",
    longDescription: "Our Mobile Hydraulic Powerpack offers exceptional portability without compromising performance. Built on a rugged steel trolley with large pneumatic tires and a drawbar, this unit can be easily towed around large workshop floors, construction sites, and industrial facilities. Features include a large capacity reservoir, high-flow pump, and comprehensive safety controls.",
    keySpecs: [
      { label: "Motor Power", value: "5 HP - 15 HP" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Tank Capacity", value: "50 - 200 Liters" },
      { label: "Flow Rate", value: "15 - 50 LPM" },
      { label: "Tire Type", value: "Pneumatic" },
      { label: "Drawbar", value: "Adjustable" }
    ],
    features: [
      "Heavy-duty steel trolley with pneumatic tires",
      "Large capacity reservoir for extended operations",
      "High-flow pump for rapid cycle times",
      "Comprehensive safety valve system",
      "Quick-connect couplings on all outlets",
      "Integrated pressure gauge and gauge isolation valve",
      "Thermal overload protection on motor",
      "Weather-resistant control panel"
    ],
    applications: [
      " construction sites",
      "Workshop multi-purpose use",
      "Field maintenance operations",
      "Large equipment servicing",
      "Emergency power supply"
    ],
    customizationOptions: [
      "Engine or electric motor options",
      "Tank capacity customization",
      "Special pintle hitch requirements",
      "Extended hose reels",
      "Special mounting brackets"
    ],
    image: "https://placehold.co/600x400/pink-600/FFFFFF?text=Mobile+Hydraulic+Powerpack",
    gallery: [
      "https://placehold.co/600x400/pink-700/FFFFFF?text=Mobile+Powerpack+View+1",
      "https://placehold.co/600x400/pink-800/FFFFFF?text=Mobile+Powerpack+View+2"
    ],
    relatedProducts: ["trolly-hydraulic-powerpack", "electric-cum-hand-operated-hydraulic-powerpack"],
    featured: false
  },
  {
    slug: "hydraulic-cum-pneumatic-powerpack",
    name: "Hydraulic Cum Pneumatic Powerpack",
    category: "Combined Systems",
    categorySlug: "combined-systems",
    shortDescription: "Integrated hydraulic and air pressure unit for dual functionality",
    longDescription: "This combined hydraulic and pneumatic powerpack delivers both hydraulic pressure and compressed air from a single unit, saving space and reducing operational costs. Perfect for workshops and manufacturing facilities that require both hydraulic and pneumatic power for various operations.",
    keySpecs: [
      { label: "Hydraulic Pressure", value: "Up to 210 bar" },
      { label: "Air Pressure", value: "Up to 15 bar" },
      { label: "Motor Power", value: "7.5 HP - 15 HP" },
      { label: "Air Flow", value: "5 - 15 CFM" },
      { label: "Tank Capacity", value: "100 - 300 Liters" },
      { label: "Air Receiver", value: "50 - 100Liters" }
    ],
    features: [
      "Integrated hydraulic and pneumatic systems",
      "Shared motor and reservoir configuration",
      "Compact footprint design",
      "Independent pressure controls",
      "Air dryer options available",
      "Dual discharge outlets",
      "Simultaneous operation capability",
      "Energy-efficient design"
    ],
    applications: [
      "Service workshops",
      "Assembly lines",
      "Maintenance facilities",
      "Multi-functional stations",
      "Equipment testing"
    ],
    customizationOptions: [
      "Ratio of hydraulic to pneumatic capacity",
      "Specific pressure requirements",
      "Control panel integration",
      "Mounting configuration",
      "Noise reduction options"
    ],
    image: "https://placehold.co/600x400/fuchsia-600/FFFFFF?text=Hydraulic+Cum+Pneumatic+Powerpack",
    gallery: [
      "https://placehold.co/600x400/fuchsia-700/FFFFFF?text=Combined+Powerpack+View+1",
      "https://placehold.co/600x400/fuchsia-800/FFFFFF?text=Combined+Powerpack+View+2"
    ],
    relatedProducts: ["trolly-hydraulic-powerpack", "hydraulic-power-pack-for-screen-changer"],
    featured: false
  },
  {
    slug: "hydraulic-manifold-pressure-test-rig",
    name: "Hydraulic Manifold Pressure Test Rig",
    category: "Testing Equipment",
    categorySlug: "testing-equipment",
    shortDescription: "Comprehensive testing station for hydraulic manifolds and valves",
    longDescription: "Our automated hydraulic manifold testing rig provides precise pressure testing and validation for all types of hydraulic manifolds and valve assemblies. Features include programmable test sequences, digital pressure monitoring, and comprehensive test reporting for quality assurance.",
    keySpecs: [
      { label: "Test Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Test Ports", value: "16 - 64 positions" },
      { label: "Control", value: "PC/software controlled" },
      { label: "Data Logging", value: "Full test history" },
      { label: "Safety", value: "Enclosed testing chamber" }
    ],
    features: [
      "Fully automated test sequences",
      "Computer-controlled operation",
      "Real-time pressure and flow monitoring",
      "Automated pass/fail determination",
      "Digital test report generation",
      "Multiple test station configurations",
      "Safety interlock system",
      "Multi-language interface"
    ],
    applications: [
      "Manifold manufacturing QA",
      "Valve testing",
      "Quality control verification",
      "Pre-shipment testing",
      "Failure analysis"
    ],
    customizationOptions: [
      "Number of test stations",
      "Pressure and flow requirements",
      "Software feature selection",
      "Test fixture configurations",
      "Reporting format preferences"
    ],
    image: "https://placehold.co/600x400/lime-600/FFFFFF?text=Hydraulic+Manifold+Test+Rig",
    gallery: [
      "https://placehold.co/600x400/lime-700/FFFFFF?text=Test+Rig+View+1",
      "https://placehold.co/600x400/lime-800/FFFFFF?text=Test+Rig+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-skid-mounted-unit",
    name: "Custom Hydraulic Skid-Mounted Unit",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Factory-mounted and tested hydraulic system on skid for quick installation",
    longDescription: "Our skid-mounted hydraulic power units come fully assembled, tested, and ready for installation. All components including motor, pump, reservoir, valves, and controls are securely mounted on a steel skid with vibration dampeners. This approach ensures quality, reduces on-site installation time, and minimizes commissioning requirements.",
    keySpecs: [
      { label: "Configuration", value: "Fully skid-mounted" },
      { label: "Frame", value: "Galvanized steel skid" },
      { label: "Vibration Control", value: "Rubber isolators" },
      { label: "Piping", value: "Stainless steel line sets" },
      { label: "Controls", value: "Customized control panel" },
      { label: "Testing", value: "Pre-commissioned at factory" }
    ],
    features: [
      "Ready-to-install solution",
      "Reduced on-site labor requirements",
      "Consistent quality from factory testing",
      "Minimized installation time",
      "Custom skid configurations available",
      "CompleteDocumentation package",
      "On-site commissioning support",
      "Warranty on complete skid assembly"
    ],
    applications: [
      "Plant expansions",
      "Retrofits",
      "Emergency replacements",
      "New installations",
      "Mobile installations"
    ],
    customizationOptions: [
      "Skid size and load capacity",
      "Component specifications",
      "Control panel configuration",
      "Tagging and labeling",
      "Shipping protection requirements"
    ],
    image: "https://placehold.co/600x400/teal-600/FFFFFF?text=Custom+Hydraulic+Skid+Unit",
    gallery: [
      "https://placehold.co/600x400/teal-700/FFFFFF?text=Skid+Unit+View+1",
      "https://placehold.co/600x400/teal-800/FFFFFF?text=Skid+Unit+View+2"
    ],
    relatedProducts: [],
    featured: true
  },
  {
    slug: "hydraulic-power-pack-for-baling-machine",
    name: "Hydraulic Power Pack for Baling Machine",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Optimized power unit for textile and waste baling applications",
    longDescription: "Specialized hydraulic power pack designed specifically for baling press machines used in textile recycling, waste management, and waste compression applications. Features include high-cycle endurance, compact design, and integrated control logic for automatic operation.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Cycle Time", value: "15 - 30 seconds" },
      { label: "Motor Power", value: "3 HP - 10 HP" },
      { label: "Tank Capacity", value: "40 - 80 Liters" },
      { label: "Control", value: "PLC integrated" },
      { label: "Protection", value: "IP54 enclosure" }
    ],
    features: [
      "High-cycle endurance design",
      "Compact footprint for baling machine integration",
      "PLC-based automatic control sequence",
      "Oil level and temperature monitoring",
      "Auto-reverse on blockage",
      "Emergency stop feature",
      "Low noise operation",
      "Easy maintenance access"
    ],
    applications: [
      "Textile baling machines",
      "Waste compactor presses",
      "Recycling baling systems",
      "Carton compression",
      "Plastic baling"
    ],
    customizationOptions: [
      "Baling machine model compatibility",
      "Cycle time requirements",
      "Control panel interface options",
      "Oil cooling requirements",
      "Emergency backup options"
    ],
    image: "https://placehold.co/600x400/yellow-600/FFFFFF?text=Hydraulic+Baling+Powerpack",
    gallery: [
      "https://placehold.co/600x400/yellow-700/FFFFFF?text=Baling+Powerpack+View+1",
      "https://placehold.co/600x400/yellow-800/FFFFFF?text=Baling+Powerpack+View+2"
    ],
    relatedProducts: ["hydraulic-power-pack-for-screen-changer"],
    featured: false
  }
];

export function getRelatedProducts(productSlug: string): Product[] {
  const product = products.find(p => p.slug === productSlug);
  if (!product || !product.relatedProducts?.length) return [];
  return products.filter(p => product.relatedProducts.includes(p.slug));
}

// Even more products for demonstration - to ensure everything is visible with lots of mock data
export const allProducts: Product[] = [
  // Original products
  ...products,
  // Extended products
  ...extendedProducts,
  // Additional demonstration products
  {
    slug: "high-pressure-hydraulic-powerpack",
    name: "High Pressure Hydraulic Powerpack",
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Specialized power pack for ultra-high pressure applications",
    longDescription: "High-pressure hydraulic power pack capable of delivering pressures up to 700 bar for specialized industrial applications. Designed for testing, research, and high-force applications requiring extreme pressure capabilities.",
    keySpecs: [
      { label: "Max Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "5 - 30 LPM" },
      { label: "Motor Power", value: "5 HP - 20 HP" },
      { label: "Tank Capacity", value: "50 - 150 Liters" },
      { label: "Applications", value: "Testing & Calibration" }
    ],
    features: [
      "Ultra-high pressure capability",
      "Precision pressure control",
      "Safety reliefValves",
      "Digital pressure monitoring",
      "Robust frame construction",
      "Emergency shutdown system"
    ],
    applications: [
      "High-pressure testing",
      "Calibration laboratories",
      "Research applications",
      "Specialized manufacturing",
      "Force generation"
    ],
    customizationOptions: [
      "Pressure rating specification",
      "Flow rate requirements",
      "Special materials for corrosive fluids",
      "Control panel customization",
      "Safety feature selection"
    ],
    image: "https://placehold.co/600x400/red-600/FFFFFF?text=High+Pressure+Powerpack",
    gallery: [
      "https://placehold.co/600x400/red-700/FFFFFF?text=High+Pressure+Powerpack+View+1",
      "https://placehold.co/600x400/red-800/FFFFFF?text=High+Pressure+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-power-pack-for-rolling-mill",
    name: "Hydraulic Power Pack for Rolling Mill",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Dedicated power unit for metal rolling mill applications",
    longDescription: "Custom-engineered hydraulic power pack designed specifically for rolling mill operations in steel and metal processing plants. Features high flow rates and precise pressure control for consistent轧机 operations.",
    keySpecs: [
      { label: "Flow Rate", value: "100 - 500 LPM" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Motor Power", value: "50 HP - 200 HP" },
      { label: "Cooling", value: "Water-cooled" },
      { label: "Applications", value: "Steel Rolling Mills" }
    ],
    features: [
      "High flow capacity design",
      "Robust construction for industrial use",
      "Advanced cooling system",
      "Multiple valve banks",
      "Continuous duty operation",
      "Heavy-duty components"
    ],
    applications: [
      "Hot rolling mills",
      "Cold rolling mills",
      "Finishing mills",
      "Rebars rolling",
      "Wire rod mills"
    ],
    customizationOptions: [
      "Rolling mill model compatibility",
      "Pressure and flow requirements",
      "Control system integration",
      "Safety system requirements",
      "Environmental protection"
    ],
    image: "https://placehold.co/600x400/gray-600/FFFFFF?text=Rolling+Mill+Powerpack",
    gallery: [
      "https://placehold.co/600x400/gray-700/FFFFFF?text=Rolling+Mill+Powerpack+View+1",
      "https://placehold.co/600x400/gray-800/FFFFFF?text=Rolling+Mill+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-cylinder-for-crusher",
    name: "Hydraulic Cylinder for Crusher",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Heavy-duty cylinder designed for mining and quarry crushing equipment",
    longDescription: "Specialized hydraulic Cylinder manufactured specifically for cone crushers, jaw crushers, and impact crushing equipment. Features reinforced construction to withstand extreme冲击 loads and abrasive conditions.",
    keySpecs: [
      { label: "Bore Diameter", value: "100 - 400 mm" },
      { label: "Stroke Length", value: "Up to 500 mm" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Material", value: "High-strength alloy" },
      { label: "Seals", value: "Heavy-duty" }
    ],
    features: [
      "Extreme load capacity",
      "Impact-resistant design",
      "Special rod coating",
      "Heavy-duty wipers",
      "Large bearing surfaces",
      "Extended service life"
    ],
    applications: [
      "Cone crushers",
      "Jaw crushers",
      "Impact crushers",
      "Vertical shaft impactors",
      "Screening equipment"
    ],
    customizationOptions: [
      "Crusher model compatibility",
      "Load requirements",
      "Mounting configuration",
      "Seal material for environment",
      "Protective accessories"
    ],
    image: "https://placehold.co/600x400/brown-600/FFFFFF?text=Hydraulic+Cylinder+for+Crusher",
    gallery: [
      "https://placehold.co/600x400/brown-700/FFFFFF?text=Crusher+Cylinder+View+1",
      "https://placehold.co/600x400/brown-800/FFFFFF?text=Crusher+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-power-pack-for-paper-machine",
    name: "Hydraulic Power Pack for Paper Machine",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Precision power unit for paper and pulp manufacturing",
    longDescription: "Specialized hydraulic power pack designed for paper and pulp manufacturing equipment including calenders, presses, and rewinding machines. Features clean operation and precise control for consistent paper quality.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 160 bar" },
      { label: "Flow Rate", value: "50 - 200 LPM" },
      { label: "Noise Level", value: "Low noise design" },
      { label: "Cleanliness", value: "Highfiltration" },
      { label: "Applications", value: "Paper Machines" }
    ],
    features: [
      "Clean operation for paper environment",
      "Low noise design for workshop",
      "Precision pressure control",
      "Corrosion-resistant materials",
      "Reliable continuous operation",
      "Easy maintenance access"
    ],
    applications: [
      "Calender rolls",
      "Press rolls",
      "Rewinding machines",
      "Pulp processing",
      "Sheet cutting"
    ],
    customizationOptions: [
      "Paper machine model compatibility",
      "Speed requirements",
      "Control system integration",
      "Environmental protection",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/zinc-600/FFFFFF?text=Paper+Machine+Powerpack",
    gallery: [
      "https://placehold.co/600x400/zinc-700/FFFFFF?text=Paper+Machine+Powerpack+View+1",
      "https://placehold.co/600x400/zinc-800/FFFFFF?text=Paper+Machine+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "portable-hydraulic-test-pump",
    name: "Portable Hydraulic Test Pump",
    category: "Testing Equipment",
    categorySlug: "testing-equipment",
    shortDescription: "Hand-operated pump for hydraulic system testing and calibration",
    longDescription: "Portable hydraulic test pump for pressure testing, calibration, and verification of hydraulic systems and components. Compact design makes it ideal for field service, workshops, and laboratory use.",
    keySpecs: [
      { label: "Max Pressure", value: "Up to 600 bar" },
      { label: "Operation", value: "Hand-operated" },
      { label: "Reservoir", value: "5 Liters" },
      { label: "Output", value: "4.5 LPM" },
      { label: "Weight", value: "Lightweight" }
    ],
    features: [
      "Portable and lightweight",
      "Easy-to-read pressure gauge",
      "Quick-connect fittings",
      "Compact carrying handle",
      "Robust construction",
      "Calibration certificate included"
    ],
    applications: [
      "Field pressure testing",
      "System calibration",
      "Leak testing",
      "Component verification",
      "Emergency repair"
    ],
    customizationOptions: [
      "Pressure range selection",
      "Fitting types",
      "Cylinder size",
      "Gauge specification",
      "Carrying case"
    ],
    image: "https://placehold.co/600x400/sandstone-600/FFFFFF?text=Portable+Hydraulic+Test+Pump",
    gallery: [
      "https://placehold.co/600x400/sandstone-700/FFFFFF?text=Test+Pump+View+1",
      "https://placehold.co/600x400/sandstone-800/FFFFFF?text=Test+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-power-pack-for-wood-dryer",
    name: "Hydraulic Power Pack for Wood Dryer",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Specialized power pack for wood drying and processing equipment",
    longDescription: "Specialized hydraulic power pack designed for wood dryer and processing equipment. Features corrosion resistance and heat tolerance for operation in high-humidity environments typical of wood processing facilities.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Tank Capacity", value: "40 - 100 Liters" },
      { label: "Corrosion Protection", value: "Enhanced" },
      { label: "Applications", value: "Wood Dryers" }
    ],
    features: [
      "Corrosion-resistant materials",
      "Heat-resistant seals",
      "Marine-grade components",
      "Sealed electrical components",
      "High corrosion protection",
      "Humidity-resistant design"
    ],
    applications: [
      "Wood dryers",
      "Lumber processing",
      "Plywood presses",
      "Engineered wood",
      "Furniture manufacturing"
    ],
    customizationOptions: [
      "Wood dryer model compatibility",
      "Pressure and flow needs",
      "Control system integration",
      "Protection requirements",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/stone-700/FFFFFF?text=Wood+Dryer+Powerpack",
    gallery: [
      "https://placehold.co/600x400/stone-800/FFFFFF?text=Wood+Dryer+Powerpack+View+1",
      "https://placehold.co/600x400/stone-900/FFFFFF?text=Wood+Dryer+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-cylinder-for-screening-equipment",
    name: "Hydraulic Cylinder for Screening Equipment",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Durable cylinder for mining and aggregate screening",
    longDescription: "Specialized hydraulic cylinder designed for vibrating screens, linear screens, and other screening equipment in mining, quarrying, and aggregate processing. Features rugged construction for high-cycle operation.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 160 mm" },
      { label: "Stroke Length", value: "Up to 800 mm" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Mounting", value: "Clevis/Eye" },
      { label: "Cycles", value: "High-cycle" }
    ],
    features: [
      "High-cycle fatigue resistance",
      "Impact-resistant design",
      "Corrosion protection",
      "Heavy-duty rod wipers",
      "Sealed bushings",
      "Extended service intervals"
    ],
    applications: [
      "Vibrating screens",
      "Linear screens",
      "Circular screens",
      "Grizzlies",
      "Feeder equipment"
    ],
    customizationOptions: [
      "Screen model compatibility",
      "Load and stroke requirements",
      "Mounting configuration",
      "Seal material selection",
      "Protective accessories"
    ],
    image: "https://placehold.co/600x400/gray-700/FFFFFF?text=Screening+Cylinder",
    gallery: [
      "https://placehold.co/600x400/gray-800/FFFFFF?text=Screening+Cylinder+View+1",
      "https://placehold.co/600x400/gray-900/FFFFFF?text=Screening+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-power-pack-for-foam-molding",
    name: "Hydraulic Power Pack for Foam Molding",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Precision power unit for polyurethane foam molding",
    longDescription: "Specialized hydraulic power pack designed specifically for polyurethane foam molding machines. Features precise pressure control, clean operation, and compatibility with foam processing equipment.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 150 bar" },
      { label: "Flow Rate", value: "30 - 100 LPM" },
      { label: "Tone Capacity", value: "30 - 80 Liters" },
      { label: "Control", value: "PLC integrated" },
      { label: "Applications", value: "Foam Molding" }
    ],
    features: [
      "Clean operation for clean room",
      "Precise pressure control",
      "Low noise operation",
      "Corrosion-resistant components",
      "Reliable continuous operation",
      "Easy maintenance access"
    ],
    applications: [
      "Polyurethane molding",
      "Flexible foam production",
      "Rigid foam molding",
      "Cast foam parts",
      "Foam cutting"
    ],
    customizationOptions: [
      "Molding machine compatibility",
      "Pressure and flow needs",
      "Control system integration",
      "Environmental protection",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/amber-700/FFFFFF?text=Foam+Molding+Powerpack",
    gallery: [
      "https://placehold.co/600x400/amber-800/FFFFFF?text=Foam+Molding+Powerpack+View+1",
      "https://placehold.co/600x400/amber-900/FFFFFF?text=Foam+Molding+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-cylinder-for-press-brake",
    name: "Hydraulic Cylinder for Press Brake",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "High-force cylinder for metal bending and forming",
    longDescription: "Specialized hydraulic cylinder designed specifically for press brake machines in metal fabrication. Features high-force output, precise control, and robust construction for long service life in demanding bending applications.",
    keySpecs: [
      { label: "Bore Diameter", value: "100 - 300 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Force", value: "Up to 500 Tons" },
      { label: "Accuracy", value: "High precision" }
    ],
    features: [
      "High precision control",
      "Synchronized operation",
      "High-cycle endurance",
      "Robust construction",
      "Cushioned operation",
      "Long service intervals"
    ],
    applications: [
      "Press brakes",
      "Bending machines",
      "Flanging equipment",
      "Forming presses",
      "Hemming machines"
    ],
    customizationOptions: [
      "Press brake model compatibility",
      "Bending force requirements",
      "Stroke length needs",
      "Synchronization requirements",
      "Control system integration"
    ],
    image: "https://placehold.co/600x400/rose-700/FFFFFF?text=Press+Brake+Cylinder",
    gallery: [
      "https://placehold.co/600x400/rose-800/FFFFFF?text=Press+Brake+Cylinder+View+1",
      "https://placehold.co/600x400/rose-900/FFFFFF?text=Press+Brake+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-power-pack-for-textile-loom",
    name: "Hydraulic Power Pack for Textile Loom",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Precision power unit for textile weaving looms",
    longDescription: "Specialized hydraulic power pack designed specifically for modern textile weaving looms. Features low noise, precise control, and reliable operation for continuous production in textile manufacturing environments.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 120 bar" },
      { label: "Flow Rate", value: "10 - 40 LPM" },
      { label: "Motor Power", value: "1 HP - 5 HP" },
      { label: "Noise Level", value: "Low noise design" },
      { label: "Applications", value: "Textile Looms" }
    ],
    features: [
      "Ultra-low noise operation",
      "Precise pressure control",
      "Compact design",
      "Reliable continuous operation",
      "Easy maintenance access",
      "Energy-efficient design"
    ],
    applications: [
      "Airjet looms",
      "Rapier looms",
      "Waterjet looms",
      "Sword looms",
      "Drawer looms"
    ],
    customizationOptions: [
      "Loom model compatibility",
      "Pressure and flow needs",
      "Control system integration",
      "Noise reduction requirements",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/blue-700/FFFFFF?text=Textile+Loom+Powerpack",
    gallery: [
      "https://placehold.co/600x400/blue-800/FFFFFF?text=Loom+Powerpack+View+1",
      "https://placehold.co/600x400/blue-900/FFFFFF?text=Loom+Powerpack+View+2"
    ],
    relatedProducts: [],
    featured: false
  }
];
