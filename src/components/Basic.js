import React, { Component , useState}  from 'react';
import ReactDom from 'react-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

class Basic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lists : [{'id' : 1 , 'title' : 'mobile', 'imgname' : 'mobile.png'} , 
                     {'id' : 2 , 'title' : 'tv', 'imgname' : 'tv.png'} , 
                     {'id' : 3 , 'title' : 'ac', 'imgname' : 'ac.png'} , 
                     {'id' : 4 , 'title' : 'refrigerator', 'imgname' : 'refrigerator.png'}
                    ]
        }
    }

    render() {
        return (
            <div className="main-content">
                <h1>Hello Raj </h1><br />
                <h2>Please order from</h2>
                <div className='container'>
                    <div className='row'>
                        {this.state.lists.map((product) => (
                            <div className='col' key={product.id}>
                                <h3>{product.title}</h3>
                                <Button>Add {product.title}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Basic