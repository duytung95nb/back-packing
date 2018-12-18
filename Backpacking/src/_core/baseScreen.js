import React from 'react';

export default class BaseScreen extends React.Component {
    // TODO: need to get exact screen name for each inherited component
    static get screenName() {
        return  this.__proto__.constructor.name;
    };
}