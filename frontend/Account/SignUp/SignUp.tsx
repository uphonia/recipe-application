import { Formik, Form } from "formik";

import {
  Wrapper,
  FormWrapper,
  FieldsWrapper,
  ErrorsWrapper,
  ErrorText,
  Title,
  Footer,
} from "../account.styles";
import {
  signUpFieldOrder,
  signUpInitialValues,
  signUpValidation,
} from "../account.consts";
import { Button } from "../../common/components/Button/Button";
import { Typography } from "../../common/components/Typography/Typography";
import { TextLink } from "../../common/components/TextLink/TextLink";
import { LOGIN } from "../../common/consts/navigation.consts";
import { PasswordField } from "../../common/components/PasswordField/PasswordField";
import { TextField } from "../../common/components/TextField/TextField";
import { useSignUp } from "./signUp.hooks";

export const SignUp = () => {
  const { handleSubmit } = useSignUp();

  return (
    <Wrapper>
      <Formik
        initialValues={signUpInitialValues}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={signUpValidation}
      >
        {({ errors, handleChange, isSubmitting }) => (
          <Form>
            <FormWrapper>
              <Title variant="h6">Sign Up</Title>
              <FieldsWrapper>
                <TextField
                  fluid
                  id="username"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                />
                <PasswordField
                  fluid
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <PasswordField
                  fluid
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </FieldsWrapper>
              <ErrorsWrapper>
                {signUpFieldOrder.map((fieldName) => {
                  const errorMessage = errors[fieldName];
                  if (typeof errorMessage !== "string") return null;
                  return <ErrorText>• {errorMessage}</ErrorText>;
                })}
              </ErrorsWrapper>
              <Footer>
                <Button
                  loading={isSubmitting}
                  size="medium"
                  type="submit"
                  variant="primary"
                >
                  Sign Up
                </Button>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <TextLink href={LOGIN} text="Log in"></TextLink>
                </Typography>
              </Footer>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
