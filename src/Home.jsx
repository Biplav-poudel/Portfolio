
const HOME = () => {
  return (
    <section className="home" id="home">
      <div className="home-content" data-aos="fade-down" data-aos-delay="1000">
        <div data-aos="fade-right" data-aos-delay="2000">
          <h1>Hi, It's <span>Biplav</span></h1>
          <h3 className="text-animation">I'm a &nbsp; <span></span></h3>
        </div>
        <div data-aos="fade-left" data-aos-delay="2000">
          <p>
            I am a Grade 12 student currently pursuing a Diploma in Computer Engineering.
            I am highly interested in web development and modern JavaScript technologies.
            I am continuously improving my skills in JavaScript and React.js and enjoy building creative and interactive web applications.
         </p>
        </div>
        <div className="social-icon" data-aos="fade-down" data-aos-delay="2500">
          <a href="https://www.linkedin.com/in/biplav-poudel-a688662bb/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Biplav-poudel"><i className='bx bxl-github'></i></a>
          <a href="https://www.instagram.com/biplavpoudel15/"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.facebook.com/biplavpoudel123"><i className='bx bxl-facebook'></i></a>
        </div>
        <div className="btn-group" data-aos="fade-up" data-aos-delay="3000">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=lqrsmDpRkpHTLCJsXhnLQjWGMsMlSZSnTbgmFdCPFtWjHvpWTWTfvtwRtBNSbfrqTDvbrjbBnFxHPGQTp" className="btn">Hire</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
      <div className="home-img" data-aos="fade-left" data-aos-delay="3000">
        <img src="../Assets/me.jpg" alt="Biplav's portrait" />
      </div>
    </section>
  );
};

export default HOME;

