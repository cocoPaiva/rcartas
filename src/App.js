import './micss.css';
import imagen0 from './img/rey0.png';
import imagen1 from './img/rey1.png';
import imagen2 from './img/rey2.png';
import imagen3 from './img/rey3.png';

function App() {
  let nombres=["rey 1","rey dos","king theree"];

  const cambiaCaption = (e)=>{
    // console.log(e.target.innerHTML)
    if (e.target.innerHTML ==='Visto' )
    {
      e.target.innerHTML = "";
    }    
    else
    {
      e.target.innerHTML = "Visto";
    }
  }

  const cambiaImg=(e)=>
    {
      if (e.target.src.includes('rey0'))
        {
          e.target.style.visibility ="hidden";
        }
        else
        {
          e.target.src=imagen0;
        }
        e.target.parentNode.style.backgroundColor="white";
      }

  return (
    <div className="contenedor">
        <div className='caja'>
          <img onClick={cambiaImg} src={imagen1} alt=''/>
          <div onClick={cambiaCaption} className='nombre'>{nombres[0]}</div>
        </div> 
        <div className='caja'>
          <img onClick={cambiaImg} src={imagen2} alt=''/>
          <div onClick={cambiaCaption} className='nombre'>{nombres[1]}</div>
        </div> 
        <div className='caja'>
          <img onClick={cambiaImg} src={imagen3} alt=''/>
          <div onClick={cambiaCaption} className='nombre'>{nombres[2]}</div>
        </div> 
    </div>
  );
}

export default App;
