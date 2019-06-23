import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGroupById } from "../../store/actions/groupActions";
import { bindActionCreators } from "redux";
import AccordionItem from "../../components/AccordionItem/index";

const matStateToProps = state => {
  return {
    selectedGroup: state.group.selectedGroup
  };
};
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      getGroupById
    },
    dispatch
  );
};

const GroupDetails = props => {
  const { getGroupById } = props;
  const groupId = props.match.params.groupId;
  React.useEffect(() => {
    getGroupById(groupId);
  }, [getGroupById, groupId]);
  if (!props.selectedGroup) {
    return <div>Not Found</div>;
  }
  return <AccordionItem data={props.selectedGroup} />;
};

export default connect(
  matStateToProps,
  mapActionsToProps
)(GroupDetails);
