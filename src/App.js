import React, { Component } from 'react';
import FlashCard from './components/FlashCard';
import Container from './components/Container';
import Image from './components/CardElemens/Image';
import Scroller from './components/CardElemens/Scroller';

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

  render() {
    return (
      <Container>
        <FlashCard toggle={this.toggle} selected={this.state.selected} id={1}>
        </FlashCard>
        <FlashCard toggle={this.toggle} selected={this.state.selected} id={2}>
          <Image src='https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-exlarge-169.jpg' />
        </FlashCard>
        <FlashCard toggle={this.toggle} selected={this.state.selected} id={3}>
          <Scroller>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper arcu et scelerisque facilisis. Suspendisse a metus sollicitudin, mollis lorem quis, facilisis enim. Quisque iaculis pulvinar tristique. Aenean sit amet euismod ligula. Integer viverra, nisl non accumsan tincidunt, felis elit efficitur lectus, quis dictum est quam a purus. Proin laoreet sit amet nulla et accumsan. Nulla nec scelerisque libero, in consequat felis. Cras vel felis condimentum, maximus ante id, auctor quam. Duis sed tortor massa. Duis tellus leo, volutpat tincidunt commodo ac, fermentum vel odio. Pellentesque molestie congue urna nec faucibus. Curabitur tempor pretium vestibulum. Proin velit ligula, mollis in tellus at, luctus mattis turpis. Integer elit magna, varius id leo a, condimentum auctor sem. Suspendisse nibh mi, aliquam non risus sit amet, aliquam condimentum eros. Sed iaculis pellentesque arcu, ut suscipit erat fringilla in.
  
  Etiam malesuada mi quis vulputate tempor. Suspendisse ornare sed quam vel commodo. Pellentesque sed nisi eleifend, consequat quam eget, mattis augue. Nam rutrum sapien quis nibh aliquet, vel maximus elit maximus. Donec varius risus a tellus pellentesque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tortor nisl, ut pharetra orci lacinia eu. Nullam auctor, nisi et imperdiet lobortis, dui justo fringilla libero, at condimentum leo ex et metus. Sed vel sagittis velit. Aliquam erat volutpat. Aenean vitae purus vel ex placerat viverra.
  
  Morbi a auctor orci. Cras faucibus mi sit amet viverra posuere. Duis iaculis mauris sapien, quis pulvinar nisi posuere et. Donec at aliquet leo, sed convallis turpis. Nunc posuere elit et rhoncus blandit. Donec porta finibus ante nec pellentesque. Duis in neque ac enim molestie sodales ac quis lectus. Maecenas rhoncus lorem id lacus iaculis ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu metus in mi vulputate tempor. Integer viverra sem lacus, ut aliquet ante condimentum non. Nam sit amet metus imperdiet, aliquam nisi sed, tincidunt justo.
  
  Integer tempor sit amet diam eu porta. Nullam scelerisque in ligula sit amet vestibulum. Nullam elementum, tortor eget egestas ullamcorper, nulla odio cursus tortor, sed porttitor eros lacus ac lorem. Nam lacus ipsum, gravida nec eros molestie, commodo condimentum erat. Pellentesque sollicitudin varius nunc. Cras vel orci sagittis, scelerisque elit sit amet, vehicula libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget volutpat massa. Sed pulvinar sodales maximus.
  
  Morbi nec porttitor ligula. Phasellus iaculis leo et elit efficitur dapibus. Vivamus dolor tortor, posuere ac purus vel, hendrerit faucibus lorem. Donec rhoncus dignissim elit, in porttitor tellus tincidunt eu. In hac habitasse platea dictumst. Duis malesuada eros sagittis justo posuere, nec sagittis urna tempor. Vestibulum porta aliquet elit, non ultrices eros rutrum sit amet.
          </Scroller>
        </FlashCard>
      </Container>
    );
  }
}

export default App;
