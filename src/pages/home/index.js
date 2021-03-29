import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearHeroes, findHeroes, findComics } from './actions';
import SearchChar from './components/search';
import ComicThumbnail from '../../components/comicThumbnail';
import Button from '../../components/button';


let cont = 1;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      autoCompletTimeout: null,
    };
    this.onButtonClick = this.onButtonClick.bind(this);

  }
  

  autoCompleteOnChange = (value) => {
    this.setState({ search: value });
    if (value.length > 2) {
      if (this.state.autoCompletTimeout) {
        clearTimeout(this.state.autoCompletTimeout);
      }
      const timeout = setTimeout(() => {
        this.setState({ autoCompletTimeout: null });
        this.props.findHeroes(value);
      }, 300);
      this.setState({ autoCompletTimeout: timeout });
    }
  }

  onButtonClick() {
    console.log('teste')
    
  }

  onSelectItem = (value, itemSelect) => {
    this.setState({ search: value });
    this.props.findComics(String(itemSelect));
  }

  componentDidMount(){
    this.props.findComics('1009610');
  }
  

  render() {
    return (
      <main>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#E62429'}}>
  <a class="navbar-brand" href="#" style={{color:'white'}}>Api da Marvel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/carrinho" style={{color:'white'}}>Carrinho </a>
      </li>
   
    </ul>
 
  </div>
</nav>
        <div className="container" style={{marginLeft:'-1%'}}>
          <SearchChar 
            char={this.props.chars}
            search={this.state.search}
            autoCompleteOnChange={this.autoCompleteOnChange}
            onSelectItem={this.onSelectItem}

          />
          <div className="content">
            {this.props.comics ?
              <section  className="wrapper-comics">
                {
                  this.props.comics.map(item =>
                    <React.Fragment key={item.id} >
                      <ComicThumbnail 
                        title={item.title}
                        thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
                        price={item.prices[0].price}
                      >
                      </ComicThumbnail>
                    </React.Fragment>
                  )

                }
                
              </section>
              :
              <section className="wrapper-call">
              </section>
            }
          </div>
        </div>
        
      </main >

    );
  }
}

const mapStateToProps = state => ({
  characters: state.home.characters,
  comics: state.home.comics,
  chars: state.home.chars
});

export default connect(mapStateToProps, {
  clearHeroes,
  findHeroes,
  findComics
})(Home);
