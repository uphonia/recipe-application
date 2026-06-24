import { Formik, Form } from "formik";
import {
  Wrapper,
  FormWrapper,
  FieldWrapper,
  ErrorsWrapper,
  ErrorText,
  Title,
  Footer,
} from "../account.styles";
import { FormLabel } from "../../common/components/FormLabel/FormLabel";
import { signUpInitialValues, signUpValidation } from "../account.consts";
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
              <FieldWrapper>
                <FormLabel label="Username:" name="username" />
                <TextField
                  fluid
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <FormLabel label="Password:" name="password" />
                <PasswordField
                  fluid
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <FormLabel label="Confirm Password:" name="passwordConfirm" />
                <PasswordField
                  fluid
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={handleChange}
                />
              </FieldWrapper>
              <ErrorsWrapper>
                <ErrorText>
                  {errors.username ? `• ${errors.username}` : ""}
                </ErrorText>
                <ErrorText>
                  {errors.password ? `• ${errors.password}` : ""}
                </ErrorText>
                <ErrorText>
                  {errors.passwordConfirm ? `• ${errors.passwordConfirm}` : ""}
                </ErrorText>
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
