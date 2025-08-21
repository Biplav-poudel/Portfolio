
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat blanditiis necessitatibus perspiciatis expedita iste beatae labore repudiandae et natus est cumque eius quas exercitationem, obcaecati doloribus aut vero nobis quia aperiam sint ad quis. Consequuntur eius omnis facere cumque facilis repellendus nostrum ipsum et aliquam, quam iusto blanditiis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos sint delectus pariatur repudiandae nisi hic perspiciatis dolorem odio, velit sit. Natus soluta adipisci porro ducimus ea excepturi eius velit.
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
