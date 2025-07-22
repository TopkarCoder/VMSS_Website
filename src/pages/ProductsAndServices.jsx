import './ProductsAndServices.css';

const products = [
  {
    title: "Audits & Troubleshooting",
    text: "Audits of thermic fluid, steam, and hot water systems for HAZOP, energy conservation as well as troubleshooting.",
    img: "/images/products/therm_audit.png"
  },
  {
    title: "Energy Saving System Design and Supply",
    text: "Energy-saving system design related to heating and cooling.",
    img: "/images/products/energy_design.png"
  },
  {
    title: "Training for Heating Systems",
    text: "Provide training on operation and maintenance of heating systems specializing in thermic fluid heating systems.",
    img: "/images/products/training.png"
  },
  {
    title: "Automation & Process Control",
    text: "Design and supply of automation panels for process heating and cooling system for improved process control, safety, and data logging.",
    img: "/images/products/automation.png"
  },
  {
    title: "Utility & Process Piping",
    text: "Utility and process piping design including steam, condensate, and thermic fluid.",
    img: "/images/products/piping.png"
  },
  {
    title: "Thermic Fluid Cleaning",
    text: "Provide help in cleaning of thermic fluid systems when the fluids degrade.",
    img: "/images/products/tfc.png"
  },
  {
    title: "Commissioning of Complex Systems",
    text: "Commissioning of heating systems where the systems are large and complicated.",
    img: "/images/products/commissioning.png"
  },
  {
    title: "Combustion Systems",
    text: "Providing complicated combustion systems for standard and non-standard fuels including burners, gas trains, control panels, etc.",
    img: "/images/products/comb_sys.png"
  },
  {
    title: "BTG Design & Selection",
    text: "Design, specification, and selection of the BTG (Boiler Turbine Group), specifically for incidental power generation in process industry.",
    img: "/images/products/boiler.png"
  }
];

export default function Products() {
  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>
      <p className="products-subtitle">
        Our expertise is in the following fields, and we look forward to working with you in the same.
      </p>

      <div className="products-grid">
        {products.map((prod, index) => (
          <div
            className={`product-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
            key={index}
          >
            <div className="product-image">
              <img src={prod.img} alt={prod.title} />
            </div>
            <div className="product-text">
              <h3>{prod.title}</h3>
              <p>{prod.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
