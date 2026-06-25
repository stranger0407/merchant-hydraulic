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
  // ============= HYDRAULIC POWER PACKS (10 products) =============
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
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
    slug: "mobile-hydraulic-powerpack",
    name: "Mobile Hydraulic Powerpack",
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Heavy-duty mobile power pack on robust trolley for workshop and field use",
    longDescription: "Our Mobile Hydraulic Powerpack offers exceptional portability without compromising performance. Built on a rugged steel trolley with large pneumatic tires and a drawbar, this unit can be easily towed around large workshop floors, construction sites, and industrial facilities.",
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
      "Construction sites",
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Integrated hydraulic and air pressure unit for dual functionality",
    longDescription: "This combined hydraulic and pneumatic powerpack delivers both hydraulic pressure and compressed air from a single unit, saving space and reducing operational costs. Perfect for workshops and manufacturing facilities that require both hydraulic and pneumatic power.",
    keySpecs: [
      { label: "Hydraulic Pressure", value: "Up to 210 bar" },
      { label: "Air Pressure", value: "Up to 15 bar" },
      { label: "Motor Power", value: "7.5 HP - 15 HP" },
      { label: "Air Flow", value: "5 - 15 CFM" },
      { label: "Tank Capacity", value: "100 - 300 Liters" },
      { label: "Air Receiver", value: "50 - 100 Liters" }
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Factory-mounted and tested hydraulic system on skid for quick installation",
    longDescription: "Our skid-mounted hydraulic power units come fully assembled, tested, and ready for installation. All components including motor, pump, reservoir, valves, and controls are securely mounted on a steel skid with vibration dampeners.",
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
      "Complete Documentation package",
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
    shortDescription: "Optimized power unit for textile and waste baling applications",
    longDescription: "Specialized hydraulic power pack designed specifically for baling press machines used in textile recycling, waste management, and waste compression applications. Features include high-cycle endurance, compact design, and integrated control logic.",
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
  },
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
      "Safety relief Valves",
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
    category: "Hydraulic Power Packs",
    categorySlug: "hydraulic-power-packs",
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

  // ============= HYDRAULIC CYLINDERS (10 products) =============
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
    shortDescription: "Compact power unit designed specifically for goods elevator systems",
    longDescription: "Dedicated hydraulic power pack engineered for goods lift and cargo elevator applications. Features controlled acceleration/deceleration, precise leveling capability, and safety redundancy required for vertical transportation.",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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
  },
  {
    slug: "hydraulic-cylinder-for-crusher",
    name: "Hydraulic Cylinder for Crusher",
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
    shortDescription: "Heavy-duty cylinder designed for mining and quarry crushing equipment",
    longDescription: "Specialized hydraulic Cylinder manufactured specifically for cone crushers, jaw crushers, and impact crushing equipment. Features reinforced construction to withstand extreme loads and abrasive conditions.",
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
    slug: "hydraulic-cylinder-for-screening-equipment",
    name: "Hydraulic Cylinder for Screening Equipment",
    category: "Hydraulic Cylinders",
    categorySlug: "hydraulic-cylinders",
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

  // ============= CUSTOMIZED HYDRAULIC POWER PACKS (10 products) =============
  {
    slug: "customized-hydraulic-power-pack-01",
    name: "Customized Hydraulic Power Pack - Model A",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Tailor-made hydraulic power solutions for specific industrial applications",
    longDescription: "Our customized hydraulic power packs are engineered specifically for your application requirements. We work closely with you to design units that integrate seamlessly with your equipment and meet all operational specifications.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "10 - 500 LPM" },
      { label: "Motor Power", value: "1 HP - 200 HP" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Control", value: "PLC integrated" },
      { label: "Protection", value: "Custom enclosures" }
    ],
    features: [
      "Application-specific design",
      "Seamless OEM integration",
      "Custom mounting solutions",
      "Special material options",
      "Comprehensive documentation",
      "Factory testing and validation",
      "On-site commissioning",
      "Extended warranty options"
    ],
    applications: [
      "Special purpose machinery",
      "Custom equipment",
      "OEM integration",
      "Process automation",
      "Unique applications"
    ],
    customizationOptions: [
      "Pressure and flow specifications",
      "Motor and pump selection",
      "Tank capacity requirements",
      "Control system requirements",
      "Mounting and installation"
    ],
    image: "https://placehold.co/600x400/purple-600/FFFFFF?text=Custom+Power+Pack+Model+A",
    gallery: [
      "https://placehold.co/600x400/purple-700/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/purple-800/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-02",
    name: "Customized Hydraulic Power Pack - Model B",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Engineered solutions for demanding industrial applications",
    longDescription: "High-performance customized hydraulic power packs designed for the most challenging industrial environments. Our engineering team delivers reliable solutions that exceed industry standards and client expectations.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "5 - 200 LPM" },
      { label: "Motor Power", value: "5 HP - 100 HP" },
      { label: "Configuration", value: "Custom optimized" },
      { label: "Control", value: "Advanced controls" },
      { label: "Protection", value: "IP66 enclosures" }
    ],
    features: [
      "High-pressure capability",
      "Rugged construction",
      "Advanced control systems",
      "Energy-efficient design",
      "Reduced maintenance intervals",
      "Extended service life",
      "Comprehensive monitoring",
      "Remote diagnostics capability"
    ],
    applications: [
      "Heavy industrial applications",
      "Mining operations",
      "Steel manufacturing",
      "Power generation",
      "Marine applications"
    ],
    customizationOptions: [
      "Environmental protection requirements",
      "Control system specifications",
      "Safety feature selection",
      "Communication protocol integration",
      "Special certifications"
    ],
    image: "https://placehold.co/600x400/indigo-700/FFFFFF?text=Custom+Power+Pack+Model+B",
    gallery: [
      "https://placehold.co/600x400/indigo-800/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/indigo-900/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-03",
    name: "Customized Hydraulic Power Pack - Model C",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Compact custom power packs for space-constrained applications",
    longDescription: "Space-efficient customized hydraulic power packs designed for applications with limited installation space. Our compact designs deliver maximum performance in minimal footprint.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "5 - 100 LPM" },
      { label: "Motor Power", value: "1 HP - 30 HP" },
      { label: "Configuration", value: "Compact optimized" },
      { label: "Control", value: "Integrated controls" },
      { label: "Size", value: "Minimized footprint" }
    ],
    features: [
      "Ultra-compact design",
      "Modular construction",
      "Easy integration",
      "Reduced weight",
      "Lower transportation costs",
      "Simplified installation",
      "Quick commissioning",
      "Easy maintenance access"
    ],
    applications: [
      "Mobile equipment",
      "Conveyor systems",
      "Packaging machinery",
      "Automated storage",
      "Robotics integration"
    ],
    customizationOptions: [
      "Space constraints accommodation",
      "Weight limitations",
      "Power source requirements",
      "Control interface preferences",
      "Mounting configurations"
    ],
    image: "https://placehold.co/600x400/sky-600/FFFFFF?text=Custom+Power+Pack+Model+C",
    gallery: [
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-04",
    name: "Customized Hydraulic Power Pack - Model D",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "High-flow custom power packs for large-scale applications",
    longDescription: "High-capacity customized hydraulic power packs for large-scale industrial applications requiring substantial flow rates and power delivery. Built for continuous duty operation in demanding environments.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "100 - 1000 LPM" },
      { label: "Motor Power", value: "20 HP - 500 HP" },
      { label: "Configuration", value: "High-flow optimized" },
      { label: "Cooling", value: "Integrated cooling" },
      { label: "Size", value: "Large capacity" }
    ],
    features: [
      "High flow capacity",
      "Robust construction",
      "Advanced cooling systems",
      "Multiple pump configuration",
      "Extended service intervals",
      "Reducedowntime maintenance",
      "Comprehensive monitoring",
      "Predictive maintenance capabilities"
    ],
    applications: [
      "Steel mills",
      "Paper mills",
      "Plastic molding",
      "Injection molding",
      "Heavy presses"
    ],
    customizationOptions: [
      "Flow rate requirements",
      "Pressure specifications",
      "Cooling system selection",
      "Control panel configuration",
      "Safety system integration"
    ],
    image: "https://placehold.co/600x400/rose-800/FFFFFF?text=Custom+Power+Pack+Model+D",
    gallery: [
      "https://placehold.co/600x400/rose-900/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/rose-950/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-05",
    name: "Customized Hydraulic Power Pack - Model E",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Mobile custom power packs for field and remote operations",
    longDescription: "Portable customized hydraulic power packs designed for field service, remote locations, and mobile applications. Built for reliability and ease of transport while maintaining professional-grade performance.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "10 - 150 LPM" },
      { label: "Motor Power", value: "2 HP - 50 HP" },
      { label: "Mobility", value: "Fully mobile" },
      { label: "Fuel Type", value: "Diesel/Electric" },
      { label: "Transport", value: "Road legal" }
    ],
    features: [
      "Full mobility",
      "Weather protection",
      "Road transportable",
      "Quick setup",
      "Fuel-efficient operation",
      "Low noise design",
      "Emergency backup",
      "Comprehensive safety systems"
    ],
    applications: [
      "Field maintenance",
      "Emergency response",
      "Remote operations",
      "Mobile repair units",
      "Construction sites"
    ],
    customizationOptions: [
      "Mobility requirements",
      "Fuel source preferences",
      "Transport dimensions",
      "Noise level requirements",
      "Special tooling integration"
    ],
    image: "https://placehold.co/600x400/amber-800/FFFFFF?text=Custom+Power+Pack+Model+E",
    gallery: [
      "https://placehold.co/600x400/amber-900/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/amber-950/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-06",
    name: "Customized Hydraulic Power Pack - Model F",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Clean room custom power packs for sensitive environments",
    longDescription: "Specialized customized hydraulic power packs designed for clean room and sensitive environment applications. Features exceptional contamination control and quiet operation for controlled environments.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "5 - 80 LPM" },
      { label: "Motor Power", value: "1 HP - 20 HP" },
      { label: "Cleanliness", value: "ISO Class 5" },
      { label: "Noise Level", value: "Ultra-quiet" },
      { label: "Sealing", value: "Fully sealed" }
    ],
    features: [
      "Contamination control",
      "Low particle generation",
      "Closed-loop operation",
      "HEPA filtration",
      "Stainless steel construction",
      "Easy cleaning surfaces",
      "Non-marking components",
      "Static dissipation"
    ],
    applications: [
      "Pharmaceutical manufacturing",
      "Electronics assembly",
      "Food processing",
      "Medical equipment",
      "Laboratory applications"
    ],
    customizationOptions: [
      "Clean room classification",
      "Material compatibility",
      "Sanitary requirements",
      "Cleaning procedures",
      "Documentation needs"
    ],
    image: "https://placehold.co/600x400/stone-900/FFFFFF?text=Custom+Power+Pack+Model+F",
    gallery: [
      "https://placehold.co/600x400/stone-950/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/stone-999/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-07",
    name: "Customized Hydraulic Power Pack - Model G",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "maritime custom power packs for marine and offshore applications",
    longDescription: "Marine-optimized customized hydraulic power packs designed for shipboard and offshore operations. Built to withstand saltwater environments and meet maritime certification requirements.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "20 - 300 LPM" },
      { label: "Motor Power", value: "5 HP - 150 HP" },
      { label: "Certification", value: "Marine certified" },
      { label: "Corrosion", value: "Marine grade" },
      { label: "Safety", value: "Explosion proof" }
    ],
    features: [
      "Marine-grade materials",
      "Corrosion resistance",
      "Waterproof construction",
      "Explosion-proof components",
      "Vibration damping",
      "Shock resistance",
      "Redundant systems",
      "Comprehensive safety"
    ],
    applications: [
      "Shipboard machinery",
      "Offshore platforms",
      "Marine cranes",
      "Deck equipment",
      "Subsea operations"
    ],
    customizationOptions: [
      "Marine certifications",
      "Explosion protection levels",
      "Voltage specifications",
      "Mounting requirements",
      "Control interface standards"
    ],
    image: "https://placehold.co/600x400/teal-900/FFFFFF?text=Custom+Power+Pack+Model+G",
    gallery: [
      "https://placehold.co/600x400/teal-950/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/teal-999/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-08",
    name: "Customized Hydraulic Power Pack - Model H",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "High-speed custom power packs for rapid cycling applications",
    longDescription: "Fast-acting customized hydraulic power packs designed for applications requiring rapid cycle times and quick response. Ideal for high-production rate manufacturing and processing equipment.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 400 bar" },
      { label: "Flow Rate", value: "50 - 500 LPM" },
      { label: "Cycle Speed", value: "High speed" },
      { label: "Response Time", value: "<100ms" },
      { label: "Controls", value: "High-speed" },
      { label: "Durability", value: "High-cycle" }
    ],
    features: [
      "Rapid response",
      "High cycle endurance",
      "Low inertia design",
      "Quick-acting valves",
      "Optimized flow paths",
      "Reduced heat generation",
      "Extended service life",
      "Predictable maintenance"
    ],
    applications: [
      "High-speed presses",
      "Injection molding",
      "Packaging machinery",
      "Stamping lines",
      "Automated assembly"
    ],
    customizationOptions: [
      "Cycle time requirements",
      "Speed profiling",
      "Position accuracy",
      "Control synchronization",
      "Safety interlocks"
    ],
    image: "https://placehold.co/600x400/blue-900/FFFFFF?text=Custom+Power+Pack+Model+H",
    gallery: [
      "https://placehold.co/600x400/blue-950/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/blue-999/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-09",
    name: "Customized Hydraulic Power Pack - Model I",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Energy-efficient custom power packs for sustainable operations",
    longDescription: "Eco-friendly customized hydraulic power packs designed for energy conservation and sustainable operations. Features advanced energy management and reduced power consumption without sacrificing performance.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 300 bar" },
      { label: "Flow Rate", value: "10 - 200 LPM" },
      { label: "Efficiency", value: "High efficiency" },
      { label: "Energy Recovery", value: "Available" },
      { label: "Noise Level", value: "Low noise" },
      { label: "Cooling", value: "Smart cooling" }
    ],
    features: [
      "Energy recovery system",
      "Variable speed drive",
      "Smart power management",
      "Reduced heat generation",
      "Lower operating costs",
      "Extended component life",
      "Environmental compliance",
      "Reduced carbon footprint"
    ],
    applications: [
      "Green manufacturing",
      "Sustainable facilities",
      "Energy-conscious operations",
      "LEED-certified buildings",
      "Eco-industrial parks"
    ],
    customizationOptions: [
      "Energy targets",
      "Peak demand reduction",
      "Regenerative braking",
      "Smart grid integration",
      "Monitoring capabilities"
    ],
    image: "https://placehold.co/600x400/emerald-900/FFFFFF?text=Custom+Power+Pack+Model+I",
    gallery: [
      "https://placehold.co/600x400/emerald-950/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/emerald-999/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "customized-hydraulic-power-pack-10",
    name: "Customized Hydraulic Power Pack - Model J",
    category: "Customized Hydraulic Power Packs",
    categorySlug: "customized-hydraulic-power-packs",
    shortDescription: "Heavy-duty custom power packs for extreme applications",
    longDescription: "Extreme-duty customized hydraulic power packs designed for the most demanding industrial environments. Built to withstand extreme temperatures, pressures, and continuous operation with minimal maintenance.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 1000 bar" },
      { label: "Flow Rate", value: "5 - 100 LPM" },
      { label: "Temperature Range", value: "-40°C to +200°C" },
      { label: "Construction", value: "Extreme duty" },
      { label: "Reliability", value: "Highest reliability" },
      { label: "Support", value: "24/7 support" }
    ],
    features: [
      "Extreme conditions tolerance",
      "Maximum reliability",
      "Minimal maintenance",
      "Rapid response time",
      "Compact high-power design",
      "Advanced sealing systems",
      "Corrosion-proof materials",
      "Comprehensive protection"
    ],
    applications: [
      "Deep-sea operations",
      "Desert operations",
      "Arctic operations",
      "High-temperature processes",
      "Heavy mining equipment"
    ],
    customizationOptions: [
      "Temperature specifications",
      "Pressure requirements",
      "Environmental protections",
      "Safety system requirements",
      "Special certifications"
    ],
    image: "https://placehold.co/600x400/red-900/FFFFFF?text=Custom+Power+Pack+Model+J",
    gallery: [
      "https://placehold.co/600x400/red-950/FFFFFF?text=Custom+Power+Pack+View+1",
      "https://placehold.co/600x400/red-999/FFFFFF?text=Custom+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= ELECTRIC HYDRAULIC POWER PACKS (10 products) =============
  {
    slug: "electric-hydraulic-power-pack-01",
    name: "Electric Hydraulic Power Pack - Standard",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Electric motor-driven hydraulic power unit for clean indoor operations",
    longDescription: "Our electric hydraulic power packs combine efficient electric motors with proven hydraulic technology. Perfect for indoor applications where clean, quiet, and reliable hydraulic power is required without emissions.",
    keySpecs: [
      { label: "Motor Power", value: "1 HP - 30 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "5 - 100 LPM" },
      { label: "Voltage", value: "230V/415V, 3 Phase" },
      { label: "Noise Level", value: "Low noise (<70 dB)" },
      { label: "Efficiency", value: "High efficiency" }
    ],
    features: [
      "Zero emissions operation",
      "Quiet motor operation",
      "Energy-efficient motor",
      "Compact footprint",
      "Easy installation",
      "Low maintenance requirements",
      "Long service life",
      "Indoor-safe operation"
    ],
    applications: [
      "Workshop equipment",
      "CNC machines",
      "Automated systems",
      "Factory infrastructure",
      "Clean environments"
    ],
    customizationOptions: [
      "Motor power and voltage",
      "Sound insulation",
      "Enclosure options",
      "Control panel configuration",
      "Mounting preferences"
    ],
    image: "https://placehold.co/600x400/cyan-500/FFFFFF?text=Electric+Hydraulic+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/cyan-600/FFFFFF?text=Electric+Power+Pack+View+1",
      "https://placehold.co/600x400/cyan-700/FFFFFF?text=Electric+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: true
  },
  {
    slug: "electric-hydraulic-power-pack-02",
    name: "Electric Hydraulic Power Pack - Precision",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "High-precision electric power pack for sensitive applications",
    longDescription: "Premium electric hydraulic power pack designed for applications requiring precise pressure and flow control. Features advanced electronic controls and fine-tuned regulation for sensitive industrial processes.",
    keySpecs: [
      { label: "Pressure Range", value: "Up to 300 bar" },
      { label: "Flow Rate", value: "2 - 50 LPM" },
      { label: "Control", value: "Precision electronic" },
      { label: "Accuracy", value: "High precision" },
      { label: "Repeatability", value: "Excellent" },
      { label: "Response", value: "Fast response" }
    ],
    features: [
      "Exact pressure control",
      "Flow rate precision",
      "Digital monitoring",
      "Closed-loop control",
      "Data logging capability",
      "Remote diagnostics",
      "Calibration certificate",
      "Traceable quality"
    ],
    applications: [
      "Testing equipment",
      "Calibration labs",
      "Research facilities",
      "Quality control",
      "Precision manufacturing"
    ],
    customizationOptions: [
      "Control accuracy requirements",
      "Data output formats",
      "Interface preferences",
      "Special calibration",
      "Documentation needs"
    ],
    image: "https://placehold.co/600x400/sky-500/FFFFFF?text=Electric+Precision+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/sky-600/FFFFFF?text=Electric+Precision+View+1",
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Electric+Precision+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-03",
    name: "Electric Hydraulic Power Pack - Heavy Duty",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Heavy-duty electric power pack for continuous industrial operations",
    longDescription: "Industrial-grade electric hydraulic power pack built for demanding applications requiring reliable continuous operation. Features robust construction, extended service intervals, and proven durability.",
    keySpecs: [
      { label: "Motor Power", value: "10 HP - 100 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "50 - 300 LPM" },
      { label: "Duty Cycle", value: "100% duty cycle" },
      { label: "Construction", value: "Heavy-duty" },
      { label: "Lifespan", value: "Extended" }
    ],
    features: [
      "24/7 continuous operation",
      "Thermal protection",
      "Industrial-grade components",
      "Extended service life",
      "Reduced downtime",
      "Predictable maintenance",
      "High reliability",
      "Cost-effective operation"
    ],
    applications: [
      "Production lines",
      "Assembly operations",
      "Packaging machinery",
      "Material handling",
      "Industrial automation"
    ],
    customizationOptions: [
      "Power requirements",
      "Control system integration",
      "Mounting configurations",
      "Safety features",
      "Special certifications"
    ],
    image: "https://placehold.co/600x400/indigo-500/FFFFFF?text=Electric+Heavy+Duty+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/indigo-600/FFFFFF?text=Electric+Heavy+Duty+View+1",
      "https://placehold.co/600x400/indigo-700/FFFFFF?text=Electric+Heavy+Duty+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-04",
    name: "Electric Hydraulic Power Pack - Compact",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Space-saving electric power pack for compact installations",
    longDescription: "Ultra-compact electric hydraulic power pack designed for applications with limited space. Delivers professional performance in a minimal footprint, ideal for retrofits and space-constrained installations.",
    keySpecs: [
      { label: "Motor Power", value: "1 HP - 15 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "2 - 60 LPM" },
      { label: "Size", value: "Compact design" },
      { label: "Weight", value: "Lightweight" },
      { label: "Installation", value: "Easy mounting" }
    ],
    features: [
      "Minimal footprint",
      "Lightweight construction",
      "Quick installation",
      "Easy maintenance access",
      "Modular design",
      "Space-efficient layout",
      "Reduced shipping costs",
      "Easy storage"
    ],
    applications: [
      "Retrofits",
      "Small machines",
      "Mobile equipment",
      "Limited space",
      "Compact setups"
    ],
    customizationOptions: [
      "Size constraints",
      "Mounting requirements",
      "Power specifications",
      "Control interface",
      "Connections configuration"
    ],
    image: "https://placehold.co/600x400/rose-500/FFFFFF?text=Electric+Compact+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/rose-600/FFFFFF?text=Electric+Compact+View+1",
      "https://placehold.co/600x400/rose-700/FFFFFF?text=Electric+Compact+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-05",
    name: "Electric Hydraulic Power Pack - Variable Speed",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Variable frequency drive electric power pack for energy efficiency",
    longDescription: "VFD-controlled electric hydraulic power pack that adjusts motor speed to match demand, resulting in significant energy savings. Smart control system optimizes performance while reducing operating costs.",
    keySpecs: [
      { label: "Motor Power", value: "2 HP - 50 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "Variable" },
      { label: "Drive Type", value: "Variable frequency" },
      label: "Efficiency", value: "Up to 50% energy savings" },
      { label: "Response", value: "Adaptive" }
    ],
    features: [
      "Energy savings up to 50%",
      "Soft start/stop",
      "Variable speed control",
      "Reduced wear and tear",
      "Lower operating costs",
      "Extended component life",
      "Stable pressure control",
      "Smooth operation"
    ],
    applications: [
      "Continuous operations",
      "Variable load applications",
      "Energy-conscious facilities",
      "Cost-saving upgrades",
      "Sustainable manufacturing"
    ],
    customizationOptions: [
      "Speed curve requirements",
      "Pressure profiles",
      "Control integration",
      "Monitoring systems",
      "Communication protocols"
    ],
    image: "https://placehold.co/600x400/teal-500/FFFFFF?text=Electric+VSD+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/teal-600/FFFFFF?text=Electric+VSD+View+1",
      "https://placehold.co/600x400/teal-700/FFFFFF?text=Electric+VSD+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-06",
    name: "Electric Hydraulic Power Pack - Silent Operation",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Ultra-quiet electric power pack for noise-sensitive environments",
    longDescription: "Silent electric hydraulic power pack designed for operation in noise-sensitive environments. Features advanced sound-dampening technology while maintaining full hydraulic performance.",
    keySpecs: [
      { label: "Motor Power", value: "1 HP - 20 HP" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Flow Rate", value: "2 - 40 LPM" },
      { label: "Noise Level", value: "<55 dB" },
      { label: "Sound Proofing", value: "Advanced" },
      { label: "Operation", value: "Silent" }
    ],
    features: [
      "Quiet operation below 55 dB",
      "Sound-dampening enclosure",
      "Low-noise pump",
      "Vibration isolation",
      "Smooth running motor",
      "Noise-tested",
      "Office-safe",
      "Night-operation capable"
    ],
    applications: [
      "Office buildings",
      "Hospitals",
      "Educational facilities",
      "Residential areas",
      "Night operations"
    ],
    customizationOptions: [
      "Noise level targets",
      "Enclosure specifications",
      "Sound rating requirements",
      "Ventilation needs",
      "Space constraints"
    ],
    image: "https://placehold.co/600x400/amber-500/FFFFFF?text=Electric+Silent+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/amber-600/FFFFFF?text=Electric+Silent+View+1",
      "https://placehold.co/600x400/amber-700/FFFFFF?text=Electric+Silent+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-07",
    name: "Electric Hydraulic Power Pack - Marine Grade",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Marine-certified electric power pack for shipboard operations",
    longDescription: "Marine-grade electric hydraulic power pack built to withstand harsh maritime environments. Features corrosion resistance, waterproofing, and certification for shipboard and offshore applications.",
    keySpecs: [
      { label: "Motor Power", value: "5 HP - 75 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "10 - 150 LPM" },
      { label: "Certification", value: "Marine certified" },
      { label: "Protection", value: "IP67" },
      { label: "Materials", value: "Marine grade" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Waterproof construction",
      "Salt spray tested",
      "Marine-grade materials",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard systems",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/blue-500/FFFFFF?text=Electric+Marine+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/blue-600/FFFFFF?text=Electric+Marine+View+1",
      "https://placehold.co/600x400/blue-700/FFFFFF?text=Electric+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-08",
    name: "Electric Hydraulic Power Pack - Mobile",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Mobile electric power pack for field and mobile applications",
    longDescription: "Portable electric hydraulic power pack designed for mobile and field operations. Features robust construction for transportability and reliable operation in various working environments.",
    keySpecs: [
      { label: "Motor Power", value: "2 HP - 30 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "5 - 80 LPM" },
      { label: "Mobility", value: "Mobile with wheels" },
      { label: "Power Source", value: "Electric motor" },
      { label: "Transport", value: "Easy transport" }
    ],
    features: [
      "Mobile trolley design",
      "Pneumatic tires",
      "Ergonomic handle",
      "Braking system",
      "Compact footprint",
      "Easy maneuverability",
      "Quick setup",
      "Field-ready"
    ],
    applications: [
      "Field maintenance",
      "Construction sites",
      "Emergency response",
      "Mobile repair units",
      "Remote operations"
    ],
    customizationOptions: [
      "Mobility requirements",
      "Weight considerations",
      "Size constraints",
      "Mounting preferences",
      "Special tools integration"
    ],
    image: "https://placehold.co/600x400/green-500/FFFFFF?text=Electric+Mobile+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/green-600/FFFFFF?text=Electric+Mobile+View+1",
      "https://placehold.co/600x400/green-700/FFFFFF?text=Electric+Mobile+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-09",
    name: "Electric Hydraulic Power Pack - Explosion Proof",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Explosion-proof electric power pack for hazardous environments",
    longDescription: "Explosion-proof electric hydraulic power pack designed for operation in hazardous locations with flammable vapors, gases, or dust. Meets strict safety standards for potentially explosive environments.",
    keySpecs: [
      { label: "Motor Power", value: "1 HP - 30 HP" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "2 - 60 LPM" },
      { label: "Certification", value: "Explosion proof" },
      { label: "防护等级", value: "IP65+" },
      { label: "Application", value: "Hazardous areas" }
    ],
    features: [
      "Explosion-proof motor",
      "Non-sparking construction",
      "Temperature class control",
      "Hazardous location certification",
      "Safety interlocks",
      "Emergency shutdown",
      "Intrinsically safe controls",
      "Comprehensive safety systems"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-500/FFFFFF?text=Electric+Explosion+Proof+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/orange-600/FFFFFF?text=Electric+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-700/FFFFFF?text=Electric+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "electric-hydraulic-power-pack-10",
    name: "Electric Hydraulic Power Pack - Food Grade",
    category: "Electric Hydraulic Power Packs",
    categorySlug: "electric-hydraulic-power-packs",
    shortDescription: "Food-grade electric power pack for food and beverage applications",
    longDescription: "Food-grade electric hydraulic power pack designed for food, beverage, and pharmaceutical manufacturing. Features hygienic construction with easy cleaning and food-safe materials.",
    keySpecs: [
      { label: "Motor Power", value: "1 HP - 15 HP" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Flow Rate", value: "2 - 30 LPM" },
      { label: "Construction", value: "Food grade stainless steel" },
      { label: "Lubrication", value: "Food-safe oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy to clean",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-400/FFFFFF?text=Electric+Food+Grade+Power+Pack",
    gallery: [
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Electric+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-600/FFFFFF?text=Electric+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= TIE ROD HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "tie-rod-hydraulic-cylinder-01",
    name: "Tie Rod Hydraulic Cylinder - Standard Duty",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Standard industrial tie rod cylinder for general purpose applications",
    longDescription: "Standard tie rod hydraulic cylinder designed for general industrial applications requiring reliable performance and simple maintenance. Features robust construction with high-tensile tie rods for durability.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 210 bar" },
      { label: "Rod Diameter", value: "20 - 100 mm" },
      { label: "Mounting", value: "Clevis, Flange, Trunnion" },
      { label: "Seals", value: "Standard grade" }
    ],
    features: [
      "Standard industrial rating",
      "Easy maintenance",
      "Replaceable seals",
      "Multiple mounting options",
      "Wide availability",
      "Cost-effective",
      "Proven performance",
      "Long service life"
    ],
    applications: [
      "General industrial",
      "Agriculture",
      "Construction",
      "Factory automation",
      "Material handling"
    ],
    customizationOptions: [
      "Bore and stroke specifications",
      "Rod diameter requirements",
      "Mounting configurations",
      "Seal material options",
      "Packing type"
    ],
    image: "https://placehold.co/600x400/gray-400/FFFFFF?text=Tie+Rod+Cylinder+Standard",
    gallery: [
      "https://placehold.co/600x400/gray-500/FFFFFF?text=Tie+Rod+Cylinder+View+1",
      "https://placehold.co/600x400/gray-600/FFFFFF?text=Tie+Rod+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: true
  },
  {
    slug: "tie-rod-hydraulic-cylinder-02",
    name: "Tie Rod Hydraulic Cylinder - Heavy Duty",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Heavy-duty tie rod cylinder for demanding applications",
    longDescription: "Heavy-duty tie rod hydraulic cylinder built for applications with higher loads, shock loads, and continuous operation. Features reinforced construction and enhanced sealing systems.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Rod Diameter", value: "35 - 140 mm" },
      { label: "Construction", value: "Heavy duty" },
      { label: "Rod", value: "Hard chrome plated" }
    ],
    features: [
      "Heavy-duty tie rods",
      "Reinforced cylinder heads",
      "Enhanced sealing",
      "Hard chrome rod coating",
      "High-load capacity",
      "Shock resistance",
      "Extended service life",
      "Reduced maintenance"
    ],
    applications: [
      "Heavy presses",
      "Mining equipment",
      "Crusher machinery",
      "Scissors lifts",
      "Material handling"
    ],
    customizationOptions: [
      "Load requirements",
      "Stroke and speed requirements",
      "Mounting configurations",
      "Seal material selection",
      "Rod surface finish"
    ],
    image: "https://placehold.co/600x400/slate-500/FFFFFF?text=Tie+Rod+Cylinder+Heavy+Duty",
    gallery: [
      "https://placehold.co/600x400/slate-600/FFFFFF?text=Tie+Rod+Cylinder+View+1",
      "https://placehold.co/600x400/slate-700/FFFFFF?text=Tie+Rod+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-03",
    name: "Tie Rod Hydraulic Cylinder - Stainless Steel",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Stainless steel tie rod cylinder for corrosive environments",
    longDescription: "Full stainless steel tie rod hydraulic cylinder designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout for superior corrosion resistance.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 100 mm" },
      { label: "Stroke Length", value: "Up to 1500 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Rod", value: "Nitrided stainless" },
      { label: "Seals", value: "Food grade/Chemical" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/ zinc-300/FFFFFF?text=Stainless+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/zinc-400/FFFFFF?text=Stainless+Tie+Rod+View+1",
      "https://placehold.co/600x400/zinc-500/FFFFFF?text=Stainless+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-04",
    name: "Tie Rod Hydraulic Cylinder - Clean Room",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Clean room rated tie rod cylinder for controlled environments",
    longDescription: "Clean room rated tie rod hydraulic cylinder designed for clean room and controlled environment applications. Features non-outgassing materials and contamination-controlled construction.",
    keySpecs: [
      { label: "Bore Diameter", value: "16 - 80 mm" },
      { label: "Stroke Length", value: "Up to 1000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Classification", value: "ISO Class 5-8" },
      { label: "Materials", value: "Low-outgassing" },
      { label: "Lubricants", value: "Specialty clean" }
    ],
    features: [
      "Low particle generation",
      "Non-outgassing seals",
      "Clean room assembly",
      "Seamless surfaces",
      "Easy cleaning design",
      "No dead spots",
      "Particle tested",
      "Validation documentation"
    ],
    applications: [
      "Semiconductor manufacturing",
      "Pharmaceutical production",
      "Medical device assembly",
      "Optical equipment",
      "Laboratory equipment"
    ],
    customizationOptions: [
      "Clean room classification",
      "Particle generation targets",
      "Material compatibility",
      "Cleaning procedures",
      "Documentation requirements"
    ],
    image: "https://placehold.co/600x400/sky-300/FFFFFF?text=Clean+Room+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Clean+Room+Tie+Rod+View+1",
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Clean+Room+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-05",
    name: "Tie Rod Hydraulic Cylinder - High Temperature",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "High temperature rated tie rod cylinder for extreme heat applications",
    longDescription: "High temperature rated tie rod hydraulic cylinder designed for applications in hot environments. Features heat-resistant seals and materials that maintain performance at elevated temperatures.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Temperature Range", value: "-40°C to +200°C" },
      { label: "Seals", value: "High temp elastomers" },
      { label: " Fluid", value: "Fire resistant" }
    ],
    features: [
      "High temperature seals",
      "Thermal insulation",
      "Heat-resistant fluids",
      "Stable performance",
      "Extended temperature range",
      "Cooling options",
      "Thermal protection",
      "Redundant sealing"
    ],
    applications: [
      "Metal casting",
      "Glass manufacturing",
      "Thermal processing",
      "Heat treatment",
      "Industrial ovens"
    ],
    customizationOptions: [
      "Temperature specifications",
      "Cooling requirements",
      "Heat shield options",
      "Fluid compatibility",
      "Sensor integration"
    ],
    image: "https://placehold.co/600x400/amber-400/FFFFFF?text=High+Temp+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/amber-500/FFFFFF?text=High+Temp+Tie+Rod+View+1",
      "https://placehold.co/600x400/amber-600/FFFFFF?text=High+Temp+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-06",
    name: "Tie Rod Hydraulic Cylinder - Low Temperature",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Low temperature rated tie rod cylinder for cryogenic applications",
    longDescription: "Low temperature rated tie rod hydraulic cylinder designed for cryogenic and frozen environment applications. Features materials that remain flexible and functional at very low temperatures.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 100 mm" },
      { label: "Stroke Length", value: "Up to 1000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Temperature Range", value: "-196°C to +50°C" },
      { label: "Seals", value: "Cryogenic elastomers" },
      { label: " Fluid", value: "Specialty low-temp" }
    ],
    features: [
      "Cryogenic performance",
      "Low-temperature seals",
      "Cold-resistant materials",
      "No embrittlement",
      "Reliable operation",
      "Insulated options",
      "Freeze protection",
      "Thermal management"
    ],
    applications: [
      "LNG equipment",
      "Cryogenic storage",
      "Food freezing",
      "Refrigeration systems",
      "Scientific research"
    ],
    customizationOptions: [
      "Lowest temperature",
      "Insulation requirements",
      "Vacuum jacketing",
      "Fluid selection",
      "Prevention measures"
    ],
    image: "https://placehold.co/600x400/cyan-400/FFFFFF?text=Low+Temp+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/cyan-500/FFFFFF?text=Low+Temp+Tie+Rod+View+1",
      "https://placehold.co/600x400/cyan-600/FFFFFF?text=Low+Temp+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-07",
    name: "Tie Rod Hydraulic Cylinder - High Pressure",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "High pressure rated tie rod cylinder for extreme pressure applications",
    longDescription: "High pressure rated tie rod hydraulic cylinder designed for applications requiring pressures beyond standard ratings. Features reinforced construction and enhanced safety systems.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 80 mm" },
      { label: "Stroke Length", value: "Up to 500 mm" },
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Material", value: "High-strength alloy" },
      { label: "Wall Thickness", value: "Extra thick" },
      { label: "Testing", value: "Overpressure tested" }
    ],
    features: [
      "Ultra-high pressure rating",
      "Thick wall construction",
      "Reinforced components",
      "Safety relief valves",
      "Pressure monitoring",
      "Dual sealing system",
      "Redundant protection",
      "Comprehensive testing"
    ],
    applications: [
      "High pressure testing",
      "Research equipment",
      "Specialized manufacturing",
      "Calibration labs",
      "Force generation"
    ],
    customizationOptions: [
      "Pressure rating requirements",
      "Bore size optimization",
      "Safety system details",
      "Testing requirements",
      "Certification needs"
    ],
    image: "https://placehold.co/600x400/red-400/FFFFFF?text=High+Pressure+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/red-500/FFFFFF?text=High+Pressure+Tie+Rod+View+1",
      "https://placehold.co/600x400/red-600/FFFFFF?text=High+Pressure+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-08",
    name: "Tie Rod Hydraulic Cylinder - Corrosion Resistant",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Corrosion resistant tie rod cylinder for harsh environments",
    longDescription: "Corrosion resistant tie rod hydraulic cylinder designed for marine, chemical, and other corrosive environments. Features protective coatings and special materials throughout.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Coating", value: "Multi-layer protection" },
      { label: "Seals", value: "Chemical resistant" },
      { label: "Warranty", value: "Corrosion warranty" }
    ],
    features: [
      "Multi-layer corrosion protection",
      "Marine-grade materials",
      "Salt spray tested",
      "Chemical-resistant seals",
      "Anodized components",
      "Protective boots",
      "Corrosion inhibitors",
      "Long-term protection"
    ],
    applications: [
      "Marine equipment",
      "Chemical processing",
      "Offshore applications",
      "Coastal operations",
      "Pool and spa equipment"
    ],
    customizationOptions: [
      "Environment exposure level",
      "Chemical compatibility",
      "Coating specifications",
      "Seal material selection",
      "Test requirements"
    ],
    image: "https://placehold.co/600x400/teal-400/FFFFFF?text=Corrosion+Resistant+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/teal-500/FFFFFF?text=Corrosion+Resistant+View+1",
      "https://placehold.co/600x400/teal-600/FFFFFF?text=Corrosion+Resistant+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-09",
    name: "Tie Rod Hydraulic Cylinder - High Speed",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "High speed tie rod cylinder for rapid cycling applications",
    longDescription: "High speed tie rod hydraulic cylinder designed for applications requiring fast extension and retraction cycles. Features optimized internal flow paths and low-friction components.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 100 mm" },
      { label: "Stroke Length", value: "Up to 800 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Speed", value: "Up to 1 m/s" },
      { label: "Flow Rate", value: "High flow" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High-speed operation",
      "Optimized flow paths",
      "Low-friction seals",
      "Balanced construction",
      "Reduced heat buildup",
      "Extended service life",
      "Smooth operation",
      "Low noise"
    ],
    applications: [
      "High-speed presses",
      "Packaging machinery",
      "Injection molding",
      "Automated assembly",
      "Robotics integration"
    ],
    customizationOptions: [
      "Speed requirements",
      "Flow rate optimization",
      "Mounting configurations",
      "Cushioning requirements",
      "Position sensing"
    ],
    image: "https://placehold.co/600x400/green-400/FFFFFF?text=High+Speed+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/green-500/FFFFFF?text=High+Speed+Tie+Rod+View+1",
      "https://placehold.co/600x400/green-600/FFFFFF?text=High+Speed+Tie+Rod+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "tie-rod-hydraulic-cylinder-10",
    name: "Tie Rod Hydraulic Cylinder - Multi-Stage",
    category: "Tie Rod Hydraulic Cylinders",
    categorySlug: "tie-rod-hydraulic-cylinders",
    shortDescription: "Multi-stage tie rod cylinder for long stroke requirements",
    longDescription: "Multi-stage tie rod hydraulic cylinder providing extended total stroke from compact installed length. Features multiple cylinder sections that extend sequentially for maximum reach.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 125 mm" },
      { label: "Stroke Length", value: "Up to 8000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Stages", value: "2 - 4 stages" },
      { label: "Retraction", value: "Sequential" },
      { label: "Extension", value: "Step-by-step" }
    ],
    features: [
      "Extended stroke capability",
      "Compact retracted length",
      "Sequential staged extension",
      "Multiple mounting options",
      "Smooth operation",
      " Balanced design",
      "Even load distribution",
      "Precision alignment"
    ],
    applications: [
      "Dump trucks",
      "Trailers",
      "Lift gates",
      "Agriculture equipment",
      "Material handling"
    ],
    customizationOptions: [
      "Number of stages",
      "Stroke distribution",
      "Bore size per stage",
      "Mounting configuration",
      "Control requirements"
    ],
    image: "https://placehold.co/600x400/blue-400/FFFFFF?text=Multi+Stage+Tie+Rod+Cylinder",
    gallery: [
      "https://placehold.co/600x400/blue-500/FFFFFF?text=Multi+Stage+View+1",
      "https://placehold.co/600x400/blue-600/FFFFFF?text=Multi+Stage+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= CUSTOMIZED HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "custom-hydraulic-cylinder-01",
    name: "Custom Hydraulic Cylinder - Tailor Made",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Fully customized hydraulic cylinder tailored to your exact specifications",
    longDescription: "Our fully customized hydraulic cylinders are engineered to your exact requirements. From bore size and stroke length to mounting configuration and special features, we build cylinders that perfectly match your application.",
    keySpecs: [
      { label: "Bore Diameter", value: "10 mm - 500 mm" },
      { label: "Stroke Length", value: "10 mm - 20000 mm" },
      { label: "Operating Pressure", value: "Up to 1000 bar" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Materials", value: "Any specification" },
      { label: "Special", value: "Request custom features" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Documentation provided",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Replacement cylinders",
      "OEM production",
      "Research equipment",
      "Prototype development"
    ],
    customizationOptions: [
      "Exact dimensions and performance",
      "Material preferences",
      "Special features and options",
      "Mounting requirements",
      "Port configurations"
    ],
    image: "https://placehold.co/600x400/purple-500/FFFFFF?text=Custom+Hydraulic+Cylinder",
    gallery: [
      "https://placehold.co/600x400/purple-600/FFFFFF?text=Custom+Cylinder+View+1",
      "https://placehold.co/600x400/purple-700/FFFFFF?text=Custom+Cylinder+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-02",
    name: "Custom Hydraulic Cylinder - Special Shape",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Non-standard shape hydraulic cylinder for unique applications",
    longDescription: "Custom non-standard shape hydraulic cylinders designed for applications requiring unconventional cylinder geometries. Perfect for tight spaces or special mounting requirements.",
    keySpecs: [
      { label: "Configuration", value: "Square,矩形, circular" },
      { label: "Bore Equivalent", value: "Varies" },
      { label: "Stroke", value: "Custom" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Mounting", value: "Custom configuration" },
      { label: "Special", value: "Geometry optimized" }
    ],
    features: [
      "Non-standard geometry",
      "Space-saving design",
      "Optimized mounting",
      "Performance matching",
      "Alternative to multiple cylinders",
      "Reduced complexity",
      "Integrated functions",
      "Custom fabrication"
    ],
    applications: [
      "Constrained spaces",
      "Compact machinery",
      "Retrofits",
      "Special equipment",
      "Custom applications"
    ],
    customizationOptions: [
      "Shape requirements",
      "Dimension constraints",
      "Performance specifications",
      "Mounting points",
      "Port locations"
    ],
    image: "https://placehold.co/600x400/indigo-600/FFFFFF?text=Custom+Special+Shape+Cylinder",
    gallery: [
      "https://placehold.co/600x400/indigo-700/FFFFFF?text=Special+Shape+View+1",
      "https://placehold.co/600x400/indigo-800/FFFFFF?text=Special+Shape+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-03",
    name: "Custom Hydraulic Cylinder - Multistream",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Multistream hydraulic cylinder with multiple working ports",
    longDescription: "Multistream hydraulic cylinders designed with multiple working ports and flow paths for complex circuit requirements. Reduces piping and connections in hydraulic systems.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Ports", value: "Multiple flow paths" },
      { label: "Control", value: "Independent circuits" },
      { label: "Integration", value: "High integration" }
    ],
    features: [
      "Multiple independent flow paths",
      "Reduced piping complexity",
      "Compact hydraulic system",
      "Independent pressure control",
      "Integrated valve options",
      "Simplified maintenance",
      "Reduced leak points",
      "Customized circuit design"
    ],
    applications: [
      "Complex machinery",
      "Integrated systems",
      "Compact hydraulics",
      "Multi-function equipment",
      "Specialized applications"
    ],
    customizationOptions: [
      "Number of flow paths",
      "Pressure requirements per path",
      "Control logic",
      "Integration points",
      "Piping requirements"
    ],
    image: "https://placehold.co/600x400/sky-700/FFFFFF?text=Custom+Multistream+Cylinder",
    gallery: [
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Multistream+View+1",
      "https://placehold.co/600x400/sky-900/FFFFFF?text=Multistream+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-04",
    name: "Custom Hydraulic Cylinder - Integrated Sensors",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Hydraulic cylinder with integrated position and pressure sensors",
    longDescription: "Smart hydraulic cylinders with integrated sensors for position, pressure, and temperature monitoring. Provides real-time feedback for automated control systems.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Sensors", value: "Position, pressure, temperature" },
      { label: "Output", value: "Analog/Digital" },
      { label: "Integration", value: "PLC compatible" }
    ],
    features: [
      "Integrated position sensor",
      "Pressure monitoring",
      "Temperature sensing",
      "Digital or analog output",
      "PLC integration ready",
      "Real-time feedback",
      "Condition monitoring",
      "Predictive maintenance"
    ],
    applications: [
      "Automated systems",
      "Robotics",
      "Process control",
      "Quality monitoring",
      "Smart machinery"
    ],
    customizationOptions: [
      "Sensor types required",
      "Output format",
      "Mounting位置",
      "Cable requirements",
      "Connectors"
    ],
    image: "https://placehold.co/600x400/amber-600/FFFFFF?text=Custom+Integrated+Sensor+Cylinder",
    gallery: [
      "https://placehold.co/600x400/amber-700/FFFFFF?text=Integrated+Sensor+View+1",
      "https://placehold.co/600x400/amber-800/FFFFFF?text=Integrated+Sensor+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-05",
    name: "Custom Hydraulic Cylinder - High Cycle",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "High cycle endurance hydraulic cylinder for frequent operation",
    longDescription: "High cycle endurance hydraulic cylinder designed for applications requiring millions of cycles with minimal maintenance. Features enhanced wear resistance and reliable long-term performance.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 100 mm" },
      { label: "Stroke Length", value: "Up to 1000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Cycle Life", value: "Millions of cycles" },
      { label: "Maintenance", value: "Extended intervals" },
      { label: "Reliability", value: "High reliability" }
    ],
    features: [
      "Millions of cycle rating",
      "Enhanced wear resistance",
      "Long service life",
      "Extended maintenance intervals",
      "Reduced downtime",
      "Predictable replacement",
      "High reliability",
      "Cost-effective operation"
    ],
    applications: [
      "Packaging machinery",
      "Assembly lines",
      "Injection molding",
      "Stamping presses",
      "Automated systems"
    ],
    customizationOptions: [
      "Cycle life requirements",
      "Speed requirements",
      "Load conditions",
      "Mounting configuration",
      "Control requirements"
    ],
    image: "https://placehold.co/600x400/teal-600/FFFFFF?text=Custom+High+Cycle+Cylinder",
    gallery: [
      "https://placehold.co/600x400/teal-700/FFFFFF?text=High+Cycle+View+1",
      "https://placehold.co/600x400/teal-800/FFFFFF?text=High+Cycle+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-06",
    name: "Custom Hydraulic Cylinder - Vacuum Compatible",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Vacuum rated hydraulic cylinder for vacuum chamber applications",
    longDescription: "Vacuum compatible hydraulic cylinder designed for operation inside vacuum chambers. Features low-outgassing materials and special sealing to maintain vacuum integrity.",
    keySpecs: [
      { label: "Bore Diameter", value: "10 - 80 mm" },
      { label: "Stroke Length", value: "Up to 500 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Vacuum Rating", value: "Up to 10^-9 mbar" },
      { label: "Materials", value: "Low-outgassing" },
      { label: "Seals", value: "Metal or special elastomers" }
    ],
    features: [
      "Ultra-low outgassing",
      " Vacuum compatible materials",
      "Metal seals available",
      "Bakeable construction",
      "Vacuum testing",
      "Leak testing",
      "Clean room assembly",
      "Certified documentation"
    ],
    applications: [
      "Semiconductor manufacturing",
      "Space simulation",
      "Research chambers",
      "Particle accelerators",
      "Vacuum coating"
    ],
    customizationOptions: [
      "Vacuum level requirements",
      "Bakeout temperature",
      "Material selection",
      "Seal type preference",
      "Port configurations"
    ],
    image: "https://placehold.co/600x400/blue-600/FFFFFF?text=Custom+Vacuum+Cylinder",
    gallery: [
      "https://placehold.co/600x400/blue-700/FFFFFF?text=Vacuum+View+1",
      "https://placehold.co/600x400/blue-800/FFFFFF?text=Vacuum+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-07",
    name: "Custom Hydraulic Cylinder - Explosive Environment",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Explosion proof hydraulic cylinder for hazardous locations",
    longDescription: "Explosion-proof hydraulic cylinder designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials and explosion-proof construction.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-600/FFFFFF?text=Custom+Explosion+Proof+Cylinder",
    gallery: [
      "https://placehold.co/600x400/orange-700/FFFFFF?text=Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-800/FFFFFF?text=Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-08",
    name: "Custom Hydraulic Cylinder - Food Grade",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Food-grade hydraulic cylinder for food and beverage applications",
    longDescription: "Food-grade hydraulic cylinder designed for food, beverage, and pharmaceutical manufacturing. Features hygienic construction with easy cleaning and food-safe materials throughout.",
    keySpecs: [
      { label: "Bore Diameter", value: "16 - 100 mm" },
      { label: "Stroke Length", value: "Up to 1000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-600/FFFFFF?text=Custom+Food+Grade+Cylinder",
    gallery: [
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Food+Grade+View+1",
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-09",
    name: "Custom Hydraulic Cylinder - Multi-position",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Multi-position hydraulic cylinder with intermediate stops",
    longDescription: "Multi-position hydraulic cylinder with mechanically or hydraulically actuated intermediate positions. Perfect for applications requiring multiple work positions without multiple cylinders.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Positions", value: "2 - 8 positions" },
      { label: "Control", value: "Mechanical/hydraulic" },
      { label: "Accuracy", value: "High precision" }
    ],
    features: [
      "Multiple positions",
      "Precise positioning",
      "Mechanical stops",
      "Hydraulic locking",
      "No intermediate leaks",
      "Simplified system",
      "Cost-effective",
      "Easy operation"
    ],
    applications: [
      "Multi-stage presses",
      "Positioning systems",
      " Assembly fixtures",
      "Testing equipment",
      "Custom machinery"
    ],
    customizationOptions: [
      "Number of positions",
      "Position locations",
      "Position accuracy",
      "Switching method",
      "Position sensing"
    ],
    image: "https://placehold.co/600x400/green-600/FFFFFF?text=Custom+Multi+Position+Cylinder",
    gallery: [
      "https://placehold.co/600x400/green-700/FFFFFF?text=Multi+Position+View+1",
      "https://placehold.co/600x400/green-800/FFFFFF?text=Multi+Position+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "custom-hydraulic-cylinder-10",
    name: "Custom Hydraulic Cylinder - Marine Grade",
    category: "Customized Hydraulic Cylinders",
    categorySlug: "customized-hydraulic-cylinders",
    shortDescription: "Marine-grade hydraulic cylinder for shipboard and offshore applications",
    longDescription: "Marine-grade hydraulic cylinder designed for shipboard and offshore operations. Features corrosion-resistant materials, waterproof construction, and marine certifications for harsh maritime environments.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard systems",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/indigo-900/FFFFFF?text=Custom+Marine+Grade+Cylinder",
    gallery: [
      "https://placehold.co/600x400/indigo-950/FFFFFF?text=Marine+Grade+View+1",
      "https://placehold.co/600x400/indigo-999/FFFFFF?text=Marine+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= LIFT HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "lift-hydraulic-cylinder-01",
    name: "Lift Hydraulic Cylinder - Single Stage",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Single stage lift cylinder for simple lifting applications",
    longDescription: "Single stage lift hydraulic cylinder designed for straightforward lifting applications. Features reliable single-acting operation with gravity return for cost-effective lifting solutions.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Construction", value: "Single stage" },
      { label: "Return", value: "Gravity return" },
      { label: "Load Capacity", value: "High capacity" }
    ],
    features: [
      "Simple and reliable",
      "Cost-effective solution",
      "Easy installation",
      "Low maintenance",
      "Proven performance",
      "Multiple sizes available",
      "Quick delivery",
      "Wide compatibility"
    ],
    applications: [
      "Simple lifts",
      "Platform lifts",
      "Scissor lifts",
      "Table lifts",
      "Foundation equipment"
    ],
    customizationOptions: [
      "Bore size selection",
      "Stroke length requirements",
      "Load capacity",
      "Mounting configuration",
      "Port location"
    ],
    image: "https://placehold.co/600x400/cyan-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Single",
    gallery: [
      "https://placehold.co/600x400/cyan-400/FFFFFF?text=Lift+Single+View+1",
      "https://placehold.co/600x400/cyan-500/FFFFFF?text=Lift+Single+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-02",
    name: "Lift Hydraulic Cylinder - Double Stage",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Double stage lift cylinder for extended stroke in compact space",
    longDescription: "Double stage lift hydraulic cylinder providing extended stroke from a compact retracted length. Ideal for applications requiring long lift height with limited installation space.",
    keySpecs: [
      { label: "Stages", value: "2 stages" },
      { label: "Bore Diameter", value: "50 - 150 mm" },
      { label: "Stroke Length", value: "Up to 6000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Retraction", value: "Sequential" },
      { label: "Extension", value: "Step-by-step" }
    ],
    features: [
      "Extended stroke capability",
      "Compact retracted length",
      "Sequential staged operation",
      "Smooth lifting",
      "Even load distribution",
      "Precision alignment",
      "Reliable operation",
      "Multiple applications"
    ],
    applications: [
      "Scissor lifts",
      "Lift tables",
      "Platform lifts",
      "Mobile lifts",
      "Vehicle lifts"
    ],
    customizationOptions: [
      "Stroke length requirements",
      "Lift capacity",
      "Mounting configuration",
      "Speed requirements",
      "Control system"
    ],
    image: "https://placehold.co/600x400/blue-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Double",
    gallery: [
      "https://placehold.co/600x400/blue-400/FFFFFF?text=Lift+Double+View+1",
      "https://placehold.co/600x400/blue-500/FFFFFF?text=Lift+Double+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-03",
    name: "Lift Hydraulic Cylinder - Triple Stage",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Triple stage lift cylinder for maximum extension ratio",
    longDescription: "Triple stage lift hydraulic cylinder offering maximum extension from minimum retracted length. Perfect for applications requiring very long stroke in extremely compact space.",
    keySpecs: [
      { label: "Stages", value: "3 stages" },
      { label: "Bore Diameter", value: "40 - 100 mm" },
      { label: "Stroke Length", value: "Up to 10000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Ratio", value: "Up to 5:1" },
      { label: "Extension", value: "Step-by-step" }
    ],
    features: [
      "Maximum extension ratio",
      "Ultra-compact retracted",
      "Multi-stage synchronization",
      "Smooth sequential extension",
      "Precision engineering",
      "Balanced operation",
      "Reliable performance",
      "Multiple mounting options"
    ],
    applications: [
      "High-lift applications",
      "Limited headroom",
      "Compact machinery",
      "Mobile equipment",
      "Specialized lifts"
    ],
    customizationOptions: [
      "Number of stages",
      "Stroke distribution",
      "Bore size per stage",
      "Mounting configuration",
      "Control requirements"
    ],
    image: "https://placehold.co/600x400/teal-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Triple",
    gallery: [
      "https://placehold.co/600x400/teal-400/FFFFFF?text=Lift+Triple+View+1",
      "https://placehold.co/600x400/teal-500/FFFFFF?text=Lift+Triple+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-04",
    name: "Lift Hydraulic Cylinder - Vertical Mount",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Vertical mount lift cylinder for upright installation",
    longDescription: "Vertical mount lift hydraulic cylinder designed for upright installation in lift equipment. Features custom mounting hardware and optimized rod support for vertical loading.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 200 mm" },
      { label: "Stroke Length", value: "Up to 5000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Mounting", value: "Vertical options" },
      { label: "Support", value: "Rod support" },
      { label: "Installation", value: "Vertical" }
    ],
    features: [
      "Vertical installation optimized",
      "Rod support throughout stroke",
      "Prevents buckling",
      "Optimized for vertical loads",
      "Easy access for maintenance",
      "Secure mounting",
      "Load stability",
      "Vertical actuation"
    ],
    applications: [
      "Vertical lifting systems",
      "Elevators",
      "Stacker cranes",
      "Vertical lifts",
      "Pillar lifts"
    ],
    customizationOptions: [
      "Vertical stroke requirements",
      "Load capacity",
      "Mounting configuration",
      "Speed and acceleration",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/indigo-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Vertical",
    gallery: [
      "https://placehold.co/600x400/indigo-400/FFFFFF?text=Lift+Vertical+View+1",
      "https://placehold.co/600x400/indigo-500/FFFFFF?text=Lift+Vertical+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-05",
    name: "Lift Hydraulic Cylinder - Horizontal Mount",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Horizontal mount lift cylinder for table and platform lifts",
    longDescription: "Horizontal mount lift hydraulic cylinder designed for horizontal installation in platform and table lifting systems. Features custom clevis and trunnion mounting options.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 150 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Mounting", value: "Clevis/Trunnion" },
      { label: "Load", value: "Horizontal" },
      { label: "Application", value: "Table lifts" }
    ],
    features: [
      "Horizontal installation",
      "Clevis and trunnion mounts",
      "Pivot movement capability",
      "Optimized for horizontal loads",
      "Smooth operation",
      "Reduced friction",
      "Even load distribution",
      "Multiple configuration"
    ],
    applications: [
      "Lift tables",
      "Platform lifts",
      "Scissor lifts",
      "Mobile lifts",
      "Vehicle lifts"
    ],
    customizationOptions: [
      "Mounting configuration",
      "Stroke length requirements",
      "Load capacity",
      "Speed requirements",
      "Mounting orientation"
    ],
    image: "https://placehold.co/600x400/sky-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Horizontal",
    gallery: [
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Lift+Horizontal+View+1",
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Lift+Horizontal+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-06",
    name: "Lift Hydraulic Cylinder - Marine Grade",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Marine-grade lift cylinder for shipboard elevators",
    longDescription: "Marine-grade lift hydraulic cylinder designed for shipboard and offshore elevator systems. Features corrosion resistance, waterproofing, and marine certifications for maritime environments.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 200 mm" },
      { label: "Stroke Length", value: "Up to 8000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard lifts",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/blue-900/FFFFFF?text=Lift+Hydraulic+Cylinder+Marine",
    gallery: [
      "https://placehold.co/600x400/blue-950/FFFFFF?text=Lift+Marine+View+1",
      "https://placehold.co/600x400/blue-999/FFFFFF?text=Lift+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-07",
    name: "Lift Hydraulic Cylinder - Explosion Proof",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Explosion-proof lift cylinder for hazardous locations",
    longDescription: "Explosion-proof lift hydraulic cylinder designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials and explosion-proof construction.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 150 mm" },
      { label: "Stroke Length", value: "Up to 4000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-900/FFFFFF?text=Lift+Hydraulic+Cylinder+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-950/FFFFFF?text=Lift+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-999/FFFFFF?text=Lift+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-08",
    name: "Lift Hydraulic Cylinder - Food Grade",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Food-grade lift cylinder for food processing equipment",
    longDescription: "Food-grade lift hydraulic cylinder designed for food, beverage, and pharmaceutical manufacturing equipment. Features hygienic construction with easy cleaning and food-safe materials.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 100 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-600/FFFFFF?text=Lift+Hydraulic+Cylinder+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Lift+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Lift+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-09",
    name: "Lift Hydraulic Cylinder - High Speed",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "High speed lift cylinder for rapid cycling applications",
    longDescription: "High speed lift hydraulic cylinder designed for applications requiring fast lift and lower cycles. Features optimized flow paths and high-flow valving for rapid operation.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 100 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Speed", value: "Up to 1.5 m/s" },
      { label: "Flow Rate", value: "High flow" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High-speed operation",
      "Optimized flow paths",
      "Low-friction seals",
      "Balanced construction",
      "Reduced heat buildup",
      "Extended service life",
      "Smooth operation",
      "Low noise"
    ],
    applications: [
      "High-speed elevators",
      "Automated parking",
      "Material handling",
      "Conveyor systems",
      "Automated storage"
    ],
    customizationOptions: [
      "Speed requirements",
      "Acceleration/deceleration",
      "Load requirements",
      "Control system",
      "Position accuracy"
    ],
    image: "https://placehold.co/600x400/green-300/FFFFFF?text=Lift+Hydraulic+Cylinder+High+Speed",
    gallery: [
      "https://placehold.co/600x400/green-400/FFFFFF?text=Lift+High+Speed+View+1",
      "https://placehold.co/600x400/green-500/FFFFFF?text=Lift+High+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinder-10",
    name: "Lift Hydraulic Cylinder - Ultra Quiet",
    category: "Lift Hydraulic Cylinders",
    categorySlug: "lift-hydraulic-cylinders",
    shortDescription: "Ultra quiet lift cylinder for noise-sensitive environments",
    longDescription: "Ultra quiet lift hydraulic cylinder designed for operation in noise-sensitive environments. Features specially designed flow control and cushioning for silent operation.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 125 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Noise Level", value: "<45 dB" },
      { label: " Cushioning", value: "Advanced" },
      { label: "Control", value: "Precision flow" }
    ],
    features: [
      "Ultra-quiet operation below 45 dB",
      "Advanced cushioning",
      "Precision flow control",
      "Smoother movement",
      "Reduced hydraulic shock",
      "Quiet actuation",
      "Night operation capable",
      "Office-safe"
    ],
    applications: [
      "Office lifts",
      "Hospital lifts",
      "Hotel lifts",
      "Residential elevators",
      "Laboratory equipment"
    ],
    customizationOptions: [
      "Noise level targets",
      "Cushioning requirements",
      "Flow control specs",
      "Mounting options",
      "Control interfaces"
    ],
    image: "https://placehold.co/600x400/amber-300/FFFFFF?text=Lift+Hydraulic+Cylinder+Quiet",
    gallery: [
      "https://placehold.co/600x400/amber-400/FFFFFF?text=Lift+Quiet+View+1",
      "https://placehold.co/600x400/amber-500/FFFFFF?text=Lift+Quiet+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= LIFT HYDRAULIC POWER PACKS (10 products) =============
  {
    slug: "lift-hydraulic-power-pack-01",
    title: "Lift Hydraulic Power Pack - Standard",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Standard lift hydraulic power pack for goods lift systems",
    longDescription: "Standard lift hydraulic power pack designed specifically for goods lift and elevator applications. Features controlled acceleration/deceleration and precise leveling capability.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 5000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Flow Rate", value: "20 - 100 LPM" },
      { label: "Leveling", value: "Precision" },
      { label: "Safety", value: "Redundant systems" }
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
    image: "https://placehold.co/600x400/blue-200/FFFFFF?text=Lift+Power+Pack+Standard",
    gallery: [
      "https://placehold.co/600x400/blue-300/FFFFFF?text=Lift+Power+Pack+View+1",
      "https://placehold.co/600x400/blue-400/FFFFFF?text=Lift+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-02",
    title: "Lift Hydraulic Power Pack - High Speed",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "High speed lift hydraulic power pack for rapid cycling",
    longDescription: "High speed lift hydraulic power pack designed for applications requiring fast lift and lower cycles. Features high flow pumps and optimized hydraulic circuits for rapid operation.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Motor Power", value: "7 HP - 25 HP" },
      { label: "Lift Speed", value: "Up to 1.5 m/s" },
      { label: "Flow Rate", value: "100 - 300 LPM" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High lift speed",
      "Rapid cycle time",
      "Fast response pumps",
      "High flow capacity",
      "Optimized circuit design",
      "Efficient operation",
      "Extended service life",
      "Reduced waiting time"
    ],
    applications: [
      "High-speed elevators",
      "Automated parking",
      "Material handling",
      "Conveyor lifts",
      "Packaging lines"
    ],
    customizationOptions: [
      "Speed requirements",
      "Acceleration/deceleration",
      "Load specifications",
      "Control system",
      "Position accuracy"
    ],
    image: "https://placehold.co/600x400/cyan-200/FFFFFF?text=Lift+Power+Pack+High+Speed",
    gallery: [
      "https://placehold.co/600x400/cyan-300/FFFFFF?text=Lift+Power+Pack+Speed+View+1",
      "https://placehold.co/600x400/cyan-400/FFFFFF?text=Lift+Power+Pack+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-03",
    title: "Lift Hydraulic Power Pack -Quiet Operation",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Quiet operation lift hydraulic power pack for noise-sensitive areas",
    longDescription: "Quiet operation lift hydraulic power pack designed for noise-sensitive environments such as offices, hospitals, and residential buildings. Features sound-dampening and low-noise components.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 2000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 10 HP" },
      { label: "Noise Level", value: "<50 dB" },
      { label: "Sound Proofing", value: "Enclosed" },
      { label: "Operation", value: "Silent" }
    ],
    features: [
      "Ultra-quiet operation below 50 dB",
      "Sound-dampening enclosure",
      "Low-noise pump",
      "Vibration isolation",
      "Smooth-running motor",
      "Noise-tested",
      "Office-safe",
      "Night-operation capable"
    ],
    applications: [
      "Office buildings",
      "Hospitals",
      "hotels",
      "Residential buildings",
      "Laboratories"
    ],
    customizationOptions: [
      "Noise level targets",
      "Enclosure specifications",
      "Sound rating requirements",
      "Ventilation needs",
      "Space constraints"
    ],
    image: "https://placehold.co/600x400/amber-200/FFFFFF?text=Lift+Power+Pack+Quiet",
    gallery: [
      "https://placehold.co/600x400/amber-300/FFFFFF?text=Lift+Power+Pack+Quiet+View+1",
      "https://placehold.co/600x400/amber-400/FFFFFF?text=Lift+Power+Pack+Quiet+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-04",
    title: "Lift Hydraulic Power Pack - Marine Grade",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Marine-grade lift hydraulic power pack for shipboard lifts",
    longDescription: "Marine-grade lift hydraulic power pack designed for shipboard and offshore elevator systems. Features corrosion resistance, waterproofing, and marine certifications for maritime environments.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 5000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "5 HP - 20 HP" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard lifts",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/indigo-200/FFFFFF?text=Lift+Power+Pack+Marine",
    gallery: [
      "https://placehold.co/600x400/indigo-300/FFFFFF?text=Lift+Power+Pack+Marine+View+1",
      "https://placehold.co/600x400/indigo-400/FFFFFF?text=Lift+Power+Pack+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-05",
    title: "Lift Hydraulic Power Pack - Explosion Proof",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Explosion-proof lift hydraulic power pack for hazardous locations",
    longDescription: "Explosion-proof lift hydraulic power pack designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials and explosion-proof construction.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-200/FFFFFF?text=Lift+Power+Pack+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-300/FFFFFF?text=Lift+Power+Pack+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-400/FFFFFF?text=Lift+Power+Pack+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-06",
    title: "Lift Hydraulic Power Pack - Food Grade",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Food-grade lift hydraulic power pack for food processing equipment",
    longDescription: "Food-grade lift hydraulic power pack designed for food, beverage, and pharmaceutical manufacturing equipment. Features hygienic construction with easy cleaning and food-safe materials.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 2000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "2 HP - 10 HP" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-200/FFFFFF?text=Lift+Power+Pack+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-300/FFFFFF?text=Lift+Power+Pack+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Lift+Power+Pack+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-07",
    title: "Lift Hydraulic Power Pack - Variable Speed",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Variable speed lift hydraulic power pack for energy efficiency",
    longDescription: "Variable speed lift hydraulic power pack featuring VFD-controlled motors for energy savings and precise speed control. Smart control system optimizes performance while reducing operating costs.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Speed Control", value: "Variable frequency" },
      { label: "Efficiency", value: "Up to 50% energy savings" },
      { label: "Control", value: "VFD" }
    ],
    features: [
      "Energy savings up to 50%",
      "Soft start/stop",
      "Variable speed control",
      "Reduced wear and tear",
      "Lower operating costs",
      "Extended component life",
      "Stable pressure control",
      "Smooth operation"
    ],
    applications: [
      "Variable load applications",
      "Energy-conscious facilities",
      "Cost-saving upgrades",
      "Sustainable manufacturing",
      "Smart buildings"
    ],
    customizationOptions: [
      "Speed curve requirements",
      "Pressure profiles",
      "Control integration",
      "Monitoring systems",
      "Communication protocols"
    ],
    image: "https://placehold.co/600x400/green-200/FFFFFF?text=Lift+Power+Pack+Variable+Speed",
    gallery: [
      "https://placehold.co/600x400/green-300/FFFFFF?text=Lift+Power+Pack+VSD+View+1",
      "https://placehold.co/600x400/green-400/FFFFFF?text=Lift+Power+Pack+VSD+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-08",
    title: "Lift Hydraulic Power Pack - Compact",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Compact lift hydraulic power pack for limited space installations",
    longDescription: "Compact lift hydraulic power pack designed for applications with limited installation space. Features miniaturized components and optimized layout for maximum performance in minimal footprint.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 1000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "1 HP - 5 HP" },
      { label: "Size", value: "Compact design" },
      { label: "Weight", value: "Lightweight" },
      { label: "Installation", value: "Space efficient" }
    ],
    features: [
      "Minimal footprint",
      "Lightweight construction",
      "Quick installation",
      "Modular design",
      "Easy maintenance access",
      "Space-efficient layout",
      "Reduced shipping costs",
      "Easy storage"
    ],
    applications: [
      "Retrofits",
      "Limited space",
      "Compact machinery",
      "Small lifts",
      "Mobile equipment"
    ],
    customizationOptions: [
      "Size constraints",
      "Mounting requirements",
      "Power specifications",
      "Control interface",
      "Connections configuration"
    ],
    image: "https://placehold.co/600x400/teal-200/FFFFFF?text=Lift+Power+Pack+Compact",
    gallery: [
      "https://placehold.co/600x400/teal-300/FFFFFF?text=Lift+Power+Pack+Compact+View+1",
      "https://placehold.co/600x400/teal-400/FFFFFF?text=Lift+Power+Pack+Compact+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-09",
    title: "Lift Hydraulic Power Pack - High Capacity",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "High capacity lift hydraulic power pack for heavy loads",
    longDescription: "High capacity lift hydraulic power pack designed for lifting applications with very heavy loads. Features high flow pumps and robust components for demanding lifting operations.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 10000 kg" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Motor Power", value: "15 HP - 50 HP" },
      { label: "Flow Rate", value: "150 - 500 LPM" },
      { label: "Construction", value: "Heavy duty" },
      { label: "Duty Cycle", value: "100%" }
    ],
    features: [
      "High lifting capacity",
      "Heavy-duty components",
      "High flow pumps",
      "Robust construction",
      "Extended service life",
      "Reduced downtime",
      "Predictable maintenance",
      "High reliability"
    ],
    applications: [
      "Heavy lift applications",
      "Industrial lifts",
      "Cargo lifts",
      "Vehicle lifts",
      "Equipment lifts"
    ],
    customizationOptions: [
      "Capacity requirements",
      "Lift height specifications",
      "Speed requirements",
      "Control system integration",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/rose-200/FFFFFF?text=Lift+Power+Pack+High+Capacity",
    gallery: [
      "https://placehold.co/600x400/rose-300/FFFFFF?text=Lift+Power+Pack+High+Cap+View+1",
      "https://placehold.co/600x400/rose-400/FFFFFF?text=Lift+Power+Pack+High+Cap+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "lift-hydraulic-power-pack-10",
    title: "Lift Hydraulic Power Pack - Custom Integration",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Custom integrated lift hydraulic power pack for OEM applications",
    longDescription: "Custom integrated lift hydraulic power pack designed for OEM equipment with specific requirements. Fully customized to match your lift system and control architecture.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Any specification" },
      { label: "Operating Pressure", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Integration", value: "OEM ready" },
      { label: "Control", value: "Custom interface" },
      { label: "Documentation", value: "Full documentation" }
    ],
    features: [
      "Complete customization",
      "OEM-specific design",
      "Engineering support",
      "Seamless integration",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Equipment integration",
      "OEM production",
      "Special machinery",
      "Custom lifts",
      "Bespoke solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Control requirements",
      "Mounting configuration",
      "Interface requirements",
      "Certification needs"
    ],
    image: "https://placehold.co/600x400/purple-200/FFFFFF?text=Lift+Power+Pack+Custom+Integration",
    gallery: [
      "https://placehold.co/600x400/purple-300/FFFFFF?text=Lift+Power+Pack+Custom+View+1",
      "https://placehold.co/600x400/purple-400/FFFFFF?text=Lift+Power+Pack+Custom+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= PRESS HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "press-hydraulic-cylinder-01",
    name: "Press Hydraulic Cylinder - Standard",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Standard press hydraulic cylinder for general pressing applications",
    longDescription: "Standard press hydraulic cylinder designed for general pressing applications requiring reliable performance and consistent force delivery. Features robust construction for press machine applications.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 200 mm" },
      { label: "Force Capacity", value: "Up to 100 Tons" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Stroke Length", value: "Up to 1000 mm" },
      { label: "Mounting", value: "Flange/Threaded" },
      { label: "Rod Hardness", value: "HRC 58-62" }
    ],
    features: [
      "High-force capacity",
      "Optimized for cyclic loading",
      "Flange mounting for presses",
      "Hard chrome rod coating",
      "High-load cylinder bearings",
      "Pressure-tested assembly",
      "Custom stroke capability",
      "Reliable performance"
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
    image: "https://placehold.co/600x400/teal-200/FFFFFF?text=Press+Hydraulic+Cylinder+Standard",
    gallery: [
      "https://placehold.co/600x400/teal-300/FFFFFF?text=Press+Cylinder+Standard+View+1",
      "https://placehold.co/600x400/teal-400/FFFFFF?text=Press+Cylinder+Standard+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-02",
    name: "Press Hydraulic Cylinder - High Force",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "High force press hydraulic cylinder for heavy pressing applications",
    longDescription: "High force press hydraulic cylinder designed for heavy-duty pressing applications requiring maximum force output. Features oversized construction and reinforced components.",
    keySpecs: [
      { label: "Bore Diameter", value: "100 - 400 mm" },
      { label: "Force Capacity", value: "Up to 500 Tons" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Construction", value: "Heavy duty" },
      { label: "Reinforcement", value: "High load" }
    ],
    features: [
      "Maximum force capacity",
      "Heavy-duty construction",
      "Reinforced cylinder head",
      "Oversized rod",
      "High-load bearings",
      "Enhanced sealing",
      "Extended service life",
      "Reduced downtime"
    ],
    applications: [
      "Heavy presses",
      "Forging equipment",
      "Stamping presses",
      "Compression molding",
      "Baling equipment"
    ],
    customizationOptions: [
      "Force requirements",
      "Bore size optimization",
      "Stroke configuration",
      "Mounting requirements",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/rose-300/FFFFFF?text=Press+Hydraulic+Cylinder+High+Force",
    gallery: [
      "https://placehold.co/600x400/rose-400/FFFFFF?text=Press+Cylinder+High+Force+View+1",
      "https://placehold.co/600x400/rose-500/FFFFFF?text=Press+Cylinder+High+Force+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-03",
    name: "Press Hydraulic Cylinder - Precision",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Precision press hydraulic cylinder for accurate pressing applications",
    longDescription: "Precision press hydraulic cylinder designed for applications requiring exact positioning and consistent force control. Features high-precision manufacturing and advanced control options.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 100 mm" },
      { label: "Force Capacity", value: "Up to 50 Tons" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Accuracy", value: "High precision" },
      { label: "Repeatability", value: "Excellent" },
      { label: "Control", value: "Precision" }
    ],
    features: [
      "High positioning accuracy",
      "Excellent repeatability",
      "Pressurization control",
      "Position feedback",
      "Force monitoring",
      "Closed-loop control",
      "Digital monitoring",
      "Data logging"
    ],
    applications: [
      "Precision presses",
      "Testing equipment",
      "Quality control",
      "Research equipment",
      "Calibration"
    ],
    customizationOptions: [
      "Accuracy requirements",
      "Position tolerance",
      "Control system",
      "Feedback devices",
      "Monitoring needs"
    ],
    image: "https://placehold.co/600x400/sky-400/FFFFFF?text=Press+Hydraulic+Cylinder+Precision",
    gallery: [
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Press+Cylinder+Precision+View+1",
      "https://placehold.co/600x400/sky-600/FFFFFF?text=Press+Cylinder+Precision+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-04",
    name: "Press Hydraulic Cylinder - High Speed",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "High speed press hydraulic cylinder for rapid cycling applications",
    longDescription: "High speed press hydraulic cylinder designed for applications requiring fast press cycles and rapid operation. Features optimized flow paths and high-flow components.",
    keySpecs: [
      { label: "Bore Diameter", value: "50 - 125 mm" },
      { label: "Force Capacity", value: "Up to 80 Tons" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Speed", value: "Up to 2 m/s" },
      { label: "Flow Rate", value: "High flow" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High-speed operation",
      "Fast cycle time",
      "Optimized flow paths",
      "High-flow valves",
      "Reduced heat buildup",
      "Extended service life",
      "Smooth operation",
      "Low noise"
    ],
    applications: [
      "High-speed presses",
      "Stamping presses",
      "Injection molding",
      "Assembly presses",
      "Automated systems"
    ],
    customizationOptions: [
      "Speed requirements",
      "Acceleration/deceleration",
      "Load specifications",
      "Control system",
      "Position accuracy"
    ],
    image: "https://placehold.co/600x400/green-400/FFFFFF?text=Press+Hydraulic+Cylinder+High+Speed",
    gallery: [
      "https://placehold.co/600x400/green-500/FFFFFF?text=Press+Cylinder+High+Speed+View+1",
      "https://placehold.co/600x400/green-600/FFFFFF?text=Press+Cylinder+High+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-05",
    name: "Press Hydraulic Cylinder - Stainless Steel",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Stainless steel press hydraulic cylinder for corrosive environments",
    longDescription: "Stainless steel press hydraulic cylinder designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout for superior corrosion resistance.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 100 mm" },
      { label: "Force Capacity", value: "Up to 50 Tons" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Rod", value: "Nitrided stainless" },
      { label: "Seals", value: "Chemical resistant" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/zinc-200/FFFFFF?text=Press+Hydraulic+Cylinder+Stainless",
    gallery: [
      "https://placehold.co/600x400/zinc-300/FFFFFF?text=Press+Cylinder+Stainless+View+1",
      "https://placehold.co/600x400/zinc-400/FFFFFF?text=Press+Cylinder+Stainless+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-06",
    name: "Press Hydraulic Cylinder - Explosion Proof",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Explosion-proof press hydraulic cylinder for hazardous locations",
    longDescription: "Explosion-proof press hydraulic cylinder designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials and explosion-proof construction.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 150 mm" },
      { label: "Force Capacity", value: "Up to 100 Tons" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-300/FFFFFF?text=Press+Hydraulic+Cylinder+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-400/FFFFFF?text=Press+Cylinder+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-500/FFFFFF?text=Press+Cylinder+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-07",
    name: "Press Hydraulic Cylinder - Food Grade",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Food-grade press hydraulic cylinder for food processing equipment",
    longDescription: "Food-grade press hydraulic cylinder designed for food, beverage, and pharmaceutical manufacturing equipment. Features hygienic construction with easy cleaning and food-safe materials.",
    keySpecs: [
      { label: "Bore Diameter", value: "25 - 80 mm" },
      { label: "Force Capacity", value: "Up to 30 Tons" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-300/FFFFFF?text=Press+Hydraulic+Cylinder+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Press+Cylinder+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Press+Cylinder+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-08",
    name: "Press Hydraulic Cylinder - Multi-Position",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Multi-position press hydraulic cylinder with variable stroke",
    longDescription: "Multi-position press hydraulic cylinder with mechanically or hydraulically actuated intermediate positions. Perfect for applications requiring multiple work positions without multiple cylinders.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 150 mm" },
      { label: "Force Capacity", value: "Up to 80 Tons" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Positions", value: "2 - 8 positions" },
      { label: "Control", value: "Mechanical/hydraulic" },
      { label: "Accuracy", value: "High precision" }
    ],
    features: [
      "Multiple positions",
      "Precise positioning",
      "Mechanical stops",
      "Hydraulic locking",
      "No intermediate leaks",
      "Simplified system",
      "Cost-effective",
      "Easy operation"
    ],
    applications: [
      "Multi-stage presses",
      "Positioning systems",
      "Assembly fixtures",
      "Testing equipment",
      "Custom machinery"
    ],
    customizationOptions: [
      "Number of positions",
      "Position locations",
      "Position accuracy",
      "Switching method",
      "Position sensing"
    ],
    image: "https://placehold.co/600x400/amber-400/FFFFFF?text=Press+Hydraulic+Cylinder+Multi+Position",
    gallery: [
      "https://placehold.co/600x400/amber-500/FFFFFF?text=Press+Cylinder+Multi+Position+View+1",
      "https://placehold.co/600x400/amber-600/FFFFFF?text=Press+Cylinder+Multi+Position+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-09",
    name: "Press Hydraulic Cylinder - Low Height",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "Low profile press hydraulic cylinder for space-constrained applications",
    longDescription: "Low profile press hydraulic cylinder designed for applications with limited installation height. Features compact construction while maintaining full lifting capacity.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 100 mm" },
      { label: "Force Capacity", value: "Up to 50 Tons" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Height", value: "Low profile" },
      { label: "Compact", value: "Yes" },
      { label: "Installation", value: "Space efficient" }
    ],
    features: [
      "Ultra-low height",
      "Compact construction",
      "Space-saving design",
      "Easy installation",
      "Low clearance",
      "Retrofits",
      "Mobile equipment",
      "Limited space"
    ],
    applications: [
      "Low ceiling applications",
      "Retrofits",
      "Compact machinery",
      "Mobile equipment",
      "Space-constrained"
    ],
    customizationOptions: [
      "Height constraints",
      "Bore size selection",
      "Stroke length",
      "Mounting requirements",
      "Force specifications"
    ],
    image: "https://placehold.co/600x400/blue-300/FFFFFF?text=Press+Hydraulic+Cylinder+Low+Profile",
    gallery: [
      "https://placehold.co/600x400/blue-400/FFFFFF?text=Press+Cylinder+Low+Profile+View+1",
      "https://placehold.co/600x400/blue-500/FFFFFF?text=Press+Cylinder+Low+Profile+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "press-hydraulic-cylinder-10",
    name: "Press Hydraulic Cylinder - High Cycle",
    category: "Press Hydraulic Cylinders",
    categorySlug: "press-hydraulic-cylinders",
    shortDescription: "High cycle endurance press hydraulic cylinder for continuous operation",
    longDescription: "High cycle endurance press hydraulic cylinder designed for applications requiring millions of cycles with minimal maintenance. Features enhanced wear resistance and long-term reliability.",
    keySpecs: [
      { label: "Bore Diameter", value: "40 - 125 mm" },
      { label: "Force Capacity", value: "Up to 60 Tons" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Cycle Life", value: "Millions of cycles" },
      { label: "Maintenance", value: "Extended intervals" },
      { label: "Reliability", value: "High reliability" }
    ],
    features: [
      "Millions of cycle rating",
      "Enhanced wear resistance",
      "Long service life",
      "Extended maintenance intervals",
      "Reduced downtime",
      "Predictable replacement",
      "High reliability",
      "Cost-effective operation"
    ],
    applications: [
      "Packaging machinery",
      "Assembly lines",
      "Injection molding",
      "Stamping presses",
      "Automated systems"
    ],
    customizationOptions: [
      "Cycle life requirements",
      "Speed requirements",
      "Load conditions",
      "Mounting configuration",
      "Control requirements"
    ],
    image: "https://placehold.co/600x400/teal-400/FFFFFF?text=Press+Hydraulic+Cylinder+High+Cycle",
    gallery: [
      "https://placehold.co/600x400/teal-500/FFFFFF?text=Press+Cylinder+High+Cycle+View+1",
      "https://placehold.co/600x400/teal-600/FFFFFF?text=Press+Cylinder+High+Cycle+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= TELESCOPIC HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "telescopic-hydraulic-cylinder-01",
    name: "Telescopic Hydraulic Cylinder - Standard",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Standard telescopic hydraulic cylinder for extended stroke applications",
    longDescription: "Standard telescopic hydraulic cylinder providing extended stroke length from compact retracted length. Features multiple nested stages with synchronized operation for reliable long-stroke performance.",
    keySpecs: [
      { label: "Stages", value: "2 - 4 stages" },
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
      "Dump trucks",
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
    image: "https://placehold.co/600x400/violet-200/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Standard",
    gallery: [
      "https://placehold.co/600x400/violet-300/FFFFFF?text=Telescopic+Cylinder+Standard+View+1",
      "https://placehold.co/600x400/violet-400/FFFFFF?text=Telescopic+Cylinder+Standard+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-02",
    name: "Telescopic Hydraulic Cylinder - Single Acting",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Single acting telescopic cylinder for lift applications",
    longDescription: "Single acting telescopic hydraulic cylinder designed for lift applications where gravity return is sufficient. Features reliable single-pressure operation with simple control requirements.",
    keySpecs: [
      { label: "Stages", value: "2 - 5 stages" },
      { label: "Stroke Ratio", value: "Up to 5x retraction" },
      { label: "Max Stroke", value: "Up to 8000 mm" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Return", value: "Gravity return" },
      { label: "Pressure", value: "Single acting" }
    ],
    features: [
      "Simple pressure system",
      "Gravity return operation",
      "Cost-effective solution",
      "Reliable performance",
      "Easy maintenance",
      "Multiple stage options",
      "Wide stroke range",
      "Proven design"
    ],
    applications: [
      "Dump trucks",
      "Trailers",
      "Lift gates",
      "Scissor lifts",
      "Material handling"
    ],
    customizationOptions: [
      "Number of stages",
      "Stroke length requirements",
      "Load capacity",
      "Mounting configuration",
      "Speed requirements"
    ],
    image: "https://placehold.co/600x400/indigo-400/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Single+Acting",
    gallery: [
      "https://placehold.co/600x400/indigo-500/FFFFFF?text=Telescopic+Single+View+1",
      "https://placehold.co/600x400/indigo-600/FFFFFF?text=Telescopic+Single+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-03",
    name: "Telescopic Hydraulic Cylinder - Double Acting",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Double acting telescopic cylinder for powered extension and retraction",
    longDescription: "Double acting telescopic hydraulic cylinder allowing powered extension and retraction. Provides control over both movement directions for precise positioning and forced retraction applications.",
    keySpecs: [
      { label: "Stages", value: "2 - 4 stages" },
      { label: "Stroke Ratio", value: "Up to 4x retraction" },
      { label: "Max Stroke", value: "Up to 6000 mm" },
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Action", value: "Double acting" },
      { label: "Control", value: "Fully powered" }
    ],
    features: [
      "Powered extension and retraction",
      "Precise positioning",
      "Forced retraction capability",
      "Bidirectional control",
      "High-pressure operation",
      "Smooth operation",
      "Accurate stopping",
      "Position holding"
    ],
    applications: [
      "Aerial work platforms",
      "Mobile equipment",
      "Material handling",
      "Specialized machinery",
      "Custom applications"
    ],
    customizationOptions: [
      "Number of stages",
      "Stroke distribution",
      "Pressure requirements",
      "Mounting configuration",
      "Speed and control"
    ],
    image: "https://placehold.co/600x400/sky-500/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Double+Acting",
    gallery: [
      "https://placehold.co/600x400/sky-600/FFFFFF?text=Telescopic+Double+View+1",
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Telescopic+Double+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-04",
    name: "Telescopic Hydraulic Cylinder - Marine Grade",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Marine-grade telescopic cylinder for shipboard and offshore applications",
    longDescription: "Marine-grade telescopic hydraulic cylinder designed for shipboard and offshore equipment. Features corrosion resistance, waterproofing, and marine certifications for harsh maritime environments.",
    keySpecs: [
      { label: "Stages", value: "2 - 4 stages" },
      { label: "Stroke Ratio", value: "Up to 5x retraction" },
      { label: "Max Stroke", value: "Up to 8000 mm" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard equipment",
      "Offshore platforms",
      "Harbor machinery",
      "Marine cranes",
      "Deck operations"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/blue-800/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Marine",
    gallery: [
      "https://placehold.co/600x400/blue-900/FFFFFF?text=Telescopic+Marine+View+1",
      "https://placehold.co/600x400/blue-950/FFFFFF?text=Telescopic+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-05",
    name: "Telescopic Hydraulic Cylinder - High Pressure",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "High pressure telescopic cylinder for demanding applications",
    longDescription: "High pressure telescopic hydraulic cylinder designed for applications requiring pressures beyond standard ratings. Features reinforced construction and enhanced safety systems.",
    keySpecs: [
      { label: "Stages", value: "2 - 3 stages" },
      { label: "Stroke Ratio", value: "Up to 3x retraction" },
      { label: "Max Stroke", value: "Up to 4000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Wall Thickness", value: "Extra thick" },
      { label: "Testing", value: "Overpressure tested" }
    ],
    features: [
      "Ultra-high pressure rating",
      "Thick wall construction",
      "Reinforced components",
      "Safety relief valves",
      "Pressure monitoring",
      "Dual sealing system",
      "Redundant protection",
      "Comprehensive testing"
    ],
    applications: [
      "High pressure testing",
      "Research equipment",
      "Specialized manufacturing",
      "Calibration labs",
      "Force generation"
    ],
    customizationOptions: [
      "Pressure rating requirements",
      "Bore size optimization",
      "Safety system details",
      "Testing requirements",
      "Certification needs"
    ],
    image: "https://placehold.co/600x400/red-200/FFFFFF?text=Telescopic+Hydraulic+Cylinder+High+Pressure",
    gallery: [
      "https://placehold.co/600x400/red-300/FFFFFF?text=Telescopic+High+Pressure+View+1",
      "https://placehold.co/600x400/red-400/FFFFFF?text=Telescopic+High+Pressure+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-06",
    name: "Telescopic Hydraulic Cylinder - Stainless Steel",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Stainless steel telescopic cylinder for corrosive environments",
    longDescription: "Stainless steel telescopic hydraulic cylinder designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout for superior corrosion resistance.",
    keySpecs: [
      { label: "Stages", value: "2 - 3 stages" },
      { label: "Stroke Ratio", value: "Up to 4x retraction" },
      { label: "Max Stroke", value: "Up to 5000 mm" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Seals", value: "Chemical resistant" },
      { label: "Corrosion", value: "Excellent resistance" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/zinc-100/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Stainless",
    gallery: [
      "https://placehold.co/600x400/zinc-200/FFFFFF?text=Telescopic+Stainless+View+1",
      "https://placehold.co/600x400/zinc-300/FFFFFF?text=Telescopic+Stainless+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-07",
    name: "Telescopic Hydraulic Cylinder - Low Profile",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Low profile telescopic cylinder for space-constrained applications",
    longDescription: "Low profile telescopic hydraulic cylinder designed for applications with limited installation height while requiring significant stroke. Features compact stages and optimized design.",
    keySpecs: [
      { label: "Stages", value: "2 - 3 stages" },
      { label: "Stroke Ratio", value: "Up to 3x retraction" },
      { label: "Max Stroke", value: "Up to 3000 mm" },
      { label: "Height", value: "Low profile" },
      { label: "Compact", value: "Yes" },
      { label: "Installation", value: "Space efficient" }
    ],
    features: [
      "Ultra-low height",
      "Compact construction",
      "Space-saving design",
      "Easy installation",
      "Low clearance",
      "Retrofits",
      "Mobile equipment",
      "Limited space"
    ],
    applications: [
      "Low ceiling applications",
      "Retrofits",
      "Compact machinery",
      "Mobile equipment",
      "Space-constrained"
    ],
    customizationOptions: [
      "Height constraints",
      "Bore size selection",
      "Stroke length",
      "Mounting requirements",
      "Force specifications"
    ],
    image: "https://placehold.co/600x400/amber-100/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Low+Profile",
    gallery: [
      "https://placehold.co/600x400/amber-200/FFFFFF?text=Telescopic+Low+Profile+View+1",
      "https://placehold.co/600x400/amber-300/FFFFFF?text=Telescopic+Low+Profile+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-08",
    name: "Telescopic Hydraulic Cylinder - High Speed",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "High speed telescopic cylinder for rapid cycling applications",
    longDescription: "High speed telescopic hydraulic cylinder designed for applications requiring fast extension and retraction cycles. Features optimized internal flow paths and high-flow components.",
    keySpecs: [
      { label: "Stages", value: "2 - 3 stages" },
      { label: "Stroke Ratio", value: "Up to 3x retraction" },
      { label: "Max Stroke", value: "Up to 4000 mm" },
      { label: "Speed", value: "Up to 1 m/s" },
      { label: "Flow Rate", value: "High flow" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High-speed operation",
      "Optimized flow paths",
      "Low-friction seals",
      "Balanced construction",
      "Reduced heat buildup",
      "Extended service life",
      "Smooth operation",
      "Low noise"
    ],
    applications: [
      "High-speed equipment",
      "Automated systems",
      "Material handling",
      "Conveyor systems",
      "Packaging machinery"
    ],
    customizationOptions: [
      "Speed requirements",
      "Flow rate optimization",
      "Mounting configurations",
      "Cushioning requirements",
      "Position sensing"
    ],
    image: "https://placehold.co/600x400/green-100/FFFFFF?text=Telescopic+Hydraulic+Cylinder+High+Speed",
    gallery: [
      "https://placehold.co/600x400/green-200/FFFFFF?text=Telescopic+High+Speed+View+1",
      "https://placehold.co/600x400/green-300/FFFFFF?text=Telescopic+High+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-09",
    name: "Telescopic Hydraulic Cylinder - Explosion Proof",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Explosion-proof telescopic cylinder for hazardous locations",
    longDescription: "Explosion-proof telescopic hydraulic cylinder designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials and explosion-proof construction.",
    keySpecs: [
      { label: "Stages", value: "2 - 3 stages" },
      { label: "Stroke Ratio", value: "Up to 3x retraction" },
      { label: "Max Stroke", value: "Up to 5000 mm" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-100/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-200/FFFFFF?text=Telescopic+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-300/FFFFFF?text=Telescopic+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinder-10",
    name: "Telescopic Hydraulic Cylinder - Custom Configuration",
    category: "Telescopic Hydraulic Cylinders",
    categorySlug: "telescopic-hydraulic-cylinders",
    shortDescription: "Custom configured telescopic cylinder for unique applications",
    longDescription: "Custom configured telescopic hydraulic cylinder designed for your specific application requirements. We work with you to create the perfect telescopic solution.",
    keySpecs: [
      { label: "Stages", value: "2 - 6 stages" },
      { label: "Stroke Ratio", value: "Up to 8x retraction" },
      { label: "Max Stroke", value: "Up to 15000 mm" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" },
      { label: "Integration", value: "OEM ready" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Stage configuration",
      "Stroke distribution",
      "Mounting requirements",
      "Special features"
    ],
    image: "https://placehold.co/600x400/purple-100/FFFFFF?text=Telescopic+Hydraulic+Cylinder+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-200/FFFFFF?text=Telescopic+Custom+View+1",
      "https://placehold.co/600x400/purple-300/FFFFFF?text=Telescopic+Custom+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= EARTH MOVING HYDRAULIC CYLINDERS (10 products) =============
  {
    slug: "earth-moving-hydraulic-cylinder-01",
    name: "Earth Moving Hydraulic Cylinder - Standard",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Standard earth moving cylinder for construction equipment",
    longDescription: "Standard earth moving hydraulic cylinder designed for construction and earth moving equipment. Built to withstand harsh environments, shock loads, and corrosive conditions with heavy-duty construction.",
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
    image: "https://placehold.co/600x400/emerald-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Standard",
    gallery: [
      "https://placehold.co/600x400/emerald-300/FFFFFF?text=Earth+Moving+Cylinder+Standard+View+1",
      "https://placehold.co/600x400/emerald-400/FFFFFF?text=Earth+Moving+Cylinder+Standard+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-02",
    name: "Earth Moving Hydraulic Cylinder - Heavy Duty",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Heavy duty earthmoving cylinder for extreme conditions",
    longDescription: "Heavy duty earthmoving hydraulic cylinder designed for the most demanding construction and mining applications. Features reinforced construction and enhancedDurability for extreme conditions.",
    keySpecs: [
      { label: "Bore Diameter", value: "125 - 350 mm" },
      { label: "Stroke Length", value: "Up to 5000 mm" },
      { label: "Operating Pressure", value: "Up to 400 bar" },
      { label: "Construction", value: "Heavy duty" },
      { label: "Reinforcement", value: "Extreme" },
      { label: "Durability", value: "Maximum" }
    ],
    features: [
      "Extreme load capacity",
      "Reinforced construction",
      "Enhanced protection",
      "Extra heavy-duty seals",
      "Shock absorption",
      "Long service life",
      "Reduced downtime",
      "Maximum reliability"
    ],
    applications: [
      "Heavy mining",
      "Quarry operations",
      "Heavy construction",
      "Demolition equipment",
      "Extreme conditions"
    ],
    customizationOptions: [
      "Load requirements",
      "Stroke specifications",
      "Mounting configuration",
      "Environmental protection",
      "Special features"
    ],
    image: "https://placehold.co/600x400/brown-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Heavy+Duty",
    gallery: [
      "https://placehold.co/600x400/brown-300/FFFFFF?text=Earth+Moving+Heavy+Duty+View+1",
      "https://placehold.co/600x400/brown-400/FFFFFF?text=Earth+Moving+Heavy+Duty+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-03",
    name: "Earth Moving Hydraulic Cylinder - High Pressure",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "High pressure earthmoving cylinder for powerful equipment",
    longDescription: "High pressure earthmoving hydraulic cylinder designed for equipment requiring maximum pushing and lifting power. Features reinforced construction and high-pressure components.",
    keySpecs: [
      { label: "Bore Diameter", value: "100 - 300 mm" },
      { label: "Stroke Length", value: "Up to 4000 mm" },
      { label: "Operating Pressure", value: "Up to 450 bar" },
      { label: "Force", value: "Maximum" },
      { label: "Construction", value: "High pressure" },
      { label: "Reliability", value: "High" }
    ],
    features: [
      "Ultra-high pressure rating",
      "Maximum force output",
      "Reinforced cylinder body",
      "High-pressure seals",
      "Heavy-duty rod",
      "Enhanced mounting",
      "Robust construction",
      "High performance"
    ],
    applications: [
      "High-pressure excavators",
      "Heavy loaders",
      "Large dozers",
      "Mining equipment",
      "High-force applications"
    ],
    customizationOptions: [
      "Pressure requirements",
      "Bore size optimization",
      "Stroke length",
      "Mounting configuration",
      "Force specifications"
    ],
    image: "https://placehold.co/600x400/red-100/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+High+Pressure",
    gallery: [
      "https://placehold.co/600x400/red-200/FFFFFF?text=Earth+Moving+High+Pressure+View+1",
      "https://placehold.co/600x400/red-300/FFFFFF?text=Earth+Moving+High+Pressure+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-04",
    name: "Earth Moving Hydraulic Cylinder - Corrosion Resistant",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Corrosion resistant earthmoving cylinder for wet and salty environments",
    longDescription: "Corrosion resistant earthmoving hydraulic cylinder designed for wet, salty, and corrosive environments. Features advanced coating systems and sealing for maximum protection.",
    keySpecs: [
      { label: "Bore Diameter", value: "80 - 200 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Corrosion", value: "Maximum resistance" },
      { label: "Coating", value: "Multi-layer" },
      { label: "Seals", value: "Advanced" }
    ],
    features: [
      "Multi-layer corrosion protection",
      "Marine-grade materials",
      "Salt spray tested",
      "Corrosion-resistant coatings",
      "Advanced sealing systems",
      "Extended service intervals",
      "Long-term protection",
      "Reduced maintenance"
    ],
    applications: [
      "Coastal operations",
      "Wet environments",
      "Chemical exposure",
      "Winter conditions",
      "Corrosive areas"
    ],
    customizationOptions: [
      "Corrosion exposure level",
      "Coating specifications",
      "Material selection",
      "Seal requirements",
      "Testing needs"
    ],
    image: "https://placehold.co/600x400/teal-100/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Corrosion+Resistant",
    gallery: [
      "https://placehold.co/600x400/teal-200/FFFFFF?text=Earth+Moving+Corrosion+Resistant+View+1",
      "https://placehold.co/600x400/teal-300/FFFFFF?text=Earth+Moving+Corrosion+Resistant+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-05",
    name: "Earth Moving Hydraulic Cylinder - High Cycle",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "High cycle endurance earthmoving cylinder for continuous operation",
    longDescription: "High cycle endurance earthmoving hydraulic cylinder designed for applications requiring millions of cycles with minimal maintenance. Features enhanced wear resistance.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 180 mm" },
      { label: "Stroke Length", value: "Up to 2500 mm" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Cycle Life", value: "Millions of cycles" },
      { label: "Maintenance", value: "Extended intervals" },
      { label: "Reliability", value: "High reliability" }
    ],
    features: [
      "Millions of cycle rating",
      "Enhanced wear resistance",
      "Long service life",
      "Extended maintenance intervals",
      "Reduced downtime",
      "Predictable replacement",
      "High reliability",
      "Cost-effective operation"
    ],
    applications: [
      "Continuous operation equipment",
      "High-use machinery",
      "24/7 operations",
      "Frequent cycling",
      "Production lines"
    ],
    customizationOptions: [
      "Cycle life requirements",
      "Speed requirements",
      "Load conditions",
      "Mounting configuration",
      "Control requirements"
    ],
    image: "https://placehold.co/600x400/green-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+High+Cycle",
    gallery: [
      "https://placehold.co/600x400/green-300/FFFFFF?text=Earth+Moving+High+Cycle+View+1",
      "https://placehold.co/600x400/green-400/FFFFFF?text=Earth+Moving+High+Cycle+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-06",
    name: "Earth Moving Hydraulic Cylinder - Wide Temperature",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Wide temperature range earthmoving cylinder for extreme climates",
    longDescription: "Wide temperature range earthmoving hydraulic cylinder designed for operation in extreme hot and cold climates. Features temperature-stable seals and fluids.",
    keySpecs: [
      { label: "Bore Diameter", value: "80 - 250 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Temperature", value: "-40°C to +100°C" },
      { label: "Seals", value: "Temperature stable" },
      { label: "Fluid", value: "Wide range" }
    ],
    features: [
      "Wide temperature operation",
      "Cold-resistant seals",
      "Heat-resistant components",
      "Temperature-stable fluids",
      "Consistent performance",
      "Seasonal reliability",
      "Climate adaptation",
      "Year-round operation"
    ],
    applications: [
      "Arctic operations",
      "Desert operations",
      "Seasonal equipment",
      "Variable climates",
      "Extreme conditions"
    ],
    customizationOptions: [
      "Temperature range",
      "Cold weather features",
      "Heat protection",
      "Seal selection",
      "Fluid recommendations"
    ],
    image: "https://placehold.co/600x400/amber-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Wide+Temp",
    gallery: [
      "https://placehold.co/600x400/amber-300/FFFFFF?text=Earth+Moving+Wide+Temp+View+1",
      "https://placehold.co/600x400/amber-400/FFFFFF?text=Earth+Moving+Wide+Temp+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-07",
    name: "Earth Moving Hydraulic Cylinder - Dust proof",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Dust-proof earthmoving cylinder for dusty operating environments",
    longDescription: "Dust-proof earthmoving hydraulic cylinder designed for dusty operating environments such as mining, quarrying, and construction sites with high dust levels.",
    keySpecs: [
      { label: "Bore Diameter", value: "80 - 250 mm" },
      { label: "Stroke Length", value: "Up to 3000 mm" },
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Dust Protection", value: "Maximum" },
      { label: "Seals", value: "Dust proof" },
      { label: "Boot", value: "Heavy duty" }
    ],
    features: [
      "Dust-proof construction",
      "Heavy-duty wipers",
      "Dust boots",
      "Sealed rod area",
      "Multi-stage sealing",
      "Extended service life",
      "Reduced maintenance",
      "Clean operation"
    ],
    applications: [
      "Mining operations",
      "Quarry applications",
      "Construction sites",
      "Gravel operations",
      "Dusty environments"
    ],
    customizationOptions: [
      "Dust exposure level",
      "Boot specifications",
      "Seal requirements",
      "Wiper types",
      "Maintenance intervals"
    ],
    image: "https://placehold.co/600x400/slate-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Dust+Proof",
    gallery: [
      "https://placehold.co/600x400/slate-300/FFFFFF?text=Earth+Moving+Dust+Proof+View+1",
      "https://placehold.co/600x400/slate-400/FFFFFF?text=Earth+Moving+Dust+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-08",
    name: "Earth Moving Hydraulic Cylinder - High Speed",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "High speed earthmoving cylinder for rapid cycling applications",
    longDescription: "High speed earthmoving hydraulic cylinder designed for applications requiring fast cycling speeds. Features optimized flow paths and high-flow components for rapid operation.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 160 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Speed", value: "Up to 1.5 m/s" },
      { label: "Flow Rate", value: "High flow" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High-speed operation",
      "Optimized flow paths",
      "Low-friction seals",
      "Balanced construction",
      "Reduced heat buildup",
      "Extended service life",
      "Smooth operation",
      "Low noise"
    ],
    applications: [
      "High-speed machinery",
      "Rapid cycling equipment",
      "Automation systems",
      "Conveyor systems",
      "Material handling"
    ],
    customizationOptions: [
      "Speed requirements",
      "Acceleration/deceleration",
      "Load specifications",
      "Control system",
      "Position accuracy"
    ],
    image: "https://placehold.co/600x400/green-100/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+High+Speed",
    gallery: [
      "https://placehold.co/600x400/green-200/FFFFFF?text=Earth+Moving+High+Speed+View+1",
      "https://placehold.co/600x400/green-300/FFFFFF?text=Earth+Moving+High+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-09",
    name: "Earth Moving Hydraulic Cylinder - Low Noise",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Low noise earthmoving cylinder for noise-sensitive areas",
    longDescription: "Low noise earthmoving hydraulic cylinder designed for operation in noise-sensitive areas. Features optimized cushioning and flow control for quiet operation.",
    keySpecs: [
      { label: "Bore Diameter", value: "63 - 150 mm" },
      { label: "Stroke Length", value: "Up to 2000 mm" },
      { label: "Operating Pressure", value: "Up to 300 bar" },
      { label: "Noise Level", value: "<55 dB" },
      { label: "Cushioning", value: "Optimized" },
      { label: "Flow", value: "Controlled" }
    ],
    features: [
      "Low noise operation below 55 dB",
      "Optimized cushioning",
      "Controlled flow at end of stroke",
      "Smooth deceleration",
      "Reduced hydraulic shock",
      "Quiet operation",
      "Night operation capable",
      "Sensitive area compatible"
    ],
    applications: [
      "Urban construction",
      "Residential areas",
      "Night operations",
      "Near-sensitive areas",
      "Noise-restricted zones"
    ],
    customizationOptions: [
      "Noise level targets",
      "Cushioning requirements",
      "Flow control specs",
      "Mounting options",
      "Control interfaces"
    ],
    image: "https://placehold.co/600x400/blue-100/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Low+Noise",
    gallery: [
      "https://placehold.co/600x400/blue-200/FFFFFF?text=Earth+Moving+Low+Noise+View+1",
      "https://placehold.co/600x400/blue-300/FFFFFF?text=Earth+Moving+Low+Noise+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinder-10",
    name: "Earth Moving Hydraulic Cylinder - Custom Equipment",
    category: "Earth Moving Hydraulic Cylinders",
    categorySlug: "earth-moving-hydraulic-cylinders",
    shortDescription: "Custom configured earthmoving cylinder for specialized equipment",
    longDescription: "Custom configured earthmoving hydraulic cylinder designed for specialized equipment requirements. We work with you to create the perfect solution for your specific application.",
    keySpecs: [
      { label: "Bore Diameter", value: "Any specification" },
      { label: "Stroke Length", value: "Any specification" },
      { label: "Operating Pressure", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" },
      { label: "Integration", value: "OEM ready" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special equipment",
      "Unusual requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Equipment compatibility",
      "Mounting requirements",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-200/FFFFFF?text=Earth+Moving+Hydraulic+Cylinder+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-300/FFFFFF?text=Earth+Moving+Custom+View+1",
      "https://placehold.co/600x400/purple-400/FFFFFF?text=Earth+Moving+Custom+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= HYDRAULIC POWER PACK FOR GOODS LIFT (10 products) =============
  {
    slug: "goods-lift-power-pack-01",
    name: "Hydraulic Power Pack for Goods Lift - Standard",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Standard hydraulic power pack for goods lift and elevator systems",
    longDescription: "Standard hydraulic power pack designed specifically for goods lift and cargo elevator applications. Features controlled acceleration/deceleration and precise leveling capability.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 5000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Flow Rate", value: "20 - 100 LPM" },
      { label: "Leveling", value: "Precision" },
      { label: "Safety", value: "Redundant systems" }
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
    image: "https://placehold.co/600x400/blue-500/FFFFFF?text=Goods+Lift+Power+Pack+Standard",
    gallery: [
      "https://placehold.co/600x400/blue-600/FFFFFF?text=Goods+Lift+Power+Pack+View+1",
      "https://placehold.co/600x400/blue-700/FFFFFF?text=Goods+Lift+Power+Pack+View+2"
    ],
    relatedProducts: [],
    featured: true
  },
  {
    slug: "goods-lift-power-pack-02",
    name: "Hydraulic Power Pack for Goods Lift - High Speed",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "High speed hydraulic power pack for fast cycling goods lifts",
    longDescription: "High speed hydraulic power pack designed for goods lifts requiring rapid cycling and quick operation. Features high flow pumps and optimized hydraulic circuits.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Motor Power", value: "7 HP - 25 HP" },
      { label: "Lift Speed", value: "Up to 1.5 m/s" },
      { label: "Flow Rate", value: "100 - 300 LPM" },
      { label: "Cycles", value: "High frequency" }
    ],
    features: [
      "High lift speed",
      "Rapid cycle time",
      "Fast response pumps",
      "High flow capacity",
      "Optimized circuit design",
      "Efficient operation",
      "Extended service life",
      "Reduced waiting time"
    ],
    applications: [
      "High-speed elevators",
      "Automated parking",
      "Material handling",
      "Conveyor lifts",
      "Packaging lines"
    ],
    customizationOptions: [
      "Speed requirements",
      "Acceleration/deceleration",
      "Load specifications",
      "Control system",
      "Position accuracy"
    ],
    image: "https://placehold.co/600x400/cyan-600/FFFFFF?text=Goods+Lift+Power+Pack+High+Speed",
    gallery: [
      "https://placehold.co/600x400/cyan-700/FFFFFF?text=Goods+Lift+Power+Pack+Speed+View+1",
      "https://placehold.co/600x400/cyan-800/FFFFFF?text=Goods+Lift+Power+Pack+Speed+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-03",
    name: "Hydraulic Power Pack for Goods Lift - Quiet Operation",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Quiet operation hydraulic power pack for noise-sensitive areas",
    longDescription: "Quiet operation hydraulic power pack designed for noise-sensitive environments such as offices, hospitals, and residential buildings. Features sound-dampening and low-noise components.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 2000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 10 HP" },
      { label: "Noise Level", value: "<50 dB" },
      { label: "Sound Proofing", value: "Enclosed" },
      { label: "Operation", value: "Silent" }
    ],
    features: [
      "Ultra-quiet operation below 50 dB",
      "Sound-dampening enclosure",
      "Low-noise pump",
      "Vibration isolation",
      "Smooth-running motor",
      "Noise-tested",
      "Office-safe",
      "Night-operation capable"
    ],
    applications: [
      "Office buildings",
      "Hospitals",
      "Hotels",
      "Residential buildings",
      "Laboratories"
    ],
    customizationOptions: [
      "Noise level targets",
      "Enclosure specifications",
      "Sound rating requirements",
      "Ventilation needs",
      "Space constraints"
    ],
    image: "https://placehold.co/600x400/amber-500/FFFFFF?text=Goods+Lift+Power+Pack+Quiet",
    gallery: [
      "https://placehold.co/600x400/amber-600/FFFFFF?text=Goods+Lift+Power+Pack+Quiet+View+1",
      "https://placehold.co/600x400/amber-700/FFFFFF?text=Goods+Lift+Power+Pack+Quiet+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-04",
    name: "Hydraulic Power Pack for Goods Lift - Marine Grade",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Marine-grade hydraulic power pack for shipboard lifts",
    longDescription: "Marine-grade hydraulic power pack designed for shipboard and offshore elevator systems. Features corrosion resistance, waterproofing, and marine certifications.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 5000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "5 HP - 20 HP" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard lifts",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/indigo-700/FFFFFF?text=Goods+Lift+Power+Pack+Marine",
    gallery: [
      "https://placehold.co/600x400/indigo-800/FFFFFF?text=Goods+Lift+Power+Pack+Marine+View+1",
      "https://placehold.co/600x400/indigo-900/FFFFFF?text=Goods+Lift+Power+Pack+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-05",
    name: "Hydraulic Power Pack for Goods Lift - Explosion Proof",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Explosion-proof hydraulic power pack for hazardous locations",
    longDescription: "Explosion-proof hydraulic power pack designed for operation in hazardous locations with flammable gases, vapors, or dust. Features spark-resistant materials.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-700/FFFFFF?text=Goods+Lift+Power+Pack+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-800/FFFFFF?text=Goods+Lift+Power+Pack+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-900/FFFFFF?text=Goods+Lift+Power+Pack+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-06",
    name: "Hydraulic Power Pack for Goods Lift - Food Grade",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Food-grade hydraulic power pack for food processing equipment",
    longDescription: "Food-grade hydraulic power pack designed for food, beverage, and pharmaceutical manufacturing equipment. Features hygienic construction with easy cleaning.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 2000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "2 HP - 10 HP" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-700/FFFFFF?text=Goods+Lift+Power+Pack+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-800/FFFFFF?text=Goods+Lift+Power+Pack+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-900/FFFFFF?text=Goods+Lift+Power+Pack+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-07",
    name: "Hydraulic Power Pack for Goods Lift - Variable Speed",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Variable speed hydraulic power pack for energy efficiency",
    longDescription: "Variable speed hydraulic power pack featuring VFD-controlled motors for energy savings and precise speed control. Smart control system optimizes performance.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 3000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "3 HP - 15 HP" },
      { label: "Speed Control", value: "Variable frequency" },
      { label: "Efficiency", value: "Up to 50% energy savings" },
      { label: "Control", value: "VFD" }
    ],
    features: [
      "Energy savings up to 50%",
      "Soft start/stop",
      "Variable speed control",
      "Reduced wear and tear",
      "Lower operating costs",
      "Extended component life",
      "Stable pressure control",
      "Smooth operation"
    ],
    applications: [
      "Variable load applications",
      "Energy-conscious facilities",
      "Cost-saving upgrades",
      "Sustainable manufacturing",
      "Smart buildings"
    ],
    customizationOptions: [
      "Speed curve requirements",
      "Pressure profiles",
      "Control integration",
      "Monitoring systems",
      "Communication protocols"
    ],
    image: "https://placehold.co/600x400/green-700/FFFFFF?text=Goods+Lift+Power+Pack+Variable+Speed",
    gallery: [
      "https://placehold.co/600x400/green-800/FFFFFF?text=Goods+Lift+Power+Pack+VSD+View+1",
      "https://placehold.co/600x400/green-900/FFFFFF?text=Goods+Lift+Power+Pack+VSD+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-08",
    name: "Hydraulic Power Pack for Goods Lift - Compact",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Compact hydraulic power pack for limited space installations",
    longDescription: "Compact hydraulic power pack designed for applications with limited installation space. Features miniaturized components and optimized layout.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 1000 kg" },
      { label: "Operating Pressure", value: "Up to 150 bar" },
      { label: "Motor Power", value: "1 HP - 5 HP" },
      { label: "Size", value: "Compact design" },
      { label: "Weight", value: "Lightweight" },
      { label: "Installation", value: "Space efficient" }
    ],
    features: [
      "Minimal footprint",
      "Lightweight construction",
      "Quick installation",
      "Modular design",
      "Easy maintenance access",
      "Space-efficient layout",
      "Reduced shipping costs",
      "Easy storage"
    ],
    applications: [
      "Retrofits",
      "Limited space",
      "Compact machinery",
      "Small lifts",
      "Mobile equipment"
    ],
    customizationOptions: [
      "Size constraints",
      "Mounting requirements",
      "Power specifications",
      "Control interface",
      "Connections configuration"
    ],
    image: "https://placehold.co/600x400/teal-700/FFFFFF?text=Goods+Lift+Power+Pack+Compact",
    gallery: [
      "https://placehold.co/600x400/teal-800/FFFFFF?text=Goods+Lift+Power+Pack+Compact+View+1",
      "https://placehold.co/600x400/teal-900/FFFFFF?text=Goods+Lift+Power+Pack+Compact+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-09",
    name: "Hydraulic Power Pack for Goods Lift - High Capacity",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "High capacity hydraulic power pack for heavy loads",
    longDescription: "High capacity hydraulic power pack designed for lifting applications with very heavy loads. Features high flow pumps and robust components.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Up to 10000 kg" },
      { label: "Operating Pressure", value: "Up to 200 bar" },
      { label: "Motor Power", value: "15 HP - 50 HP" },
      { label: "Flow Rate", value: "150 - 500 LPM" },
      { label: "Construction", value: "Heavy duty" },
      { label: "Duty Cycle", value: "100%" }
    ],
    features: [
      "High lifting capacity",
      "Heavy-duty components",
      "High flow pumps",
      "Robust construction",
      "Extended service life",
      "Reduced downtime",
      "Predictable maintenance",
      "High reliability"
    ],
    applications: [
      "Heavy lift applications",
      "Industrial lifts",
      "Cargo lifts",
      "Vehicle lifts",
      "Equipment lifts"
    ],
    customizationOptions: [
      "Capacity requirements",
      "Lift height specifications",
      "Speed requirements",
      "Control system integration",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/rose-700/FFFFFF?text=Goods+Lift+Power+Pack+High+Capacity",
    gallery: [
      "https://placehold.co/600x400/rose-800/FFFFFF?text=Goods+Lift+Power+Pack+High+Cap+View+1",
      "https://placehold.co/600x400/rose-900/FFFFFF?text=Goods+Lift+Power+Pack+High+Cap+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "goods-lift-power-pack-10",
    name: "Hydraulic Power Pack for Goods Lift - Custom Integration",
    category: "Lift Hydraulic Power Packs",
    categorySlug: "lift-hydraulic-power-packs",
    shortDescription: "Custom integrated hydraulic power pack for OEM applications",
    longDescription: "Custom integrated hydraulic power pack designed for OEM equipment with specific requirements. Fully customized to match your lift system.",
    keySpecs: [
      { label: "Lifting Capacity", value: "Any specification" },
      { label: "Operating Pressure", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Integration", value: "OEM ready" },
      { label: "Control", value: "Custom interface" },
      { label: "Documentation", value: "Full documentation" }
    ],
    features: [
      "Complete customization",
      "OEM-specific design",
      "Engineering support",
      "Seamless integration",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Equipment integration",
      "OEM production",
      "Special machinery",
      "Custom lifts",
      "Bespoke solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Control requirements",
      "Mounting configuration",
      "Interface requirements",
      "Certification needs"
    ],
    image: "https://placehold.co/600x400/purple-700/FFFFFF?text=Goods+Lift+Power+Pack+Custom+Integration",
    gallery: [
      "https://placehold.co/600x400/purple-800/FFFFFF?text=Goods+Lift+Power+Pack+Custom+View+1",
      "https://placehold.co/600x400/purple-900/FFFFFF?text=Goods+Lift+Power+Pack+Custom+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= MANUAL HYDRAULIC POWER PACKS (10 products) =============
  {
    slug: "manual-hydraulic-power-pack-01",
    name: "Manual Hydraulic Power Pack - Hand Operated",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Hand-operated manual hydraulic power pack for portable applications",
    longDescription: "Hand-operated manual hydraulic power pack providing portable hydraulic power without electricity. Ideal for maintenance work, remote locations, and emergency hydraulic power needs.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.5 - 5 LPM" },
      { label: "Operation", value: "Hand-operated" },
      { label: "Tank Capacity", value: "2 - 10 Liters" },
      { label: "Weight", value: "Lightweight" },
      { label: "Portability", value: "High" }
    ],
    features: [
      "No electricity required",
      "Portable and lightweight",
      "Manual operation",
      "Emergency power source",
      "Simple design",
      "Reliable performance",
      "Low maintenance",
      "Field service friendly"
    ],
    applications: [
      "Field maintenance",
      "Emergency repairs",
      "Remote locations",
      "Testing equipment",
      "Portable tools"
    ],
    customizationOptions: [
      "Pressure requirements",
      "Flow rate needs",
      "Handle length",
      "Mounting options",
      "Cylinder compatibility"
    ],
    image: "https://placehold.co/600x400/stone-200/FFFFFF?text=Manual+Hydraulic+Power+Pack+Hand+Operated",
    gallery: [
      "https://placehold.co/600x400/stone-300/FFFFFF?text=Manual+Hand+Operated+View+1",
      "https://placehold.co/600x400/stone-400/FFFFFF?text=Manual+Hand+Operated+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-02",
    name: "Manual Hydraulic Power Pack - Foot Operated",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Foot-operated manual hydraulic power pack for hands-free operation",
    longDescription: "Foot-operated manual hydraulic power pack providing hands-free hydraulic power operation. Ideal for applications requiring both hands while hydraulic power is needed.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "1 - 8 LPM" },
      { label: "Operation", value: "Foot-operated" },
      { label: "Tank Capacity", value: "5 - 15 Liters" },
      { label: "Hands", value: "Free operation" },
      { label: "Ergonomics", value: "Comfortable" }
    ],
    features: [
      "Hands-free operation",
      "Foot pedal control",
      "Ergonomic design",
      "Continuous operation",
      "Reduced fatigue",
      "Two-handed safety",
      "Reliable performance",
      "Field service friendly"
    ],
    applications: [
      "Assembly work",
      "Maintenance tasks",
      "Hands-free applications",
      "Precision work",
      "Two-handed operations"
    ],
    customizationOptions: [
      "Foot pedal type",
      "Pressure requirements",
      "Flow rate needs",
      "Mounting configuration",
      "Cylinder compatibility"
    ],
    image: "https://placehold.co/600x400/amber-300/FFFFFF?text=Manual+Hydraulic+Power+Pack+Foot+Operated",
    gallery: [
      "https://placehold.co/600x400/amber-400/FFFFFF?text=Manual+Foot+Operated+View+1",
      "https://placehold.co/600x400/amber-500/FFFFFF?text=Manual+Foot+Operated+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-03",
    name: "Manual Hydraulic Power Pack - Dual Stage",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Dual-stage manual hydraulic power pack for high pressure",
    longDescription: "Dual-stage manual hydraulic power pack providing high pressure capability with manual operation. Features two-stage pumping for efficient pressure build-up.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.5 - 3 LPM" },
      { label: "Stages", value: "Two-stage" },
      { label: "Tank Capacity", value: "3 - 8 Liters" },
      { label: "Pressure", value: "High pressure" },
      { label: "Efficiency", value: "Optimized" }
    ],
    features: [
      "Two-stage pumping",
      "Efficient pressure build-up",
      "High pressure capability",
      "Low force requirement",
      "Compact design",
      "Portable operation",
      "Reliable performance",
      "Long service life"
    ],
    applications: [
      "High pressure testing",
      "Calibration work",
      "Specialized applications",
      "Field testing",
      "Precision work"
    ],
    customizationOptions: [
      "Pressure requirements",
      "Flow rate needs",
      "Tank size",
      "Port configuration",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/teal-300/FFFFFF?text=Manual+Hydraulic+Power+Pack+Dual+Stage",
    gallery: [
      "https://placehold.co/600x400/teal-400/FFFFFF?text=Manual+Dual+Stage+View+1",
      "https://placehold.co/600x400/teal-500/FFFFFF?text=Manual+Dual+Stage+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-04",
    name: "Manual Hydraulic Power Pack - Large Capacity",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Large capacity manual hydraulic power pack for extended operations",
    longDescription: "Large capacity manual hydraulic power pack designed for extended operation without refilling. Features larger reservoir and efficient pumping for prolonged use.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "2 - 10 LPM" },
      { label: "Tank Capacity", value: "20 - 50 Liters" },
      { label: "Operation", value: "Hand-operated" },
      { label: "Duration", value: "Extended" },
      { label: "Ports", value: "Multiple" }
    ],
    features: [
      "Large reservoir capacity",
      "Extended operation time",
      "Multiple outlet options",
      "Extended use capability",
      "Sturdy construction",
      "Portable with wheels",
      "Reliable performance",
      "Field service friendly"
    ],
    applications: [
      "Extended maintenance",
      "Field operations",
      "Remote locations",
      "Continuous work",
      "Multiple cylinder operation"
    ],
    customizationOptions: [
      "Tank size requirements",
      "Flow rate needs",
      "Pressure specifications",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/blue-200/FFFFFF?text=Manual+Hydraulic+Power+Pack+Large+Capacity",
    gallery: [
      "https://placehold.co/600x400/blue-300/FFFFFF?text=Manual+Large+Capacity+View+1",
      "https://placehold.co/600x400/blue-400/FFFFFF?text=Manual+Large+Capacity+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-05",
    name: "Manual Hydraulic Power Pack - High Flow",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "High flow manual hydraulic power pack for fast operation",
    longDescription: "High flow manual hydraulic power pack providing rapid hydraulic action with manual operation. Features larger displacement pump for increased flow rates.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "5 - 20 LPM" },
      { label: "Pump", value: "High flow" },
      { label: "Tank Capacity", value: "5 - 20 Liters" },
      { label: "Speed", value: "Fast" },
      { label: "Force", value: "High force" }
    ],
    features: [
      "High flow rate",
      "Fast cylinder operation",
      "Rapid cycle time",
      "Efficient pumping",
      "Large displacement pump",
      "Portability maintained",
      "Reliable performance",
      "Extended reach"
    ],
    applications: [
      "Fast operations",
      "Multiple cylinder use",
      "Time-sensitive work",
      "Rapid deployment",
      "Emergency response"
    ],
    customizationOptions: [
      "Flow rate requirements",
      "Pressure specifications",
      "Tank size",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/green-300/FFFFFF?text=Manual+Hydraulic+Power+Pack+High+Flow",
    gallery: [
      "https://placehold.co/600x400/green-400/FFFFFF?text=Manual+High+Flow+View+1",
      "https://placehold.co/600x400/green-500/FFFFFF?text=Manual+High+Flow+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-06",
    name: "Manual Hydraulic Power Pack - Explosion Proof",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Explosion-proof manual hydraulic power pack for hazardous locations",
    longDescription: "Explosion-proof manual hydraulic power pack designed for operation in hazardous locations. Features non-sparking materials and explosion-proof construction.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "1 - 10 LPM" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" },
      { label: "Safety", value: "Comprehensive" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-300/FFFFFF?text=Manual+Hydraulic+Power+Pack+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-400/FFFFFF?text=Manual+Explosion+Proof+View+1",
      "https://placehold.co/600x400/orange-500/FFFFFF?text=Manual+Explosion+Proof+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-07",
    name: "Manual Hydraulic Power Pack - Food Grade",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Food-grade manual hydraulic power pack for food processing",
    longDescription: "Food-grade manual hydraulic power pack designed for food, beverage, and pharmaceutical applications. Features hygienic construction with easy cleaning.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 160 bar" },
      { label: "Flow Rate", value: "1 - 5 LPM" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" },
      { label: "Cleaning", value: "CIP compatible" },
      { label: "Materials", value: "Hygienic" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-200/FFFFFF?text=Manual+Hydraulic+Power+Pack+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-300/FFFFFF?text=Manual+Food+Grade+View+1",
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Manual+Food+Grade+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-08",
    name: "Manual Hydraulic Power Pack - Marine Grade",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Marine-grade manual hydraulic power pack for shipboard use",
    longDescription: "Marine-grade manual hydraulic power pack designed for shipboard and offshore operations. Features corrosion resistance and marine certifications.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "1 - 10 LPM" },
      { label: "Certification", value: "Marine certified" },
      { label: "Materials", value: "Marine grade" },
      { label: "Protection", value: "IP67+" },
      { label: "Construction", value: "Marine grade" }
    ],
    features: [
      "Marine certification",
      "Corrosion resistance",
      "Salt spray tested",
      "Marine-grade materials",
      "Waterproof construction",
      "Explosion-proof options",
      "Vibration resistant",
      "Shock resistant"
    ],
    applications: [
      "Shipboard systems",
      "Offshore platforms",
      "Harbor equipment",
      "Marine cranes",
      "Deck machinery"
    ],
    customizationOptions: [
      "Marine certification requirements",
      "Voltage specifications",
      "Explosion protection",
      "Mounting configurations",
      "Control standards"
    ],
    image: "https://placehold.co/600x400/indigo-200/FFFFFF?text=Manual+Hydraulic+Power+Pack+Marine",
    gallery: [
      "https://placehold.co/600x400/indigo-300/FFFFFF?text=Manual+Marine+View+1",
      "https://placehold.co/600x400/indigo-400/FFFFFF?text=Manual+Marine+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-09",
    name: "Manual Hydraulic Power Pack - Compact",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Compact manual hydraulic power pack for tight spaces",
    longDescription: "Compact manual hydraulic power pack designed for applications with limited installation space. Features miniaturized components while maintaining functionality.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.2 - 2 LPM" },
      { label: "Size", value: "Compact design" },
      { label: "Weight", value: "Lightweight" },
      { label: "Installation", value: "Space efficient" },
      { label: "Portability", value: "High" }
    ],
    features: [
      "Minimal footprint",
      "Lightweight construction",
      "Ultra-portable",
      "Compact design",
      "Easy storage",
      "Small space friendly",
      "Simple operation",
      "Reliable performance"
    ],
    applications: [
      "Retrofits",
      "Limited space",
      "Mobile equipment",
      "Compact machinery",
      "Space-constrained"
    ],
    customizationOptions: [
      "Size constraints",
      "Mounting requirements",
      "Power specifications",
      "Control interface",
      "Connections configuration"
    ],
    image: "https://placehold.co/600x400/violet-200/FFFFFF?text=Manual+Hydraulic+Power+Pack+Compact",
    gallery: [
      "https://placehold.co/600x400/violet-300/FFFFFF?text=Manual+Compact+View+1",
      "https://placehold.co/600x400/violet-400/FFFFFF?text=Manual+Compact+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "manual-hydraulic-power-pack-10",
    name: "Manual Hydraulic Power Pack - Custom Configuration",
    category: "Manual Hydraulic Power Packs",
    categorySlug: "manual-hydraulic-power-packs",
    shortDescription: "Custom configured manual hydraulic power pack for specific needs",
    longDescription: "Custom configured manual hydraulic power pack designed for your specific application requirements. We work with you to create the perfect manual solution.",
    keySpecs: [
      { label: "Operating Pressure", value: "Any specification" },
      { label: "Flow Rate", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" },
      { label: "Integration", value: "OEM ready" },
      { label: "Documentation", value: "Full documentation" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Operation requirements",
      "Mounting requirements",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-300/FFFFFF?text=Manual+Hydraulic+Power+Pack+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-400/FFFFFF?text=Manual+Custom+View+1",
      "https://placehold.co/600x400/purple-500/FFFFFF?text=Manual+Custom+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= DIRECTIONAL CONTROL VALVES (10 products) =============
  {
    slug: "directional-control-valve-01",
    name: "Directional Control Valve - 2 Position",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "2-position directional control valve for basic control applications",
    longDescription: "2-position directional control valve providing basic hydraulic flow control for simple applications. Features robust construction and reliable operation.",
    keySpecs: [
      { label: "Positions", value: "2 positions" },
      { label: "Ports", value: "2 - 4 ports" },
      { label: "Flow Rate", value: "Up to 50 LPM" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Operation", value: "Manual/Electric" },
      { label: "Type", value: "Spool valve" }
    ],
    features: [
      "Simple 2-position control",
      "Robust spool design",
      "Multiple position types",
      "Multiple mounting options",
      "Wide compatibility",
      "Reliable operation",
      "Easy installation",
      "Low maintenance"
    ],
    applications: [
      "Basic hydraulic circuits",
      "Simple machinery",
      "Equipment control",
      "Industrial applications",
      "Mobile equipment"
    ],
    customizationOptions: [
      "Position requirements",
      "Port configurations",
      "Flow rate needs",
      "Control method",
      "Mounting preferences"
    ],
    image: "https://placehold.co/600x400/gray-200/FFFFFF?text=Directional+Control+Valve+2+Position",
    gallery: [
      "https://placehold.co/600x400/gray-300/FFFFFF?text=2+Position+Valve+View+1",
      "https://placehold.co/600x400/gray-400/FFFFFF?text=2+Position+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-02",
    name: "Directional Control Valve - 3 Position",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "3-position directional control valve for versatile control",
    longDescription: "3-position directional control valve offering versatile hydraulic flow control with multiple center options. Features various center configurations for different applications.",
    keySpecs: [
      { label: "Positions", value: "3 positions" },
      { label: "Ports", value: "3 - 5 ports" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Center Options", value: "Multiple" },
      { label: "Type", value: "Spool valve" }
    ],
    features: [
      "Versatile 3-position control",
      "Multiple center options",
      "Float, closed, tandem",
      "Wide applications",
      "Precise control",
      "Reliable operation",
      "Easy maintenance",
      "Proven design"
    ],
    applications: [
      "Complex hydraulic circuits",
      "Mobile equipment",
      "Industrial machinery",
      "Material handling",
      "Construction equipment"
    ],
    customizationOptions: [
      "Position requirements",
      "Center type selection",
      "Port configurations",
      "Flow rate needs",
      "Control method"
    ],
    image: "https://placehold.co/600x400/slate-300/FFFFFF?text=Directional+Control+Valve+3+Position",
    gallery: [
      "https://placehold.co/600x400/slate-400/FFFFFF?text=3+Position+Valve+View+1",
      "https://placehold.co/600x400/slate-500/FFFFFF?text=3+Position+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-03",
    name: "Directional Control Valve - Solenoid Operated",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Solenoid operated directional control valve for automatic control",
    longDescription: "Solenoid operated directional control valve providing electrically controlled hydraulic flow. Features fast response and reliable solenoid actuation for automated systems.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 6 ports" },
      { label: "Flow Rate", value: "Up to 200 LPM" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Actuation", value: "Solenoid" },
      { label: "Response", value: "Fast" }
    ],
    features: [
      "Electric solenoid actuation",
      "Fast response time",
      "Automated control",
      "PLC integration",
      "Multiple voltage options",
      "Reliable operation",
      "Long lifespan",
      "Easy integration"
    ],
    applications: [
      "Automated systems",
      "PLC control",
      "Industrial automation",
      "Machine tools",
      "Processing equipment"
    ],
    customizationOptions: [
      "Solenoid voltage",
      "Position requirements",
      "Flow rate needs",
      "Control signals",
      "Integration requirements"
    ],
    image: "https://placehold.co/600x400/cyan-300/FFFFFF?text=Directional+Control+Valve+Solenoid",
    gallery: [
      "https://placehold.co/600x400/cyan-400/FFFFFF?text=Solenoid+Valve+View+1",
      "https://placehold.co/600x400/cyan-500/FFFFFF?text=Solenoid+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-04",
    name: "Directional Control Valve - Manual Operated",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Manual operated directional control valve for hand control",
    longDescription: "Manual operated directional control valve providing hand-operated hydraulic flow control. Features ergonomic handles and reliable manual actuation.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 6 ports" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Actuation", value: "Manual lever" },
      { label: "Ergonomics", value: "Comfortable" }
    ],
    features: [
      "Manual lever operation",
      "Ergonomic handle",
      "Direct control",
      "Simple operation",
      "No power required",
      "Reliable performance",
      "Easy maintenance",
      "Wide compatibility"
    ],
    applications: [
      "Manual machinery",
      "Hand-held equipment",
      "Emergency control",
      "Testing equipment",
      "Maintenance tools"
    ],
    customizationOptions: [
      "Handle type",
      "Position requirements",
      "Mounting configuration",
      "Flow rate needs",
      "Pressure ratings"
    ],
    image: "https://placehold.co/600x400/amber-300/FFFFFF?text=Directional+Control+Valve+Manual",
    gallery: [
      "https://placehold.co/600x400/amber-400/FFFFFF?text=Manual+Valve+View+1",
      "https://placehold.co/600x400/amber-500/FFFFFF?text=Manual+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-05",
    name: "Directional Control Valve - Hydraulic Operated",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Hydraulic operated directional control valve for high flow applications",
    longDescription: "Hydraulic operated directional control valve providing hydraulic pilot operation for high flow applications. Features hydraulic assist for smooth operation.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "4 - 8 ports" },
      { label: "Flow Rate", value: "Up to 500 LPM" },
      { label: "Pressure", value: "Up to 350 bar" },
      { label: "Actuation", value: "Hydraulic pilot" },
      { label: "Flow", value: "High flow" }
    ],
    features: [
      "Hydraulic pilot operation",
      "High flow capacity",
      "Low actuation force",
      "Smooth operation",
      "High power ratio",
      "Reliable performance",
      "Extended service life",
      "Industrial grade"
    ],
    applications: [
      "High flow systems",
      "Heavy machinery",
      "Industrial equipment",
      "Mobile hydraulics",
      "Construction machinery"
    ],
    customizationOptions: [
      "Pilot pressure requirements",
      "Flow rate specifications",
      "Position requirements",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/indigo-300/FFFFFF?text=Directional+Control+Valve+Hydraulic+Operated",
    gallery: [
      "https://placehold.co/600x400/indigo-400/FFFFFF?text=Hydraulic+Operated+Valve+View+1",
      "https://placehold.co/600x400/indigo-500/FFFFFF?text=Hydraulic+Operated+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-06",
    name: "Directional Control Valve - High Pressure",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "High pressure directional control valve for extreme applications",
    longDescription: "High pressure directional control valve designed for extreme pressure applications. Features reinforced construction and enhanced safety systems.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 6 ports" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 700 bar" },
      { label: "Construction", value: "High pressure" },
      { label: "Safety", value: "Enhanced" }
    ],
    features: [
      "Ultra-high pressure rating",
      "Reinforced construction",
      "Enhanced safety systems",
      "Pressure relief valves",
      "Dual sealing system",
      "Redundant protection",
      "Comprehensive testing",
      "Certified documentation"
    ],
    applications: [
      "High pressure testing",
      "Research equipment",
      "Specialized manufacturing",
      "Calibration labs",
      "Force generation"
    ],
    customizationOptions: [
      "Pressure rating requirements",
      "Flow rate specifications",
      "Safety system needs",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/red-200/FFFFFF?text=Directional+Control+Valve+High+Pressure",
    gallery: [
      "https://placehold.co/600x400/red-300/FFFFFF?text=High+Pressure+Valve+View+1",
      "https://placehold.co/600x400/red-400/FFFFFF?text=High+Pressure+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-07",
    name: "Directional Control Valve - Stainless Steel",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Stainless steel directional control valve for corrosive environments",
    longDescription: "Stainless steel directional control valve designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 4 ports" },
      { label: "Flow Rate", value: "Up to 50 LPM" },
      { label: "Pressure", value: "Up to 250 bar" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Corrosion", value: "Excellent" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/zinc-200/FFFFFF?text=Directional+Control+Valve+Stainless+Steel",
    gallery: [
      "https://placehold.co/600x400/zinc-300/FFFFFF?text=Stainless+Valve+View+1",
      "https://placehold.co/600x400/zinc-400/FFFFFF?text=Stainless+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-08",
    name: "Directional Control Valve - Explosion Proof",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Explosion-proof directional control valve for hazardous locations",
    longDescription: "Explosion-proof directional control valve designed for operation in hazardous locations with flammable gases, vapors, or dust.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 6 ports" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 250 bar" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-200/FFFFFF?text=Directional+Control+Valve+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-300/FFFFFF?text=Explosion+Proof+Valve+View+1",
      "https://placehold.co/600x400/orange-400/FFFFFF?text=Explosion+Proof+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-09",
    name: "Directional Control Valve - Food Grade",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Food-grade directional control valve for food processing equipment",
    longDescription: "Food-grade directional control valve designed for food, beverage, and pharmaceutical manufacturing equipment. Features hygienic construction with easy cleaning.",
    keySpecs: [
      { label: "Positions", value: "2 - 3 positions" },
      { label: "Ports", value: "2 - 4 ports" },
      { label: "Flow Rate", value: "Up to 30 LPM" },
      { label: "Pressure", value: "Up to 160 bar" },
      { label: "Construction", value: "Food grade stainless" },
      { label: "Lubricants", value: "Food grade oils" }
    ],
    features: [
      "Food-grade materials",
      "Hygienic construction",
      "Easy cleaning design",
      "CIP and SIP compatible",
      "No dead spots",
      "Smooth surfaces",
      "Food-safe lubricants",
      "Comprehensive documentation"
    ],
    applications: [
      "Food processing",
      "Beverage manufacturing",
      "Pharmaceutical production",
      "Dairy equipment",
      "Packaging lines"
    ],
    customizationOptions: [
      "Food safety standards",
      "Material requirements",
      "Cleaning procedures",
      "Documentation needs",
      "Inspection access"
    ],
    image: "https://placehold.co/600x400/sky-300/FFFFFF?text=Directional+Control+Valve+Food+Grade",
    gallery: [
      "https://placehold.co/600x400/sky-400/FFFFFF?text=Food+Grade+Valve+View+1",
      "https://placehold.co/600x400/sky-500/FFFFFF?text=Food+Grade+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "directional-control-valve-10",
    name: "Directional Control Valve - Custom Configuration",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    shortDescription: "Custom configured directional control valve for specific needs",
    longDescription: "Custom configured directional control valve designed for your specific application requirements. We work with you to create the perfect valve solution.",
    keySpecs: [
      { label: "Positions", value: "Any specification" },
      { label: "Ports", value: "Any specification" },
      { label: "Flow Rate", value: "Any specification" },
      { label: "Pressure", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Operation requirements",
      "Mounting requirements",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-200/FFFFFF?text=Directional+Control+Valve+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-300/FFFFFF?text=Custom+Valve+View+1",
      "https://placehold.co/600x400/purple-400/FFFFFF?text=Custom+Valve+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= HYDRAULIC GEAR PUMPS (10 products) =============
  {
    slug: "hydraulic-gear-pump-01",
    name: "Hydraulic Gear Pump - Fixed Displacement",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Fixed displacement hydraulic gear pump for constant flow applications",
    longDescription: "Fixed displacement hydraulic gear pump providing consistent flow rates for applications requiring constant pressure and flow. Features robust construction and reliable performance.",
    keySpecs: [
      { label: "Displacement", value: "Fixed" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 250 bar" },
      { label: "Speed", value: "Up to 3000 RPM" },
      { label: "Efficiency", value: "High" },
      { label: "Type", value: "External gear" }
    ],
    features: [
      "Consistent flow rate",
      "Simple and reliable",
      "Low maintenance",
      "Cost-effective",
      "Wide availability",
      "Proven performance",
      "Easy installation",
      "Long service life"
    ],
    applications: [
      "Power packs",
      "Hydraulic systems",
      "Lubrication systems",
      "Transfer systems",
      "Industrial machinery"
    ],
    customizationOptions: [
      "Displacement requirements",
      "Flow rate needs",
      "Pressure specifications",
      "Speed requirements",
      "Mounting configuration"
    ],
    image: "https://placehold.co/600x400/brown-300/FFFFFF?text=Hydraulic+Gear+Pump+Fixed",
    gallery: [
      "https://placehold.co/600x400/brown-400/FFFFFF?text=Fixed+Gear+Pump+View+1",
      "https://placehold.co/600x400/brown-500/FFFFFF?text=Fixed+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-02",
    name: "Hydraulic Gear Pump - Variable Displacement",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Variable displacement hydraulic gear pump for adaptive flow control",
    longDescription: "Variable displacement hydraulic gear pump allowing flow rate adjustment based on system demand. Features pressurecompensated control for efficient operation.",
    keySpecs: [
      { label: "Displacement", value: "Variable" },
      { label: "Flow Rate", value: "Up to 150 LPM" },
      { label: "Pressure", value: "Up to 250 bar" },
      { label: "Speed", value: "Up to 2500 RPM" },
      { label: "Control", value: "Pressure compensated" },
      { label: "Efficiency", value: "Optimized" }
    ],
    features: [
      "Variable flow adjustment",
      "Pressure compensated",
      "Energy efficient",
      "Demand-based flow",
      "Smoother operation",
      "Reduced heat buildup",
      "Extended service life",
      "Component protection"
    ],
    applications: [
      "Mobile equipment",
      "Industrial machinery",
      "Compact equipment",
      "Variable load systems",
      "Flow optimization"
    ],
    customizationOptions: [
      "Displacement range",
      "Pressure compensation",
      "Flow rate requirements",
      "Control type",
      "Mounting configuration"
    ],
    image: "https://placehold.co/600x400/amber-400/FFFFFF?text=Hydraulic+Gear+Pump+Variable",
    gallery: [
      "https://placehold.co/600x400/amber-500/FFFFFF?text=Variable+Gear+Pump+View+1",
      "https://placehold.co/600x400/amber-600/FFFFFF?text=Variable+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-03",
    name: "Hydraulic Gear Pump - High Pressure",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "High pressure hydraulic gear pump for demanding applications",
    longDescription: "High pressure hydraulic gear pump designed for applications requiring pressures beyond standard ratings. Features reinforced construction and enhanced components.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 80 LPM" },
      { label: "Pressure", value: "Up to 400 bar" },
      { label: "Speed", value: "Up to 2000 RPM" },
      { label: "Construction", value: "High pressure" },
      { label: "Rating", value: "Maximum" }
    ],
    features: [
      "Ultra-high pressure rating",
      "Reinforced construction",
      "Enhanced components",
      "Safety relief valves",
      "Dual sealing system",
      "Redundant protection",
      "Comprehensive testing",
      "Certified documentation"
    ],
    applications: [
      "High pressure testing",
      "Research equipment",
      "Specialized manufacturing",
      "Calibration labs",
      "Force generation"
    ],
    customizationOptions: [
      "Pressure rating requirements",
      "Flow rate specifications",
      "Safety system needs",
      "Mounting configuration",
      "Port specifications"
    ],
    image: "https://placehold.co/600x400/red-300/FFFFFF?text=Hydraulic+Gear+Pump+High+Pressure",
    gallery: [
      "https://placehold.co/600x400/red-400/FFFFFF?text=High+Pressure+Gear+Pump+View+1",
      "https://placehold.co/600x400/red-500/FFFFFF?text=High+Pressure+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-04",
    name: "Hydraulic Gear Pump - High Flow",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "High flow hydraulic gear pump for applications requiring large volumes",
    longDescription: "High flow hydraulic gear pump designed for applications requiring maximum flow rates. Features large displacement design and robust components.",
    keySpecs: [
      { label: "Displacement", value: "High" },
      { label: "Flow Rate", value: "Up to 300 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Speed", value: "Up to 2000 RPM" },
      { label: "Size", value: "Large" },
      { label: "Capacity", value: "Maximum" }
    ],
    features: [
      "Maximum flow capacity",
      "High displacement",
      "Robust construction",
      "High volume output",
      "Efficient operation",
      "Extended service life",
      "Reduced cycle time",
      "High productivity"
    ],
    applications: [
      "High flow systems",
      "Large equipment",
      "Industrial applications",
      "Mobile hydraulics",
      "Heavy machinery"
    ],
    customizationOptions: [
      "Flow rate requirements",
      "Pressure specifications",
      "Speed requirements",
      "Mounting configuration",
      "Port specifications"
    ],
    image: "https://placehold.co/600x400/teal-400/FFFFFF?text=Hydraulic+Gear+Pump+High+Flow",
    gallery: [
      "https://placehold.co/600x400/teal-500/FFFFFF?text=High+Flow+Gear+Pump+View+1",
      "https://placehold.co/600x400/teal-600/FFFFFF?text=High+Flow+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-05",
    name: "Hydraulic Gear Pump - Low Noise",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Low noise hydraulic gear pump for noise-sensitive environments",
    longDescription: "Low noise hydraulic gear pump designed for operation in noise-sensitive environments. Features optimized gear design and smooth operation.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 50 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Noise Level", value: "<55 dB" },
      { label: "Design", value: "Optimized" },
      { label: "Operation", value: "Smooth" }
    ],
    features: [
      "Low noise operation below 55 dB",
      "Optimized gear profile",
      "Smooth operation",
      "Reduced vibration",
      "Quiet running",
      "Night operation capable",
      "Office-safe",
      "Sensitive area compatible"
    ],
    applications: [
      "Office equipment",
      "Hospital equipment",
      "Laboratory equipment",
      "Residential areas",
      "Night operations"
    ],
    customizationOptions: [
      "Noise level targets",
      "Flow rate requirements",
      "Pressure specifications",
      "Mounting configuration",
      "Sound insulation"
    ],
    image: "https://placehold.co/600x400/blue-400/FFFFFF?text=Hydraulic+Gear+Pump+Low+Noise",
    gallery: [
      "https://placehold.co/600x400/blue-500/FFFFFF?text=Low+Noise+Gear+Pump+View+1",
      "https://placehold.co/600x400/blue-600/FFFFFF?text=Low+Noise+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-06",
    name: "Hydraulic Gear Pump - Stainless Steel",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Stainless steel hydraulic gear pump for corrosive environments",
    longDescription: "Stainless steel hydraulic gear pump designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 50 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Corrosion", value: "Excellent" },
      { label: "Seals", value: "Chemical resistant" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/zinc-300/FFFFFF?text=Hydraulic+Gear+Pump+Stainless+Steel",
    gallery: [
      "https://placehold.co/600x400/zinc-400/FFFFFF?text=Stainless+Gear+Pump+View+1",
      "https://placehold.co/600x400/zinc-500/FFFFFF?text=Stainless+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-07",
    name: "Hydraulic Gear Pump - Low Temperature",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Low temperature hydraulic gear pump for cold environments",
    longDescription: "Low temperature hydraulic gear pump designed for operation in cold and cryogenic environments. Features cold-resistant materials and seals.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 50 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Temperature", value: "-40°C to +50°C" },
      { label: "Seals", value: "Cryogenic" },
      { label: "Materials", value: "Cold resistant" }
    ],
    features: [
      "Low temperature operation",
      "Cold-resistant seals",
      "Cold-resistant materials",
      "No embrittlement",
      "Reliable performance",
      "Cold weather performance",
      "Arctic capability",
      "Frozen environment operation"
    ],
    applications: [
      "LNG equipment",
      "Cryogenic storage",
      "Food freezing",
      "Refrigeration systems",
      "Scientific research"
    ],
    customizationOptions: [
      "Lowest temperature",
      "Insulation requirements",
      "Seal requirements",
      "Material selection",
      "Prevention measures"
    ],
    image: "https://placehold.co/600x400/cyan-400/FFFFFF?text=Hydraulic+Gear+Pump+Low+Temperature",
    gallery: [
      "https://placehold.co/600x400/cyan-500/FFFFFF?text=Low+Temperature+Gear+Pump+View+1",
      "https://placehold.co/600x400/cyan-600/FFFFFF?text=Low+Temperature+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-08",
    name: "Hydraulic Gear Pump - High Temperature",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "High temperature hydraulic gear pump for hot environments",
    longDescription: "High temperature hydraulic gear pump designed for operation in hot and high-temperature environments. Features heat-resistant materials and seals.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Temperature", value: "-30°C to +150°C" },
      { label: "Seals", value: "High temp" },
      { label: "Materials", value: "Heat resistant" }
    ],
    features: [
      "High temperature operation",
      "Heat-resistant seals",
      "Heat-resistant materials",
      "Stable performance",
      "High temperature stability",
      "Hot environment operation",
      "Industrial oven capability",
      "Thermal processing"
    ],
    applications: [
      "Metal casting",
      "Glass manufacturing",
      "Thermal processing",
      "Heat treatment",
      "Industrial ovens"
    ],
    customizationOptions: [
      "Temperature range",
      "Heat protection",
      "Seal requirements",
      "Material selection",
      "Cooling requirements"
    ],
    image: "https://placehold.co/600x400/amber-500/FFFFFF?text=Hydraulic+Gear+Pump+High+Temperature",
    gallery: [
      "https://placehold.co/600x400/amber-600/FFFFFF?text=High+Temperature+Gear+Pump+View+1",
      "https://placehold.co/600x400/amber-700/FFFFFF?text=High+Temperature+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-09",
    name: "Hydraulic Gear Pump - Explosion Proof",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Explosion-proof hydraulic gear pump for hazardous locations",
    longDescription: "Explosion-proof hydraulic gear pump designed for operation in hazardous locations with flammable gases, vapors, or dust.",
    keySpecs: [
      { label: "Displacement", value: "Fixed/Variable" },
      { label: "Flow Rate", value: "Up to 100 LPM" },
      { label: "Pressure", value: "Up to 200 bar" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-400/FFFFFF?text=Hydraulic+Gear+Pump+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-500/FFFFFF?text=Explosion+Proof+Gear+Pump+View+1",
      "https://placehold.co/600x400/orange-600/FFFFFF?text=Explosion+Proof+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-gear-pump-10",
    name: "Hydraulic Gear Pump - Custom Configuration",
    category: "Hydraulic Gear Pumps",
    categorySlug: "hydraulic-gear-pumps",
    shortDescription: "Custom configured hydraulic gear pump for specific needs",
    longDescription: "Custom configured hydraulic gear pump designed for your specific application requirements. We work with you to create the perfect pump solution.",
    keySpecs: [
      { label: "Displacement", value: "Any specification" },
      { label: "Flow Rate", value: "Any specification" },
      { label: "Pressure", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" },
      { label: "Integration", value: "OEM ready" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Operation requirements",
      "Mounting requirements",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-400/FFFFFF?text=Hydraulic+Gear+Pump+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-500/FFFFFF?text=Custom+Gear+Pump+View+1",
      "https://placehold.co/600x400/purple-600/FFFFFF?text=Custom+Gear+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= HYDRAULIC HAND PUMPS (10 products) =============
  {
    slug: "hydraulic-hand-pump-01",
    name: "Hydraulic Hand Pump - Standard",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Standard hydraulic hand pump for general portable hydraulic power",
    longDescription: "Standard hydraulic hand pump providing portable hydraulic power for manual operation. Ideal for maintenance work, remote locations, and emergency hydraulic power needs.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.5 - 3 LPM" },
      { label: "Operation", value: "Hand-operated" },
      { label: "Tank Capacity", value: "2 - 8 Liters" },
      { label: "Weight", value: "Lightweight" },
      { label: "Portability", value: "High" }
    ],
    features: [
      "No electricity required",
      "Portable and lightweight",
      "Manual operation",
      "Emergency power source",
      "Simple design",
      "Reliable performance",
      "Low maintenance",
      "Field service friendly"
    ],
    applications: [
      "Hydraulic jacks",
      "Porta Power tools",
      "Maintenance work",
      "Testing",
      "Emergency service"
    ],
    customizationOptions: [
      "Pressure requirements",
      "Flow rate needs",
      "Handle length",
      "Mounting options",
      "Cylinder compatibility"
    ],
    image: "https://placehold.co/600x400/stone-300/FFFFFF?text=Hydraulic+Hand+Pump+Standard",
    gallery: [
      "https://placehold.co/600x400/stone-400/FFFFFF?text=Standard+Hand+Pump+View+1",
      "https://placehold.co/600x400/stone-500/FFFFFF?text=Standard+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-02",
    name: "Hydraulic Hand Pump - Dual Stage",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Dual stage hydraulic hand pump for high pressure applications",
    longDescription: "Dual stage hydraulic hand pump providing efficient pressure build-up for high pressure applications. Features two-stage pumping for improved efficiency.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.3 - 2 LPM" },
      { label: "Stages", value: "Two-stage" },
      { label: "Tank Capacity", value: "3 - 10 Liters" },
      { label: "Pressure", value: "High pressure" },
      { label: "Efficiency", value: "Optimized" }
    ],
    features: [
      "Two-stage pumping",
      "Efficient pressure build-up",
      "High pressure capability",
      "Low force requirement",
      "Compact design",
      "Portable operation",
      "Reliable performance",
      "Long service life"
    ],
    applications: [
      "High pressure testing",
      "Calibration work",
      "Specialized applications",
      "Field testing",
      "Precision work"
    ],
    customizationOptions: [
      "Pressure requirements",
      "Flow rate needs",
      "Tank size",
      "Port configuration",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/teal-500/FFFFFF?text=Hydraulic+Hand+Pump+Dual+Stage",
    gallery: [
      "https://placehold.co/600x400/teal-600/FFFFFF?text=Dual+Stage+Hand+Pump+View+1",
      "https://placehold.co/600x400/teal-700/FFFFFF?text=Dual+Stage+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-03",
    name: "Hydraulic Hand Pump - High Flow",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "High flow hydraulic hand pump for fast operation",
    longDescription: "High flow hydraulic hand pump providing rapid hydraulic action with manual operation. Features larger displacement pump for increased flow rates.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "2 - 8 LPM" },
      { label: "Pump", value: "High flow" },
      { label: "Tank Capacity", value: "5 - 15 Liters" },
      { label: "Speed", value: "Fast" },
      { label: "Force", value: "High force" }
    ],
    features: [
      "High flow rate",
      "Fast cylinder operation",
      "Rapid cycle time",
      "Efficient pumping",
      "Large displacement pump",
      "Portability maintained",
      "Reliable performance",
      "Extended reach"
    ],
    applications: [
      "Fast operations",
      "Multiple cylinder use",
      "Time-sensitive work",
      "Rapid deployment",
      "Emergency response"
    ],
    customizationOptions: [
      "Flow rate requirements",
      "Pressure specifications",
      "Tank size",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/green-500/FFFFFF?text=Hydraulic+Hand+Pump+High+Flow",
    gallery: [
      "https://placehold.co/600x400/green-600/FFFFFF?text=High+Flow+Hand+Pump+View+1",
      "https://placehold.co/600x400/green-700/FFFFFF?text=High+Flow+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-04",
    name: "Hydraulic Hand Pump - Low Noise",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Low noise hydraulic hand pump for noise-sensitive environments",
    longDescription: "Low noise hydraulic hand pump designed for operation in noise-sensitive environments. Features optimized pumping mechanism for quiet operation.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "0.5 - 2 LPM" },
      { label: "Noise Level", value: "<55 dB" },
      { label: "Operation", value: "Quiet" },
      { label: "Design", value: "Optimized" },
      { label: "Smoothness", value: "High" }
    ],
    features: [
      "Low noise operation below 55 dB",
      "Optimized pumping mechanism",
      "Smooth operation",
      "Reduced vibration",
      "Quiet running",
      "Night operation capable",
      "Office-safe",
      "Sensitive area compatible"
    ],
    applications: [
      "Office equipment",
      "Hospital equipment",
      "Laboratory equipment",
      "Residential areas",
      "Night operations"
    ],
    customizationOptions: [
      "Noise level targets",
      "Flow rate requirements",
      "Pressure specifications",
      "Mounting configuration",
      "Sound insulation"
    ],
    image: "https://placehold.co/600x400/blue-500/FFFFFF?text=Hydraulic+Hand+Pump+Low+Noise",
    gallery: [
      "https://placehold.co/600x400/blue-600/FFFFFF?text=Low+Noise+Hand+Pump+View+1",
      "https://placehold.co/600x400/blue-700/FFFFFF?text=Low+Noise+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-05",
    name: "Hydraulic Hand Pump - High Capacity",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "High capacity hydraulic hand pump for extended operations",
    longDescription: "High capacity hydraulic hand pump designed for extended operation without refilling. Features larger reservoir and efficient pumping.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 350 bar" },
      { label: "Flow Rate", value: "1 - 5 LPM" },
      { label: "Tank Capacity", value: "10 - 30 Liters" },
      { label: "Operation", value: "Extended" },
      { label: "Capacity", value: "High" },
      { label: "Duration", value: "Long" }
    ],
    features: [
      "Large reservoir capacity",
      "Extended operation time",
      "Multiple outlet options",
      "Extended use capability",
      "Sturdy construction",
      "Portable with wheels",
      "Reliable performance",
      "Field service friendly"
    ],
    applications: [
      "Extended maintenance",
      "Field operations",
      "Remote locations",
      "Continuous work",
      "Multiple cylinder operation"
    ],
    customizationOptions: [
      "Tank size requirements",
      "Flow rate needs",
      "Pressure specifications",
      "Port configurations",
      "Mounting options"
    ],
    image: "https://placehold.co/600x400/amber-600/FFFFFF?text=Hydraulic+Hand+Pump+High+Capacity",
    gallery: [
      "https://placehold.co/600x400/amber-700/FFFFFF?text=High+Capacity+Hand+Pump+View+1",
      "https://placehold.co/600x400/amber-800/FFFFFF?text=High+Capacity+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-06",
    name: "Hydraulic Hand Pump - Stainless Steel",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Stainless steel hydraulic hand pump for corrosive environments",
    longDescription: "Stainless steel hydraulic hand pump designed for corrosive and sanitary environments. Features 316 stainless steel construction throughout.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "0.5 - 3 LPM" },
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Corrosion", value: "Excellent" },
      { label: "Seals", value: "Chemical resistant" },
      { label: "Hygiene", value: "Excellent" }
    ],
    features: [
      "316 stainless steel construction",
      "Full stainless components",
      "Non-magnetic",
      "Excellent corrosion resistance",
      "Hygienic surfaces",
      "Easy cleaning",
      "Chemical resistant",
      "Food grade compatible"
    ],
    applications: [
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Chemical industry",
      "Marine applications",
      "Pulp and paper"
    ],
    customizationOptions: [
      "Grade of stainless steel",
      "Seal material selection",
      "Surface finish requirements",
      "Corrosion resistance level",
      "Special testing"
    ],
    image: "https://placehold.co/600x400/zinc-400/FFFFFF?text=Hydraulic+Hand+Pump+Stainless+Steel",
    gallery: [
      "https://placehold.co/600x400/zinc-500/FFFFFF?text=Stainless+Hand+Pump+View+1",
      "https://placehold.co/600x400/zinc-600/FFFFFF?text=Stainless+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-07",
    name: "Hydraulic Hand Pump - Explosion Proof",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Explosion-proof hydraulic hand pump for hazardous locations",
    longDescription: "Explosion-proof hydraulic hand pump designed for operation in hazardous locations with flammable gases, vapors, or dust.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "0.5 - 3 LPM" },
      { label: "Certification", value: "Explosion proof" },
      { label: "Materials", value: "Non-sparking" },
      { label: "Protection", value: "IP66+" },
      { label: "Safety", value: "Comprehensive" }
    ],
    features: [
      "Explosion-proof certification",
      "Non-sparking materials",
      "Temperature control",
      "Hazardous location approval",
      "Safety interlocks",
      "Emergency stop",
      "Comprehensive safety",
      "Certified documentation"
    ],
    applications: [
      "Oil and gas",
      "Chemical plants",
      "Pharmaceutical facilities",
      "Grain handling",
      "Mining operations"
    ],
    customizationOptions: [
      "Hazard zone classification",
      "Explosion protection type",
      "Temperature class",
      "Material compatibility",
      "Safety system requirements"
    ],
    image: "https://placehold.co/600x400/orange-500/FFFFFF?text=Hydraulic+Hand+Pump+Explosion+Proof",
    gallery: [
      "https://placehold.co/600x400/orange-600/FFFFFF?text=Explosion+Proof+Hand+Pump+View+1",
      "https://placehold.co/600x400/orange-700/FFFFFF?text=Explosion+Proof+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-08",
    name: "Hydraulic Hand Pump - Compact",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Compact hydraulic hand pump for tight spaces",
    longDescription: "Compact hydraulic hand pump designed for applications with limited installation space. Features miniaturized components while maintaining functionality.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 700 bar" },
      { label: "Flow Rate", value: "0.2 - 1.5 LPM" },
      { label: "Size", value: "Compact design" },
      { label: "Weight", value: "Lightweight" },
      { label: "Installation", value: "Space efficient" },
      { label: "Portability", value: "High" }
    ],
    features: [
      "Minimal footprint",
      "Lightweight construction",
      "Ultra-portable",
      "Compact design",
      "Easy storage",
      "Small space friendly",
      "Simple operation",
      "Reliable performance"
    ],
    applications: [
      "Retrofits",
      "Limited space",
      "Mobile equipment",
      "Compact machinery",
      "Space-constrained"
    ],
    customizationOptions: [
      "Size constraints",
      "Mounting requirements",
      "Power specifications",
      "Control interface",
      "Connections configuration"
    ],
    image: "https://placehold.co/600x400/violet-300/FFFFFF?text=Hydraulic+Hand+Pump+Compact",
    gallery: [
      "https://placehold.co/600x400/violet-400/FFFFFF?text=Compact+Hand+Pump+View+1",
      "https://placehold.co/600x400/violet-500/FFFFFF?text=Compact+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-09",
    name: "Hydraulic Hand Pump - High Temperature",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "High temperature hydraulic hand pump for hot environments",
    longDescription: "High temperature hydraulic hand pump designed for operation in hot and high-temperature environments. Features heat-resistant materials and seals.",
    keySpecs: [
      { label: "Operating Pressure", value: "Up to 250 bar" },
      { label: "Flow Rate", value: "0.5 - 3 LPM" },
      { label: "Temperature", value: "-30°C to +150°C" },
      { label: "Seals", value: "High temp" },
      { label: "Materials", value: "Heat resistant" },
      { label: "Stability", value: "High" }
    ],
    features: [
      "High temperature operation",
      "Heat-resistant seals",
      "Heat-resistant materials",
      "Stable performance",
      "High temperature stability",
      "Hot environment operation",
      "Industrial oven capability",
      "Thermal processing"
    ],
    applications: [
      "Metal casting",
      "Glass manufacturing",
      "Thermal processing",
      "Heat treatment",
      "Industrial ovens"
    ],
    customizationOptions: [
      "Temperature range",
      "Heat protection",
      "Seal requirements",
      "Material selection",
      "Cooling requirements"
    ],
    image: "https://placehold.co/600x400/amber-700/FFFFFF?text=Hydraulic+Hand+Pump+High+Temperature",
    gallery: [
      "https://placehold.co/600x400/amber-800/FFFFFF?text=High+Temperature+Hand+Pump+View+1",
      "https://placehold.co/600x400/amber-900/FFFFFF?text=High+Temperature+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "hydraulic-hand-pump-10",
    name: "Hydraulic Hand Pump - Custom Configuration",
    category: "Hydraulic Hand Pumps",
    categorySlug: "hydraulic-hand-pumps",
    shortDescription: "Custom configured hydraulic hand pump for specific needs",
    longDescription: "Custom configured hydraulic hand pump designed for your specific application requirements. We work with you to create the perfect hand pump solution.",
    keySpecs: [
      { label: "Operating Pressure", value: "Any specification" },
      { label: "Flow Rate", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Special", value: "Custom features" },
      { label: "Integration", value: "OEM ready" },
      { label: "Documentation", value: "Full documentation" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Operation requirements",
      "Mounting requirements",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-500/FFFFFF?text=Hydraulic+Hand+Pump+Custom",
    gallery: [
      "https://placehold.co/600x400/purple-600/FFFFFF?text=Custom+Hand+Pump+View+1",
      "https://placehold.co/600x400/purple-700/FFFFFF?text=Custom+Hand+Pump+View+2"
    ],
    relatedProducts: [],
    featured: false
  },

  // ============= POWER PACK ACCESSORIES (10 products) =============
  {
    slug: "power-pack-accessory-01",
    name: "Power Pack Accessory - Accumulators",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic accumulators for energy storage and system stabilization",
    longDescription: "Hydraulic accumulators for energy storage, shock absorption, and emergency power in hydraulic systems. Available in various sizes and pre-charge pressures.",
    keySpecs: [
      { label: "Type", value: "Gas-charged" },
      { label: "Capacity", value: "1 - 100 Liters" },
      { label: "Pressure", value: "Up to 700 bar" },
      { label: "Function", value: "Energy storage" },
      { label: "Material", value: "High-strength steel" },
      { label: "Certification", value: "Pressure vessel" }
    ],
    features: [
      "Energy recovery",
      "Shock absorption",
      "Leakage compensation",
      "Emergency power",
      "Pulse dampening",
      "Thermal expansion",
      "Flow smoothing",
      "Pressure maintenance"
    ],
    applications: [
      "Energy saving systems",
      "Shock absorption",
      "Emergency power",
      "Leak compensation",
      "Pressure maintenance"
    ],
    customizationOptions: [
      "Capacity requirements",
      "Pressure specifications",
      "Gas type and pre-charge",
      "Mounting configuration",
      "Safety features"
    ],
    image: "https://placehold.co/600x400/indigo-500/FFFFFF?text=Power+Pack+Accessory+Accumulators",
    gallery: [
      "https://placehold.co/600x400/indigo-600/FFFFFF?text=Accumulators+View+1",
      "https://placehold.co/600x400/indigo-700/FFFFFF?text=Accumulators+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-02",
    name: "Power Pack Accessory - Filters",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "High-efficiency hydraulic filters for system cleanliness",
    longDescription: "High-efficiency hydraulic filters designed to maintain system cleanliness and protect components from contaminants. Available in various micron ratings.",
    keySpecs: [
      { label: "Type", value: "Suction/Pressure/Return" },
      { label: "Micron Rating", value: "3 - 100 microns" },
      { label: "Flow Rate", value: "Up to 500 LPM" },
      { label: "Pressure", value: "Up to 400 bar" },
      { label: "Material", value: "Glass fiber/stainless steel" },
      { label: "Filter Ratio", value: "Beta ratio" }
    ],
    features: [
      "High-efficiency filtration",
      "Contaminant removal",
      "Particle control",
      "System protection",
      "Extended component life",
      "Reduced maintenance",
      "Multiple micron ratings",
      "Flow optimization"
    ],
    applications: [
      "Power pack maintenance",
      "System filtration",
      "Contaminant removal",
      "Particle control",
      "Fluid cleanliness"
    ],
    customizationOptions: [
      "Micron rating requirements",
      "Flow rate specifications",
      "Pressure requirements",
      "Mounting configuration",
      "Bypass valve options"
    ],
    image: "https://placehold.co/600x400/stone-400/FFFFFF?text=Power+Pack+Accessory+Filters",
    gallery: [
      "https://placehold.co/600x400/stone-500/FFFFFF?text=Filters+View+1",
      "https://placehold.co/600x400/stone-600/FFFFFF?text=Filters+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-03",
    name: "Power Pack Accessory - Coolers",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic coolers for temperature control and system protection",
    longDescription: "Hydraulic coolers designed to maintain optimal fluid temperature for consistent system performance and extended fluid life in demanding operating conditions.",
    keySpecs: [
      { label: "Type", value: "Air-cooled/Water-cooled" },
      { label: "Cooling Capacity", value: "Up to 50 kW" },
      { label: "Flow Rate", value: "Up to 500 LPM" },
      { label: "Temperature", value: "Ambient to 80°C" },
      { label: "Material", value: "Aluminum/Copper" },
      { label: "Efficiency", value: "High efficiency" }
    ],
    features: [
      "Temperature control",
      "Fluid cooling",
      "Heat dissipation",
      "Process cooling",
      "Energy efficiency",
      "Extended fluid life",
      "System protection",
      "Compact design"
    ],
    applications: [
      "Temperature control",
      "Fluid cooling",
      "Heat dissipation",
      "Process cooling",
      "Energy efficiency"
    ],
    customizationOptions: [
      "Cooling capacity requirements",
      "Flow rate specifications",
      "Temperature range",
      "Mounting configuration",
      "Environmental conditions"
    ],
    image: "https://placehold.co/600x400/teal-600/FFFFFF?text=Power+Pack+Accessory+Coolers",
    gallery: [
      "https://placehold.co/600x400/teal-700/FFFFFF?text=Coolers+View+1",
      "https://placehold.co/600x400/teal-800/FFFFFF?text=Coolers+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-04",
    name: "Power Pack Accessory - Hoses",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Premium hydraulic hoses for reliable fluid transmission",
    longDescription: "Premium hydraulic hoses designed for reliable fluid transmission in demanding industrial applications. Available in various sizes and pressure ratings.",
    keySpecs: [
      { label: "Type", value: "High pressure/ Low pressure" },
      { label: "Size", value: "1/4\" - 2\"" },
      { label: "Pressure", value: "Up to 700 bar" },
      { label: "Material", value: "Steel/ Rubber/ Thermoplastic" },
      { label: "Length", value: "Customizable" },
      { label: "Standards", value: "SAE/ISO/DIN" }
    ],
    features: [
      "High-pressure rating",
      "Flexibility",
      "Durability",
      "Leak-free connections",
      "Multiple sizes available",
      "Long service life",
      "Chemical resistance",
      "Abrasion resistance"
    ],
    applications: [
      "System connections",
      "Flexible runs",
      "High-pressure lines",
      "Quick connects",
      "System maintenance"
    ],
    customizationOptions: [
      "Size requirements",
      "Pressure ratings",
      "Length specifications",
      "Fitting types",
      "Angle configurations"
    ],
    image: "https://placehold.co/600x400/amber-800/FFFFFF?text=Power+Pack+Accessory+Hoses",
    gallery: [
      "https://placehold.co/600x400/amber-900/FFFFFF?text=Hoses+View+1",
      "https://placehold.co/600x400/amber-950/FFFFFF?text=Hoses+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-05",
    name: "Power Pack Accessory - Gauges",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic gauges for pressure monitoring and system monitoring",
    longDescription: "Hydraulic gauges for monitoring system pressure and ensuring proper hydraulic system operation. Available in various pressure ranges and mounting options.",
    keySpecs: [
      { label: "Type", value: "Pressure/ Vacuum/ Compound" },
      { label: "Range", value: "0 - 1000 bar" },
      { label: "Mounting", value: "Panel/ Wall/ Direct" },
      { label: "Diameter", value: "40 - 150 mm" },
      { label: "Accuracy", value: "1 - 2.5%" },
      { label: "Fluid", value: "Glycerin/ Stainless steel" }
    ],
    features: [
      "Accurate pressure monitoring",
      "Multiple range options",
      "Durable construction",
      "Glycerin filled options",
      "Stainless steel options",
      "Clear readability",
      "Multiple mountings",
      "Reliable performance"
    ],
    applications: [
      "System monitoring",
      "Pressure monitoring",
      "Maintenance checking",
      "Quality control",
      "Safety verification"
    ],
    customizationOptions: [
      "Pressure range requirements",
      "Mounting specifications",
      "Size requirements",
      "Material preferences",
      "Accuracy requirements"
    ],
    image: "https://placehold.co/600x400/blue-800/FFFFFF?text=Power+Pack+Accessory+Gauges",
    gallery: [
      "https://placehold.co/600x400/blue-900/FFFFFF?text=Gauges+View+1",
      "https://placehold.co/600x400/blue-950/FFFFFF?text=Gauges+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-06",
    name: "Power Pack Accessory - Fittings",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic fittings for secure connections and system assembly",
    longDescription: "High-quality hydraulic fittings for secure connections and proper system assembly. Available in various types, sizes, and materials for all hydraulic applications.",
    keySpecs: [
      { label: "Type", value: "Adapters/ Couplings/ Elbows/ Tees" },
      { label: "Size", value: "1/4\" - 2\"" },
      { label: "Pressure", value: "Up to 700 bar" },
      { label: "Material", value: "Steel/ Stainless/ Brass" },
      { label: "Type", value: "Threaded/Flare/Compression" },
      { label: "Standards", value: "SAE/ISO/DIN" }
    ],
    features: [
      "Secure connections",
      "Multiple types available",
      "Wide size range",
      "High-pressure rated",
      "Corrosion resistant",
      "Leak-proof seals",
      "Easy installation",
      "Reliable performance"
    ],
    applications: [
      "System assembly",
      "Pipeline connections",
      "Component connections",
      "Adapter solutions",
      "System maintenance"
    ],
    customizationOptions: [
      "Fitting types required",
      "Size specifications",
      "Material preferences",
      "Thread types",
      "Quantity requirements"
    ],
    image: "https://placehold.co/600x400/gray-500/FFFFFF?text=Power+Pack+Accessory+Fittings",
    gallery: [
      "https://placehold.co/600x400/gray-600/FFFFFF?text=Fittings+View+1",
      "https://placehold.co/600x400/gray-700/FFFFFF?text=Fittings+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-07",
    name: "Power Pack Accessory - Reservoirs",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic reservoirs for fluid storage and system performance",
    longDescription: "Hydraulic reservoirs for fluid storage, air separation, and system performance. Available in various sizes and configurations for custom power pack solutions.",
    keySpecs: [
      { label: "Type", value: "Open/ Closed/ Skid-mounted" },
      { label: "Capacity", value: "10 - 1000 Liters" },
      { label: "Material", value: "Steel/ Stainless/ Aluminum" },
      { label: "Design", value: "Breather/ Drain/ level" },
      { label: "Features", value: "Suction/ Return/ Oil" },
      { label: "Options", value: "Heaters/ Coolers" }
    ],
    features: [
      "Fluid storage",
      "Air separation",
      "Contaminant settling",
      "Heat dissipation",
      "Multiple options",
      "Custom sizes",
      "Integrated features",
      "System performance"
    ],
    applications: [
      "Power pack systems",
      "Hydraulic systems",
      "Large capacity",
      "Custom solutions",
      "Industrial applications"
    ],
    customizationOptions: [
      "Capacity requirements",
      "Size constraints",
      "Mounting configuration",
      "Integrated features",
      "Material preferences"
    ],
    image: "https://placehold.co/600x400/brown-400/FFFFFF?text=Power+Pack+Accessory+Reservoirs",
    gallery: [
      "https://placehold.co/600x400/brown-500/FFFFFF?text=Reservoirs+View+1",
      "https://placehold.co/600x400/brown-600/FFFFFF?text=Reservoirs+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-08",
    name: "Power Pack Accessory - Valves",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic valves for pressure, flow, and direction control",
    longDescription: "Comprehensive range of hydraulic valves for pressure control, flow regulation, and directional control in hydraulic systems. Various types and configurations available.",
    keySpecs: [
      { label: "Type", value: " Relief/ Sequence/ Order/ Check" },
      { label: "Pressure", value: "Up to 700 bar" },
      { label: "Flow", value: "Up to 1000 LPM" },
      { label: "Operation", value: "Manual/ Electric/ Pilot" },
      { label: "Mounting", value: "Plate/ Cartridge/ Standalone" },
      { label: "Options", value: "Multiple configurations" }
    ],
    features: [
      "Pressure control",
      "Flow regulation",
      "Directional control",
      "Multiple valve types",
      "Various configurations",
      "High-pressure rating",
      "Reliable operation",
      "Wide compatibility"
    ],
    applications: [
      "Power pack controls",
      "Hydraulic circuits",
      "Automation systems",
      "Mobile equipment",
      "Industrial machinery"
    ],
    customizationOptions: [
      "Valve types required",
      "Pressure ratings",
      "Flow rate requirements",
      "Control methods",
      "Mounting configurations"
    ],
    image: "https://placehold.co/600x400/indigo-800/FFFFFF?text=Power+Pack+Accessory+Valves",
    gallery: [
      "https://placehold.co/600x400/indigo-900/FFFFFF?text=Valves+View+1",
      "https://placehold.co/600x400/indigo-950/FFFFFF?text=Valves+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-09",
    name: "Power Pack Accessory - Sensors",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Hydraulic sensors for pressure, temperature, and level monitoring",
    longDescription: "Hydraulic sensors for monitoring pressure, temperature, fluid level, and system conditions. Digital and analog output options for automated systems.",
    keySpecs: [
      { label: "Type", value: "Pressure/ Temperature/ Level/ Flow" },
      { label: "Range", value: "Multiple ranges" },
      { label: "Output", value: "Analog/ Digital/ Switch" },
      { label: "Accuracy", value: "High precision" },
      { label: "Mounting", value: "Thread/ Flange/ Inline" },
      { label: "Features", value: " overload protection" }
    ],
    features: [
      "Real-time monitoring",
      "Multiple sensor types",
      "Digital and analog outputs",
      "PLC integration",
      "High accuracy",
      "System protection",
      "Alarm outputs",
      "Data logging"
    ],
    applications: [
      "System monitoring",
      "Automated systems",
      "Quality control",
      "Safety systems",
      " Maintenance systems"
    ],
    customizationOptions: [
      "Sensor types required",
      "Measurement ranges",
      "Output requirements",
      "Integration needs",
      "Accuracy specifications"
    ],
    image: "https://placehold.co/600x400/sky-500/FFFFFF?text=Power+Pack+Accessory+Sensors",
    gallery: [
      "https://placehold.co/600x400/sky-600/FFFFFF?text=Sensors+View+1",
      "https://placehold.co/600x400/sky-700/FFFFFF?text=Sensors+View+2"
    ],
    relatedProducts: [],
    featured: false
  },
  {
    slug: "power-pack-accessory-10",
    name: "Power Pack Accessory - Custom Assembly",
    category: "Power Pack Accessories",
    categorySlug: "power-pack-accessories",
    shortDescription: "Custom hydraulic accessories assembly for specific requirements",
    longDescription: "Custom hydraulic accessories assembly designed for your specific application requirements. We work with you to create the perfect accessory solution.",
    keySpecs: [
      { label: "Type", value: "Custom assembly" },
      { label: "Components", value: "Any specification" },
      { label: "Configuration", value: "Fully customizable" },
      { label: "Integration", value: "OEM ready" },
      { label: "Special", value: "Custom features" },
      { label: "Documentation", value: "Full documentation" }
    ],
    features: [
      "Complete customization",
      "Application-specific design",
      "Engineering support",
      "Fast turnaround",
      "Quality assurance",
      "Commissioning support",
      "Full documentation",
      "Warranty included"
    ],
    applications: [
      "Special machinery",
      "Unique requirements",
      "OEM production",
      "Prototype development",
      "Custom solutions"
    ],
    customizationOptions: [
      "Exact specifications",
      "Component requirements",
      "Assembly configuration",
      "Special features",
      "Integration needs"
    ],
    image: "https://placehold.co/600x400/purple-600/FFFFFF?text=Power+Pack+Accessory+Custom+Assembly",
    gallery: [
      "https://placehold.co/600x400/purple-700/FFFFFF?text=Custom+Assembly+View+1",
      "https://placehold.co/600x400/purple-800/FFFFFF?text=Custom+Assembly+View+2"
    ],
    relatedProducts: [],
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

export function getRelatedProducts(productSlug: string): Product[] {
  const product = products.find(p => p.slug === productSlug);
  if (!product || !product.relatedProducts?.length) return [];
  return products.filter(p => product.relatedProducts.includes(p.slug));
}