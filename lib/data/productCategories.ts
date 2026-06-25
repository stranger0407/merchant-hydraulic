// Product Categories Data
export interface ProductCategory {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  applications: string[];
  image: string;
  featured: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "hydraulic-power-packs",
    name: "Hydraulic Power Packs",
    shortDescription: "Complete hydraulic power units engineered for industrial applications",
    longDescription: "Our hydraulic power packs are complete self-contained units comprising motor, pump, reservoir, and control valves. Designed for industrial lifting, pressing, and automation applications. Available in standard and customized configurations with operating pressures up to 350 bar.",
    applications: ["Industrial Machinery", "Material Handling", "Press Machines", "Lifting Equipment", "Automation Systems"],
    image: "/images/categories/power-pack.jpg",
    featured: true
  },
  {
    slug: "hydraulic-cylinders",
    name: "Hydraulic Cylinders",
    shortDescription: "High-pressure hydraulic cylinders for industrial and heavy-duty applications",
    longDescription: "Precision-engineered hydraulic cylinders manufactured to withstand high operating pressures and demanding industrial environments. Available in various bore sizes, stroke lengths, and mounting configurations.",
    applications: ["Press Machines", "Construction Equipment", "Industrial Automation", "Material Handling", "Machine Tools"],
    image: "/images/categories/cylinder.jpg",
    featured: true
  },
  {
    slug: "customized-hydraulic-power-packs",
    name: "Customized Hydraulic Power Packs",
    shortDescription: "Engineered-to-order power packs for specific application requirements",
    longDescription: "Bespoke hydraulic power pack solutions designed around your specific pressure, flow, tank capacity, and control requirements. Our engineering team works closely with you to design units that integrate seamlessly with your equipment.",
    applications: ["Special Purpose Machinery", "Custom Equipment", "OEM Integration", "Process Automation", "Unique Applications"],
    image: "/images/categories/custom-power-pack.jpg",
    featured: true
  },
  {
    slug: "electric-hydraulic-power-packs",
    name: "Electric Hydraulic Power Packs",
    shortDescription: "Electric motor-driven hydraulic units for clean, efficient power",
    longDescription: "Electric hydraulic power packs combining efficient electric motor drives with high-performance hydraulic pumps. Ideal for indoor industrial applications requiring clean, quiet, and reliable hydraulic power.",
    applications: ["Workshop Equipment", "CNC Machines", "Automated Systems", "Factory Infrastructure", "Clean Environments"],
    image: "/images/categories/electric-power-pack.jpg",
    featured: true
  },
  {
    slug: "tie-rod-hydraulic-cylinders",
    name: "Tie Rod Hydraulic Cylinders",
    shortDescription: "Durable tie rod construction cylinders for general industrial use",
    longDescription: "Tie rod style hydraulic cylinders featuring threaded tie bolts that hold the end caps to the barrel. This construction allows for easy maintenance and repair, making them ideal for general industrial applications.",
    applications: ["General Industrial", "Agriculture", "Construction", "Factory Automation", "Material Handling"],
    image: "/images/categories/tie-rod-cylinder.jpg",
    featured: true
  },
  {
    slug: "customized-hydraulic-cylinders",
    name: "Customized Hydraulic Cylinders",
    shortDescription: "Bespoke cylinders engineered to your exact specifications",
    longDescription: "Custom hydraulic cylinders manufactured to your specific stroke, bore, pressure, mounting, and application requirements. From prototype to production quantities, we deliver cylinders that meet your exact specifications.",
    applications: ["Special Machinery", "Replacement Cylinders", "OEM Production", "Research Equipment", "Prototype Development"],
    image: "/images/categories/custom-cylinder.jpg",
    featured: false
  },
  {
    slug: "lift-hydraulic-cylinders",
    name: "Lift Hydraulic Cylinders",
    shortDescription: "Purpose-built cylinders for elevator and lifting applications",
    longDescription: "Hydraulic cylinders specifically engineered for lift and elevator applications. Features include high load capacity, smooth operation, and safety features essential for vertical transportation equipment.",
    applications: ["Goods Lifts", "Car Lifts", "Scissor Lifts", "Platform Lifts", "Elevator Systems"],
    image: "/images/categories/lift-cylinder.jpg",
    featured: false
  },
  {
    slug: "lift-hydraulic-power-packs",
    name: "Lift Hydraulic Power Packs",
    shortDescription: "Integrated power units for hydraulic lift and elevator systems",
    longDescription: "Compact hydraulic power packs designed specifically for lift applications. Includes integrated valve blocks, pressure controls, and safety features required for vertical transportation systems.",
    applications: ["Goods Elevators", "Hydraulic Lifts", "Scissor Lifts", "Platform Systems", "Loading Docks"],
    image: "/images/categories/lift-power-pack.jpg",
    featured: true
  },
  {
    slug: "press-hydraulic-cylinders",
    name: "Press Hydraulic Cylinders",
    shortDescription: "High-force cylinders for hydraulic press applications",
    longDescription: "Heavy-duty hydraulic cylinders engineered for press machine applications. Designed to deliver consistent high-force performance under cyclic loading conditions. Available in single and double-acting configurations.",
    applications: ["Hydraulic Presses", "Stamping Presses", "Deep Drawing", "Compression Molding", "Assembly Presses"],
    image: "/images/categories/press-cylinder.jpg",
    featured: true
  },
  {
    slug: "manual-hydraulic-power-packs",
    name: "Manual Hydraulic Power Packs",
    shortDescription: "Hand-operated hydraulic units for field and maintenance use",
    longDescription: "Portable manual hydraulic power packs featuring hand pumps for use where electrical power is unavailable. Ideal for maintenance work, remote locations, and emergency hydraulic power needs.",
    applications: ["Field Maintenance", "Emergency Repairs", "Remote Locations", "Testing Equipment", "Portable Tools"],
    image: "/images/categories/manual-power-pack.jpg",
    featured: false
  },
  {
    slug: "directional-control-valves",
    name: "Directional Control Valves",
    shortDescription: "High-quality hydraulic valves for precise flow control",
    longDescription: "Directional control valves for managing hydraulic fluid flow in power packs and hydraulic systems. Available in various configurations including solenoid operated, manual, and pilot operated.",
    applications: ["Power Pack Controls", "Hydraulic Circuits", "Automation Systems", "Mobile Equipment", "Industrial Machinery"],
    image: "/images/categories/valves.jpg",
    featured: false
  },
  {
    slug: "telescopic-hydraulic-cylinders",
    name: "Telescopic Hydraulic Cylinders",
    shortDescription: "Multi-stage cylinders for long stroke requirements",
    longDescription: "Telescopic hydraulic cylinders provide extended stroke length from a compact retracted length. Ideal for applications where space is limited but long extension is required.",
    applications: ["Dump Trucks", "Trailers", "Lift Gates", "Agriculture Equipment", "Construction Equipment"],
    image: "/images/categories/telescopic-cylinder.jpg",
    featured: false
  },
  {
    slug: "earth-moving-hydraulic-cylinders",
    name: "Earth Moving Hydraulic Cylinders",
    shortDescription: "Heavy-duty cylinders for construction and mining equipment",
    longDescription: "Robust hydraulic cylinders built to withstand the harsh conditions of earth moving and construction equipment. Features heavy-duty rod coatings, corrosion protection, and high-strength construction.",
    applications: ["Excavators", "Loaders", "Bulldozers", "Graders", "Cranes"],
    image: "/images/categories/earth-moving.jpg",
    featured: false
  },
  {
    slug: "hydraulic-gear-pumps",
    name: "Hydraulic Gear Pumps",
    shortDescription: "Reliable gear pumps for hydraulic power transmission",
    longDescription: "Hydraulic gear pumps providing consistent flow rates and reliable performance. Available in various displacements and mounting configurations for integration with power packs and hydraulic systems.",
    applications: ["Power Packs", "Hydraulic Systems", "Lubrication Systems", "Transfer Systems", "Industrial Machinery"],
    image: "/images/categories/gear-pump.jpg",
    featured: false
  },
  {
    slug: "hydraulic-hand-pumps",
    name: "Hydraulic Hand Pumps",
    shortDescription: "Portable hand-operated pumps for field service",
    longDescription: "Manual hydraulic hand pumps for portable and emergency hydraulic power. Available in single and two-speed models with various pressure ratings and reservoir capacities.",
    applications: ["Hydraulic Jacks", "Porta Power Tools", "Maintenance Work", "Testing", "Emergency Service"],
    image: "/images/categories/hand-pump.jpg",
    featured: false
  },
  {
    slug: "power-pack-accessories",
    name: "Power Pack Accessories",
    shortDescription: "Complete range of components for hydraulic systems",
    longDescription: "Comprehensive range of hydraulic accessories including accumulators, filters, gauges, hoses, fittings, and reservoir components. Everything needed to complete and maintain hydraulic systems.",
    applications: ["System Assembly", "Maintenance", "Upgrades", "Spare Parts", "Custom Configurations"],
    image: "/images/categories/accessories.jpg",
    featured: false
  }
];

