import React from 'react';
import { Container,Icon,Grid,Rail,Segment,Menu, Image } from 'semantic-ui-react';
import { Link } from '../routes';
export default() =>{
	return (
		<Container fluid style={{marginTop:50,paddingTop:60}}>
			
			<Menu text>
				<Menu.Item header>Team  <Icon name='copyright' /> </Menu.Item>
				<Menu.Menu position='right'>
					<Link route="https://github.com/rushikesh611/DisReliefFund">
						<a className="item" >
							<Icon name='github' size='big'/> 
						</a>
					</Link>
				</Menu.Menu>
			</Menu>
		</Container>
	);
};