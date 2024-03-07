import './App.css'
import AppleWatch from './components/AppleWatch'
import Iphonecard from './components/Iphone'
import Macbookcard from './components/Macbook'
import Macbookcardteste from './components/Macbook/teste'
import IphoneLightTheme from './components/iphone-theme/lighttheme'


function App() {

  return (
    <>
      
      
      
      <Macbookcardteste
        nome="MacBook Air"
        parcela="99"
        valorDestacado="111"
        valorQuebrado="99"
        valorAVista="9.999,99"
        foto="/assets/macbook/macbook-midnight.png"
        midnight="/assets/macbook/macbook-midnight.png"
        silver="/assets/macbook/macbook-silver.png"
        spacegray="/assets/macbook/macbook-spacegray.png"
        starlight="/assets/macbook/macbook-starlight.png" 
        capacidade1='100GB'
        capacidade2='200GB'
        capacidade3='300GB'
        chipm2="/assets/macbook/m2.png"
        chipm3="/assets/macbook/m3.png" 
        wpp="https://abrir.link/DNzoJ" 
     

      />
        
      <AppleWatch
        nome="AppleWatch S9"
        parcela="99"
        valorDestacado="111"
        valorQuebrado="99"
        valorAVista="9.999,99"

        foto="/assets/watch/s9-stainless-silver.jpeg"
        midnight="/assets/watch/s9-stainless-silver.jpeg"
        silver="/assets/watch/s9-stainless-graphite.jpeg"
        starlight="/assets/watch/s9-stainless-gold.jpeg" 
        

        dim41="/assets/watch/watch-spec-dim-41.png" 
        dim45="/assets/watch/watch-spec-dim-45.png" 

        // Valores relacionados a 41mm
        parcela41="15"
        valorDestacado41="532"
        valorQuebrado41="99"
        valorAVista41="8.499"
        
          // Valores relacionados a 41mm
          parcela45="29"
          valorDestacado45="638"
          valorQuebrado45="30"
          valorAVista45="9.099"
          
      
      />

      <IphoneLightTheme
      nome="iPhone 15"
        parcela="99"
        valorDestacado="111"
        valorQuebrado="99"
        valorAVista="9.999,99"
        foto="/assets/iphone/iphone-preto.png"
        midnight="/assets/iphone/iphone-verde.png"
        silver="/assets/iphone/iphone-amarelo.png"
        spacegray="/assets/iphone/iphone-azul.png"
        starlight="/assets/iphone/iphone-rosa.png" 
        capacidade1='100GB'
        capacidade2='200GB'
        capacidade3='300GB'
        wpp="https://abrir.link/DNzoJ" 
        />
    </>
    
  )
}

export default App
