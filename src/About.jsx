
const About = () => {
  return (
    <section className="about" id="about">
      <div data-aos="fade-up">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-img" data-aos="fade-down" data-aos-delay="500">
        <img src="../Assets/bip.jpg" alt="Biplav's portrait" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <div data-aos="fade-right" data-aos-delay="700">
          <h3 className="animation">
            Developer <span>&</span> Designer <span>!</span>
          </h3>
        </div>

        <div data-aos="fade-left" data-aos-delay="700">
          <p>
            An student currently pursuing a diploma in Computer Engineering with a passion for technology and innovation. Possesses strong problem-solving, analytical, and communication skills and eager to learn and contribute to team success. Seeking opportunities to apply academic knowledge and gain practical experience in the field of engineering.
         </p>
        </div>

        <div className="btn-box btns" data-aos="fade-up" data-aos-delay="800">
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
