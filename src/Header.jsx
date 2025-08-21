

const Header = () => {


  const links = document.querySelectorAll('.navbar a'); 
  links.forEach(link => { link.addEventListener('click', function() { links.forEach(el => el.classList.remove('active'));
     this.classList.add('active');
  }); });
   window.addEventListener('scroll', () => { links.forEach(link => link.classList.remove('active')); });
   
  return (
   <header class="header">
       <a href="#home" className="logo">Biplav 
            <span>Poudel</span></a>

            <nav class="navbar">
                <a href="#home">HOME</a>
                <a href="#about" >About Me</a>
                <a href="#service" >Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
    </header>
  );
};

export default Header;

