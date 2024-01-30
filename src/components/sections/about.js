import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <title>
          <h1>About</h1>
        </title>
        <main>
          <p>
            My name is <label>Valentina Vlasenko</label> or simply <label>Faliang</label>. I’m a junior
            frontend software engineer & freelance web developer in
            Saint-Petersburg -- with roots in teaching chinese & chinese
            translating. I'm passionate about technology, art, chinese and
            basically everything that has an influence on this wonderful world.
          </p>
          <p>
            My occupation currently consists of a developing my own websites and
            studying frontend development. I find this balancing act to be super
            resourceful in terms my learning as a web developer, as well as for
            keeping up with the rapid expansion of developer tools, libraries,
            frameworks, etc.
          </p>
          <p>
            I began my journey in programming with the desire to create a Russian-Chinese dictionary that met my needs. While developing the dictionary with my partner, I realized that through programming, I could create useful tools for society. That's how my love for JavaScript began.
          </p>
          <p>
            Whether you're a business owner looking to get started on a app or
            web development project with a freelance junior web developer, a developer
            looking to collaborate on something cool, or just wanting to say hi,
            shoot me a message and let's work together.
          </p>
        </main>
      </div>
    </section>
  );
};

export default About;
