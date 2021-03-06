import * as React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';
import './index.less';

interface IIndexCtlProps {
    count: number,
    click: () => void
}

class IndexCtl extends React.PureComponent<IIndexCtlProps, {}> {
    public render() {
        return (
            <div onClick = {this.props.click}>
                {this.props.count}
                <Button type= 'primary'>test</Button>
            </div>
        ) 
    }
}

const mapStateToProps = (state: IIndexCtlProps) => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        click: () => {
            dispatch({type: 'increase'});
        }
    }
}

export const IndexCtlFactory = connect(mapStateToProps, mapDispatchToProps)(IndexCtl);
