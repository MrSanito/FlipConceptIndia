export const categories = [
  {
    "id": "waterproofing-systems",
    "name": "Waterproofing Systems",
    "image": "/assets/categories/waterproofing sytems.jpg", 
    "description": "Comprehensive waterproofing solutions to stop water from entering structures.",
    "products": [
      { 
        "id": "wp-acrylic", 
        "name": "Acrylic Seal Systems", 
        "description": "Advanced acrylic-based sealing systems for durable waterproofing.", 
        "image": "https://images.unsplash.com/photo-1581093813860-4e7c3277c7a5?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Pure Acrylic Polymer",
          "Application": "Roller or Brush",
          "Coverage": "2.5 - 3.0 m²/liter",
          "Curing Time": "4 - 6 hours (touch dry)",
          "Durability": "5 - 8 Years",
          "UV Resistance": "Very High",
          "Elongation": "> 300%",
          "Eco-Friendly": "Yes (Low VOC)"
        },
        "useCases": ["Exposed Roofs", "External Walls", "Refurbishment Projects"],
        "bestUsage": "Highly effective for areas with high sun exposure due to its superior UV reflective properties."
      },
      { 
        "id": "wp-crystal", 
        "name": "Crystal Seal Systems", 
        "description": "Crystalline waterproofing technology for deep concrete protection.", 
        "image": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Reactive Crystalline Chemicals",
          "Application": "Dry Shake or Slurry",
          "Coverage": "0.8 - 1.2 kg/m²",
          "Curing Time": "Reactive over time",
          "Durability": "Permanent",
          "Water Pressure": "Up to 12 bar",
          "Crack Healing": "Up to 0.4mm",
          "Breathable": "Yes"
        },
        "useCases": ["Sewage Treatment Plants", "Dam Walls", "Bridge Decks", "Tunnels"],
        "bestUsage": "Apply to moist concrete. The crystals grow deep into the capillary tracts of the concrete when water is present."
      }
    ]
  },
  {
    "id": "insulation-services",
    "name": "Insulation Services",
    "image": "/assets/categories/Insulation Services.jpg",
    "description": "Effective thermal and acoustic insulation solutions to control heat and sound.",
    "products": [
      { 
        "id": "ins-acoustic", 
        "name": "Acoustic Insulation", 
        "description": "High-performance soundproofing solutions for residential and commercial spaces.", 
        "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Acoustic Foam / Mineral Wool",
          "NRC Rating": "0.85 - 1.0",
          "Thickness": "25mm - 100mm",
          "Fire Rating": "Class A",
          "Density": "40 - 100 kg/m³",
          "Installation": "Mechanical or Adhesive"
        },
        "useCases": ["Staging Studios", "Home Theaters", "Office Boardrooms", "Industrial Enclosures"],
        "bestUsage": "Combine with air gaps and high-density mass-loaded vinyl for maximum sound transmission loss."
      }
    ]
  },
  {
    "id": "painting-surface-finishing",
    "name": "Painting & Surface Finishing",
    "image": "/assets/categories/Painting & Surface Finishing.jpg",
    "description": "Professional painting services for protection and appearance enhancement.",
    "products": [
      { 
        "id": "paint-residential", 
        "name": "Residential Estate Painting", 
        "description": "Premium painting services for luxury residential estates and complexes.", 
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Premium Acrylic Emulsion",
          "Finish": "Sheen / Matte / Satin",
          "Durability": "8 - 10 Years",
          "Washability": "High",
          "Eco-Friendly": "Low VOC",
          "Warranty": "5 - 7 Years"
        },
        "useCases": ["Luxury Houses", "Gated Estates", "Apartment Blocks"],
        "bestUsage": "Full surface preparation including crack filling and priming is essential for estate-level longevity."
      },
      { 
        "id": "paint-fence", 
        "name": "Fence & Wall Painting", 
        "description": "Durable coatings for boundary walls and fences to withstand the elements.", 
        "image": "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Weather-resistant Acrylic",
          "UV Protection": "Maximized",
          "Fungal Resistance": "Excellent",
          "Adhesion": "Superior to Masonry/Steel",
          "Application": "Brush, Roller, or Spray"
        },
        "useCases": ["Boundary Walls", "Steel Fencing", "Garden Walls"],
        "bestUsage": "Includes high-pressure water cleaning to remove algae and loose debris before painting."
      },
      { 
        "id": "paint-interior", 
        "name": "Interior Painting", 
        "description": "Meticulous interior painting with a focus on finish and detail.", 
        "image": "https://images.unsplash.com/photo-1562664377-709f2c337eb2?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Interior Luxury Emulsion",
          "Finish": "Silk / Velvet / Pearl",
          "Odor": "Near Zero",
          "Stain Resistance": "Very High",
          "Coverage": "12 - 14 m²/liter"
        },
        "useCases": ["Living Rooms", "Bedrooms", "Office Interiors"],
        "bestUsage": "Ideal for high-traffic indoor areas where a smooth, washable finish is required."
      },
      { 
        "id": "paint-exterior", 
        "name": "Exterior Painting", 
        "description": "Heavy-duty exterior coatings designed for long-term protection and color retention.", 
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Pure Acrylic Exterior Emulsion",
          "Weather Shield": "Advanced Tech",
          "Dirt Pick-up Resistance": "High",
          "Breathability": "Yes",
          "Warranty": "Up to 10 Years"
        },
        "useCases": ["Commercial Buildings", "High-rise Facades", "External House Walls"],
        "bestUsage": "Best applied in dry weather with a dedicated exterior primer for maximum bonding."
      }
    ]
  },
  {
    "id": "roof-repairs-restoration",
    "name": "Roof Repairs & Restoration",
    "image": "/assets/categories/Roof Repairs & Restoration.jpg",
    "description": "Comprehensive repair and restoration services for damaged roof structures.",
    "products": [
      { 
        "id": "roof-ibr", 
        "name": "IBR Roof Repairs", 
        "description": "Specialized repairs for IBR metal roofing, addressing rust, leaks, and loose fixings.", 
        "image": "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Metal Sealants / Anti-corrosive Primers",
          "System": "Bolt Sealing & Waterproofing",
          "Corrosion Protection": "High",
          "Flexibility": "Thermal Movement Compatible"
        },
        "useCases": ["Industrial Warehouses", "Steel Sheds", "Metal Roofed Houses"],
        "bestUsage": "Includes wire brushing rust and applying a zinc-rich primer before sealing bolts and joints."
      },
      { 
        "id": "roof-flashing", 
        "name": "Flashing Repairs", 
        "description": "Sealing and repairing roof flashing around chimneys, skylights, and valleys.", 
        "image": "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Liquid Membrane / Fibre Reinforcement",
          "System": "Seamless Flashing Seal",
          "Adhesion": "Multi-surface compatibility",
          "Durability": "8 - 12 Years"
        },
        "useCases": ["Chimney Joints", "Roof Thru-pipes", "Parapet Transitions"],
        "bestUsage": "Involves removing old, cracked cement flashing and replacing with flexible, fibre-reinforced liquid membranes."
      },
      { 
        "id": "roof-pitched", 
        "name": "Pitched Roof Repairs", 
        "description": "Repairing and waterproofing tiled or concrete pitched roofs.", 
        "image": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Tile Sealants / Acrylic Coating",
          "System": "Ridge Capping & Tile Waterproofing",
          "UV Resistance": "Maximum",
          "Finish": "Color Matched to Tiles"
        },
        "useCases": ["Residential Houses", "Churches", "Heritage Buildings"],
        "bestUsage": "Includes replacing broken tiles and re-pointing ridge caps with flexible polymer mortar."
      }
    ]
  }
];
