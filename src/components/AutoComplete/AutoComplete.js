import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './AutoComplete.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
export class AutocompleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
      submitted: false,
      res: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProperty = {
    suggestions: []
  };

  static propTypes = {};
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.userInput){
      const {restaurants}=this.props;
      
        const res = restaurants.find(r=>r.location===this.state.userInput.toLowerCase());
       
        // this.props.history.replace("/restaurants");
        if(res){

          this.setState({
            submitted:true,
            res:res
          });
        }else{
          alert("cannot find this city");
        }
    }
    else{
      alert('please enter a city');
  }
  }
  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.target.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
    }
  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = e => {
    
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        // activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {

              return (
                <li key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        {this.state.submitted ? <Redirect to={`/restaurants/${this.state.res.location}`} /> : null}
        <form className="form-inline form-search form-pos" onSubmit={this.handleSubmit}>
          <input
            className="filter-search form-control input-search mr-0 "
            type="search"
            placeholder={this.props.placeholder} onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}/>

          <button
            // to={`restaurant/${this.state.userInput}`}
            className="button button--transparent button-homeSearch"
            type="submit">Search
            </button>
          {suggestionsListComponent}
        </form>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants
  }
}
const AutoComplete = connect(mapStateToProps)(AutocompleteComponent);
export { AutoComplete };