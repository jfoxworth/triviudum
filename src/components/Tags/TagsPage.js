
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// Import CSS
import '../mainCSS.css';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Import Components
import NavBar from '../NavBar/NavBar';
import TagsHeader from './TagsHeader';
import TagsDescription from './TagsDescription';
import TagList from './TagList';
import Footer from '../Footer/FooterPage';



class TagsPage extends React.Component {

	
		constructor(props) {
			super(props);
		}

		render(){


			return (
				<div className="">

					<NavBar />

					<Container className="mt-medium">

						<div className="sidebar-container mt-large">

              {this.props.auth.uid && <TagsHeader userId={this.props.auth.uid}/>}
              {!this.props.auth.uid && <TagsDescription/>}
              <TagList tags={this.props.tags} userId={this.props.auth.uid}/>


            </div>

			
					</Container>

					<Footer />
				
				</div>
			);
		}
}


const mapStateToProps = (state) => {
  console.log(state.firestore.ordered);
  return {
    tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : [],
		auth:state.firebase.auth,
	}
}



export default compose(
	connect(mapStateToProps),
	firestoreConnect([
        { collection:'tags'}
       ])
)(TagsPage);