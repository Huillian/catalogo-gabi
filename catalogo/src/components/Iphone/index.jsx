


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

document.addEventListener("DOMContentLoaded", function() {
  const cores = document.querySelectorAll('.cores-disponiveis li');
  const imgProduto = document.querySelector('.img-produto');

  cores.forEach(cor => {
      cor.addEventListener('click', function() {
          const imgSrc = this.getAttribute('data-img-src');
          imgProduto.setAttribute('src', imgSrc);
      });
  });
});

import React, { useState } from 'react';


 






function Iphonecard({ nome, foto, parcela,  valorDestacado, valorQuebrado, valorAVista, preto, rosa, azul, verde, amarelo, capacidade1, capacidade2 ,capacidade3 }) { 

     // Estado para armazenar a URL da foto atual
     const [fotoAtual, setFotoAtual] = useState(foto);
     const [corAtiva, setCorAtiva] = useState("preto");
 
     const trocarFoto = (novaFoto, cor) => {
         setFotoAtual(novaFoto);
         setCorAtiva(cor);
     };


    return(
        <section className="styles.card mt-2">
       
          <div className="container cont-bd">
            <div className="row align-items-center">
              <div className="col-4 ">
                <div className=""><img src={fotoAtual} alt="Imagem do iPhone" class=" img-size-phone-1"  /></div>
                <div className="col">
                  <img class='col img-size-garantia-1' src="/assets/iphone/garantia1.png" alt="" />

                </div>
              </div>
              <div className="col-8 text-center  center-desk-style">
                <p className="tittle my-0 ">{nome}</p>
                <div className="row justify-content-center">
                <hr class="col-5" />
                  <p className="capacity-text my-1 mt-0 mb-2">CAPACIDADE</p>
                
                <div class="col-10  btn-group" role="group" aria-label="Armazenamento">
                  <button type="button" class="btn btn-valid  text-spec-test " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Disponivel">{capacidade1}</button>
                  <button type="button" class="btn btn-valid text-spec-test">{capacidade2}</button>
                  <button type="button" class="btn btn-invalid disabled  text-spec-test">{capacidade3}</button>
                </div>
                <hr class="col-5 my-2" />
                </div>  
                
              

                <div className="container  mb-3 d-flex justify-content-center position-relative">
                
                  <div className="col-10 ">
                    
                    <div className="row bg-cont-1  gx-1 mt-1 ">
                      <p class='my-0 text-g' >{parcela}x R$<span class="valor-spec">{valorDestacado}</span>,{valorQuebrado}</p>
                      <p class='my-0 text-g'>ou R${valorAVista} a vista</p>
                    </div>
                    <div className="row ">
                      <div className="col-12  d-flex justify-content-end">
                        <p className='text-cor col-5 me-1 mt-2' >Cor - {corAtiva}</p>
                      <div className="col">
                        <ul className="cores-disponiveis d-flex list-unstyled mt-2">
                          {preto && (
                              <li className={`cor-preto me-1  ${corAtiva === "cor-preto" ? "active" : ""}`} onClick={() => trocarFoto(preto, "Preto")}></li>
                          )}  
                          {rosa && (
                              <li className={`cor-rosa me-1 ${corAtiva === "cor-rosa" ? "active" : ""}`} onClick={() => trocarFoto(rosa, "Rosa")}></li>
                          )}  
                          {azul && (
                              <li className={`cor-azul me-1  ${corAtiva === "cor-azul" ? "active" : ""}`} onClick={() => trocarFoto(azul, "Azul")}></li>
                          )}  
                          {verde && (
                              <li className={`cor-verde me-1  ${corAtiva === "cor-verde" ? "active" : ""}`} onClick={() => trocarFoto(verde, "Verde")}></li>
                          )}   
                          {amarelo && (
                              <li className={`cor-amarelo me-1  ${corAtiva === "cor-amarelo" ? "active" : ""}`} onClick={() => trocarFoto(amarelo, "Amarelo")}></li>
                          )}                          
                        </ul>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              </div>

              
          </div>



        </section>







    )
}
export default Iphonecard