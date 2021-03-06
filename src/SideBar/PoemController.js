import React, {Component} from 'react';

//simple controller for poems with callbacks

class PoemController extends Component{
    constructor(props){
        super(props);
        this.state={callback: ((e) => this.props.callback(e))};
    }

    render() {
        return (
            <div>
                <p><strong>Poems</strong></p>
                <ul>
                    {Object.keys(this.props.PoemKeys).map(title =>
                        <li key={title} onClick={(e) => this.useCallback({title})}><a>{title}</a></li>)}
                </ul>
            </div>
        );
    }

    useCallback(e){
        this.props.callback(e);
    }
}

export default  PoemController;