export function getFeaturedCategories(): ProductCategory[] {
  return productCategories.filter(cat => cat.featured);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.slug === slug);
}

export function getAllCategories(): ProductCategory[] {
  return productCategories;
}

// Extended product categories list for demonstration purposes
export const extendedCategories: ProductCategory[] = [
  ...productCategories,
  {
    slug: "hydraulic-filters",
    name: "Hydraulic Filters",
    shortDescription: "High-efficiency filters for hydraulic system cleanliness",
    longDescription: "Premium hydraulic filters designed to maintain system cleanliness and protect sensitiveComponents from contaminants. Available in various micron ratings and flow capacities for optimal system performance and longevity.",
    applications: ["Power Pack Maintenance", "System Filtration", "Contaminant Removal", "Particle Control", "Fluid Cleanliness"],
    image: "/images/categories/filters.jpg",
    featured: false
  },
  {
    slug: " hydraulic-hoses-fittings",
    name: "Hydraulic Hoses & Fittings",
    shortDescription: "Premium hoses and connectors for hydraulic systems",
    longDescription: "High-pressure hydraulic hoses and matching fittings designed for reliable fluid transmission in demanding industrial applications. Available in various sizes, pressures, and configurations to suit every hydraulic system requirement.",
    applications: ["System Connections", "Flexible Runs", "High-Pressure Lines", "Quick Connects", "System Maintenance"],
    image: "/images/categories/hoses.jpg",
    featured: false
  },
  {
    slug: "hydraulic-accumulators",
    name: "Hydraulic Accumulators",
    shortDescription: "Energy storage devices for hydraulic systems",
    longDescription: "Gas-charged hydraulic accumulators for energy savings, shock absorption, and emergency power in hydraulic systems. Available in various sizes and pre-charge pressures for different application requirements.",
    applications: ["Energy Recovery", "Shock Absorption", " leakage Compensation", "Emergency Power", "Pulse Dampening"],
    image: "/images/categories/accumulators.jpg",
    featured: false
  },
  {
    slug: "hydraulic-coolers",
    name: "Hydraulic Coolers",
    shortDescription: "Heat exchangers for hydraulic system temperature control",
    longDescription: "Air-cooled and water-cooled heat exchangers designed to maintain optimal hydraulic fluid temperature for consistent system performance and extended fluid life in demanding operating conditions.",
    applications: ["Temperature Control", "Fluid Cooling", "Heat Dissipation", "Process Cooling", "Energy Efficiency"],
    image: "/images/categories/coolers.jpg",
    featured: false
  },
  {
    slug: "hydraulic-servovalves",
    name: "Hydraulic Servo Valves",
    shortDescription: "High-precision valves for closed-loop control systems",
    longDescription: "Advanced servo valves providing extremely precise control of hydraulic flow and pressure. Used in applications requiring tight tolerances and rapid response times for superior process control.",
    applications: ["Precision Control", "Closed-Loop Systems", "Position Control", "Velocity Control", "High-Performance Applications"],
    image: "/images/categories/servovalves.jpg",
    featured: false
  }
];
