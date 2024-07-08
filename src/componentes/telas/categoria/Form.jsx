import { useContext } from "react";
import CategoriaContext from "./CategoriaContext";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntra";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(CategoriaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Categoria" idform="formulario" acaoCadastrar={acaoCadastrar}> 
         <Alerta alerta={alerta} />
                            <CampoEntrada id= "txtCodigo" label= "Código" tipo= "number" placeholder= " " requerido= "false"
                             name= "codigo" value= {objeto.codigo} onchange= {handleChange} msgvalido= " " msginvalido= " " readonly="false"/>
                            <CampoEntrada id= "txtNome" label= "Nome" tipo= "text" placeholder= "Infore o nome" requerido= "true"
                             name= "nome" value= {objeto.nome} onchange= {handleChange} msgvalido= "Campo nome ok" msginvalido= "Informe o nome"
                             readonly={false} />
        </Dialogo>
    )
}

export default Form;