import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from "../../actions";

class SurveyList extends Component {
    render() {
        return (
           <div>
               SurveyList
           </div>
        );
    }
}

function mapStateProps({surveys}) {
    return {surveys};
}

export default connect(mapStateProps,fetchSurveys)(SurveyList);