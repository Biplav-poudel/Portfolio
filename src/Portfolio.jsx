
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <div data-aos="fade-up">
          <span>What will I do for you!</span>
          <h2>Latest project</h2>
        </div>
      </div>

      <div className="container">
        <div className="fillter-buttons" data-aos="fade-down" data-aos-delay="1000">
          <button className="btn">ALL</button>
          <button className="btn">products</button>
          <button className="btn">Interacting</button>
          <button className="btn">Web Apps</button>
        </div>

        <div className="portfolio-gallery">

          <div className="port-box" data-aos="fade-right" data-aos-delay="500">
            <div className="port-img">
             <img src="../Assets/img1.jpg" alt="Project screenshot 2" />
            </div>
            <div className="port-content">
              <h3> Aurora </h3>
              <p> Aurora is a responsive clothing store focused on graphic tees and curated pieces. It includes product browsing, category filters, a shopping bag, favorites, search, and a clean, accessible design.</p>
              <a href="https://aurora-clothing.vercel.app/"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="port-box" data-aos="fade-left" data-aos-delay="500">
            <div className="port-img">
               <img src="../Assets/img.png" alt="Project screenshot 1" />
            </div>
            <div className="port-content">
              <h3>Voice Assist</h3>
              <p>A Python-based voice-controlled assistant that recognizes your speech, processes commands, and responds using speech synthesis.</p>
              <a href="https://github.com/Biplav-poudel/voice-assist-"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="port-box" data-aos="fade-right" data-aos-delay="500">
            <div className="port-img">
              <img src="../Assets/img2.png" alt="Project screenshot 3" />
            </div>
            <div className="port-content">
              <h3>lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore cumque? Temporibus odit autem quos perferendis fugit corrupti? Repudiandae</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="port-box" data-aos="fade-left" data-aos-delay="500">
            <div className="port-img">
              <img src="../Assets/img3.jpg" alt="Project screenshot 4" />
            </div>
            <div className="port-content">
              <h3>lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore cumque? Temporibus odit autem quos perferendis fugit corrupti? Repudiandae</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="port-box" data-aos="fade-right" data-aos-delay="500">
            <div className="port-img">
              <img src="../Assets/img4.jpg" alt="Project screenshot 5" />
            </div>
            <div className="port-content">
              <h3>lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore cumque? Temporibus odit autem quos perferendis fugit corrupti? Repudiandae</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="port-box" data-aos="fade-left" data-aos-delay="500">
            <div className="port-img">
              <img src="../Assets/img5.jpg" alt="Project screenshot 6" />
            </div>
            <div className="port-content">
              <h3>lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore cumque? Temporibus odit autem quos perferendis fugit corrupti? Repudiandae</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
