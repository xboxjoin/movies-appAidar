

const Footer = () => {
    

    return (
        <>
         <footer className="page-footer " style ={{boxShadow: '-2px 2px 43px 4px rgba(255, 255, 255, 0.05)', marginTop: '50px', borderRadius: '5px', width: '100%', height: '220px', position: 'relative', backgroundColor: 'inherit'}}>
          <div className="container">
            <div className="row">
              {/* <div className="col l6 s12"> */}
                <h5 className="white-text center">MovieApp project (Aidar portfolio)</h5>
              {/* </div> */}
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container ">
            © {new Date().getFullYear()} Aidar
            <a className="grey-text text-lighten-4 right " href="https://github.com/xboxjoin?tab=repositories">Github</a>
            </div>
          </div>
        </footer>
        </>
    )

}

export default Footer;