import './App.css';
import "./image.jpg"
function App() {
  return (
    <div className="container">
      <div className="header">
      <div className="header-title">StreamingSport</div>
      <div className="menu-bar">
        <div className="info">
          <button className="btn-style">matchDay</button>
        </div>
        <div className="post">
          <button className="btn-style">Sign up</button>
        </div>
      </div>
      </div>
      <div className="container-content">
        <div className="container-content_left"></div>  
        <div className="container-content_right">
          <div className="container-form">
            <div className="title-login"> Sign in</div>
            <div className="line"></div>
            <form>
              <label>username</label>
                <input type="text" size="30"></input>
              <label>password</label>
                <input type="text" size="30"></input>
              <input type="submit" value="submit" className="submit-button"></input>
            </form>
          </div>
        </div>

      </div>
      <div className="footer">
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
