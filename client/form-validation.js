import { Segment } from 'semantic-ui-react'


export const selectRequired = value => value
  ?
  undefined
  :
  <Segment
    size="tiny"
    style={{ color: "red" }}
    className="transparent-s padding-none-s"
  >
    Field is Required</Segment>


export const required = value => value
  ?
  undefined
  :
  <Segment
    size="tiny"
    style={{ color: "red" }}
    className="transparent-s padding-none-s"
  >
    Field is Required</Segment>

export const maxLength = max => value =>
  value && value.length > max
    ?
    <Segment size="tiny" style={{ color: "red" }} className="transparent-s padding-none-s">
      Must be {max} characters or less
    </Segment>
    :
    undefined

export const maxLength20 = maxLength(20)

export const minLength = min => value =>
  value && value.length <= min
    ?
    <Segment size="tiny" style={{ color: "red" }} className="transparent-s padding-none-s">
      Must be {min + 1} characters or more
    </Segment>
    :
    undefined

export const minLength2 = minLength(2)

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? <Segment
      size="tiny"
      style={{ color: "red" }}
      className="transparent-s padding-none-s"
    >Invalid phone number, must be 10 digits</Segment>
    : undefined

export const number = value =>
  value && isNaN(Number(value))
    ?
    <Segment
      size="tiny"
      style={{ color: "red" }}
      className="transparent-s padding-none-s"
    >Must be a number</Segment>
    :
    undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ?
    <Segment
      size="tiny"
      style={{ color: "red" }}
      className="transparent-s padding-none-s"
    >Invalid Email Adresse</Segment>
    :
    undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined
