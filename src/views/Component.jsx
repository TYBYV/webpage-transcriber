import React from 'react';
import compare from 'react-addons-shallow-compare';


export default class Component extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		// Equivalent to `ReactPureRenderMixin`.
		return compare(this, nextProps, nextState);
	}

}
