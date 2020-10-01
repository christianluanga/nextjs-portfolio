import React from "react"
import Link from "next/link"
import {Button} from "react-bootstrap"
import Head from "next/head"

const About = () => {
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-172500369-2"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-172500369-2');
        </script>
      </Head>
      <section>
        <h1>Christian L Munyika</h1>
        <img id="profile" src="/static/profile.jpg" />
        <p id="intro">
          I am a junior web developer with 2+ year of work experience as a
          Technical Consultant at Objectif Lune and 6 months of internship as a
          desktop support in the Department of Electrical Electronics and
          Computer Engineering at CPUT
        </p>
        <p>
          I am a young and web developer, I am originally from DR. Congo, I
          moved to Cape Town, Soth Africa in October 2013 and I have been living
          here since, I am a quiet, lovable, and team player. I love listening
          to music that I've come up with a slogan of my own that goes like this
          everything is better with music. I'm more into R&B, old school rap,
          and smooth Jazz. I also jog regularly in the morning as this habit has
          proven to keep me focused and strong throughout the day.
        </p>
        <p>
          Objectif Lune (OL) is an innovative software company recognized as a
          leader in document composition, business process automation,
          multi-channel output, and capture solutions. My work did not stop at
          extractig data, after the data extraction I would then create on or
          more templates to visualize the data. The template could be a PDF be
          sent a printer,saved into a folder or even sent to Document management
          systems such as DocuWare, Laserfiche or SharePoint. see more details
          on my linkedIn.
        </p>
      </section>
      <section id="education-section">
        <h3>Education</h3>
        <ol style={{listStyle: "upper-roman"}}>
          <li style={{listStyle: "2px"}}>
            <strong>2018-Current, Bachelors Computer Systems</strong> I am
            currently one subject away from completing my Bachelors in Computer
            Systems. This course offers advanced concepts on topics that were
            introduced in the <abbr title="National Diploma">ND </abbr>
            course. Concepts like
            <em>
              {" "}
              Distrubuted Datatabase, Object Oriented Database, Database
              programming - writting scripts to handle triggers and stored
              procedures.
            </em>
            I also studied Software Engineering, a subjects that though me thae
            different approaches to Software Development to take depending on
            the type and size of the project. For example: when developing a
            <em>
              <strong>game</strong>
            </em>
            the features can be realised regularly even without performing
            thorough testing and follow the user's feedback to improve the
            features and/or Implement new ones. When building
            <em>
              <strong>
                systems such as flight control, nuclear station control system
              </strong>
            </em>
            ,the application must be developed in full as per the requirements
            and thoroughly tested and simulated before it is implemented.
          </li>
          <li style={{marginTop: "2rem"}}>
            <strong>2014-2017,National Diploma</strong> I started my studies in
            Computer Systems at CPUT in the winter of 2014, the programme
            includes 2 year of studies and on year of internship. During the
            majority of the 1<sup>st</sup>
            year I studied general electrical engineering subjects. The 2
            <sup>nd</sup>
            included subjects related to computer engineering such as:
            <ul style={{listStyle: "circle", marginTop: "0px"}}>
              <li>Networks Systems - certified in CCNA 1-4</li>
              <li>Relational Database design and Implementation</li>
              <li>Digital System - Microcontroller Programming</li>
              <li>Programming in Java and C</li>
              <li>System Analysis</li>
            </ul>
          </li>
          <li style={{marginTop: "2rem"}}>
            <strong>Work Experience</strong>
            <ol>
              <li>
                <strong>
                  Aug 2017 - Feb 2018 (7 months) Trainee Technician
                </strong>
                <p>
                  For 7 months I worked as a desktop support trainee technician,
                  my day to troubleshooting and fixing network issues, helping
                  students with their practical lab work and doing minor
                  hardward repairs.
                </p>
                <p>
                  During using Java, JavaFx and MySQL. The purpose of the
                  application is to facilitate the process of selling components
                  to the students. Each student has their ownaccount which they
                  top up every time their balance runs low. The application also
                  keeps a record of all transactions performed on account for
                  auditing and dispute purposes. The application is also able to
                  issue a warning is issued when a component is running low on
                  stock so that appropriate action can betaken by the Lab
                  supervisor.
                </p>
              </li>
              <li>
                <strong>Objectif Lune March 2018 - March 2020 </strong>
                <p>
                  Objectif Lune (OL) is an innovative software company
                  recognized as a leader in document composition,business
                  process automation, multi-channel output, and capture
                  solutions.
                </p>
                <p>
                  My work did not stop at extractig data, after the data
                  extraction I would then create on or more templates to
                  visualize the data. The template could be a PDF be sent a
                  printer,saved into a folder or even sent to Document
                  management systems such as DocuWare, Laserfiche or SharePoint.
                  see more details on my linkedIn &nbsp;
                  <a href="https://www.linkedin.com/in/christian-luanga/">
                    here
                  </a>
                </p>
              </li>
            </ol>
          </li>
          <li>
            <strong>Skills and Competence</strong>
            <br />
            <span>
              I am skilled on the following programming languages and
              technologies
            </span>
            <ul>
              <li>
                <i className="fab fa-js"></i>
                JavaScript
              </li>
              <li>
                <i className="fab fa-html5"></i>
                HTML/CSS
              </li>
              <li>
                <i className="fab fa-java"></i>
                Java
              </li>
              <li>jQuery</li>
              <li>SQL</li>
              <li>
                <i className="fas fa-layer-group"></i>
                Database design and Implementation
              </li>
              <li>
                <i className="fas fa-server"></i>
                Basic Networks understanding
              </li>
            </ul>
          </li>
          <li className="mr-2">
            <strong>Reference</strong>
            <br />
            <span>
              CPUT - Philip Mzisa Supervisor. Phone: +27 (83) 873-0983 Email:
              msizap@cput.ac.za
            </span>
            <br />
            <span>
              Objectif Lune - Janine Wewege Project Manger. Phone: +27 (76)
              865-0780
            </span>
            <br />
            <span>
              Objectif Lune - Jonathan Ngbonga Team leader. Phone: +27 (79)
              218-1732
            </span>
          </li>
        </ol>
      </section>
      <footer>
        <div>
          <Link href="/">
            <a>
              <Button variant="link">Home</Button>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <Button variant="link">projects</Button>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Button variant="link" color="danger">
                Contact
              </Button>
            </a>
          </Link>
        </div>
      </footer>

      <style jsx>
        {`
          img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
          }
        `}
      </style>
      <style global jsx>{`
        body {
          background: #d2dae2;
          width: 80%;
          margin: 0 auto;
          font-size: large;
          text-align: justify;
        }
      `}</style>
    </div>
  )
}

export default About
