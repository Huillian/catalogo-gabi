import React, { useState } from 'react';

function Macbookcard({ nome, foto, parcela,  valorDestacado, valorQuebrado, valorAVista, preto, rosa, azul, verde, amarelo, capacidade1, capacidade2 ,capacidade3, chipm2, chipm3 }) {  
         // Estado para armazenar a URL da foto atual
         const [fotoAtual, setFotoAtual] = useState(foto);
         const [corAtiva, setCorAtiva] = useState("preto");
     
         const trocarFoto = (novaFoto, cor) => {
             setFotoAtual(novaFoto);
             setCorAtiva(cor);
         };

    return(
        <section className="styles.card mt-2 gg2">
            <div className="container-fluid cont-bd">
               <div className="row">
                <div className="col text_mac_tittle">
                    MacBook Air
                </div>
                <div className="col-3 mt-2">
                    <img className='img-size-garantia-mac' src="public/assets/macbook/garantia1.png" alt="" />
                </div>
               </div>
                <div className="row ">
                    <div className="col-6">
                        <img src="public/assets/macbook/mba13-midnight-select-202402.png" alt="" className="mac-image" />
                    </div>
                    <div className="col-5">
                        <div className="row text-start">
                            <h2 className='capacidade-mac-text' >CAPACIDADE</h2>
                            
                        </div>
                        <div className="row line-capacity">
                            
                        <div class="col-10  btn-group" role="group" aria-label="Armazenamento">
                  <button type="button" class="btn btn-valid  text-spec-test " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Disponivel">{capacidade1}</button>
                  <button type="button" class="btn btn-valid text-spec-test">{capacidade2}</button>
                  <button type="button" class="btn btn-invalid disabled  text-spec-test">{capacidade3}</button>
                </div>

                        </div>
                        

                        <div className=" row">
                            <div className="col-4 chip-text">
                                CHIP
                            </div>
                            <div className="col-8 text-color-mac">
                                COR-PRETA
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img className='chip-image' src="public/assets/macbook/m2.png" alt="" />
                            </div>
                            <div className="col-2">
                                <img className='chip-image' src="public/assets/macbook/m3.png" alt="" />
                            </div>
                            <div className="col-8 ">
                            <ul className="cores-disponiveis-mac d-flex list-unstyled mt-2">
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
                            <div className="row col-10 bg-cont-1  gx-1 mt-1 text-">
                                <p class='my-0 text-g' >{parcela}x R$<span class="valor-spec">{valorDestacado}</span>,{valorQuebrado}</p>
                                <p class='my-0 text-g'>ou R${valorAVista} a vista</p>
                            </div>
                        </div>
                    
                        </div>
                    </div>
                    
                </div>
           
        </section>




        
    )
};

export default Macbookcard