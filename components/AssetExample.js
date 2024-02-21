var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <link href="style.css" rel="stylesheet" />
          <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>Impress Magazine - Fall, 2023</title>
          <link rel="icon" type="image/x-icon" href="nav-images/logo.png" />
          <link id="favicon" rel="shortcut icon" href="nav-images/logo.png" />
          <div id="viewport">
            <div id="container">
              {/* Your website content goes here */}
              <div className="item sidebar sidebar-left">
                <div className="item header header-left">
                  <form>
                    {/* <button class="menu-button clickable" type="submit" formaction="index.html" >
                          <h6>Impress<br>Magazine</h6>
                      </button> */}
                    <button className="menu-button clickable" type="button" onclick="toggleFullScreen();">
                      <h5>Impress<small><br />大きく・小さく</small></h5>
                    </button>
                  </form>
                </div>
                <div className="left-menu">
                  <a href="index.html" target="_self">
                  </a><div className="left-menu-button"><a href="index.html" target="_self"><img className="left-menu-image clickable" src="nav-images/front.png" /></a>
                  </div>
                  <a href="1.html" target="_self">
                  </a><div className="left-menu-button"><a href="1.html" target="_self"><img className="left-menu-image clickable" src="nav-images/1.png" /></a>
                  </div>
                  <a href="1.html" target="_self">
                  </a><div className="left-menu-button"><a href="1.html" target="_self"><img className="left-menu-image clickable" src="nav-images/2.png" /></a>
                  </div>
                  <a href="3.html" target="_self">
                  </a><div className="left-menu-button"><a href="3.html" target="_self"><img className="left-menu-image clickable" src="nav-images/3.png" /></a>
                  </div>
                  <a href="3.html" target="_self">
                  </a><div className="left-menu-button"><a href="3.html" target="_self"><img className="left-menu-image clickable" src="nav-images/4.png" /></a>
                  </div>
                  <a href="5.html" target="_self">
                  </a><div className="left-menu-button"><a href="5.html" target="_self"><img className="left-menu-image clickable" src="nav-images/5.png" /></a>
                  </div>
                  <a href="5.html" target="_self">
                  </a><div className="left-menu-button"><a href="5.html" target="_self"><img className="left-menu-image clickable" src="nav-images/6.png" /></a>
                  </div>
                  <a href="cover.html" target="_self">
                  </a><div className="left-menu-button"><a href="cover.html" target="_self"><img className="left-menu-image clickable" src="nav-images/back.png" /></a>
                  </div>
                  <a href="about.html" target="_self">
                  </a><div className="left-menu-button"><a href="about.html" target="_self"><img className="left-menu-image clickable" src="nav-images/about.png" /></a>
                  </div>
                </div>
                <div className="item footer footer-left-top">
                  <form>
                    <button className="menu-button-small clickable" type="submit" formAction="about.html">
                      <h6>&lt; Previous</h6>
                    </button>
                  </form>
                </div>
                <div className="item footer footer-left-bottom">
                  <form>
                    <button className="menu-button-small clickable" type="submit" formAction="1.html">
                      <h6>Next &gt;</h6>
                    </button>
                  </form>
                </div>
              </div>
              <div className="item gap-left">
              </div>
              <div className="item content-center" style={{backgroundImage: 'url("Web/page01.jpg")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#000000'}}>
                <div className="left-content">             
                  {/* Buttons for Intro Text */}
                  <button className="center-items " type="button" onclick="PlayAndShow('audio1-0', 'text1-0', 'play1-0')" style={{position: 'absolute', top: '9vw', left: '67.5vw'}}>
                    <img id="play1-0" className="audio-button-image clickable" src="nav-images/play-g79150a13d_1280.png" />
                  </button>
                  <div className="items hidden-text clickable" id="text1-0" onclick="this.style.display='none'">
                    {/* Modal content */}
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">×</span>
                      </div>
                      <div className="modal-body">
                        <p>Hello, this is George, and thanks for reading this <i>Fall, 2023</i> issue of <i>Impress</i>. We really tried to make this cool for you, so we have voice recordings, background music, and surveys in this online magazine.<br /><br />
                          The theme of this issue is "All Things Great and Small" because this issue is full of random and seasonal things. But the theme quote for you is pretty meaningful. The author Napoleon Hill once said, "If you cannot do great things, do small things in a great way."<br /><br />
                          Maybe we can't all write a million-selling book right now. But we can all write a prize-winning essay even as students.<br /><br />
                          So do your best, and make us proud.<br /><br />
                          Enjoy the magazine.
                        </p>
                      </div>
                      <div className="modal-footer">
                      </div>
                    </div>
                  </div>
                  {/* Audio for Intro Text */}
                  <audio id="audio1-0" className="playondemand">
                    <source src="./audio/audio0-1.mp3" type="audio/mp3" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });