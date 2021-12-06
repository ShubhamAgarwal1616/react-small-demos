import React, {useState} from 'react';
import { SchemaForm, utils, TextArea } from "react-schema-form";
import data from './data';
import MySelect from "./select";
import Label from "./label";
import Area from "./Area";

export default function SchemaFormTest() {

  console.log(data.schema)
  console.log(data.form)
  console.log(data.model)

  const ReadOnlyMapper = {
    number: Label,
    text: Label,
    password: Label,
    textarea: Label,
    markdown: Label,
    textsuggest: Label,
    select: Label,
    taxonomy: Label,
    multiselect: Label,
    selectWithDefault: Label,
  }

  const mapper = {
    selectWithDefault: MySelect,
    // textarea: Area,
    // select: MySelect,
    // text: Area,
    // number: Area,
  }

  const [model, setModel] = useState(data.model);
  const [toggle, setToggle] = useState(true);



  const onModelChange = (key, val, type) => {
    const newModel = {...model};
    utils.selectOrSet(key, newModel, val, type);
    setModel(newModel);
  };

  return (
    <>
      <div>
      <SchemaForm
        schema={data.schema}
        form={data.form}
        model={model}
        onModelChange={onModelChange}
        mapper={mapper}
      />
      </div>
      <div>
        <button onClick={() => {
          setToggle(!toggle)
        }}>click</button>
      </div>
    </>
  )
}
