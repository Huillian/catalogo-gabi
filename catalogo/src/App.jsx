import './App.css'
import Iphonecard from './components/Iphone'

function App() {

  return (
    <>
      <Iphonecard
        nome="iPhone 15"

        foto="src/assets/iphone/iphone-preto.png"

        //cores disponiveis : preto, rosa, azul, verde e amarelo.
        //Só sera exibido na tela contanto que seja definida a string abaixo
        //Deixarei comentado, só precisa remover o // para adicionar o elemento
        preto="src/assets/iphone/iphone-preto.png"
        rosa="src/assets/iphone/iphone-rosa.png"
        azul="src/assets/iphone/iphone-azul.png" 
        // verde="src/assets/iphone/iphone-verde.png"
        // amarelo="src/assets/iphone/iphone-verde.png"




        parcela="99"
        valorDestacado="999"
        valorQuebrado="99"
        valorAVista="9.999,99"
      />
      
      
    </>
    
  )
}

export default App
