/* @flow */

import React, { Component } from 'react';
import { Container } from '../Style/TabsStyle';

class Tabs extends Component <Props, State> {
	render() {
		const { children } = this.props;

		return(
			<Container>
				<ul>
					<li className="active">test</li>
					<li>qwe</li>
					<li>123</li>
					<li>vbc</li>
					<li>321</li>
				</ul>
				{children}
			</Container>
		);
	}
}

type Props = {
  children: React$Node,
  label: string,
  className: string,
}

export default Tabs;
