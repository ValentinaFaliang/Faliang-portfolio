import React from "react";
import "./about.scss";



const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <title>
          <h1>About</h1>
        </title>
        <main>
          <p>
            My name is Valentina Vlasenko or simply Faliang. I’m a junior
            frontend software engineer & freelance web developer in
            Saint-Petersburg -- with roots in teaching chinese & chinese
            translating. I'm passionate about art, technology, chinese and
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
            My freelance web development roots are in Wordpress & Shopify, of
            which I'm self taught. In 2017, I started at UCLA to broaden my
            knowledge of the Node.js ecosystem. Since then, I fell in love with
            & have been primarily using React & Redux in web applications. For
            static sites, I love using Gatsby for creating blazing fast,
            SEO-driven headless frontend user interfaces.
          </p>
          <p>
            Whether you're a business owner looking to get started on a app or
            web development project with a freelance web developer, a developer
            looking to collaborate on something cool, or just wanting to say hi,
            shoot me a message and let's work together.
          </p>
        </main>
      </div>
    </section>
  );
};

export default About;
