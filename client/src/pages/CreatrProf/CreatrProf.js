import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMob from '../../components/SidebarMob/SidebarMob';

import './CreatrProf.css';

const CreatrProf = () => {
	const songs = [ 'Song One', 'Song Two', 'Song Three', 'Song Four', 'Song Five' ];
	return (
		<div className="CreatrProf">
			<Row>
				<Sidebar />
				<SidebarMob />
				<Col lg={10}>
					<Row className="mt-4 flex align-items-center">
						<Col lg={3}>
							<Card>
								<Card.Img
									variant="top"
									src="https://via.placeholder.com/150"
								/>
								<Card.Body>
									<Card.Text>Location: Austin, TX</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={9}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Similique tenetur ad perferendis incidunt vel quas,
								quidem, porro, repellat animi qui expedita dolores sequi
								voluptatum blanditiis laudantium a id quia ducimus minus
								repellendus iure impedit est sit placeat? Maxime
								repellendus distinctio inventore deserunt est eaque aut,
								temporibus adipisci ipsa, doloremque numquam iusto,
								voluptatibus aperiam placeat qui officia omnis commodi.
								Deleniti officiis magni esse vitae cupiditate fugit
								aliquam laudantium iusto dolor sed, ab soluta accusamus
								nemo. Expedita rem sapiente perferendis quaerat pariatur
								autem, ad nobis eos ullam laboriosam temporibus blanditiis
								veniam laborum quos eaque eveniet quibusdam natus
								dignissimos corporis, consectetur doloribus! Quia?
							</p>
							<h4>Available Songs</h4>
							<ul>
								{songs.map((song, i) => (
									<li key={i}>
										<BiPlay /> <BiPlusMedical /> {song}
									</li>
								))}
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CreatrProf;
