import PageTitle from "@/components/sections/pageTitle";

const ProjectDetailsOne = () => {
  return (
    <>
      <PageTitle title="Project Details" currentPage="Project Details" />
      <section className="Project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-items">
                  <div className="details-image">
                    <img
                      src="/img/service/proyectos.jpg"
                      alt="Aigües de Girona Solar Project"
                    />
                  </div>
                  <div className="row g-4 justify-content-between">
                    <div className="col-lg-7">
                      <div className="details-content pt-5">
                        <h3>Aigües de Girona / Cicle de l&apos;Aigua del Ter</h3>
                        <p>
                          This solar photovoltaic installation was commissioned at
                          the Montfull&agrave;-Bescan&oacute; Water Treatment Plant in
                          the municipality of Bescan&oacute;, Girona. The project has
                          been in operation since 2004, representing one of the early
                          implementations of renewable energy in water treatment
                          facilities in Catalonia.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="project-catagory">
                        <h3>Project Info: </h3>
                        <ul>
                          <li>
                            Client:
                            <span>Cicle de l&apos;Aigua del Ter, SA &ndash; CATSA</span>
                          </li>
                          <li>
                            Category:
                            <span>Solar Energy</span>
                          </li>
                          <li>
                            Location:
                            <span>Bescan&oacute;, Girona</span>
                          </li>
                          <li>
                            Capacity:
                            <span>28.62 kWp</span>
                          </li>
                          <li>
                            Year:
                            <span>2004</span>
                          </li>
                          <li>
                            Share:
                            <span>
                              <i className="fa-brands fa-facebook-f me-3" />
                              <i className="fa-brands fa-instagram me-3" />
                              <i className="fa-brands fa-linkedin-in" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="details-content pt-3">
                    <h3>Technical Specifications</h3>
                    <p>
                      The installation features 180 monocrystalline ISOFOTON I-159
                      panels, each with 159 Wp capacity, totalling 28.62 kWp. The
                      system includes 6 Ingeteam inverters of 5 kW each, with panels
                      positioned at a 35&deg; tilt angle facing south for optimal solar
                      exposure. The installation covers 1,073 m&sup2; with an aluminium
                      structure fixed on concrete foundations and includes remote
                      monitoring via modem.
                    </p>
                  </div>

                  <div className="row g-4 pt-5">
                    <div className="col-lg-3 col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          180 Monocrystalline Panels
                        </li>
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          6 Ingeteam 5kW Inverters
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          35&deg; Tilt Angle South-Facing
                        </li>
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          Remote Monitoring System
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          1,073 m&sup2; Surface Area
                        </li>
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          Aluminum Fixed Structure
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          34,080 kWh Annual Production
                        </li>
                        <li>
                          <i className="fa-regular fa-circle-check" />
                          32t CO<sub>2</sub> Annual Savings
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="details-content pt-5">
                    <h3>Performance &amp; Environmental Impact</h3>
                    <p>
                      The installation delivers an estimated annual production of
                      34,080 kWh, confirmed through comprehensive performance
                      testing. This translates to a specific yield of approximately
                      1,190 kWh/kWp&middot;year, which is excellent for the Girona
                      region with the 35&deg; tilt configuration. The project generates
                      significant environmental benefits, avoiding 32 tonnes of CO
                      <sub>2</sub> and 90 tonnes of SOx emissions annually.
                    </p>

                    <div className="row g-4 mt-4">
                      <div className="col-lg-6">
                        <div
                          style={{
                            backgroundColor: "#f8f9fa",
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h5
                            style={{
                              color: "#77B80F",
                              marginBottom: "15px",
                            }}
                          >
                            Economic Performance
                          </h5>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Annual Revenue:</strong> &euro;14,993
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Total Investment:</strong> &euro;203,500
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Payback Period:</strong> 8 years
                            </li>
                            <li>
                              <strong>Subsidies:</strong> &euro;52,739.30
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          style={{
                            backgroundColor: "#f8f9fa",
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h5
                            style={{
                              color: "#77B80F",
                              marginBottom: "15px",
                            }}
                          >
                            Technical Highlights
                          </h5>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Panel Type:</strong> ISOFOTON I-159
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Inverter Brand:</strong> Ingeteam
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                              <strong>Specific Yield:</strong> 1,190 kWh/kWp&middot;year
                            </li>
                            <li>
                              <strong>Monitoring:</strong> Remote via modem
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-5">
                    <div className="col-lg-6 col-md-6">
                      <div className="thumb">
                        <img src="/img/project/details-2.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="thumb">
                        <img src="/img/project/details-3.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="preview-area">
                  <div className="preview-item">
                    <img src="/img/project/p-1.png" alt="img" />
                    <div className="content">
                      <h3>Preview</h3>
                      <p>Analytic Solutions</p>
                    </div>
                  </div>
                  <div className="preview-item">
                    <div className="content text-right">
                      <h3>Next</h3>
                      <p>Software Development</p>
                    </div>
                    <img src="/img/project/p-2.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsOne;