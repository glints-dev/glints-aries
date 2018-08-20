/* @flow */

import React, { Component } from 'react';
import { Container, TabWrapper } from '../Style/TabsStyle';

class Tabs extends Component <Props, State> {
	render() {
		const { children } = this.props;

		return(
			<Container>
				<ul>
					<li>test</li>
					<li>qwe</li>
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
