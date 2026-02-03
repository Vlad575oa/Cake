import { ArrowUpRight } from "lucide-react";

// Part 1: Hero Section Content
export const heroContent = {
  heading: {
    line1: "INVISIBLE",
    line2: "CLIMATE",
  },
  paragraph: "High-performance concealed ventilation systems designed for modern architectural aesthetics.",
  buttons: {
    primary: "Explore Products",
    secondary: "Technical Data",
  },
};

// Part 2: Brand Story Section Content
export const brandStoryContent = {
  tagline: "Our Philosophy",
  heading: "Where Ukrainian Engineering Meets Minimalist Design",
  paragraphs: [
    "SAVA-LINE was founded on a simple principle: ventilation should be felt, not seen.",
    "By combining the robust manufacturing capabilities of our Kyiv facility with contemporary European design standards, we create airflow systems that integrate seamlessly into the most demanding architectural visions.",
  ],
  features: [
    "In-house R&D Laboratory",
    "Custom Length Manufacturing",
    "Eco-friendly Powder Coating",
    "5-Year International Warranty",
  ],
};

// Part 3: ProductBento Section Content
export const productBentoContent = {
  heading: "Product Ecosystem",
  paragraph: "A complete range of architectural ventilation solutions designed to disappear.",
  button: "View Full Catalog",
  features: [
    {
      title: "Linear Slot Diffusers",
      description: "Invisible airflow for modern interiors. Seamless integration into ceilings.",
      className: "md:col-span-2 md:row-span-2",
      img: "/images/linear-x-pro.jpg",
      id: "linear",
    },
    {
      title: "Concealed Grilles",
      description: "Minimalist exhaust solutions.",
      className: "md:col-span-1 md:row-span-1",
      img: "/images/grid-s-vertical.jpg",
      id: "grilles",
    },
    {
      title: "Floor Convectors",
      description: "Heating efficiency from below.",
      className: "md:col-span-1 md:row-span-1",
      img: "/images/slot-mini.jpg",
      id: "floor",
    },
    {
      title: "Custom Engineering",
      description: "Tailored to your architectural project specs.",
      className: "md:col-span-2 md:row-span-1",
      img: "/images/berlin-mitte-loft.jpg",
      id: "custom",
    },
  ]
};

// Part 4: ProductGrid Section Content
export const productGridContent = {
  heading: "OUR SOLUTIONS",
  button: "Full Catalog",
  products: [
    {
      title: "Slot Diffusers",
      subtitle: "Series SL-20",
      image: "/images/linear-x-pro.jpg",
      link: "/products/slot-diffusers"
    },
    {
      title: "Concealed Grilles",
      subtitle: "Series CG-10",
      image: "/images/grid-s-vertical.jpg",
      link: "/products/concealed-grilles"
    },
    {
      title: "Floor Convectors",
      subtitle: "Series FC-50",
      image: "/images/slot-mini.jpg",
      link: "/products/floor-convectors"
    },
    {
      title: "Air Curtains",
      subtitle: "Series AC-90",
      image: "/images/the-shard.jpg",
      link: "/products/air-curtains"
    },
  ]
};

// Part 5: TechnicalSpecs Section Content - Plain data structure
export const technicalSpecsContent = {
  tagline: "Engineering",
  heading: {
    line1: "PRECISION",
    line2: "ENGINEERING",
  },
  paragraph: "Verified performance data for architects and mechanical engineers.",
  specs: [
    {
      title: "AERODYNAMICS",
      content: "aerodynamics",
    },
    {
      title: "INSTALLATION",
      content: "installation",
    },
    {
      title: "MATERIALS",
      content: "materials",
    },
  ]
};
