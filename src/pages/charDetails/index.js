import React, { Component } from "react";
import { comprarQuadrinho } from './detailApi';
class CharDetails extends Component {

    constructor(props) {
        super(props);
        const {title, price, thumbnail} = props.location.state
        //console.log(title,price,thumbnail) // "bar"
        this.state = {
            title: title,
            thumbnail: thumbnail,
            price: price,
            res : ''
          };
      }

    paramDetails = () => {
        
        console.log('teste')
    }
    compraQuadrinho = () => {
       this.state.res = comprarQuadrinho(this.state.title,this.state.thumbnail,this.state.price).then(data => {
           if(data.err) {
                this.state.res = 'Erro na compra';
           }else{
                this.state.res = 'Muito obrigado pela escolha';
           }
       });
       console.log()
    }
    componentDidMount () {
        
      }
    
    render() {
        return (
             <main>
                 
                <button type="button" class="btn btn-danger"><a style={{color:'white'}} href="/">Voltar</a></button>
                <h1 style={{color:'white', textAlign:'center'}}>Quadrinhos Marvel</h1>
                <div style={{backgroundColor:'red',height:'130vh',marginTop:'3%'}} class="container">
                   
                <div class="row" >
                   
                        <div class="col" style={{marginTop:"20%"}}>
                        <div style={{fontSize:'150%'}} className="thumbnail-overlay">
                                <span className="thumbnail-text" style={{color:'white'}}>{this.state.title} <br/></span>
                                <span className="thumbnail-text" style={{color:'white'}}>por apenas: <br/> <span style={{color:'springgreen'}}> {this.state.price}$</span> <br/></span>
                                <button type="button" class="btn btn-info" onClick = {this.compraQuadrinho} data-toggle="modal" data-target="#exampleModal">
                                    Comprar Quadrinho
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-5" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Compra Efetuada com Sucesso</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>Muito obrigado pela escolha</h3>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                          
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>       
                        </div>
                        <div class="col order-first" style={{marginTop:"5%"}}>
                        <div  style={{backgroundColor:'black'}} class="card mb-3">
                            <img class="card-img-top" style={{width:'95%'}} src={this.state.thumbnail} alt="Card image cap"></img>
                            
                        </div>
                    </div>
                  </div>
                </div>
                
                
            </main>
        );
    }
}

export default CharDetails;