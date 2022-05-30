<template>
  <div class="container">
    <div class="signup-row g-0">
      <!-- form part -->
      <div class="from">
        <Form
          @submit="register"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div
            class="sucess-msg"
            v-if="reg_show_alert"
            :class="reg_alert_variant"
          >
            {{ reg_alert_msg }}
          </div>

          <div class="SignUp-msg">
            <h3>Sign Up</h3>
          </div>

          <div class="form-signup-row">
            <div class="form-group col-5">
              <label>Full Name</label>
              <Field
                name="name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
              />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
          </div>
          <div class="form-signup-row">
            <div class="form-group col">
              <label>Email</label>
              <Field
                name="email"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
          </div>
          <div class="form-signup-row">
            <div class="form-group col">
              <label>Password</label>
              <Field
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="form-group col">
              <label>Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.confirmPassword }"
              />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>
          <div class="form-group form-check">
            <Field
              name="acceptTerms"
              type="checkbox"
              id="acceptTerms"
              value="true"
              class="form-check-input"
              :class="{ 'is-invalid': errors.acceptTerms }"
            />
            <label class="condition-text">
              <p>
                By signing up I have read and agree to the
                <a href="">Terms and Conditions</a> and
                <a href="">Privacy Policy</a>.
              </p>
            </label>
            <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary mr-1"
              :disabled="reg_in_submission"
            >
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { Form, Field } from "vee-validate";
import { configure } from "vee-validate";

//firebase

export default {
  components: {
    Form,
    Field,
  },
  setup() {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(7, "Name must be at least 6 characters")
        .max(20, "Name must be max of characters")
        .required("Full Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(12, "Password must max 12 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      acceptTerms: Yup.string().required("Kindly except term & condition"),
    });
    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
    return {
      schema,
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: "bg-blue-500",
      reg_alert_msg: "Please wait! Your account is being created.",
    };
  },
  methods: {
    async register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-success';
      this.reg_alert_msg = 'Please wait! Your account is being created.';
      
      //handle error
      try{
      await this.$store.dispatch('register', values);
      } catch (error) {
        this.reg_in_submission = false;
        this.reg_alert_variant = 'bg-danger';
        this.reg_alert_msg = 'An unexpected error occured. Please try again later.';
        return;
      }

      this.reg_alert_variant = 'bg-success';
      this.reg_alert_msg = 'Success! Your account has been created.';
      // window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
/* from area  */
.authentication-from {
	display: flex;
	justify-content: flex-end;
	background-color: #fff;
}
form {
	margin: 0rem 2rem 0rem 2rem;
}
.sucess-msg {
	width: 100%;
	height: 40px;
	background-color: rgb(123, 222, 123);
	color: #fff;
	text-align: center;
	flex-direction: column;
	display: flex;
	justify-content: center;
}
.form-group {
	margin-top: 0;
	width: 100%;
	label {
		font-size: 14px;
		margin-bottom: 1px;
	}
	input {
		box-shadow: none !important;
	}
	button {
		width: 100%;
		background: #2ba8f5;
		border: 0.5px solid #2ba8f5;
		border-radius: 4px;
		font-weight: 600;
		font-size: 14px;
		line-height: 21px;
		color: #ffffff;
		box-shadow: none !important;
		margin-top: 5px;
	}
}
.invalid-feedback {
	margin-top: 0 !important;
	font-size: 10px;
}
.SignUp-msg {
	padding-top: .5rem;
	h3 {
		font-size: 16px;
	}
}
.condition-text {
	padding: 0 60px 0 0px;
	p {
		color: #000;
		font-size: 12px;
		line-height: 16px;
		color: rgba(0, 0, 0, 0.3);
		a {
			text-decoration: none;
		}
	}
}
@media screen and (max-width: 600px) {
	.condition-text {
		padding: 0 0px 0 0px;
	}
}
@media screen and (max-width: 426px) {
	.condition-text {
		p {
			color: #fff;
		}
	}
}

</style>