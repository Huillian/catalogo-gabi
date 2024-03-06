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
        <section className="styles.card mt-2">
            <div className="container-fluid cont-bd">
                <div className="row">
                    <div className="col">
                        <h1 className="text_mac_tittle text-start mt-2 ">{nome}</h1>
                    </div>
                    <div className="col-3 garantia-mac text-start mt-2 "> <img className='img-size-garantia-mac' src="/assets/macbook/garantia1.png" alt="" /></div>
                </div>
                <div className="row ">
                    <div className="col-7">
                        <img src="public/assets/macbook/mba13-midnight-select-202402.png" alt="" className="mac-image" />
                    </div>
                    <div className="col-5">
                        <div className="row text-start">
                            <h2 className='capacidade-mac-text' >CAPACIDADE</h2>
                            <hr className='col-8' />
                        </div>
                        <div className="row line-capacity text-center ">
                            <div class="row">
                                <button class="col-4 btn btn-primary btn-capacity" type="button">Button</button>
                                <button class="col-4 btn btn-primary btn-capacity" type="button">Button</button>
                                <button class="col-4 btn btn-primary btn-capacity" type="button">Button</button>
                            </div>
                        </div>
                        <div className="row bg">
                            <div className="col">
                                    <p className='chip-text mt-1 bg4 ' >CHIP</p>
                                </div>
                                <div className="col">
                                    <p className='text-cor col-5 me-1 mt-1' >Cor - {corAtiva}</p>
                                </div>  
                            </div>
                                <hr />
                                <div className="row bg">
                                    <div className="col ">
                                        <div className="col-6 bg5">
                                            <img className='chip-image' src="/assets/macbook/m3.png" alt="" />
                                        </div>
                                        <div className="col-6 bg4">
                                            <img className='chip-image' src="/assets/macbook/m3.png" alt="" />  
                                        </div>
                                    </div>
                                    <div className="col">
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
                                </div>


                    
                        </div>
                    </div>
                    
                </div>
           
        </section>
    )
};

export default Macbookcard