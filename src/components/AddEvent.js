import React, { Component } from 'react';
import RaisedButton from 'material-ui-old/RaisedButton';
import {connect} from 'react-redux';
import request from 'superagent';
import MenuItem from 'material-ui-old/MenuItem';
import Snackbar from 'material-ui-old/Snackbar';
import actionCreator from '../actions/trekActionCreator';
import Formsy from 'formsy-react';
import {  FormsyDate,
FormsySelect, FormsyText, FormsyTime } from 'formsy-material-ui/lib';

const mapStateToProps = (state) =>{
  return {
    canSubmit:state.addEventReducer.canSubmit,
    serverAddr: state.trekReducer.serverAddr,
    openSnackbar: state.addEventReducer.openSnackbar,
    snackbarData: state.addEventReducer.snackbarData,
  };
}

const mapDispatchToProps = (dispatch)=>{
  return {
    enableSubmit: ()=>dispatch(actionCreator.enableSubmit()),
    disableSubmit: ()=>dispatch(actionCreator.disableSubmit()),
    snackbarOpen: (data)=>dispatch(actionCreator.snackbarOpen(data)),
    snackbarClose: ()=>dispatch(actionCreator.snackbarClose()),
  };
}

const style={
  width:'100%',
};

Formsy.addValidationRule('isDateOrder',function(values,value,otherField){
  console.log("value",value);
  if(values[otherField]== null||value==null){
      console.log("both are not filled");

      return true;

    }
  else{
      console.log("both are filled");
      console.log("result: ",values[otherField]<value);
      return values[otherField]<value;
  }
});


class AddEvent extends Component {
  constructor(props){
    super(props);
    this.errorMessages={
      NumericError: 'Not a Number',
      hasSpace: 'Space not allowed',
      isDateOrder:'Return after depart'
    };
    this.submit = this.submit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      submitting:false //for changing the label on the submit button.
    }
  }


//changes the limit and price to integers and sends the data.
//and also trims the name to check properly in database.
  submit(model,resetForm,invalidateForm){ 
    let that =this;
    this.setState({submitting:true});
    console.log("inside submit",model);
    model.e_limit = parseInt(model.e_limit);
    model.e_price = parseInt(model.e_price);
    model.e_name = model.e_name.trim();

    request.post(this.props.serverAddr+'/events')
      .send(model)
      .end(function(err,res){
        that.setState({submitting:false});
        if(err||!res.body.status){
            console.log('Error in posting events==>',res,err);
            that.handleSnackbar(res.body.result);
          }
        else
        {
          console.log('Posted the events',res);
          that.handleSnackbar(res.body.result);
        }
      });
  }
  handleSnackbar(data){
    console.log("this is data inside handleSnackbar", data);
    this.props.snackbarOpen(data);
    window.setTimeout(()=>{this.props.snackbarClose()},4000);
  }
  resetForm(){
    console.log("resetting form");
    this.refs.form.reset();
  }

	render() {
		return (
		<div style={{height:'100%',maxWidth:'100%',width:'100%'}}>
    				
		<Formsy.Form onValid={this.props.enableSubmit} onInvalid={this.props.disableSubmit}  
      onValidSubmit={this.submit} ref='form'

          >
          <FormsyText   name="e_name" required hintText="Tadiandamol Trek" floatingLabelText="Name" style={style}/>
          <FormsyText   name="e_desc" required hintText="Tell about trek"
           floatingLabelText="Description" multiLine rows={3} style={style}/>
          <FormsyText   name="e_placeId" required validations='isAlphanumeric'
           hintText="From Google maps" floatingLabelText="PlaceId"
            validationError={this.errorMessages.hasSpace} style={style}/>
            <FormsyText   name="e_picUrl" required 
           hintText="http://blah.com/photo.png" floatingLabelText="Url"
             style={style}/>
          
            <FormsyDate
              name="e_dDate"
              required
              floatingLabelText="Departure date" autoOk
            />
             <FormsyTime
              name="e_dTime"
              required
              floatingLabelText="Departure Time"
            />
            <FormsyDate
              name="e_rDate"
              validations="isDateOrder:e_dDate"
              required
              floatingLabelText="Return date" autoOk
              validationError={this.errorMessages.isDateOrder}
            />
             <FormsyTime
              name="e_rTime"
              required
              floatingLabelText="Return Time"
            />
            <FormsySelect name="e_type" required floatingLabelText="Type">
              <MenuItem value="night" primaryText="Night" />
              <MenuItem value="day" primaryText="Day" />
            </FormsySelect>

          <FormsyText validations="isNumeric"  name="e_limit"
           required hintText="50" floatingLabelText="Limit"
            validationError={this.errorMessages.NumericError}/>

          <FormsyText validations="isNumeric"  name="e_price"
           required hintText="3000" floatingLabelText="Price Per Head"
            validationError={this.errorMessages.NumericError}/>
          <br/>
          <br/>
           <RaisedButton  label={this.state.submitting?'Sending':'Submit'}  type='submit' disabled={!this.props.canSubmit}/> 
           <RaisedButton  label='Reset' onClick={this.resetForm}/> 
            
</Formsy.Form>
    <Snackbar   //added by manoj
              open={this.props.openSnackbar}
              message={this.props.snackbarData}
              />
    	
  		</div>
		);
	}
}
const AddEventContainer = connect(mapStateToProps,mapDispatchToProps)(AddEvent);
export default AddEventContainer;
