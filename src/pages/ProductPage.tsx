import { useState } from "react";
import iconMais from "../assets/icon-plus.svg";
import iconMenos from "../assets/icon-minus.svg";
import { Link } from "react-router-dom";


import { useContext } from "react";
import {  AppContext } from "../App";

const ProductPage = () => {

  const details = useContext(AppContext);


  let [quantidadeEscolhida, setQuantidadeEscolhida] = useState(0);

  const diminuiQuantidade = () => {
    if (quantidadeEscolhida > 0) {
      quantidadeEscolhida--;
      setQuantidadeEscolhida(quantidadeEscolhida);
    }
  };

  const aumentaQuantidade = () => {
    quantidadeEscolhida++;
    setQuantidadeEscolhida(quantidadeEscolhida);
  };

  return (
    <div>
      <div className="homeDiv">
        <div className="imgProdutoDiv">
          <img src="" alt="" />
          <Link to="/">home</Link>
        </div>
        
      <div>
        <p>{details.language}</p>
        <p>{details.framework}</p>
        <p>{details.projects}</p>
      </div>

        <div className="textosDiv">
          <div className="descricaoProdutoDiv">
            <h5>Sneakers de edição limitada</h5>
            <h2>Edição de outono</h2>
            <p>
              Estes sneakers discretos são perfeitos para compor seu look
              casual. Contando com uma durável sola de borracha, eles resistem a
              todos os desafios que o clima impõe.
            </p>
          </div>

          <div className="infoPreco">
            <h2 className="precoAtual">R$150</h2>
            <h4 className="desconto">-25%</h4>
            <h4 className="precoAntigo">R$200</h4>
          </div>

          <div className="selecionarQuantidadeDiv">
            <button onClick={diminuiQuantidade}>
              <img
                src={iconMenos}
                alt="botão para diminuir a quantidade de sapatos selecionada"
              />
            </button>
            <span>{quantidadeEscolhida}</span>
            <button onClick={aumentaQuantidade}>
              <img
                src={iconMais}
                alt="botão para aumentar a quantidade de sapatos selecionada"
              />
            </button>
          </div>
          <button id="adicionarAoCarrinho" className="adicionarAoCarrinho">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
