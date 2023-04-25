
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile';

function App() {
  // alert on button using handleName
  function handleName() {
    alert("For more information check linkedin or facebook account on Firas Silini")
  }
  
  return (
        /* calling prop-children and giving them properties */
    <div className="App">
      <Profile name="Firas Silini" age="27" bio="Open to learn new things" profession="Electromechanical engineer/Fullstack js Developer" data={handleName} >
      <img src="https://w0.peakpx.com/wallpaper/966/122/HD-wallpaper-anime-jujutsu-kaisen-satoru-gojo.jpg" alt="Gojo" />
      </Profile>
    </div>
  );
}

export default App;
