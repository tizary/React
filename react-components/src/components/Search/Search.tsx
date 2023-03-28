import React from 'react';
import './Search.scss';
import img from '../../assets/search.png';

interface SearchState {
  value: string;
}

interface SearchProps {
  search: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { value: localStorage.getItem('inputValue') || '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveToLocalStorage);
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
    window.removeEventListener('beforeunload', this.saveToLocalStorage);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  saveToLocalStorage() {
    localStorage.setItem('inputValue', this.state.value);
  }

  render() {
    return (
      <form action="#" name="form" className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          name="search"
          className="search-input"
          placeholder="Search"
        />
        <img className="search-ico" src={img} alt="ico" />
        <button type="submit" className="search-btn">
          search
        </button>
      </form>
    );
  }
}

export default Search;
