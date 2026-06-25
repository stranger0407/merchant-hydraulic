// Testimonials Data
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Patel",
    company: "Shreeji Plastics Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    role: "Plant Manager",
    content: "We ordered custom hydraulic power packs for our screen changer units from Merchant Hydraulic. The engineering team understood our requirements perfectly and delivered units that integrated seamlessly with our extrusion lines. The after-sales support has been excellent, and uptime has improved significantly.",
    rating: 5
  },
  {
    id: "2",
    name: "Mukesh Desai",
    company: "Goyal Engineering Works",
    location: "Surat, Gujarat",
    role: "Proprietor",
    content: "We have been purchasing tie rod hydraulic cylinders from Merchant Hydraulic for our press machines for the past 3 years. The quality is consistent, delivery is always on time, and the prices are competitive. Their technical team's advice on bore sizing and mounting has helped improve our equipment performance.",
    rating: 5
  },
  {
    id: "3",
    name: "Amit Shah",
    company: "Laxmi Industries",
    location: "Vadodara, Gujarat",
    role: "Operations Head",
    content: "We use their hydraulic power packs for our goods lifts across multiple warehouses. The units have run continuously without major issues. What impressed us most was their willingness to customize tank sizes and valve configurations to fit our specific lift requirements.",
    rating: 5
  },
  {
    id: "4",
    name: "Kiran Patel",
    company: "Supreme Cotton Ginning Mills",
    location: "Rajkot, Gujarat",
    role: "Director",
    content: "As a cotton ginning unit, we needed hydraulic cylinders that could withstand dusty conditions and heavy usage. Merchant Hydraulic delivered heavy-duty cylinders that have exceeded our expectations. Their engineers even visited our site to understand the application before proposing the solution.",
    rating: 5
  },
  {
    id: "5",
    name: "Priya Sharma",
    company: "Precision Tools India",
    location: "Mumbai, Maharashtra",
    role: "Procurement Manager",
    content: "We were looking for a custom hydraulic cylinder with adjustable stroke for our flexible manufacturing setup. The team at Merchant Hydraulic provided exactly what we needed within our timeline. The quality of machining and finishing is definitely industrial-grade.",
    rating: 5
  },
  {
    id: "6",
    name: "Rahul Mehta",
    company: "Atlantic Construction Equipment",
    location: "Pune, Maharashtra",
    role: "Product Manager",
    content: "We source hydraulic cylinders for our earth moving equipment from Merchant Hydraulic. Their understanding of harsh field conditions is evident in the quality of their cylinders. The anti-corrosion coating and robust construction have reduced our field failure rates significantly.",
    rating: 5
  },
  {
    id: "7",
    name: "Dinesh Kumar",
    company: "Shakthi Manufacturing Solutions",
    location: "Tamil Nadu",
    role: "Senior Engineer",
    content: "The telescopic cylinders we ordered for our trailer applications have been performing well. The engineering team provided detailed technical drawings and discussed our load requirements before finalizing the specifications. Very professional approach.",
    rating: 4
  },
  {
    id: "8",
    name: "Sunita Verma",
    company: "Smart Elevator Industries",
    location: "Hyderabad, Telangana",
    role: "Technical Director",
    content: "We needed a complete hydraulic solution for our goods elevators. Merchant Hydraulic provided power packs, cylinders, and valves as a complete system. The installation support and documentation provided were excellent. The lifts have been running smoothly for over 2 years now.",
    rating: 5
  }
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

