import { Component } from 'react';

// interface SearchState {
//     value?: string;
//     // data: {
//     //     name: string,
//     //     id: number
//     // }
//   }
class Search extends Component {
  constructor(props: { value: string }) {
    super(props);
    this.state = {
      value: '',
      // data: Object
    };
  }

  fetchData = (value: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        <input
          autoFocus
          name="pokemon"
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          placeholder="pokemon name ?"
        ></input>
        <button type="submit" onClick={() => this.fetchData(this.state.value)}>
          Search
        </button>
        {/* <p>
            {this.state.data ? this.state.data.name: <h1>no data</h1>}
            </p> */}
      </div>
    );
  }
}

export default Search;
