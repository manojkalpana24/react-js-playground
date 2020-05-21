import React from "react";
import { Field, reduxForm } from "redux-form";
import LanguageContext from "../../contexts/LanguageContext";

class PostForm extends React.Component {
  // Special property
  static contextType = LanguageContext;
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="field error">
          <label>{error}</label>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    formValues.user_id = 2;
    this.props.onSubmit(formValues);
  };

  render() {
    const buttonText =
      this.context === "english" ? "Submit" : "சமர்ப்பிக்கவும்";
    const titleText = this.context === "english" ? "Title" : "தலைப்பு";
    const descriptionText =
      this.context === "english" ? "Description" : "விளக்கம்";
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label={titleText}
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label={descriptionText}
        ></Field>
        <button className="ui button primary">{buttonText}</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "postForm",
  validate,
})(PostForm);
