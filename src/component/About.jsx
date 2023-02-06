import "./css/About.css";

function About() {
  return (
    <div>
      <section>
        <div className="container container-about">
          <h1 className="about-title">About</h1>
          <div className="about">
            <div className="about-content">
              <p>
                Pokemon Encyclopedia Website is a website that provides users
                information about plethora of Pokemon characters. This website
                uses{" "}
                <a className="about-link" href="https://pokeapi.co/docs/v2">
                  PokeAPI
                </a>{" "}
                to obtain all the data required to achieve its functionality.
                This project is done mainly to fulfill the requirement of
                applying an intern position as website developer at{" "}
                <a className="about-link" href="https://gravel.co.id/">
                  Gravel
                </a>
                . This project is developed using React JS which is based on
                Javascript languange, and CSS to help with the design and
                styling of the website. A couple of package manager, NPM (Node
                Package Manager) are also used to help building the website.
              </p>
            </div>
            <div className="about-content author">
              <p>Author : Mohammad Yahya Ibrahim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
