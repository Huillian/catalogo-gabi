window.addEventListener('scroll', function() {
    var titles = document.querySelectorAll('.page-title');
    var scrollPosition = window.scrollY;

    titles.forEach(function(title) {
        var titleOffsetTop = title.offsetTop; // Obtém a posição superior do título
        var windowHeight = window.innerHeight; // Obtém a altura da janela visível

        if (window.innerWidth >= 853) { // Verifica se é uma tela grande
            if (scrollPosition > (titleOffsetTop - windowHeight * 0.75)) { // Atrasa o início do efeito de scroll
                title.style.fontSize = '76pt'; // Tamanho menor para dispositivos maiores que 853px
            } else {
                title.style.fontSize = '90pt'; // Tamanho maior para dispositivos maiores que 853px
            }
        } else { // Se for uma tela pequena (como dispositivos móveis)
            title.style.fontSize = '48pt'; // Mantém o tamanho da fonte inalterado
        }
        if (window.innerWidth <= 853) { // Verifica se é uma tela grande
            if (scrollPosition > (titleOffsetTop - windowHeight * 0.75)) { // Atrasa o início do efeito de scroll
                title.style.fontSize = '37pt'; // Tamanho menor para dispositivos maiores que 853px
            } else {
                title.style.fontSize = '35pt'; // Tamanho maior para dispositivos maiores que 853px
            }
        } else { // Se for uma tela pequena (como dispositivos móveis)
            title.style.fontSize = '38pt'; // Mantém o tamanho da fonte inalterado
        }
    });
});

import React, { useState } from 'react';


function Ipadcard({ nome, foto, parcela, valorDestacado, valorQuebrado, valorAVista, purple, pink, blue, starlight,silver,spacegray, capacidade1, capacidade2, capacidade3, disponivel1, disponivel2,disponivel3, wpp }) {
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
                <img className='ipad' src={fotoAtual} alt="" />
            </div>
            <div className="row mt-3">
                <div className="col text-start sub-text">{corAtiva}</div>
                <div className="col text-end disponibilidade-text">Disponibilidade</div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="cores-disponiveis-mac d-flex list-unstyled mt-2">
                        {purple && (
                            <li className={`cor-purple me-1  ${corAtiva === "cor-purple" ? "active" : ""}`} onClick={() => trocarFoto(purple, "PURPLE")}></li>
                        )}  
                        {pink && (
                            <li className={`cor-pink me-1 ${corAtiva === "cor-pink" ? "active" : ""}`} onClick={() => trocarFoto(pink, "PINK")}></li>
                        )}  
                        {blue && (
                            <li className={`cor-blue me-1  ${corAtiva === "cor-blue" ? "active" : ""}`} onClick={() => trocarFoto(blue, "BLUE")}></li>
                        )}  
                        {starlight && (
                            <li className={`cor-starlight me-1  ${corAtiva === "cor-starlight" ? "active" : ""}`} onClick={() => trocarFoto(starlight, "STARLIGHT")}></li>
                        )} 
                        {silver && (
                            <li className={`cor-silver me-1  ${corAtiva === "cor-silver" ? "active" : ""}`} onClick={() => trocarFoto(silver, "SILVER")}></li>
                        )}  
                         {spacegray && (
                            <li className={`cor-spacegray me-1  ${corAtiva === "cor-spacegray" ? "active" : ""}`} onClick={() => trocarFoto(spacegray, "SPACEGRAY")}></li>
                        )}
                                                
                    </ul>
                </div>
                <div className="col d-flex justify-content-end">
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



export default Ipadcard;
