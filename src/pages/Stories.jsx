import { useState } from "react";
import './Stories.css';

const storiesData = [
  {
    title: "Rajashree Polyfils & Century Enka",
    category: "Audits",
    content: `Rajashree Polyfils and Century Enka is a fiber plant manufacturing a variety of fibers
              including for automobile tire application. They have 3 X 4.5 m kcal/h capacity Heaters
              FO and NG fired as well as wood saw dust fired Heaters of 2 X 4 m kcal/h capacity.
              They have consulted us to audit and to spot energy saving opportunities. Our
              recommendations have helped them to increase their bottom line in the difficult time of
              the global slump in fiber business.`
  },
  {
    title: "JSW Dolvi Plant",
    category: "Combustion Systems",
    content: `For JSW – Dolvi Pant, we have done a prestigious work. They have Blast furnace gas
              cum Coke-oven gas cum Natural gas fired burners on 204 TPH Chinese Boiler. On this
              boiler they have 12 no. burners. They used to have the gas burner diffuser getting
              frequently damaged and used to result in stoppage of the boiler. We made some
              modifications in the burner construction and replaced the diffusers. With the changed
              design, the diffusers are working without any problem since 2016.`
  },
  {
    title: "SI Group – India Pvt. Ltd.",
    category: "Combustion Systems",
    content: `SI Group – India Pvt. Ltd. is a company at new Bombay involved in manufacture of
              Phenol and its derivatives. We supplied them burner retrofits for 5 TPH and 14 TPH
              boilers to convert the FO fired burners also suitable for NG cum Propane gas firing. We
              also helped them to develop PLC program for these multi fuel burners.

              When Mr. Vivek Sathaye was with Thermax, he had a chance to work on one 5 m kcal/h
              capacity API up-fired Heater working with 4 no. JohnZink natural draft burners at SI
              Group. These burners were converted to forced draft firing, suitable for natural gas and
              Propane firing as well with flue gas heat recovery for combustion air preheating. Also
              the burner startup automatic by providing them four pilots and flame supervision. A PLC
              panel was also supplied to do burner sequencing as well as modulation. Later these
              burners were provided with Oxygen correction by VMSS.`
  },
  {
    title: "Asia Pacific Fibers",
    category: "Efficiency Enhancement",
    content: `Asia Pacific Fibers is a leading integrated global manufacturer of polyester chips, staple
              fiber, filament yearn and fleece fabric plant along with captive PTA production. They
              have 3 X 14 m kcal/h capacity Bertram make high temperature Heaters. In 2016, we
              have upgraded these Heaters by installing bigger combustion air preheaters, to
              increase combustion air pre heat from 160 to 230 Deg C. We have also supplied PLC
              control panels with CPU, power supply and I/O redundancy. We have also supplied
              burner retrofits to be able to Handle higher temperature combustion air pre-heat
              temperature along with online oxygen meter to make the combustion controls better to
              maintain consistent low excess air. We have also provided them on site support for
              commissioning as well as in operation of these Heaters.

              The combustion air preheater and other items have been working satisfactory since
              then - 2016. We also have been supporting them on Heating related engineering
              needs.`
  },
  {
    title: "Indorama Nagpur",
    category: "Heater Repair",
    content: `Indorama is a multinational group mainly manufacturing Man Made Fibers having more
              than 150 plants worldwide. In their Nagpur plant, they have 10 m kcal/h 2 no. and 8 m
              kcal/h 2 no. capacity Heaters supplied by Bertrams – Germany. The heater coils had
              sulfur corrosion at the outer coil bottom and the top roof coil. We were given the job of
              replacing the top roof coils and outer coil change of few turns. This job was a very
              challenging job but have been completed successfully. We repaired these Heaters in
              2023 and are working satisfactorily since then.
              We have done repair of thermic fluid Heaters at Indorama Nagpur. We have also done
              coil leakage repair of Bertram make Heater at Garden Vareli – Surat, DIC Fine
              Chemicals – Dahej 1 m kcal/h capacity of Thermax Heater and Rajrayon of Chinese 10
              mkcal/h high temperature Heater. We have also replaced a 10 m kcal/h capacity Heater
              inner coil but only 50% of its length along with roof coil. This work was done on one
              Thermax made Heater. We do have a skilled welder, fitter team to repair high
              temperature Heater and also have engineering expertise to modify the Heater
              construction if needed.`
  },
  {
    title: "Supreme Petrochem Ltd.",
    category: "Audits",
    content: `Supreme Petrochem Ltd. is a polystyrene manufacturing company located at
              Nagothane, in Raigad district of Maharashtra. Their process requires very accurate
              temperature control. We had different expansion tanks for cooling system and for
              Heaters. We combined all the systems in one by providing them multiple deaerator
              tanks. We also did complete engineering including stress analysis of thermic fluid
              jacketed piping when they went in for an expansion. We have done number of audits of
              thermic fluid, cooling water and steam systems and have given them suggestions to cut
              operating costs. We are associated with this group since 2015.`
  },
  {
    title: "Other Heater Repairs",
    category: "Heater Repair",
    content:`We have carried out thermic fluid heater repairs at Indorama, Nagpur, along with
              several other notable projects, including:
               Coil leakage repair of a Bertram make heater at Garden Vareli, Surat
               Leakage repair of a 1 million kcal/h Thermax heater at DIC Fine Chemicals,
              Dahej
               Repair work on a 10 million kcal/h high-temperature Chinese heater at
              Rajrayon
               Partial inner coil replacement (50% of the length) along with roof coil
              replacement on a 10 million kcal/h Thermax make heater
               We have also guided Indorama Thailand on repair of their high temperature
              heater coils leakage.
              Our team consists of skilled welders and fitters experienced in high-temperature
              heater repairs. Additionally, we have the engineering expertise to modify heater
              construction where necessary, ensuring reliable and efficient long-term performance.`
  },
  {
    title: "Asian Paints",
    category: "Heating and Cooling",
    content: `Asian Paints (APL) have been taking support from us for thermic fluid system for resign
              manufacturing plant. We have supported APL by doing stress analysis for the resin floor house
              thermic fluid piping where frequent failures of pump seals was an issue. We have also helped APL in
              tunning the thermic fluid heaters, making the burners suitable for Bio gas firing etc. We have also
              provided system engineering for thermic fluid systems including PID development, heat load
              calculations, deciding on number of Heaters and Heater capacities, firming up various component
              specifications including control valves, preparing control philosophy etc. APL is very happy with our
              service and we have been working with them repeatedly.`
  },
  {
    title: "Kansai Nerolac",
    category: "Heating and Cooling",
    content: `Kansai Nerolac is an automative and decorative global paint manufacturer. Their plant
              at Hosur, Chiplun and at Bawal, where they manufacture paint resins, we have given
              them technical consultancy. In the resin manufacturing plant, they need heating as well
              as cooling done using thermic fluid. For some process, they need cooling by cooling
              tower water where as for some processes they need cooling with chilled water. We have
              helped both these process to reduce operating costs as well as improved the system
              reliability and safety in operation.`
  },
  {
    title: "PT Euroasiatic (EA)",
    category: "High Capacity Heaters",
    content: `PT Euroasiatic (EA) is an EPC company in energy field, having presence in Singapore, Indonesia,
              Philippines and Vietnam. They executed a project for PI Unilever Oleochemical Indonesia in
              2017 where EA supplied 4 X 5 M kcal/h capacity thermic fluid heaters. The heaters are coal cum
              Palm Kernel Shell fired. The heaters were to be connected in parallel with the existing NG cum diesel oil
              fired thermic fluid heater of 10.5 M kcal/h capacity. The engineering of the project which also included
              P&amp;ID development, piping sizing, stress analysis of thermic fluid piping, expansion and deaerator
              tank sizing etc. as well as commissioning assistance, was given by us. They are extremely happy
              with our services which not only allowed smooth commissioning and operation of the plant but also
              optimised the costs.
              We have also done work for EA at the same plant when there was an expansion project. We have also done
              interconnection of two large thermic fluid systems containing the above Heaters and 3 x 6 m kcal/h capacity
              Heaters working for one more plant in the same premises!`
  },
  {
    title: "EA Indorama Ventures",
    category: "High Capacity Heaters",
    content: `Indorama Ventures is a leading global manufacturer of specialty fibers and related
              petrochemical products. For their Indonesia plant, VMSS provided comprehensive
              consultancy services for the thermic fluid system, overcoming significant integration
              challenges in a complex, multi-source heating environment.
              The plant was acquired from another company, and existing system documentation
              was incomplete. As part of a major infrastructure upgrade, Indorama installed:
               Two 7.5 MW gas turbines
               Two 7 million kcal/h thermic fluid heat recovery units (WHR Heaters)
               A boiler, hot water heater, and hot water-fired chillers down stream of the
              waste heat recovery thermic fluid heater
              These additions were part of a Trigen (tri-generation) power plant, and required
              seamless integration with existing two independent thermic fluid systems serving
              one each operational poly plants.
              VMSS was appointed by both Indorama Ventures and Euroasiatic (the main
              contractor for the Trigen plant) to engineer and execute this integration. Our scope of
              work included:
               Detailed analysis of temperature, flow, and pressure requirements for the
              poly plants
               Development of P&amp;ID for the new thermic fluid WHR Heaters integrating the
              two fired thermic fluid Heater systems along with their connected poly
              plants
               Piping design and pressure drop calculations
               Piping stress analysis to ensure mechanical safety and long-term reliability
               Heater and pump sizing for optimal flow and thermal performance so that the
              two fired Heater systems can be kept as standby
               Support during commissioning, ensuring smooth transition and integration
              We are proud to highlight that the poly plant operations were not disrupted during
              the commissioning of the entire power and waste heat recovery system—a
              significant achievement in such a complex brownfield integration.
              Our technical expertise was highly appreciated by both Euroasiatic and Indorama
              Ventures, reinforcing our reputation for delivering high-quality engineering solutions
              under challenging conditions.`
  },
  {
    title: "Sappi Rockwell Solutions Ltd.",
    category: "Incinerators",
    content: `Sappi Rockwell Solutions Ltd., Scotland is a company involved in flexible packaging and
              coating products. They had an old thermic fluid VOC (Volatile Organic Compounds)
              incinerator having thermic fluid heat recovery. In 2017 they had multiple failure in the
              thermic fluid Heater coils. They consulted us on root cause analysis as well as on how
              to rectify the Incinerator since it was linked with the production. We not only investigated
              the cause of failure but also guided them on how to convert the Incinerator into a
              separate furnace followed by the thermic fluid heat recovery unit. We supplied them the
              thermic fluid heat recovery unit as well as provided all the necessary support for
              modifying the Incinerator.
              We also converted many of the gas fired hot air generators integrated into the coating
              machines to thermic fluid heated systems. We supplied them the heat exchangers,
              control valves, pumps etc. needed for these operating cost saving projects.`
  },
  {
    title: "Ginni Filaments",
    category: "Paralleling of Heaters",
    content: `Ginni Filaments Ltd., located in Ankleshwar, specializes in the manufacturing of wet
              wipes. Their facility is equipped with five gas engines fitted with thermic fluid heat
              recovery units (HRUs), as well as two thermic fluid fired heaters, each with a
              capacity of 1 million kcal/h.
              Originally, the system featured multiple expansion tanks for both the heaters and the
              HRUs, leading to complexity in operation and inability of operating the Heaters in
              parallel. We provided an engineering solution to:
               Integrate all thermic fluid circuits (heaters and HRUs)
               Consolidate the multiple expansion tanks into a single, centralized
              expansion tank
               Enable parallel operation of all thermic fluid heaters for greater flexibility and
              efficiency
               The parallel operation of all the fired and unfired Heaters, resulted in operational
              fuel cost savings
              The redesigned and simplified system, implemented in 2015, has been operating
              reliably and efficiently since then, demonstrating the long-term effectiveness of our
              engineering approach.`
  },
  {
    title: "Radha-Swami Satsang (RSS) -  Byas",
    category: "System Consultancy",
    content: `Radha-Swami Satsang (RSS) – Byas, have been in touch with us since 2017 for
              consultancy to estimate heat load, size thermic fluid Heater, its piping and controls,
              suitable changes in the kitchen equipment like Rice Cooker, Fryers, Hot Plates for
              making Roties/Chapattis etc. so that the targeted cooking rates are met as well as these
              equipment are made suitable for thermic fluid heating I cooking system.
              RSS have also consulted us for selection of appropriate thermic fluid for the kitchen
              requirements both at 280 deg.C and 320 deg.C,, for making P&amp;ID for the three thermic
              fluid heaters, piping design, cooking equipment modifications etc. They are extremely
              happy with the services and technical support provided and our overall technical
              expertise. Their kitchen facility provides food for 20,000 devotees at a time!!!`
  },
  {
    title: "Bharat Rasayan Ltd.",
    category: "System Consultancy",
    content: `We appointed by Bharat Rasayan Ltd. (BRL) – Dahej, for 360 Deg. C. thermic fluid system in 2017. We
              guided BRL right from selection of thermic fluid and basic P&amp;ID development of the system. we also
              provided them drawings of expansion tank deaerator tank and sized various components of the
              system. Entire system detailing was done by VMSS including control scheme, electric heater &amp; dump
              cooler sizing etc.
              They are very happy with our engineering work. The system is working satisfactorily since 2017.`
  },
  {
    title: "BRB Silicon Synthesis", 
    category: "System Consultancy",
    content: `BRB Silicon Synthesis is a global specialty chemical manufacturing company. For their
              plant at Selangor – Malaysia, we have done consultancy for the following:
               To connect two number gas fired Heaters in parallel
               Developing P&amp;ID having eight secondary loops along with sizing of secondary
              pumps, control valves, etc. All these loops are operating at different temperatures
              and thereby have reduced the number of Heaters requirement.
               Stress analysis of the thermic fluid piping.
               Reduced the number of expansion and overflow tanks etc. and reduce the overall
              project costs.
              They are very happy with the technical support we have provided to BRB Silicon.`
  },
  {
    title: "DIC/SunChemical", 
    category: "System Consultancy",
    content: `DIC/SunChemical is a par of multinational group of DIC Chemicals and manufacture ink
              from natural raw material, mainly for exports located in Dahej and 5-6 other places in
              India. They did one backward integration at Dahej wherein they had to handle wax and
              related process for ink. For this DIC was to go in for additional boiler or electrical
              thermic fluid Heater as per the process licensee.  DIC appointed us engineering
              consultants and DIC utilized earlier gas fired bigger 2 no. Heaters of 1 m kcal/h each
              which were a bit underutilized and used for the main process heating. The plant has
              been working satisfactory since 2020. DIC is very happy with the design engineering
              support given by VMSS for the complete WAX plant for Heating requirement.

              Earlier, in 2015, VMSS also supplied us a proper deaerator in thermic fluid system to
              resolve issue of pump cavitation leading to frequent mechanical failures in the thermic
              fluid system. VMSS had also done exhaustive audit of thermic fluid system for safer
              operation. The above work was based on our this support.`
  },
  {
    title: "Elantas Beck India Ltd.", 
    category: "System Consultancy",
    content: `Elantas Beck India Limited is a chemical manufacturing company specializing in
              electrical insulation and construction chemicals. It is part of the ALTANA group, a global
              specialty chemicals company having plants at Pune and Ankaleshwar. We have been
              supporting both the plants on thermic fluid systems since 2015. They were facing issues
              with expansion tank corrosion, thermic fluid secondary loops for better temperature
              control, piping stress analysis, Hazop studies etc. We have also done heat load
              estimate for some special processes. They are our happy customers giving us repeat
              business regularly.`
  },
  {
    title: "Gulf India", 
    category: "System Consultancy",
    content: `Gulf Lubricating (GL) Oil Blending Pant is at Kathivakkam, near Chennai – India. For this plant, entire
              thermic fluid system design consultancy was given to us. GL required thermic fluid in the plant at
              two different temperatures and the temperature control we expected to be very fine due to the
              blending chemicals we handle. Our scope included development of complete PID of thermic fluid
              system, various secondary pump sizing, control valves sizing, piping sizing, pressure drop calculations
              as well as process side calculation like heat load estimate, checking of heating coils suitability,
              estimation of heat losses etc. We also provided us deaerator tank, expansion tank and mixing tank
              drawings apart from supply of critical control valves. With the past experience they have, they made
              the system simpler to operate and reduced project cost by optimizing the flow rates of thermic fluid.
              We also provided on site guidance for commissioning. This plant is working satisfactorily since 2018.`
  },
  {
    title: "Huhtamaki PPL Ltd.", 
    category: "System Consultancy",
    content: `Huhtamaki PPL Ltd. is a multinational flexible packaging company located at four places
              in India apart from overseas offices. This company has been associated with VMSS
              since 2014. Since then they have been taking our services for the thermic fluid systems
              at their plants. We have eliminated booster circuit after studying their thermic fluid
              system including Heater and the process machinery. They work with us for all of their
              theric fluid system design.`
  },
  {
    title: "Konark Fabtech India Pvt. Ltd.", 
    category: "System Consultancy",
    content: `Konark Fabtech India Pvt. Ltd are based in Nasik and undertakes turnkey project of
              Design to commissioning of Industrial Utility equipment. They executed a large
              projected related to heating &amp; cooling process equipment for Graphite India Ltd. (GIL) at
              Satpur Nashik and Durgapur, West Bengal for solid impregnation pitch handling, melting
              storage and transfer system. The heating fluid was Thermic fluid and it also had a
              jacked piping for pitch transfer.
              Konark had appointed us for the design work for this project. The two projects of Liquid
              Pitch Handling and Pitch Impregnation Have been done by us successfully. The plants
              are in operation since 2020.`
  },
  {
    title: "IPG Asia Ltd.",
    category: "System Consultancy",
    content:` IPG – Asia is a global leader in flexible packaging, with a manufacturing facility
              located in Dahej, India. The plant initially operated with a solid fuel-fired thermic fluid
              heater, which was oversized for the application. However, they faced issues with
              unstable process temperatures due to the on-off cycling of the fluidized bed boiler.
              This led to lower production rates and inconsistent product quality.
              Upon being consulted, VMSS conducted a thorough evaluation of the system and
              identified the root cause of the issue. Our solution involved:
               Designing and supplying a secondary thermic fluid circuit with precise
              temperature control
               Implementing system modifications that allowed the coating machines to
              operate at higher throughput and produce better quality output
               Maintaining the same primary heater capacity, thus avoiding capital
              expenditure on a new unit
               In face the company went in for an expansion without adding to the thermic
              fluid Heater capacity.
              Following the successful performance of the upgraded system, IPG appointed VMSS
              again during their plant second expansion. Our scope included:
               Engineering consultancy for integration of a newly purchased heater
               Design of thermic fluid piping for the expanded process
               Enabling parallel operation of both heaters to ensure redundancy, load
              sharing, and future scalability
              These enhancements have significantly improved reliability, process control, and
              production efficiency, making VMSS a trusted engineering partner for IPG.`
  }
];


export default function SuccessStories() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({});

  const categories = ["All", "Audits", "Combustion Systems", "Efficiency Enhancement", "Heater Repair", "Heating and Cooling", "High Capacity Heaters", "Incinerators", "Paralleling of Heaters", "System Consultancy"];

  const filteredStories =
    filter === "All"
      ? storiesData
      : storiesData.filter((story) => story.category === filter);

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="stories-container">
      <h2>Our Success Stories</h2>
      <p style={{textAlign: "center", fontSize: "20px"}}>Read about all of our success stories where we helped our clients meet their goals and exceeded their expectations.</p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="stories-grid">
        {filteredStories.map((story, idx) => {
          const isExpanded = expanded[idx];
          const previewText =
            story.content.length > 160 && !isExpanded
              ? story.content.slice(0, 160) + "..."
              : story.content;

          return (
            <div className="story-card" key={idx}>
              <div className="story-header">
                <h3>{story.title}</h3>
                <p className="story-category">
                  <strong>Category:</strong> {story.category}
                </p>
              </div>

              <div className="story-content">{previewText}</div>

              {story.content.length > 160 && (
                <button className="story-toggle" onClick={() => toggleExpand(idx)}>
                  {isExpanded ? "Show Less ▲" : "Read More ▼"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