// Extended testimonials list for demonstration purposes
export const extendedTestimonials: Testimonial[] = [
  ...testimonials,
  {
    id: "9",
    name: "Vikram Singh",
    company: "Rajasthan Mineral Industries",
    location: "Udaipur, Rajasthan",
    role: "Operations Manager",
    content: "Merchant Hydraulic supplied us with custom hydraulic cylinders for our stone crushing plant. The equipment has performed exceptionally well in the dusty desert conditions. Their technical team's understanding of our specific requirements made all the difference.",
    rating: 5
  },
  {
    id: "10",
    name: "Anil Gupta",
    company: "Delhi Metro Rail Corporation",
    location: "New Delhi",
    role: "Senior Engineer",
    content: "We have been collaborating with Merchant Hydraulic for various valve and cylinder applications in our maintenance workshops. Their commitment to quality and timely delivery has made them a trusted partner for DMRC projects.",
    rating: 5
  },
  {
    id: "11",
    name: "Deepak Reddy",
    company: "Hyderabad Textiles Ltd",
    location: "Hyderabad, Telangana",
    role: "Maintenance Manager",
    content: "The hydraulic power packs from Merchant Hydraulic have significantly improved our production line efficiency. Customization options allowed us to perfectly match the equipment to our existing machinery. Highly recommended.",
    rating: 5
  },
  {
    id: "12",
    name: "Neha Joshi",
    company: "Noida Industrial Equipment",
    location: "Noida, Uttar Pradesh",
    role: "Project Manager",
    content: "For our automated assembly line project, Merchant Hydraulic provided a complete hydraulic solution including custom-designed cylinders and power packs. The project was completed on time and within budget.",
    rating: 5
  },
  {
    id: "13",
    name: "Ramesh Iyer",
    company: "Chennai Shipyard",
    location: "Chennai, Tamil Nadu",
    role: "Chief Engineer",
    content: "The marine-grade hydraulic systems from Merchant Hydraulic have performed reliably in our dockyard applications. The corrosion resistance and build quality are excellent for our ship maintenance operations.",
    rating: 5
  },
  {
    id: "14",
    name: "Sandeep Mehta",
    company: "Pune Auto Components",
    location: "Pune, Maharashtra",
    role: "Production Head",
    content: "We use Merchant Hydraulic's equipment in our stamping presses. The cylinders handle the high-cycle requirements perfectly. Their service team is always responsive when we need technical support.",
    rating: 5
  },
  {
    id: "15",
    name: "Kavita Bhattacharya",
    company: "Kolkata Engineering Works",
    location: "Kolkata, West Bengal",
    role: "Director",
    content: "Merchant Hydraulic has been our preferred supplier for over a decade. Whether it's standard products or custom solutions, their quality remains consistent. The value for money is unbeatable in this industry.",
    rating: 5
  },
  {
    id: "16",
    name: "Arjun Deshpande",
    company: "Pune Engineering Solutions",
    location: "Pune, Maharashtra",
    role: "Chief Mechanical Engineer",
    content: "We requested a complex custom hydraulic system with multiple circuits and precise controls. Merchant Hydraulic delivered exactly what we needed, with excellent documentation and commissioning support.",
    rating: 5
  },
  {
    id: "17",
    name: "Manoj Nair",
    company: "Kochi Infrastructure",
    location: "Kochi, Kerala",
    role: "Project Engineer",
    content: "The hydraulic solutions provided for our material handling system have been trouble-free since installation. Their pre-installation site assessment ensured perfect integration with our existing setup.",
    rating: 5
  },
  {
    id: "18",
    name: "Pooja Khanna",
    company: "Ahmedabad Packaging Industries",
    location: "Ahmedabad, Gujarat",
    role: "Plant Superintendent",
    content: "Our baling machines are powered by Merchant Hydraulic equipment. The reliability and durability have reduced our maintenance costs significantly. Best-in-class service support.",
    rating: 5
  },
  {
    id: "19",
    name: "Rohan Parekh",
    company: "Surat Textile Machinery",
    location: "Surat, Gujarat",
    role: "Technical Lead",
    content: "The custom hydraulic cylinders for our textile looms have been performing flawlessly. The precision engineering and attention to detail are evident in the smooth operation of our equipment.",
    rating: 5
  },
  {
    id: "20",
    name: "Anjali Chaturvedi",
    company: "Bhopal Food Processing",
    location: "Bhopal, Madhya Pradesh",
    role: "Quality Manager",
    content: "For our food-grade applications, we needed hydraulic systems that met strict hygiene standards. Merchant Hydraulic delivered stainless steel cylinders that fit our requirements perfectly.",
    rating: 5
  }
];

export function getFeaturedTestimonials(count: number = 4): Testimonial[] {
  return testimonials.slice(0, count);
}
