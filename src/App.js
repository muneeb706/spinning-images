import './App.css';

function App() {
  return (
  <div id="container">
    <div id="stage" style={{transform: "translateZ(-200px)"}}>
      <div id="shape" className="backfaces ring">
        <div className="plane one"><img src="https://www.diyphotography.net/wp-content/uploads/2019/01/Aquamarine.jpg" /></div>
        <div className="plane two"><img src="https://www.coe.int/documents/9253022/52882255/1+definition+-+glasgow+street.jpg/5666a120-71c2-53e8-158f-9474ffad7ed9?t=1570433971000" /></div>
        <div className="plane three"><img src="https://iso.500px.com/wp-content/uploads/2017/10/PhotographingTwilight_TannerWendellStewart-218136823.jpg" /></div>
        <div className="plane four"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mvLduWQ63p0YQ2ZLbKNS85YK2R8-W_7ybg&usqp=CAU" /></div>
        <div className="plane five"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC72Q_UrVEKHC5IBxGKcVytzX-ARjcJBCQ7g&usqp=CAU" /></div>
        <div className="plane six"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR56pf2PxnReNt8xqGFtHJDR4OcDsLQ7qlaA&usqp=CAU" /></div>
      </div>
    </div>    
    <div id="myModal" className="modal">
      <span className="close">&times;</span>
        <img className="modal-content" id="img01"/>
      <div id="caption"></div>
    </div>
  </div>

  );
}

export default App;
