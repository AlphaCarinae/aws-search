import React, { Component } from 'react';
import axios from 'axios';


class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state={
            query: "",
            result: {},
        }

        this._handleChange = this._handleChange.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit(event) {
        event.preventDefault();
        const serverAddress = this.santize(this.state.query || 'https://d2hhexjv4qcruz.cloudfront.net');
        console.log(serverAddress)
        axios.get(serverAddress).then(
            res => {
                var parsedData = this.xmlToJson(res.data)
                this.props.updateList(parsedData)
            }
        ).catch(
            err => console.log(err)
        )

    }

    _handleChange(event) {
        this.setState({query: event.target.value})
    }

    santize(url) {
        return !(url.includes('http') || url.includes('https')) ? "https://" + url : url
    }

    xmlToJson(xmlDoc) {
        var doc = new DOMParser().parseFromString(xmlDoc, 'application/xml');
        var output = []
        for (let content of doc.getElementsByTagName('Contents') ) {
            output.push({
                key: content.getElementsByTagName('Key')[0].innerHTML,
                lastMod: content.getElementsByTagName('LastModified')[0].innerHTML,
                size: content.getElementsByTagName('Size')[0].innerHTML

            })

        }
        return output
    }


    render() {
        return(
            <div className="search-form"> 
                <form onSubmit={this._handleSubmit}>
                    <label>AWS server name: 
                        <input type="text" onChange={this._handleChange} value={this.state.query} />
                       
                    </label>
                    <button type="submit" >Fetch</button>
                </form>
            </div>
        )
    }
}

export default Fetch