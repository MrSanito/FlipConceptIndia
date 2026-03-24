export const categories = [
  {
    "id": "waterproofing-systems",
    "name": "Waterproofing Systems",
    "image": "/assets/categories/waterproofing sytems.jpg", 
    "description": "Comprehensive waterproofing solutions to stop water from entering structures.",
    "products": [
      { 
        "id": "wp-building", 
        "name": "Building Waterproofing", 
        "description": "Complete waterproofing for terraces, roofs (flat, tiled, concrete, IBR steel, clip-lock), balconies, parapet walls, skylights, gutters, sidewalls, and chimneys.", 
        "image": "https://images.unsplash.com/photo-1584662137135-0c37f4d37e73?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Polyurethane / Acrylic Hybrid",
          "Application": "Brush, Roller, or Spray",
          "Coverage": "1.5 - 2.0 kg/m² (2 coats)",
          "Curing Time": "24 - 48 hours",
          "Durability": "10 - 15 Years",
          "UV Resistance": "High",
          "Chemical Resistance": "Moderate",
          "Temperature Range": "-10°C to +80°C"
        },
        "useCases": ["Residential Terraces", "Commercial Roofs", "Balconies", "Parapet Walls"],
        "bestUsage": "Best applied on a clean, dry concrete surface with a primer coat for maximum adhesion and longevity."
      },
      { 
        "id": "wp-structural", 
        "name": "Structural Waterproofing", 
        "description": "Specialized solutions for basements, tanks, tanking systems, and injection grouting (crack sealing).", 
        "image": "https://images.unsplash.com/photo-1581092335738-e57b21d66e58?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Crystalline / Cementitious",
          "Application": "Injection Grouting, Slurry",
          "Coverage": "1.0 - 1.5 kg/m²",
          "Curing Time": "3 - 7 days (full cure)",
          "Durability": "Lifetime (Structural)",
          "UV Resistance": "N/A (Below Ground)",
          "Chemical Resistance": "High",
          "Adhesion": "Excellent to Concrete"
        },
        "useCases": ["Basements", "Water Tanks", "Retaining Walls", "Foundations"],
        "bestUsage": "Ideal for negative side waterproofing where external access is limited. Use injection grouting for active leak sealing."
      },
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
      },
      { 
        "id": "wp-fibre", 
        "name": "Fibre Seal Systems", 
        "description": "Fibre-reinforced waterproofing for added strength and flexibility.", 
        "image": "https://images.unsplash.com/photo-1581093172267-4e50fb8f8bc0?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Fibre-Reinforced Acrylic/PU",
          "Application": "Brush or Roller",
          "Coverage": "1.2 - 1.8 kg/m²",
          "Curing Time": "12 - 24 hours",
          "Durability": "8 - 12 Years",
          "Tensile Strength": "High",
          "UV Resistance": "Excellent",
          "Crack Bridging": "Excellent"
        },
        "useCases": ["Roofs with high vibration", "Area with micro-cracks", "Joint sealing"],
        "bestUsage": "The built-in fibres eliminate the need for separate mesh reinforcement in many cases."
      },
      { 
        "id": "wp-torch", 
        "name": "Torch-on Membrane Systems", 
        "description": "Bitumen-based torch-on membranes for heavy-duty roof waterproofing.", 
        "image": "https://images.unsplash.com/photo-1581092916692-8d71e89ce5d8?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "APP/SBS Modified Bitumen",
          "Thickness": "3mm or 4mm",
          "Application": "Torch Flame Melting",
          "Reinforcement": "Polyester / Glass Fibre",
          "Durability": "15 - 20 Years",
          "Puncture Resistance": "High",
          "Flexibility": "Down to -15°C",
          "Joint Integrity": "Superior"
        },
        "useCases": ["Flat Concrete Roofs", "Bridge Decks", "Podiums", "Large Industrial Sheds"],
        "bestUsage": "Ensure $75mm$ overlap for all joints. Professional application is critical for standard flame heating."
      },
      { 
        "id": "wp-uv", 
        "name": "UV Silver Coatings", 
        "description": "Reflective UV protective coatings to extend the life of waterproofing systems.", 
        "image": "https://images.unsplash.com/photo-1581093815556-fd1493d5d7b2?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Aluminium Pigmented Bituminous",
          "Application": "Brush, Spray",
          "Coverage": "6 - 8 m²/liter",
          "Curing Time": "8 - 12 hours",
          "Solar Reflectance": "High (>70%)",
          "UV Shielding": "Maximum",
          "Finish": "Metallic Silver",
          "Heat Reduction": "Up to 5°C - 8°C"
        },
        "useCases": ["Maintenance of Bituminous Roofs", "Steel structures", "Storage tanks"],
        "bestUsage": "Apply as a finish coat over existing bitumen membranes to prevent UV degradation and reduce cooling costs."
      },
      { 
        "id": "wp-polyurea", 
        "name": "Polyurea Waterproofing Coatings", 
        "description": "High-performance, rapid-curing polyurea coatings for superior protection.", 
        "image": "https://images.unsplash.com/photo-1581093172267-4e50fb8f8bc0?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Pure Polyurea",
          "Application": "Plural Component Spray",
          "Set Time": "15 - 30 seconds",
          "Return to Service": "1 - 2 hours",
          "Durability": "25+ Years",
          "Elongation": "> 400%",
          "Chemical Resistance": "Superior",
          "Hardness": "Shore D 45-55"
        },
        "useCases": ["Waste Water Plants", "Mining Infrastructure", "Parking Decks", "Secondary Containment"],
        "bestUsage": "Requires specialized high-pressure spray equipment. Ideal for fast-track projects where downtime must be minimized."
      }
    ]
  },
  {
    "id": "protective-industrial-coatings",
    "name": "Protective & Industrial Coatings",
    "image": "/assets/categories/Protective & Industrial Coatings png.jpg",
    "description": "High-performance coatings to protect steel & concrete from corrosion, chemicals, and wear.",
    "products": [
      { 
        "id": "pic-anti-corrosion", 
        "name": "Anti-Corrosion Coatings", 
        "description": "Robust protection against rust and corrosion for industrial assets.", 
        "image": "https://images.unsplash.com/photo-1581092935268-e7c5b33be067?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Zinc-Rich Epoxy / Polyurethane",
          "Protection": "Cathodic & Barrier",
          "Surface Prep": "SA 2.5 Sand Blasting",
          "Finish": "Semi-Gloss / Matte",
          "Salt Spray Resistance": "> 2000 hours",
          "Temp Resistance": "Up to 120°C",
          "DFT": "150 - 250 microns"
        },
        "useCases": ["Steel Bridges", "Offshore Platforms", "Industrial Pipelines", "Chemical Plants"],
        "bestUsage": "Apply multi-coat system consisting of primer, intermediate, and topcoat for long-term corrosion protection in harsh environments."
      },
      { 
        "id": "pic-industrial", 
        "name": "Industrial Protective Coatings", 
        "description": "General purpose protective coatings for various industrial applications.", 
        "image": "https://images.unsplash.com/photo-1581092160562-40fed08e5e2d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Epoxy Polyamide",
          "Application": "Airless Spray / Roller",
          "Coverage": "4 - 5 m²/liter",
          "Curing Time": "16 hours (re-coat)",
          "Impact Resistance": "Good",
          "Abrasion Resistance": "High",
          "Color Range": "Available in RAL shades"
        },
        "useCases": ["Factory Walls", "Machinery", "Steel Doors", "Structural Steel"],
        "bestUsage": "Versatile coating for indoor industrial environments with good mechanical and limited chemical resistance."
      },
      { 
        "id": "pic-tank", 
        "name": "Tank & Pipeline Coatings", 
        "description": "Specialized linings and coatings for storage tanks and pipelines.", 
        "image": "https://images.unsplash.com/photo-1581093813860-4e7c3277c7a5?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Novolac Epoxy / Vinyl Ester",
          "Chemical Resistance": "Extreme (Acids/Alkalis)",
          "Application": "Specialized Spray",
          "Max Temp (Immersion)": "Up to 90°C",
          "Reinforcement": "Glass Flake (Optional)",
          "Thickness": "500 - 1500 microns"
        },
        "useCases": ["Chemical Storage Tanks", "Oil Pipelines", "Pickling Tanks", "Cooling Towers"],
        "bestUsage": "Specify the exact chemical stored to ensure the correct resin system is selected for the lining."
      },
      { 
        "id": "pic-polyurea-storage", 
        "name": "Storage Tank Polyurea Coatings", 
        "description": "Seamless polyurea linings for chemical and water storage tanks.", 
        "image": "https://images.unsplash.com/photo-1581092941260-c5a1c9fc5e1d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "High-Grade Polyurea",
          "Flexibility": "High (Bridging cracks)",
          "Application": "Heated Spray",
          "Zero VOC": "Yes",
          "Drinking Water Safe": "Available (NSF)",
          "Cure Time": "Instant",
          "Leak Protection": "Seamless"
        },
        "useCases": ["Potable Water Tanks", "Waste Water Digesters", "Bund Areas"],
        "bestUsage": "Excellent for monolithic lining of large concrete tanks where structural movement is expected."
      }
    ]
  },
  {
    "id": "chemical-industrial-flooring",
    "name": "Chemical & Industrial Flooring",
    "image": "/assets/categories/Chemical & Industrial Flooring.jpg",
    "description": "Durable, chemical-resistant, heavy-duty floors for demanding environments.",
    "products": [
      { 
        "id": "floor-epoxy", 
        "name": "Epoxy Flooring", 
        "description": "Seamless, high-gloss, and durable epoxy flooring for industrial and commercial spaces.", 
        "image": "https://images.unsplash.com/photo-1577005505120-ecb83d97d5fa?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "System": "Self-Levelling Epoxy (SL)",
          "Thickness": "2mm - 5mm",
          "Compressive Strength": "> 60 N/mm²",
          "Finish": "High Gloss / Matte / Anti-slip",
          "Chemical Resistance": "Good (Oils, Fuels)",
          "Durability": "Heavy Traffic",
          "Cleaning": "Easy-to-clean Seamless"
        },
        "useCases": ["Pharma Plants", "Automobile Showrooms", "Electronics Factories", "Warehouses"],
        "bestUsage": "Surface must be shot-blasted or diamond ground to achieve CSP 2-3 before application."
      },
      { 
        "id": "floor-pu", 
        "name": "PU (Polyurethane) Flooring", 
        "description": "Flexible and impact-resistant polyurethane flooring systems.", 
        "image": "https://images.unsplash.com/photo-1581092160562-40fed08e5e2d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "System": "PU Concrete / Screed",
          "Thickness": "6mm - 9mm",
          "Temp Resistance": "-40°C to +120°C",
          "Impact Resistance": "Extreme",
          "Chemical Resistance": "Very High (Acids, Lactic)",
          "Microbial Growth": "Inhibits (Hygienic)",
          "Slip Resistance": "Adjustable (R10 - R13)"
        },
        "useCases": ["Food & Beverage Processing", "Cold Storage", "Kitchens", "Dairy Plants"],
        "bestUsage": "Preferred for 'wet' industrial areas where thermal shock (hot water washing) is frequent."
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
        "id": "ins-thermal", 
        "name": "Thermal Insulation", 
        "description": "Solutions to reduce heat transfer and improve energy efficiency.", 
        "image": "https://images.unsplash.com/photo-1581093172267-4e50fb8f8bc0?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Polyurethane Foam / Glass Wool",
          "R-Value": "High Efficiency",
          "Fire Rating": "Class A / Class B",
          "Density": "32 - 40 kg/m³ (Spray Foam)",
          "Thermal Conductivity": "< 0.022 W/m.K",
          "Moisture Absorption": "Low"
        },
        "useCases": ["Rooftop insulation", "Cold storages", "HVAC ducts", "Residential attics"],
        "bestUsage": "Spray foam provides both insulation and air-sealing in a single application for maximum efficiency."
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
        "id": "paint-industrial", 
        "name": "Industrial & Factory Painting", 
        "description": "Heavy-duty painting for factories, warehouses, and industrial plants.", 
        "image": "https://images.unsplash.com/photo-1581093815556-fd1493d5d7b2?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "System": "High-Build Coatings",
          "Application": "Airless Spray / Roller",
          "Appearance": "Uniform Industrial Finish",
          "Chemical Resistance": "Moderate",
          "Durability": "High Wear",
          "Color Retention": "Excellent"
        },
        "useCases": ["Industrial Sheds", "Factory Walls", "Structural Steelwork"],
        "bestUsage": "Use airless spray application for large surfaces to ensure uniform thickness and fast project completion."
      }
    ]
  },
  {
    "id": "damp-proofing",
    "name": "Damp Proofing",
    "image": "/assets/categories/Damp Proofing.jpg",
    "description": "Expert treatments to stop moisture damage in walls and foundations.",
    "products": [
      { 
        "id": "damp-rising", 
        "name": "Rising Damp Treatment", 
        "description": "Chemical injection damp coursing to stop rising ground moisture.", 
        "image": "https://images.unsplash.com/photo-1581092941260-c5a1c9fc5e1d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Silane-Siloxane Cream / Liquid",
          "Application": "Low Pressure Injection",
          "Spacing": "100mm - 150mm centers",
          "Effect": "Hydrophobic barrier",
          "Life Expectancy": "20+ Years",
          "Odorless": "Yes"
        },
        "useCases": ["Old Masonry Walls", "Heritage Buildings", "Ground Floor Walls"],
        "bestUsage": "Horizontal drill at the lowest possible mortar joint and inject until saturated for a continuous barrier."
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
        "id": "roof-leak", 
        "name": "Roof Leak Repairs", 
        "description": "Rapid response to seal active leaks and prevent water damage.", 
        "image": "https://images.unsplash.com/photo-1581092941260-c5a1c9fc5e1d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Method": "Flashband / Liquid Membrane",
          "Response Time": "Emergency Priority",
          "Compatibility": "All Roof Types",
          "Durability": "Immediate Seal",
          "Warranty": "Subject to conditions"
        },
        "useCases": ["Active Roof Leaks", "Joint Failures", "Emergency Repairs"],
        "bestUsage": "Ideal for temporary stop-gap during rains or as part of a larger restoration project."
      }
    ]
  },
  {
    "id": "inspection-technical-reporting",
    "name": "Inspection & Technical Reporting",
    "image": "/assets/categories/inspection & technical reporting.jpg",
    "description": "Professional diagnosis, inspections, and technical reporting services.",
    "products": [
      { 
        "id": "inspect-analysis", 
        "name": "Cause & Remedy Analysis", 
        "description": "Investigative reports to determine root causes of failure and propose solutions.", 
        "image": "https://images.unsplash.com/photo-1581093815556-fd1493d5d7b2?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Method": "Visual & NDT (Non-Destructive)",
          "Reporting": "Detailed Technical PDF",
          "Scope": "Failure Identification",
          "Standards": "Engineering Best Practices",
          "Recommendations": "Step-by-step Remedy"
        },
        "useCases": ["Litigation support", "Insurance claims", "Maintenance planning"],
        "bestUsage": "Crucial before any major renovation to ensure you are fixing the cause, not just the symptom."
      }
    ]
  },
  {
    "id": "construction-material-supply",
    "name": "Construction Material Supply",
    "image": "/assets/categories/Construction Material Supply.jpg",
    "description": "Supply of quality construction materials including Vermiculite.",
    "products": [
      { 
        "id": "mat-vermiculite", 
        "name": "Vermiculite (All Grades)", 
        "description": "Supply of raw Vermiculite in various grades for construction and horticulture.", 
        "image": "https://images.unsplash.com/photo-1581092160562-40fed08e5e2d?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Material": "Exfoliated Vermiculite",
          "Grades": "Fine, Medium, Coarse",
          "Purity": "> 98%",
          "pH Value": "Neutral (7.0)",
          "Bulk Density": "60 - 120 kg/m³",
          "Fire Rating": "Non-Combustible"
        },
        "useCases": ["Lightweight Screeds", "Pool linings", "Soil conditioning", "Fireproofing"],
        "bestUsage": "Mix with cement for high-performance thermal insulation screeds on flat roofs."
      }
    ]
  },
  {
    "id": "equipment-application-capability",
    "name": "Equipment & Application Capability",
    "image": "/assets/categories/Equipment & Application Capability.jpg",
    "description": "Our fleet of specialized equipment for professional application.",
    "products": [
      { 
        "id": "equip-polyurea", 
        "name": "Polyurea Coating Machines", 
        "description": "High-pressure reactors for spraying polyurea coatings.", 
        "image": "https://images.unsplash.com/photo-1581092935268-e7c5b33be067?w=800&q=80", 
        "price": "Ask for Price",
        "specifications": {
          "Type": "Plural Component Proportioner",
          "Max Pressure": "3500 psi",
          "Heating Capacity": "Up to 80°C",
          "Hose Length": "Up to 90m",
          "Output": "5 - 15 kg/min",
          "Power": "3-Phase Electric"
        },
        "useCases": ["Polyurea liners", "Foam insulation", "Large scale projects"],
        "bestUsage": "Operated by certified technicians to ensure precise mixing ratio and material performance."
      }
    ]
  }
];