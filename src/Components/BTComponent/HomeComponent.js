import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <h1>HomeComponent</h1>
               
                <HeaderComponent/>

                <div className="row">
                    <div className="col-4">

                       <NavComponent/>

                    </div>
                    <div className="col-8">
                        <ContentComponent/>
                        
                    </div>
                </div>

                <FooterComponent/>

            </div>
        )
    }
}
