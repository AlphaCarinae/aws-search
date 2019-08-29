import React, { Component } from 'react';


class ShowFiles extends Component {
constructor(props) {
    super(props)
    this.state={
        awsFiles: []
    }
}

    render() {
        return(
            <div>
                <table>
                <tbody>
                    <tr>
                        <th>File Name/Address</th>
                        <th>File Size</th>
                        <th>Modified</th>

                    </tr>
                    
                        {this.props.awsFiles.map(file => {
                        return ( <tr key={file.key}>
                                <td>{file.key}</td>
                                <td>{file.size}</td>
                                <td>{file.lastMod}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default ShowFiles;