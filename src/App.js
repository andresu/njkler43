import React, { Component } from 'react';
import posts from './posts'

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e){
    this.setState({
      search: e.target.value.substr(0,20)
    });
  }
  render() {
    let filterPosts = posts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1
      }
    );
      return(
        <div>
          <div className="filter">
            <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.handleSearch.bind(this)}/>
          </div>
          <ul>
           {
            filterPosts.map((post,id) =>
            <li key={id}>
              <a href={post.url}>
                <img src={post.image} alt={post.title}/>
              </a>
              <p>{post.title}</p>
            </li>) 
           }
          </ul>
        </div>
      )
    }
  }


export default App


