import { Formik, Form } from "formik";

import {
  Wrapper,
  FormWrapper,
  FieldWrapper,
  InputWrapper,
  ErrorText,
  Input,
  Title,
  Footer,
} from "./account.styles";
import { FormLabel } from "../common/components/FormLabel/FormLabel";
import { logInInitialValues, logInValidation } from "./account.consts";
import { Button } from "../common/components/Button/Button";
import { SIGNUP } from "../common/consts/navigation.consts";
import { TextLink } from "../common/components/TextLink/TextLink";
import { Typography } from "../common/components/Typography/Typography";

export const LogIn = () => (
  <Wrapper>
    <Formik
      initialValues={logInInitialValues}
      onSubmit={() => {}}
      validateOnBlur={true}
      validateOnChange={false}
      validationSchema={logInValidation}
    >
      {({ errors, handleChange, isSubmitting }) => (
        <Form>
          <FormWrapper>
            <Title variant="h6">Log In</Title>
            <FieldWrapper>
              <FormLabel label="Username:" name="username" />
              <InputWrapper>
                <Input id="username" name="username" onChange={handleChange} />
                <ErrorText>{errors.username ? errors.username : ""}</ErrorText>
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="Password:" name="password" />
              <InputWrapper>
                <Input id="password" name="password" onChange={handleChange} />
                <ErrorText>{errors.password ? errors.password : ""}</ErrorText>
              </InputWrapper>
            </FieldWrapper>
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
