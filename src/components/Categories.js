import React, {Component} from 'react';
import Item from "./Item";

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All',
                },
                {
                    key: 'chairs',
                    name: 'Chairs',
                },
                {
                    key: 'sofa',
                    name: 'Sofa',
                },
                {
                    key: 'tables',
                    name: 'Tables',
                },
                {
                    key: 'lamps',
                    name: 'Lamps',
                },
                {
                    key: 'beds',
                    name: 'Beds',
                },
            ],
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map((el, i) =>
                    <div key={i} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                )}
            </div>
        )
    }
}
export default Categories;