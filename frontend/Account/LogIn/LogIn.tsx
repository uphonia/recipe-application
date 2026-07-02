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
import { logInInitialValues, logInValidation } from "../account.consts";
import { Button } from "../../common/components/Button/Button";
import { SIGNUP } from "../../common/consts/navigation.consts";
import { TextLink } from "../../common/components/TextLink/TextLink";
import { Typography } from "../../common/components/Typography/Typography";
import { PasswordField } from "../../common/components/PasswordField/PasswordField";
import { TextField } from "../../common/components/TextField/TextField";

import { useLogIn } from "./logIn.hooks";

export const LogIn = () => {
  const { handleSubmit } = useLogIn();

  return (
    <Wrapper>
      <Formik
        initialValues={logInInitialValues}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={logInValidation}
      >
        {({ errors, handleChange, isSubmitting }) => (
          <Form>
            <FormWrapper>
              <Title variant="h6">Log In</Title>
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
              </FieldsWrapper>
              <ErrorsWrapper>
                {Object.values(errors).map((error) => {
                  return <ErrorText>• {error}</ErrorText>;
                })}
              </ErrorsWrapper>
              <Footer>
                <Button
                  loading={isSubmitting}
                  size="medium"
                  type="submit"
                  variant="primary"
                >
                  Log In
                </Button>
                <Typography variant="body2">
                  Need an account? <TextLink href={SIGNUP} text="Sign Up" />
                </Typography>
              </Footer>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
