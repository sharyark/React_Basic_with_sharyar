import React from 'react';

// SimpleButton Component
function SimpleButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// PlayComponent Component
function PlayComponent({ itemName }) {
  function handlePlayClick() {
    alert(`Playing ${itemName}!`);
  }

  return (
    <SimpleButton onClick={handlePlayClick}>
      Play "{itemName}"
    </SimpleButton>
  );
}

// UploadComponent Component
function UploadComponent() {
  return (
    <SimpleButton onClick={() => alert('Uploading!')}>
      Upload Item
    </SimpleButton>
  );
}
function button({fun,children}) {

  return <button onClick={fun}>
    {children}
  </button>
}
function B()
{
  function fun(){alert("khan")}
  return <>
  <button fun={fun}>
    {/* <A fun={fun} /> */}
    <h1>hey</h1>
    </button>
  </>
}
// Main Component
function App() {
  return (
    <div>
      <B />
      {/* <PlayComponent itemName="Chess" /> */}
      {/* <UploadComponent /> */}
    </div>
  );
}

export default App;
