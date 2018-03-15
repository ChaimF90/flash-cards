import React from 'react';
import Card from './Card';
import Header from './Header';
import RotatedHeader from './RotatedHeader';

class FlashCard extends React.Component {

    render() {
        let flipOver = this.props.selected.includes(this.props.id);
        let children;
        if(flipOver) {
            children = this.props.children ? this.props.children : <RotatedHeader>back of card {this.props.id}</RotatedHeader>
        } else {
            children = <Header>Front of card {this.props.id}</Header>
        }
        return (
            <Card flip={flipOver} onClick={() => this.props.toggle(this.props.id)}>
                {children}
            </Card>
        );
    }
}

export default FlashCard;