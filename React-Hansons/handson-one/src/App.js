function HandleFun(){
  return(
    <div className="box-one">
    <h1>This is Created Using Functional Components</h1>
    <p>This is created using extenal css</p>
    <p>This is created using internal css</p>
   </div>
  );
}

function HandleCls(){
  return(
    <div className="box-two">
     <h1>This is Created Using Class Components</h1>
     <p>This is created using extenal css</p>
     <p>This is created using internal css</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Styling using Class and Functional Components</h1>
      <button type="submit" id='fun-btn' onClick={HandleFun}>To See Styling In Functional Components</button>
      <button type="submit" id='cls-btn' onClick={HandleCls}>To See Styling In Class Components</button>
    </div>
  );
}

export default App;
