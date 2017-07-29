import React, { Component } from "react";

import {
  Modal,
  Form,
  TextInput,
  Header,
  Dropdown,
  Footer
} from "../../components";

import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";

import states from "../../states/form";
import "./questions.css";

const { UPDATE_SEVERITY } = states.actions;

const updateSeverity = (event, index, value) => UPDATE_SEVERITY(value);

class Questions extends Component {
  state = {
    severityArray: ["Dementia", "Diarrhoea"],
    finished: false,
    stepIndex: 0,
    autoOk: false,
    disableYearSelection: false,

    dropdown: "",
    severityKey: 0,
    name: "",
    age: 0,
    severity: "",
    date: new Date(),
    doesKnowName: "",
    doesKnowWhere: "",
    doesRecognize: ""
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleChangeDate = (event, date) => {
    this.setState({
      date
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  updateDropDown = (event, value) => {
    this.setState({
      severityKey: value,
      dropdown: this.state.severityArray[value]
    });
  };

  updateName = name => {
    this.setState({
      name
    });
  };

  updateAge = age => {
    this.setState({
      age
    });
  };

  updateSeverity = severity => {
    this.setState({
      severity
    });
  };

  updateDoesKnowName = (event, doesKnowName) => {
    this.setState({
      doesKnowName
    });
  };

  updateDoesKnowWhere = (event, doesKnowWhere) => {
    this.setState({
      doesKnowWhere
    });
  };

  updateDoesRecognize = (event, doesRecognize) => {
    this.setState({
      doesRecognize
    });
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 7 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 &&
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    if (this.state.stepIndex > 7) {
      const request = `?dropdown={this.state.dropdown}&name={this.state.name}&age={this.state.age}
      &severity={this.state.severity}&date={this.state.date}&doesKnowName={this.state.doesKnowName}
      &doesKnowWhere={this.state.doesKnowWhere}&doesRecognize={this.state.doesRecognize}`;
      /*fetch("Api link" + request)
        .then(response => response.json())
        .then(json => console.log(json));*/

      // COMPLETE THE FORM (WITHOUT THE DEBUGGER OR ELSE U CANT SEE THE END OF THE MODAL);
      // THEN ONCE U SUBMIT U WILL SEE THE VALUES; fetch is like $.JSON but its a wrapper around XmlHttpRequest
      // https://developer.mozilla.org/en/docs/Web/API/Fetch_API
      console.log(
        this.state.dropdown,
        this.state.name,
        this.state.age,
        this.state.severity,
        this.state.date,
        this.state.doesKnowName,
        this.state.doesKnowWhere,
        this.state.doesRecognize
      );

      console.log(request);
    }

    return (
      <Modal>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Lost person behaviour subject profiles</StepLabel>
            <StepContent>
              <Dropdown
                value={this.state.severityKey}
                onChange={this.updateDropDown}
                menuItems={this.state.severityArray}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Enter your name.</StepLabel>
            <StepContent>
              <TextInput placeholder="Name" onChange={this.updateName} />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Enter your age.</StepLabel>
            <StepContent>
              <TextInput placeholder="Age" onChange={this.updateAge} />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepContent>
              <TextInput
                placeholder="Describe subject as mild, moderate, or severe dementia."
                dataSource={["mild", "moderate", "severe dementia"]}
                onChange={this.updateSeverity}
              />
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Person last seen.</StepLabel>
            <StepContent>
              <DatePicker
                onChange={this.handleChangeDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Date"
                defaultDate={this.state.Date}
                disableYearSelection={this.state.disableYearSelection}
              />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Does the subject know his own name?</StepLabel>
            <StepContent>
              <RadioButtonGroup name="name" onChange={this.updateDoesKnowName}>
                <RadioButton value="yes" label="Yes" />
                <RadioButton value="maybe" label="Maybe" />
                <RadioButton value="no" label="No" />
              </RadioButtonGroup>
              {this.renderStepActions(5)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              Does the subject know where he is when at home?
            </StepLabel>
            <StepContent>
              <RadioButtonGroup
                name="where"
                onChange={this.updateDoesKnowWhere}
              >
                <RadioButton value="yes" label="Yes" />
                <RadioButton value="maybe" label="Maybe" />
                <RadioButton value="no" label="No" />
              </RadioButtonGroup>
              {this.renderStepActions(6)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              Does the subject recognize the local neighborhood?
            </StepLabel>
            <StepContent>
              <RadioButtonGroup
                name="recognize"
                onChange={this.updateDoesRecognize}
              >
                <RadioButton value="yes" label="Yes" />
                <RadioButton value="maybe" label="Maybe" />
                <RadioButton value="no" label="No" />
              </RadioButtonGroup>
              {this.renderStepActions(7)}
            </StepContent>
          </Step>
        </Stepper>
      </Modal>
    );
  }
}

export default Questions;
