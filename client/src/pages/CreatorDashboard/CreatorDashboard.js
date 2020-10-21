import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CreatorDashboard.css';

const CreatorDashboard = () => {
	return (
		<main className="CreatorDashboard">
			<Row>
				<Col lg={12}>
					<h4 className="CreatorDashboard-title m-2 p-1">[Artist Name]</h4>
				</Col>
			</Row>
			<Row>
				<Col lg={5} className="CreatorDashboard-main-panel rounded m-1 p-1">
					<div class="CreatorDashboard-panel rounded m-2 mb-3">
						<div class="CreatorDashboard-photo-placeholder m-2" />
						<div class="CreatorDashboard-dropzone-placeholder rounded text-center m-2">
							Dropzone Placeholder
						</div>
					</div>
					<div class="CreatorDashboard-panel rounded m-2 mb-3 p-2 text-center">
						<p class="bio-text m-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aliquam aliquet tincidunt sapien, in finibus tortor iaculis
							quis. Vivamus convallis lacus neque, et porta felis ornare
							eget. Pellentesque sit amet congue erat. Sed ut eros
							sollicitudin, tristique lorem sit amet, pharetra lectus.
							Vestibulum porta cursus dignissim. Morbi nec orci mollis nisl
							malesuada fermentum ac vel augue.
						</p>
						<button class="btn-save btn btn-primary btn-sm">Edit Bio</button>
					</div>
					<div class="CreatorDashboard-panel rounded m-2 mb-2 p-2">
						<div class="vibe-tiles m-1 mb-2 p-1">
							<ul class="list-group small d-flex flex-row flex-wrap justify-content-center text-center p-1 m-1">
								<li class="list-group-item rounded m-1">Rock</li>
								<li class="list-group-item rounded m-1">Rap</li>
								<li class="list-group-item rounded m-1">Reggae</li>
								<li class="list-group-item rounded m-1">Rock</li>
								<li class="list-group-item rounded m-1">Rap</li>
								<li class="list-group-item rounded m-1">Jazz</li>
							</ul>
						</div>
						<button class="btn-save btn btn-primary btn-sm">
							Edit Vibes
						</button>
					</div>
				</Col>
				<Col lg={5}>
					<div className="CreatorDashboard-music-panel rounded m-3 p-1">
						<h4>Available Music</h4>
						<div class="p-2">
							<audio controls>
								<source src="horse.ogg" type="audio/ogg" />
								<source src="horse.mp3" type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</div>
						<div class="CreatorDashboard-music-tiles w-100 m-1">
							<ul class="list-group row small d-flex flex-row text-center">
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Californication
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Under The Bridge
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Otherside
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Give It Away
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Dani California
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Californication
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Under The Bridge
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Otherside
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Give It Away
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Dani California
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Californication
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Under The Bridge
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Otherside
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Give It Away
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Otherside
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Give It Away
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Dani California
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Californication
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Under The Bridge
								</li>
								<li class="list-group-item col-md-6 border-0 bg-transparent">
									Otherside
								</li>
							</ul>
						</div>
						<button class="btn-save btn btn-primary btn-sm">
							Edit Available Music
						</button>
					</div>
				</Col>
			</Row>
		</main>
	);
};

export default CreatorDashboard;
