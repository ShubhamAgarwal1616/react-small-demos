import React from 'react';
import '../../css/labels.css'

export default function labels(props) {
  return (
    <div className={"labels"}>
      <div className={"commands-section"}>
        <label>Commands</label>
        <div className={"common"}>
          <div className={"total-section"}>
            <div>
              <label>Total</label>
            </div>
            <div>
              <label>50</label>
            </div>
          </div>
          <div className={"executed-section"}>
            <div>
              <label>Executed</label>
            </div>
            <div>
              <label>50</label>
            </div>
          </div>
        </div>
      </div>
      <div className={"status"}>
        <label>Status</label>
      </div>
    </div>
  );
}