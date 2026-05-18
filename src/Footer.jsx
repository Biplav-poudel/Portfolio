

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social" data-aos="fade-down" data-aos-delay="500">
        <a href="https://www.linkedin.com/in/biplav-poudel-a688662bb/"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/Biplav-poudel"><i className='bx bxl-github'></i></a>
        <a href="https://www.instagram.com/biplavpoudel15/"><i className='bx bxl-instagram'></i></a>
        <a href="https://www.facebook.com/biplavpoudel123"><i className='bx bxl-facebook'></i></a>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <ul className="list">
          <li><a href="#home">FAQ</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <p className="copyright">&copy; Biplav poudel | ALL rights reserved</p>
    </footer>
  );
};

export default Footer;
