import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Form from './form';
import Chart from './chart';
import {getWeatherAction} from '../actions/actions';

const Container = props => {
    const {error, city} = props;

    return (
        <Fragment>
            <Form {...props}/>
            {city ? <Chart {...props}/> : null}
            {error ? <p>City not found</p> : null}
        </Fragment>
    )
};

export default connect(
    state => ({
        city: state.weather.city,
        error: state.weather.error
    }),
    {getWeatherAction}
)(Container);
