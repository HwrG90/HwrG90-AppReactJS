import "../Contact/Contact.css";

const About = () => {
  return (
    <div className="contenedor-About">
      <div className="Contenido-About">
        <h1 className="titulo">Redes Sociales...</h1>
        <div className="">
          <div className=" fRedesIconos col-xs-12 col-sm-12 col-md-4">
            <ul className="lFooter">
              <li>
                <a href="https://www.facebook.com/" target="blank">
                  <img
                    className="imgRedes"
                    src="https://w7.pngwing.com/pngs/247/102/png-transparent-circle-facebook-fb-round-icon-social-media-social-network-popular-services-brands-vol-icon.png"
                    alt="imagenLogoAccesoAFacebook"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="blank">
                  <img
                    className="imgRedes"
                    src="https://149440826.v2.pressablecdn.com/wp-content/uploads/2020/03/instagram-png-instagram-png-logo-1455.png"
                    alt="imagenLogoAccesoAInstagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=es/" target="blank">
                  <img
                    className="imgRedes"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHpWaoXVHAQxqaWiK0wRcRD5zND3wOcW6kw&usqp=CAU"
                    alt="imagenLogoAccesoATwitter"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/" target="blank">
                  {" "}
                  <img
                    className="imgRedes"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Whatsapp_logo_svg.png/600px-Whatsapp_logo_svg.png"
                    alt="imagenLogoAccesoAWhatsApp"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
