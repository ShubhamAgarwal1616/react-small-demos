import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import Dropzone from "react-dropzone";


export function DropzoneAreaCustom() {
  return (
    // <DropzoneArea
    //   acceptedFiles={['image/*']}
    //   dropzoneText={""}
    //   onChange={(files) => console.log('Files:', files)}
    //   getPreviewIcon={() => <h1>testing</h1>}
    // />
    <Dropzone accept={['.png']} onDrop={(files) => console.log(files)} maxSize={280000} onDropRejected={(e) => console.log('testing', e)}>
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()} >
          <input {...getInputProps()} />
          <div className="drag-drop-text">
            <span className="text">Drag & drop a file here</span>
            <span className="text">or</span>
            <div className="btn">
              <div>
                Upload file from computer
              </div>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  )
}
