import { Formik, Form } from "formik";

import {
  Wrapper,
  FormWrapper,
  FieldsWrapper,
  ErrorsWrapper,
  ErrorText,
  RulesContainer,
  RulesWrapper,
  Rule,
  CheckIcon,
  EmptyIcon,
  Title,
  Footer,
} from "../account.styles";
import {
  passwordRules,
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
        {({ errors, handleChange, isSubmitting, values }) => (
          <Form>
            <FormWrapper>
              <Title variant="h6">Sign Up</Title>
              <FieldsWrapper>
                <TextField
                  dataTestId="signup-username"
                  fluid
                  id="username"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                />
                <PasswordField
                  dataTestId="signup-password"
                  fluid
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <PasswordField
                  dataTestId="signup-passwordConfirm"
                  fluid
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </FieldsWrapper>
              <RulesContainer>
                <RulesWrapper>
                  {passwordRules.map((rule) => (
                    <Rule
                      key={rule.label}
                      style={{
                        color: rule.test(values.password) ? "green" : "gray",
                      }}
                    >
                      {rule.test(values.password) ? (
                        <CheckIcon />
                      ) : (
                        <EmptyIcon />
                      )}{" "}
                      {rule.label}
                    </Rule>
                  ))}
                </RulesWrapper>
              </RulesContainer>
              <ErrorsWrapper>
                {signUpFieldOrder.map((fieldName) => {
                  const errorMessage = errors[fieldName];
                  if (typeof errorMessage !== "string") return null;
                  return (
                    <ErrorText
                      data-testid={`error-${fieldName}`}
                      key={`error-${fieldName}`}
                    >
                      • {errorMessage}
                    </ErrorText>
                  );
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
                  <TextLink
                    data-testid="signup-navigate-login"
                    href={LOGIN}
                    text="Log in"
                  ></TextLink>
                </Typography>
              </Footer>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
