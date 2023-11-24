import FooterLogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section className="mt-[10rem]">
      <footer className="footer footer-center p-10 bg-colorOne text-colorTwo">
        <aside>
          <div>
            <img width={50} className="rounded-full" src={FooterLogo} alt="" />
          </div>
          <p className="font-cinzel font-semibold py-4 text-xl md:text-2xl lg:text-3xl tracking-widest">
            Survey website <br />
            Providing reliable tech since 1992
          </p>
          <p className="font-cinzel font-semibold py-4 text-sm md:text-xl lg:text-2xl tracking-widest">
            Copyright © 2023 - All right reserved
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
