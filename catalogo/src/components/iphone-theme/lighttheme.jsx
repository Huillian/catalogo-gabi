

import React, { useState } from 'react';


function IphoneLightTheme({ nome, foto, parcela, valorDestacado, valorQuebrado, valorAVista, midnight, silver, spacegray, starlight, capacidade1, capacidade2, capacidade3, chipm2, chipm3, wpp, disponivel1, disponivel2, disponivel3 }) {
    const [fotoAtual, setFotoAtual] = useState(foto);
    const [corAtiva, setCorAtiva] = useState("CORES");
    

    const trocarFoto = (novaFoto, cor) => {
        setFotoAtual(novaFoto);
        setCorAtiva(cor);
    };

    return (
        <div className="container border  mt-3">
            <div className="row mt-2 ">
                <div className="col  page-title  text-center ">{nome}</div>
            </div>
            <div className="row justify-content-center">
                <img className='iphone' src={fotoAtual} alt="" />
            </div>
            <div className="row mt-3">
                <div className="col text-start sub-text">{corAtiva}</div>
                <div className="col text-end disponibilidade-text">Disponibilidade</div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="cores-disponiveis-mac d-flex list-unstyled mt-2">
                        {midnight && (
                            <li className={`cor-midnight me-1  ${corAtiva === "cor-midnight" ? "active" : ""}`} onClick={() => trocarFoto(midnight, "MIDNIGHT")}></li>
                        )}  
                        {silver && (
                            <li className={`cor-silver me-1 ${corAtiva === "cor-silver" ? "active" : ""}`} onClick={() => trocarFoto(silver, "SILVER")}></li>
                        )}  
                        {spacegray && (
                            <li className={`cor-spacegray me-1  ${corAtiva === "cor-spacegray" ? "active" : ""}`} onClick={() => trocarFoto(spacegray, "SPACEGRAY")}></li>
                        )}  
                        {starlight && (
                            <li className={`cor-starlight me-1  ${corAtiva === "cor-starlight" ? "active" : ""}`} onClick={() => trocarFoto(starlight, "STARLIGHT")}></li>
                        )}   
                                                
                    </ul>
                </div>
                <div className="col justify-content-end">
                    <div class="btn-group cap-mobile" role="group" aria-label="Basic example">
                        <button type="button" className={`btn ${disponivel3 === 'nao' ? 'text-decoration-line-through' : ''}`}>{capacidade1}</button>
                        <button type="button" className={`btn ${disponivel2 === 'nao' ? 'text-decoration-line-through' : ''}`}>{capacidade2}</button>
                        <button type="button" className={`btn ${disponivel1 === 'nao' ? 'text-decoration-line-through' : ''}`}>{capacidade3}</button>
                    </div>
                </div>
            </div>
            <hr className='mt-0 mb-2' />
            <div className="row">
                <div className="col selo d-flex justify-content-center">
                    <div className="row my-2">
                        <div class="col-2 pulsating-circle"></div>

                        <span className='col text-start d-flex align-items-center'>Disponivel</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col selo d-flex justify-content-center">
                    <div className="row">

                        <img className='col-2 img-apple ' src="/assets/apple/logo_black.svg" alt="" />
                        <span className='col text-start d-flex align-items-center'>Garantia<br />Apple 1 ano</span>
                    </div>
                </div>

            </div>
            <a href={wpp} type="button" class="btn btn-price btn-outline-light button-wpp mt-2 mb-2">
                <p  class='my-0 text-g' >{parcela}x R$<span class="valor-spec">{valorDestacado}</span>,{valorQuebrado}</p>
                <p  class='my-0 text-g'>ou R${valorAVista} a vista</p>
            </a> 
        </div>
    );
}



export default IphoneLightTheme;
