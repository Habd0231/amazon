import AuthLayout from "../features/auth/components/AuthLayout";
import SigninForm from "../features/auth/components/SigninForm.component";

const SignInPage = () => {
  return (
    <AuthLayout>
      <SigninForm />
    </AuthLayout>
  );
};

export default SignInPage;
