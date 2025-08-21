

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div data-aos="fade-up">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
      </div>
      <form action="">
        <div className="input-group" data-aos="fade-right" data-aos-delay="500">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group" data-aos="fade-right" data-aos-delay="500">
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          </div>
          <div className="input-group-2" data-aos="fade-left" data-aos-delay="500">
            <textarea
              name="textarea"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <input type="submit" value="Send" className="btn"data-aos="fade-right" data-aos-delay="500"></input>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
