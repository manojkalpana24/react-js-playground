import React, { useContext, useCallback, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import LanguageContext from "../../contexts/LanguageContext";

const PostForm = (props) => {
  // Special property (equal to static contextType = LanguageContext)
  const language = useContext(LanguageContext);
  const buttonText = language === "english" ? "Submit" : "சமர்ப்பிக்கவும்";
  const titleText = language === "english" ? "Title" : "தலைப்பு";
  const descriptionText = language === "english" ? "Description" : "விளக்கம்";

  useEffect(() => {});

  const onSubmit = (formValues) => {
    formValues.user_id = 2;
    props.onSubmit(formValues);
  };

  const renderError = useCallback(({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="field error">
          <label>{error}</label>
        </div>
      );
    }
  }, []);

  const renderInput = useCallback(({ input, autoFocus, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoFocus={autoFocus} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  }, []);

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name="title"
        autoFocus={true}
        component={renderInput}
        label={titleText}
      ></Field>
      <Field
        name="description"
        component={renderInput}
        label={descriptionText}
      ></Field>
      <button className="ui button primary">{buttonText}</button>
    </form>
  );
};

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
