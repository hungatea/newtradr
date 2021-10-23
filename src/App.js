import logo from './newtradr-logo.svg';

function App() {
  return (
    <>
    <div className='main-container'>
    <div className='q-container'>
      <h2>How much do you have in savings?</h2>
      <input className='text-answer' autoFocus type='text' name='name'
        placeholder='Type your response here...' />
    </div>
    <div className='help-text'>
      <p>Press Enter to continue</p>
    </div>
    </div>
    <img src={logo} className='logo' />
    </>
  );
}

export default App;
