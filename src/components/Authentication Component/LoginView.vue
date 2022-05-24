<template>
  <div class="container">
    <div class="row g-0">
      <!-- form part -->
          <div class="from">
            <Form @submit="login" :validation-schema="schema" v-slot="{ errors }">
            
            <div class="sucess-msg"
              v-if="login_show_alert" :class="login_alert_variant">
              {{ login_alert_msg }}
            </div>           

                <div class="logIn-msg">
                  <h3>Log In</h3>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Email</label>
                        <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{errors.email}}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Password</label>
                        <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{errors.password}}</div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary mr-1" :disabled="login_in_submission">Log In</button>
                </div>
            </Form>
        </div>
      </div>
    </div>
</template>

<script>
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';
import { configure } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
  },
  setup() {
    const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .max(12, 'Password must max 12 characters')
                .required('Password is required'),  
        });
      configure({
        validateOnChange: true,
        validateOnInput: false,
        validateOnModelUpdate: true,
      });
    return {
      schema,
      login_in_submission: false,
      login_show_alert: false,
      login_alert_msg: 'Please wait! We are login you in.',
    };
  },
  methods: {
    async login(values) {
      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = 'bg-danger';
      this.login_alert_msg = 'Please wait! We are login you in.';

      try{
      await this.$store.dispatch('login', values);
      } catch (error) {
        this.login_in_submission = true;
        this.login_alert_variant = 'bg-danger';
        this.login_alert_msg = 'Invalid Login Details';
        return;

      }
      this.login_alert_variant = '';
      this.login_alert_msg = 'Success! You have logged In.';
      window.location.reload();

    },
  }
};
</script>

<style scoped>
.authentication-from{
  display: flex;
  justify-content: flex-end;
  background-color:#fff;
}
.row{
  width: 100%;
}

/* from area  */
.form-area{
  border: .1px solid rgb(244, 242, 242);
}
form{
  margin: 7rem 2rem 2rem 2rem;
}
.sucess-msg{
  width: 100%;
  height: 40px;
  background-color: rgb(123, 222, 123);
  color: #fff;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
}
.form-group{
  margin-top: 0;
  width: 100%;
}
.form-group label{
  font-size: 14px;
  margin-bottom: 1px;

}
.form-group input{
  box-shadow: none !important;
}
.form-group button{
  width: 100%;
  background: #2BA8F5;
  border: 0.5px solid #2BA8F5;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;color: #FFFFFF;
  box-shadow: none !important;
  margin-top: 5px;
  margin-top: 1rem;
}
</style>