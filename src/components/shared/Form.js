import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Label } from './Texts';
import { theme } from '../../styles/theme'



const FormContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 100%;
`

const FormContent = styled.div`
width: 100%;
background-color: ${({theme:{colors}})=>colors.red};
padding:32px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
&>*:not(:last-child){
 margin-bottom:16px;
}
`

const Input = styled.input`
display: flex;
width: -webkit-fill-available;
padding: 8px;
`
const Row = styled.div`
width: 100%;
display: flex;
flex-direction:row;
&>*:not(:last-child){
 margin-right:16px;
}
@media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel + 1}px`}) {
        flex-direction:column;
        &>*:not(:last-child){
            margin-right:0px;
            margin-bottom:16px;
        }
}
`

const Form = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('required'),
        email:  Yup.string().email('Invalid email address').required('Required'),
        subject: Yup.string(),
        message: Yup.string(),
      });

    const { values, touched, errors, setFieldValue, handleChange, handleReset, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: {
          name: '',
          email:"",
          subject:"",
          message:""

        },
        validationSchema,
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
        },
      });

    return (
        <FormContainer>
            <FormContent>
                <Label style={{color:theme.colors.white}} bold fontSize="32px">
                    Write us
                </Label>
                <Row>
                    <Input id="name" name="name" onChange={handleChange} error={touched.name && !!errors.name} placeholder="Your Name (required)" />
                    <Input
                        id="email"
                        name="email"
                        placeholder="Your Email (required)"
                        onChange={handleChange}
                        error={touched.email && !!errors.email}
                        type="email"
                    />
                </Row>
                <Input id="subject" name="subject" onChange={handleChange} error={touched.subject && !!errors.subject} placeholder="Subject" />
                <Input type="textarea" id="message" name="message" onChange={handleChange} error={touched.message && !!errors.message} placeholder="message" />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </FormContent>

        </FormContainer>
    );
};

export default Form;