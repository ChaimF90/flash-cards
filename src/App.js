import React, { Component } from 'react';
import FlashCard from './components/FlashCard';
import Container from './components/Container';
import * as elements from './components/CardElemens';
import { data } from './MockData/Content';

class App extends Component {

  state = {
    selected: []
  }

  toggle = id => {
    let selected = [...this.state.selected];
    if (selected.includes(id)) {
      selected = selected.filter(n => n !== id);
    } else {
      selected.push(id);
    }
    this.setState({ selected });
  }

  renderElements = (dataObject) => {
    let Component = elements[dataObject.component];
    let element;
    if (Component) {
      element = <Component {...dataObject.props}>{dataObject.text}</Component>
    }
    return (
      <FlashCard key={dataObject.id} toggle={this.toggle} selected={this.state.selected} id={dataObject.id}>
        {element}
      </FlashCard>
    );
  }

  render() {
    return (
      <Container>
        {data.map(this.renderElements)}
      </Container>
    );
  }
}

export default App;
