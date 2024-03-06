import './App.css'
import Iphonecard from './components/Iphone'
import Macbookcard from './components/Macbook'


function App() {

  return (
    <>
      <Iphonecard
        nome="iPhone 15"

        foto="/assets/iphone/iphone-preto.png"

        //cores disponiveis : preto, rosa, azul, verde e amarelo.
        //Só sera exibido na tela contanto que seja definida a string abaixo
        //Deixarei comentado, só precisa remover o // para adicionar o elemento
        preto="/assets/iphone/iphone-preto.png"
        rosa="/assets/iphone/iphone-rosa.png"
        azul="/assets/iphone/iphone-azul.png" 
        verde="/assets/iphone/iphone-verde.png"
        // amarelo="/assets/iphone/iphone-amarelo.png"

      
        //capacidade
        capacidade1='11gb'
        capacidade2='11'
        capacidade3='11'



        parcela="99"
        valorDestacado="111"
        valorQuebrado="99"
        valorAVista="9.999,99"
      />
      
      <Macbookcard
        nome="MacBook"
        foto="/macbook/mba13-midnight-select-202402.png"
        preto="/assets/iphone/iphone-preto.png"
        rosa="/assets/iphone/iphone-rosa.png"
        azul="/assets/iphone/iphone-azul.png" 
        verde="/assets/iphone/iphone-verde.png"
      />

    </>
    
  )
}

export default App
