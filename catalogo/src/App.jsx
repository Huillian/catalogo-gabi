import './App.css'
import Iphonecard from './components/Iphone'

function App() {

  return (
    <>
      <Iphonecard
        nome="iPhone 15"

        foto="public/iphone/iphone-preto.png"

        //cores disponiveis : preto, rosa, azul, verde e amarelo.
        //Só sera exibido na tela contanto que seja definida a string abaixo
        //Deixarei comentado, só precisa remover o // para adicionar o elemento
        preto="public/iphone/iphone-preto.png"
        rosa="public/iphone/iphone-rosa.png"
        azul="public/iphone/iphone-azul.png" 
        // verde="public/iphone/iphone-verde.png"
        // amarelo="public/iphone/iphone-amarelo.png"




        parcela="99"
        valorDestacado="999"
        valorQuebrado="99"
        valorAVista="9.999,99"
      />
      
      
    </>
    
  )
}

export default App
