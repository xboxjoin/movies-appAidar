

const Footer = () => {
    

    return (
        <>
         <footer className="page-footer light-blue darken-4" style ={{width: '100%', height: '220px'}}>
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
            <a className="grey-text text-lighten-4 right " href="#!">Github</a>
            </div>
          </div>
        </footer>
        </>
    )

}

export default Footer;