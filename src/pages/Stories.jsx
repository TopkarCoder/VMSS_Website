import { useState } from "react";
import './Stories.css';
import ReactMarkDown from "react-markdown";

const storiesData = [
  {
    title: "Rajashree Polyfils & Century Enka",
    category: "Audits",
    content: 
`Rajashree Polyfils and Century Enka are prominent fiber manufacturing units producing
a wide range of fibers, including specialty fibers for automobile tire applications. Their
operations include the use of high-capacity heating systems, comprising:
- Three heaters of 4.5 million kcal/h capacity, fired by Furnace Oil (FO) and
Natural Gas (NG)
- Two heaters of 4 million kcal/h capacity, utilizing wood sawdust as fuel

These heating systems are critical to their production processes but also represent
significant energy consumption areas.
The companies engaged our services to conduct a comprehensive energy audit aimed
at identifying inefficiencies and opportunities for energy conservation. Through detailed
analysis of the thermal systems, fuel usage patterns, and process requirements, we
provided actionable recommendations that addressed both operational and combustion
inefficiencies.

Key Outcomes:
- Identified cost-effective energy-saving opportunities
- Optimized heater performance and fuel mix
- Reduced overall energy consumption and emissions
- Improved bottom-line profitability during a period of global downturn in the fiber
industry

Our intervention played a crucial role in helping Rajashree Polyfils and Century Enka
navigate challenging market conditions by enhancing their energy efficiency and
operational resilience.`
  },
  {
    title: "JSW Dolvi Plant",
    category: "Combustion Systems",
    content: 
`**Burner Diffuser Retrofit for JSW – Dolvi Plant**
At JSW Steel’s Dolvi Plant, we were entrusted with a prestigious and technically
challenging assignment involving their 204 TPH Chinese boiler, which operates on a
combination of Blast Furnace Gas (BFG), Coke Oven Gas (COG), and Natural Gas
(NG). The boiler is equipped with 12 burners designed for multi-gas firing for Power
generation.

**Challenge:**
The plant was facing recurring failures of the **gas burner diffusers**, leading to frequent
breakdowns and unscheduled stoppages of the boiler—significantly affecting Power
Plant reliability and performance.
Our Intervention:
- Conducted a detailed assessment of the existing burners and diffuser design
- Engineered and implemented critical modifications in burner construction
- Redesigned and replaced the burner diffusers with a more robust and reliable
configuration.

Outcome:
Since the implementation of our improved diffuser design in 2016, the burners have
been operating trouble-free, with zero failures reported—resulting in enhanced
reliability, reduced downtime, and improved overall boiler performance.
This successful intervention stands as a testament to our capability in solving complex
combustion challenges in high-capacity, multi-fuel industrial boilers.`
  },
  {
    title: "SI Group - India Pvt. Ltd.",
    category: "Combustion Systems",
    content: 
`SI Group – India Pvt. Ltd., located in Navi Mumbai (New Bombay), is a leading
manufacturer of Phenol and its derivatives. As part of their drive towards cleaner and
more flexible fuel options, the company sought to convert their existing boiler systems
from Furnace Oil (FO) firing to multi-fuel capability, including Natural Gas (NG) and
Propane.

We were entrusted with the complete burner retrofit solution for their:
- 5 TPH Boiler
- 14 TPH Boiler
Scope of Work:
- Retrofit of existing FO-fired burners to support dual fuel operation (NG +
Propane)
- Engineering and supply of all gas train components, ensuring compliance with
safety and performance standards
- Development of P&amp;ID diagrams tailored for the multi-fuel system
- Design and implementation of PLC-based control logic for seamless and safe
burner operation under varying fuel conditions

This project enhanced SI Group’s operational flexibility, reduced emissions, and
supported their long-term sustainability goals by transitioning to cleaner-burning fuels.
The above work was given to us based on Vivek Sathaye’s earlier association for
converting on API Heater from FO firing to NG cum Propane firing. The API Heater was
converted from natural draft burners to forced draft burner with heat recovery in terms of
combustion air for 4 no. burners. This work was done when Sathaye was with Thermax.`
},
  {
    title: "Asia Pacific Fibers",
    category: "Efficiency Enhancement",
    content: 
`**Asia Pacific Fibers** is a leading integrated global manufacturer of polyester chips,
staple fiber, filament yarn, and fleece fabric, with in-house PTA production capabilities.
The company operates **three Bertram high-temperature heaters**, each with a
**capacity of 14 million kcal/h.** In 2016, we successfully upgraded these heaters by
installing **larger combustion air preheaters**, increasing the combustion air preheat
temperature from **160°C to 230°C**.

As part of this upgrade, we also:
- Supplied **PLC control panels** with CPU, power supply, and I/O redundancy for
improved reliability.
- Provided **burner retrofits** designed to handle higher combustion air preheat
temperatures.
- Installed an **online oxygen analyzer** to optimize combustion control and
maintain consistently low excess air.
- Delivered **on-site support** during commissioning and operational phases to
ensure seamless integration and performance.

Since the upgrade in 2016, the combustion air preheater system and associated
components have been operating satisfactorily. We continue to support Asia Pacific
Fibers with their heater-related engineering requirements, ensuring reliable and
efficient operations.`
  },
  {
    title: "Indorama Nagpur",
    category: "Heater Repair",
    content: 
`**Indorama** is a multinational group primarily engaged in the manufacturing of man-made
fibers, with over 150 plants worldwide. At their Nagpur facility, they operate two 10
million kcal/h and two 8 million kcal/h capacity Dowtherm vaporizer heaters,
originally supplied by Bertrams – Germany.

In 2023, these heaters experienced frequent Heater coil failures due to sulfur
corrosion issues, specifically at the outer coil bottom sections and the top roof
coils. 

We were entrusted with the critical and challenging task so that the life of the
Heaters can be extended by:
- Replacing the top roof coils, and
- Changing few bottom turns of the outer coils affected by corrosion.
- Changing few top turns of inner coil
- Removal of bottom roof coils

Despite the complexity and constraints of the job, the project was completed
successfully, restoring the heaters to safe and efficient operation. These units have
been running satisfactorily since the repairs were completed in 2021-22.
We have also guided Indorama Thailand on repair of their high temperature heater
coils leakage at Rayong and at Nakhronpathon.`
  },
  {
    title: "Supreme Petrochem Ltd.",
    category: "Audits",
    content: 
`**Supreme Petrochem Ltd.** is a leading **polystyrene manufacturer** located in
**Nagothane**, Raigad district, Maharashtra. Their manufacturing process demands
**precise temperature control** for optimal performance.

We have been associated with **Supreme Petrochem** since **2015**, providing a range of
engineering and energy optimization services, including:
- **Integration of separate systems**: Initially, they had independent expansion
tanks for the cooling system and heaters. We engineered a solution to
combine all systems into a unified setup by supplying multiple deaerator
tanks.
- **Piping design and stress analysis**: During their expansion, we carried out
complete engineering, including stress analysis of thermic fluid jacketed
piping, ensuring reliable and safe operation.
- **System audits and cost-saving recommendations**: We have conducted
multiple audits of their thermic fluid, cooling water, and steam systems,
providing actionable suggestions to reduce operating costs and enhance
system efficiency.

Our continued engagement reflects their confidence in our **technical capabilities and
engineering support.**`  },
  {
    title: "Other Heater Repairs",
    category: "Heater Repair",
    content:
`We have carried out thermic fluid heater repairs at **Indorama, Nagpur**, along with several other notable projects, including:
- Coil leakage repair of a Bertram make heater at Garden Vareli, Surat
- Leakage repair of a 1 million kcal/h Thermax heater at DIC Fine Chemicals,
Dahej
- Repair work on a 10 million kcal/h high-temperature Chinese heater at
Rajrayon
- Partial inner coil replacement (50% of the length) along with roof coil
replacement on a 10 million kcal/h Thermax make heater
- We have also guided Indorama Thailand on repair of their high temperature
heater coils leakage.
Our team consists of skilled welders and fitters experienced in high-temperature
heater repairs. Additionally, we have the engineering expertise to modify heater
construction where necessary, ensuring reliable and efficient long-term performance.`
  },
  {
    title: "Asian Paints",
    category: "Heating and Cooling",
    content: 
`Asian Paints Ltd. (APL) has been relying on our expertise for their thermic fluid systems at their
resin manufacturing plants. Our engagement is focused on both engineering support and system
optimization, addressing critical operational challenges and improving overall reliability.
Key contributions include:
- Stress analysis of thermic fluid piping in the resin floor area, where repeated pump seal
failures were occurring. Our analysis helped identify root causes and implement design
improvements to prevent future issues.
- Heater tuning and burner modification, including making existing thermic fluid heaters
compatible with biogas firing, enhancing fuel flexibility and sustainability.
- Comprehensive system engineering for thermic fluid systems, which included:
- P&amp;ID development
- Heat load calculations
- Selection of number and capacity of heaters
- Specification of key components, such as control valves, transmitters, pumps etc.
- Development of control philosophy for integrated and efficient operation

APL has expressed high satisfaction with our services, and we continue to work with them on
multiple assignments, reinforcing a long-standing and trusted partnership.`
  },
  {
    title: "Kansai Nerolac",
    category: "Heating and Cooling",
    content: 
`Kansai Nerolac Paints is a global leader in automotive and decorative paints. At
their resin manufacturing plants in Hosur, Chiplun, and Bawal, we have provided
technical consultancy services to optimize their heating and cooling systems.
In these facilities, thermic fluid is used for both heating and cooling during various
stages of resin production. The cooling requirements vary by process—some require
cooling tower water, while others demand chilled water for precise temperature
control.

Our contributions include:
- System optimization to reduce operating costs
- Improving reliability and safety of thermic fluid systems across different cooling
strategies
- Tailoring solutions for both cooling tower-based and chilled water-based
processes
- We have integrated thermic fluid steam generated, where the thermic fluid Heater
worked on solid fuel, there by reducing operating cost as well as utilizing the solid
fuel thermic fluid Heater optimally.
- We have also introduced thermic fluid from solid fuel fired plant to heat another
special thermic fluid which used to use light oil to earn substantial reduction in
the operating cost.

Our engineering inputs have helped Kansai Nerolac achieve more efficient operations
and enhanced process safety, reinforcing our role as a trusted partner in their
manufacturing excellence.`  },
  {
    title: "PT Euroasiatic (EA)",
    category: "High Capacity Heaters",
    content:
`**PT Euroasiatic (EA)** is an EPC company in energy field, having presence in Singapore, Indonesia,
Philippines and Vietnam. They executed a project for PI Unilever Oleochemical Indonesia in
2017 where EA supplied 4 X 5 M kcal/h capacity thermic fluid heaters. 

The heaters are coal cum Palm Kernel Shell fired. The heaters were to be connected in parallel with the existing NG cum diesel oil
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
    content: 
`**Indorama Ventures** is a leading global manufacturer of specialty fibers and related
petrochemical products. For their Indonesia plant, VMSS provided **comprehensive
consultancy services** for the thermic fluid system, overcoming significant integration
challenges in a complex, multi-source heating environment.
The plant was acquired from another company, and existing system documentation
was incomplete. As part of a major infrastructure upgrade, Indorama installed:
- Two 7.5 MW gas turbines
- Two 7 million kcal/h thermic fluid heat recovery units (WHR Heaters)
- A boiler, hot water heater, and hot water-fired chillers down stream of the
waste heat recovery thermic fluid heater.
These additions were part of a Trigen (tri-generation) power plant, and required
seamless integration with existing two independent thermic fluid systems serving
one each operational poly plants.

VMSS was appointed by both Indorama Ventures and Euroasiatic (the main
contractor for the Trigen plant) to engineer and execute this integration. Our scope of
work included:
- Detailed analysis of temperature, flow, and pressure requirements for the
poly plants
- Development of P&amp;ID for the new thermic fluid WHR Heaters integrating the
two fired thermic fluid Heater systems along with their connected poly
plants
- Piping design and pressure drop calculations
- Piping stress analysis to ensure mechanical safety and long-term reliability
- Heater and pump sizing for optimal flow and thermal performance so that the
two fired Heater systems can be kept as standby
- Support during commissioning, ensuring smooth transition and integration

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
    content: 
`**Sappi Rockwell Solutions Ltd.**, based in Scotland, is a manufacturer of flexible packaging and coating products.  

In 2017, they experienced multiple coil failures in their **thermic fluid VOC (Volatile Organic Compounds) incinerator**, which was critical to their production and featured thermic fluid heat recovery.  

Sappi approached us for **technical consultancy** and **root cause analysis** and to bring back the incineration into operation at the shortest possible time.  

Our scope of work included:  

- Conducting a detailed investigation into the coil failures  
- Recommending and guiding the conversion of the VOC incinerator into a standalone furnace, followed by a thermic fluid heat recovery unit to decouple critical heating from direct incinerator operation  
- Supplying the new thermic fluid heat recovery unit  
- Providing complete engineering support for the modification of the incinerator, ensuring integration with production and safety systems  

In addition, we helped Sappi **optimize their coating lines** by converting several gas-fired hot air generators—previously integrated with the coating machines—into **thermic fluid heated systems (since heat from thermic fluid was free)**.  

For these cost-saving upgrades, we supplied:  

- Heat exchangers  
- Control valves  
- Pumps and other key components  

These improvements significantly enhanced **operating efficiency, system reliability, and energy savings**, reinforcing Sappi’s confidence in our **engineering expertise** and **long-term support capabilities**.`
  },
  {
    title: "Ginni Filaments",
    category: "Paralleling of Heaters",
    content: 
`**Ginni Filaments Ltd.**, located in Ankleshwar, specializes in the manufacturing of wet
wipes. Their facility is equipped with five gas engines fitted with thermic fluid heat
recovery units (HRUs), as well as two thermic fluid fired heaters, each with a
capacity of 1 million kcal/h.

Originally, the system featured multiple expansion tanks for both the heaters and the
HRUs, leading to complexity in operation and inability of operating the Heaters in
parallel. We provided an engineering solution to:
- Integrate all thermic fluid circuits (heaters and HRUs)
- Consolidate the multiple expansion tanks into a single, centralized
expansion tank
- Enable parallel operation of all thermic fluid heaters for greater flexibility and
efficiency
- The parallel operation of all the fired and unfired Heaters, resulted in operational
fuel cost savings

The redesigned and simplified system, implemented in 2015, has been operating
reliably and efficiently since then, demonstrating the long-term effectiveness of our
engineering approach.`
  },
  {
    title: "Radha-Swami Satsang (RSS) -  Byas",
    category: "System Consultancy",
    content: 
`**Radha Soami Satsang (RSS), Beas**, has been working with VMSS since 2017 for engineering consultancy related to their large-scale kitchen facility, which prepares meals for over **20,000 devotees at a time**.  

Our scope of work included **end-to-end design and consultancy** for integrating thermic fluid-based heating into various kitchen processes.  

**Key contributions:**  

- Heat load estimation and sizing of thermic fluid heaters  
- Piping and control system design to ensure efficient and safe operation  
- Modifications to key kitchen equipment, such as:  
  - Rice cookers  
  - Deep fryers  
  - Hot plates for roti/chapati preparation  

These modifications allowed all equipment to be compatible with **thermic fluid heating** to meet the targeted cooking rates and maintain hygiene and process reliability.  

- Selection of appropriate thermic fluids for cooking applications at both **280°C and 320°C**, ensuring food-grade safety and thermal efficiency  
- **P&ID development** for three thermic fluid heaters and complete piping layout and system integration  

RSS has expressed **deep satisfaction** with our services and technical expertise.  

Our solutions have enabled them to run their massive kitchen operations **efficiently**, meeting both **scale and food safety standards**.
`
  },
  {
    title: "Bharat Rasayan Ltd.",
    category: "System Consultancy",
    content: 
`In 2017, Bharat Rasayan Ltd. (BRL) at Dahej entrusted us with the engineering of a 360°C thermic
fluid system for their expansion project.

Our scope of work included end-to-end engineering support, starting from:
- Selection of thermic fluid
- Basic P&amp;ID development and HAZOP study
- Design and drawing of the expansion tank and deaerator tank
- Sizing of all critical system components, including:
- Electric heater
- Dump cooler
- Control valves and instrumentation
- Thermic fluid pump

The entire system detailing, including the control philosophy and operating scheme, was carried
out by VMSS. Our solution ensured both thermal reliability and operational safety at high
temperatures.

The system has been operating satisfactorily since 2017, and BRL has expressed high satisfaction
with the quality and thoroughness of our engineering services.`
  },
  {
    title: "BRB Silicon Synthesis", 
    category: "System Consultancy",
    content: 
`**BRB Silicon Synthesis** is a global manufacturer of specialty chemicals, with a production facility located in **Selangor, Malaysia** also.  

We provided **comprehensive engineering consultancy** to optimize their thermic fluid system, delivering both **technical improvements** and **project cost savings**.  

Our scope of work included:  

- **Integration of two gas-fired heaters** into a parallel configuration, enhancing flexibility and redundancy.  
- **Development of a detailed P&ID** incorporating eight secondary loops, each operating at different temperatures, allowing diverse process requirements to be met using a shared heating infrastructure.  
  - This approach eliminated the need for multiple heaters, reducing capital expenditure.  
- **Sizing of secondary pumps, control valves, and other key components** to ensure balanced and efficient flow across all loops.  
- **Stress analysis of the thermic fluid piping system** to ensure long-term reliability and safety.  
- **Optimization of the thermal fluid network**, including reduction in the number of expansion and overflow tanks, which led to a significant decrease in overall project costs.  

**BRB Silicon Synthesis** has expressed **strong satisfaction** with the technical support and value engineering we delivered, acknowledging our role in **optimizing their plant's thermal system design**.
`
  },
  {
    title: "DIC/SunChemical", 
    category: "System Consultancy",
    content: 
`**DIC/SunChemical** is part of the **global DIC Chemicals Group** and specializes in the manufacturing of **inks from natural raw materials**, primarily for exports. Their operations are spread across **Dahej** and **5–6 other locations in India**.  

In **2020**, during a **backward integration project** at their Dahej facility, DIC needed to set up a **new wax processing unit** as part of the ink manufacturing process. The process licensor initially recommended **installing a new boiler or an electric thermic fluid heater** for the wax processing.  

Instead, **DIC appointed VMSS as their engineering consultant**, and based on our assessment, we proposed an **optimized solution** that leveraged **two existing underutilized gas-fired thermic fluid heaters** (1 million kcal/h each) that were already in use for the main ink manufacturing process.  

**Key contributions by VMSS:**  
- **Designed secondary heating circuits** specifically for the wax plant, ensuring reliable, very close tolerance temperature control without requiring the main heaters to operate at reduced temperatures.  
- **Integrated the wax plant and main process plant** into a unified heating system, improving overall efficiency and cost-effectiveness.  
- **Delivered complete engineering support** and supply of critical equipment, ensuring the system met both process requirements and operational safety standards.  

The **combined system has been operating satisfactorily since 2020**, and **DIC has expressed high appreciation** for VMSS’s **design and engineering expertise**.  

Earlier in **2015**, VMSS had also:  
- **Supplied a deaerator unit** to address pump cavitation issues, which were causing frequent piping vibrations and pumps’ mechanical failures in the thermic fluid system.  
- **Conducted a comprehensive audit** of the thermic fluid system to enhance safety and operational reliability.  

This earlier work laid the foundation for **DIC’s continued trust in VMSS**, and our engineering solutions have consistently delivered **operational improvements** and **long-term reliability and safety** in operations.
`
  },
  {
    title: "Elantas Beck India Ltd.", 
    category: "System Consultancy",
    content: 
`**Elantas Beck India Ltd.** is a leading manufacturer of **electrical insulation and construction chemicals**, and a part of the **global ALTANA Group**, a renowned name in specialty chemicals.  

The company operates manufacturing plants in **Pune** and **Ankleshwar**, where **VMSS** has been providing **engineering support since 2015**.  

Our long-term engagement has focused on **enhancing the efficiency, reliability, and safety** of their thermic fluid systems.  

**Key contributions include:**  
- **Addressing expansion tank corrosion issues** through design improvements  
- **Engineering of thermic fluid secondary loops** for improved temperature control and process flexibility  
- **Changes in reactor piping** for better temperature control  
- **Performing piping stress analysis** to ensure safe and reliable system performance  
- **Conducting HAZOP studies** to identify and mitigate potential operational risks  
- **Estimating heat loads** for specialized processes to support equipment selection and system design  

**Elantas Beck** has consistently appreciated our **technical expertise** and **responsive service**, and continues to engage us for **repeat assignments**, underscoring a **strong and trusted partnership**.
`
  },
  {
    title: "Gulf India", 
    category: "System Consultancy",
    content: 
`**Gulf Lubricating (GL) Oil Blending Plant**, located in **Kathivakkam near Chennai, India**, entrusted **VMSS** with the **complete design consultancy** for their thermic fluid system.  

The plant required thermic fluid at **two different temperature levels**, with **precise temperature control** being critical due to the nature of the blending chemicals involved. Also, the **heat load estimation** was a bit challenging due to **multiple storage tanks**.  

**Our scope of work included:**  
- **Development of a comprehensive P&ID** for the thermic fluid system  
- **Sizing of secondary pumps, control valves, and piping**  
- **Pressure drop calculations and flow balancing**  
- **Process-side calculations**, including:  
  - **Heat load estimation**  
  - **Assessment of heating coil suitability**  
  - **Estimation of heat losses**  

**We also delivered:**  
- **Drawings for deaerator tanks, expansion tanks, and mixing tanks**  
- **Supply of critical control valves** to ensure tight temperature control  
- **On-site guidance during commissioning** to ensure smooth and accurate system startup  

Using our **past experience**, we **optimized the Heater capacity, flow rates, and system layout**, allowing **GL** to **simplify operations** and **reduce overall project costs** without compromising on **performance or control precision**.  

The plant has been **operating satisfactorily since 2018**, and the system has consistently met its **performance expectations**.
`
  },
  {
    title: "Huhtamaki PPL Ltd.", 
    category: "System Consultancy",
    content: 
`**Huhtamaki PPL Ltd.** is a **multinational leader in flexible packaging**, with **manufacturing facilities** across **four locations in India**, in addition to its **global operations**.  

The company has been associated with **VMSS** since **2014** for **ongoing support and consultancy** related to **thermic fluid systems** across its Indian plants.  

Over the years, **VMSS** has provided **end-to-end engineering support**, including:  
- **Detailed analysis of their thermic fluid systems**, covering heaters and process machinery  
- **Elimination of unnecessary booster circuits**, resulting in significant operating cost savings  
- **Design and optimization of new and existing thermic fluid systems**, tailored to their process requirements  
- **HAZOP studies and implementation of findings** to ensure safer operations  

**Huhtamaki** continues to **entrust VMSS** with all of their **thermic fluid system design needs**, reflecting their **confidence in our technical expertise**, **cost-conscious approach**, and **long-standing partnership**.
`  },
  {
    title: "Konark Fabtech India Pvt. Ltd.", 
    category: "System Consultancy",
    content: 
`**Konark Fabtech India Pvt. Ltd.**, based in **Nashik**, specializes in **turnkey execution of industrial utility systems**, from **design to commissioning**.  

For a **major project** undertaken for **Graphite India Ltd. (GIL)** at **Satpur (Nashik)** and **Durgapur (West Bengal)**, Konark was responsible for the **design and implementation of heating and cooling systems** for:  
- **Impregnation solid pitch melting**  
- **Solid and liquid pitch handling, storage, and transfer systems**  

The system used **thermic fluid as the heating medium** and included **jacketed piping for liquid pitch transfer**, requiring **precise temperature control** and **robust engineering** due to **degradation of pitch if it gets overheated**.  

Konark appointed **VMSS** to handle the **engineering design** for this project.  

**Our scope included:**  
- **Heating and cooling load estimation**  
- **Complete design and engineering** of the **solid pitch melting system**  
- **Complete design and engineering** of the **solid and liquid pitch handling system**  
- **Design of the pitch impregnation system**  
- **Design and engineering of electrode pre-heating and cooling systems**  
- **Selection and specification of components, piping layouts, and thermal calculations**  

Both the **Solid & Liquid Pitch Handling** and **Pitch Impregnation systems** were **successfully engineered and commissioned by VMSS**.  

The plants have been in **smooth operation since 2020**, meeting **performance and reliability expectations**.
`
  },
  {
    title: "IPG Asia Ltd.",
    category: "System Consultancy",
    content:
`**IPG – Asia** is a **global leader in flexible packaging**, with a **manufacturing facility located in Dahej, India**.  

The plant initially operated with a **solid fuel-fired thermic fluid heater**, which was **oversized for the application**. However, they faced **issues with unstable process temperatures** due to the **on-off cycling of the fluidized bed boiler**.  

This led to **lower production rates** and **inconsistent product quality**.  

Upon being consulted, **VMSS** conducted a **thorough evaluation of the system** and **identified the root cause of the issue**.  

**Our solution involved:**  
- **Designing and supplying a secondary thermic fluid circuit** with precise temperature control  
- **Implementing system modifications** that allowed the coating machines to operate at **higher throughput** and produce **better quality output**  
- **Maintaining the same primary heater capacity**, thus **avoiding capital expenditure** on a new unit  
- In fact, the company went in for an **expansion without adding to the thermic fluid heater capacity**  

Following the **successful performance** of the upgraded system, **IPG appointed VMSS again** during their **plant second expansion**.  

**Our scope included:**  
- **Engineering consultancy** for **integration of a newly purchased heater**  
- **Design of thermic fluid piping** for the expanded process  
- **Enabling parallel operation of both heaters** to ensure **redundancy, load sharing, and future scalability**  

These **enhancements** have **significantly improved reliability, process control, and production efficiency**, making **VMSS a trusted engineering partner for IPG**.
`
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

              <div className="story-content">
                <ReactMarkDown>
                  {previewText}
                </ReactMarkDown>
              </div>

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
