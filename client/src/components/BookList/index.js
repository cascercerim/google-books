import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import './books.css'


// BookList renders a bootstrap list item
export function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul>
    );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class BookListItem extends React.Component {

    render() {
        console.log(this.props)
            ; return (
                <li>
                    <Container>
                        <Row>
                            <Col size="xs-4 sm-2">
                                <Thumbnail src={this.props.thumbnail} />
                            </Col>
                            <Col size="xs-8 sm-9">
                                <h3>{this.props.title}<span><h5>{this.props.authors}</h5></span></h3>
                                <p>
                                    {this.props.synopsis}
                                </p>
                                <a className="getBook"
                                    target="_blank"
                                    href={this.props.link}
                                    rel="noopener noreferrer"
                                >
                                    Get book!
            </a>
                            </Col>
                        </Row>
                    </Container>
                </li>
            );
    }
}