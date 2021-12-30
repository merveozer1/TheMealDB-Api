function Footer(props) {
  return (
    <>
      <footer id="footer" className="midnight-blue" >
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              © 2021 TheMealDB <br />Proudly built in the UK 
            </div>
            <div className="col-sm-6">
              <center>
                <img src="./images/logo-tcdb.png" alt="logo" />
                <img src="./images/logo-tadb.png" alt="logo" />
                <img src="./images/logo-tsdb.png" alt="logo" />
              </center>
            </div>
            <div className="col-sm-3">
              <ul className="pull-right">
                <li><a href="../about.php">About</a></li>
                <li><a href="../faq.php">Faq</a></li>
                <li><a href="../contact.php">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer