import React, { useState, useEffect } from 'react'
import { ComposedComponent } from 'react-schema-form'
import { utils } from 'react-schema-form'
import Grid from '@material-ui/core/Grid';

function Label(props) {
  const {
    model,
    form,
    error,
    setDefault,
    onChange,
    onChangeValidate,
    localization: { getLocalizedString },
    form: {
      key,
      schema: { isObject, enum: values, findFn, displayFn, noLocalization }
    }
  } = props

  let defaultValue =
    form && form.selectProps && form.selectProps.multiple ? [] : ''
  if (props.form.default) {
    defaultValue = props.form.default
  } else if (props.form.schema && props.form.schema.default) {
    defaultValue = props.form.schema.default
  }
  const [currentValue, setCurrentValue] = useState(
    utils.getValueFromModel(model, form.key) || defaultValue
  )

  useEffect(() => {
    setDefault(key, model, form, currentValue);
  }, [])

  return (
    <Grid container>
      <Grid item xs={4}>
        <b>{form.title && getLocalizedString(form.title)}</b>
      </Grid>
      <Grid  item xs={6}>
        {currentValue}
      </Grid>
    </Grid>
  )
}

export default ComposedComponent(Label)
