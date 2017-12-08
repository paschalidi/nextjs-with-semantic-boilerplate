import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { required, email, aol } from '../../form-validation';
import TabletAndComputer from '../Responsive/TabletAndComputer';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Form.Input className="form-font-lighter-s" {...input} placeholder={label} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class FormContactMe extends React.Component {

  render() {
    const {
      handleSubmit,
      submitting,
      textValue
    } = this.props;

    return (
      <div>
        <TabletAndComputer>
          <Form onSubmit={handleSubmit}>
            <Grid centered container>
              <Grid.Row style={{ padding: 0 }} widths="equal" columns={2}>
                <Grid.Column className="padding-r-s" width={5}>
                  <Field
                    name="text"
                    type="text"
                    label='Send me a line'
                    component={renderField}
                    validate={[required]}
                    warn={aol}
                  />
                </Grid.Column>
                <Grid.Column className="padding-l-s" width={3}>
                  <div onClick={this.props.onButtonClick(textValue)}>
                    <Button fluid className="shiny" type="submit" disabled={submitting}>
                      DropIt
                    </Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </TabletAndComputer>
      </div>
    );
  }
}

const selector = formValueSelector('formContactMe');// same as form name
FormContactMe = connect(state => {
  const textValue = selector(state, 'text');
  return { textValue };
})(FormContactMe);

export default reduxForm({
  form: 'formContactMe' // a unique identifier for this form
})(FormContactMe);