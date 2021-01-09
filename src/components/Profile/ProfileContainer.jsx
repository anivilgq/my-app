import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId =13647;
        }

        this.props.getUserProfile(userId);
    }

    render() {



        return (
            <Profile {...this.props} profile={this.props.profile} />
            )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});




let WithUrlDataCC = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataCC)