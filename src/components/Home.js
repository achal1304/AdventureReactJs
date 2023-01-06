import React, { Component } from 'react'
import Advertisement from './Advertisement'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Advertisement />
                <Header />
            </div>
        )
    }
}
