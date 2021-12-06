// const data = {
//
//   "schema": {
//     "title": "Task Properties",
//     "type": "object",
//     "properties": {
//       "outcome": {
//         "title": "WORK ACTIVITY",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "SPLIT 4 MST Installation",
//           "SPLIT 8 MST Installation",
//           "No longer required"
//         ],
//         "default": "Please select"
//       },
//       "installDesigned": {
//         "title": "Installed AS PER TASK NOTES",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Yes",
//           "No"
//         ],
//         "default": "Please select"
//       },
//       "diffMethMat": {
//         "title": "Different Method or Materials",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Yes",
//           "No"
//         ],
//         "default": "Please select"
//       },
//       "diffLocation": {
//         "title": "Different Location",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Yes",
//           "No"
//         ],
//         "default": "Please select"
//       },
//       "approvedBy": {
//         "title": "Approved By",
//         "type": "string"
//       },
//       "changeRequestApprovalNumber": {
//         "title": "Change Request Approval Number",
//         "type": "string"
//       },
//       "designChangeDetails": {
//         "title": "Change DETAILS",
//         "type": "string"
//       },
//       "constructionNotes": {
//         "title": "Construction NOTES",
//         "type": "string"
//       },
//       "tailPlacement": {
//         "title": "MST TAIL Placement",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Aerial",
//           "Underground",
//           "Mixed"
//         ],
//         "default": "Please select"
//       },
//       "headPlacement": {
//         "title": "MST HEAD Placement",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Pole",
//           "Pedestal",
//           "Vault"
//         ],
//         "default": "Please select"
//       },
//       "mstLabelInstalled": {
//         "title": "MST HEAD LABEL Installed",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Yes"
//         ],
//         "default": "Please select"
//       },
//       "tempLabelInstalled": {
//         "title": "TEMPORARY LABEL Installed on TAIL at NAP",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "Yes"
//         ],
//         "default": "Please select"
//       },
//       "numRisers": {
//         "title": "Number of RISERS INSTALLED",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "0",
//           "1",
//           "2"
//         ],
//         "default": "Please select"
//       },
//       "riser1PoleId": {
//         "title": "Riser 1 Pole ID",
//         "type": "string"
//       },
//       "riser2PoleId": {
//         "title": "Riser 2 Pole ID",
//         "type": "string"
//       },
//       "splitMstTailLength": {
//         "title": "SPLIT MST TAIL LENGTH (ft)",
//         "type": "string",
//         "enum": [
//           "Please select",
//           "100'",
//           "150'",
//           "250'",
//           "500' AERIAL",
//           "750' AERIAL",
//           "1000' AERIAL",
//           "1250' AERIAL",
//           "1500' AERIAL",
//           "1750' AERIAL",
//           "2000' AERIAL",
//           "2250' AERIAL",
//           "2500' AERIAL",
//           "3000' AERIAL",
//           "500' UNDERGROUND",
//           "750' UNDERGROUND",
//           "1000' UNDERGROUND",
//           "1250' UNDERGROUND",
//           "1500' UNDERGROUND",
//           "1750' UNDERGROUND",
//           "2000' UNDERGROUND",
//           "2250' UNDERGROUND",
//           "2500' UNDERGROUND",
//           "3000' UNDERGROUND"
//         ],
//         "default": "Please select"
//       },
//       "uGuardUsed2": {
//         "title": "Number of lengths of 2\" U-GUARDS USED",
//         "type": "number",
//         "minimum": 0,
//         "default": 0
//       }
//     }
//   },
//
//   "form": [
//     {
//       "key": "outcome",
//       "type": "selectWithDefault"
//     },
//     {
//       "key": "installDesigned",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "diffMethMat",
//       "type": "selectWithDefault",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.installDesigned==='No'"
//     },
//     {
//       "key": "diffLocation",
//       "type": "selectWithDefault",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.installDesigned==='No'"
//     },
//     {
//       "key": "approvedBy",
//       "type": "textarea",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.installDesigned==='No'"
//     },
//     {
//       "key": "changeRequestApprovalNumber",
//       "type": "textarea",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.installDesigned==='No'"
//     },
//     {
//       "key": "designChangeDetails",
//       "type": "textarea",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.installDesigned==='No'"
//     },
//     {
//       "key": "constructionNotes",
//       "type": "textarea",
//       "condition": "model.outcome!='Please select'"
//     },
//     {
//       "key": "tailPlacement",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "headPlacement",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "mstLabelInstalled",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "tempLabelInstalled",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "numRisers",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.tailPlacement==='Mixed'"
//     },
//     {
//       "key": "riser1PoleId",
//       "type": "textarea",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.tailPlacement==='Mixed'&&model.numRisers>=1"
//     },
//     {
//       "key": "riser2PoleId",
//       "type": "textarea",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.tailPlacement==='Mixed'&&model.numRisers==2"
//     },
//     {
//       "type": "help",
//       "helpvalue": "MATERIALS",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "splitMstTailLength",
//       "type": "selectWithDefault",
//       "condition": "model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation'"
//     },
//     {
//       "key": "uGuardUsed2",
//       "type": "number",
//       "condition": "(model.outcome==='SPLIT 4 MST Installation'||model.outcome==='SPLIT 8 MST Installation')&&model.tailPlacement==='Mixed'"
//     }
//   ],
//   "model": {
//     "designChangeDetails": "",
//     "installDesigned": "Yes",
//     "approvedBy": "",
//     "tailPlacement": "Mixed",
//     "MATERIALS": null,
//     "geometryModified": null,
//     "uGuardUsed2": 10,
//     "diffMethMat": "Please select",
//     "riser2PoleId": "",
//     "tempLabelInstalled": "Yes",
//     "outcome": "SPLIT 8 MST Installation",
//     "mstLabelInstalled": "Yes",
//     "numRisers": "2",
//     "build": "scale_evr_kansas",
//     "headPlacement": "Vault",
//     "splitMstTailLength": "1750' AERIAL",
//     "riser1PoleId": "",
//     "changeRequestApprovalNumber": "",
//     "constructionNotes": "",
//     "diffLocation": "Please select",
//   }
// }
//

const data = {
  "schema": {
    "title": "Task Properties",
    "type": "object",
    "properties": {
      "outcome": {
        "title": "WORK ACTIVITY",
        "type": "string",
        "enum": [
          "Please select",
          "TEST Split 4",
          "TEST Split 8",
          "TEST Unsplit 4",
          "TEST Unsplit 8",
          "TEST Unsplit 12",
          "No longer required"
        ],
        "default": "Please select"
      },
      "port1TestResult": {
        "title": "Test Result (db) - PORT 1",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port2TestResult": {
        "title": "Test Result (db) - PORT 2",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port3TestResult": {
        "title": "Test Result (db) - PORT 3",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port4TestResult": {
        "title": "Test Result (db) - PORT 4",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port5TestResult": {
        "title": "Test Result (db) - PORT 5",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port6TestResult": {
        "title": "Test Result (db) - PORT 6",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port7TestResult": {
        "title": "Test Result (db) - PORT 7",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port8TestResult": {
        "title": "Test Result (db) - PORT 8",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port9TestResult": {
        "title": "Test Result (db) - PORT 9",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port10TestResult": {
        "title": "Test Result (db) - PORT 10",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port11TestResult": {
        "title": "Test Result (db) - PORT 11",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "port12TestResult": {
        "title": "Test Result (db) - PORT 12",
        "type": "number",
        "minimum": 0,
        "default": 0
      },
      "powTestResult": {
        "title": "Power Test RESULT (for THIS MST)",
        "type": "string",
        "enum": [
          "Please select",
          "PASS",
          "FAIL"
        ],
        "default": "Please select"
      },
      "constructionNotes": {
        "title": "Testing NOTES",
        "type": "string"
      }
    }
  },




  "form": [
    {
      "key": "outcome",
      "type": "selectWithDefault"
    },
    {
      "key": "port1TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 4'||model.outcome==='TEST Unsplit 4'||model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port2TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 4'||model.outcome==='TEST Unsplit 4'||model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port3TestResult",
      "type": "number",
      "condition": "model.outcome!=='Please select'&&model.outcome!='No longer required'"
    },
    {
      "key": "port4TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 4'||model.outcome==='TEST Unsplit 4'||model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port5TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port6TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port7TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port8TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 8'||model.outcome==='TEST Unsplit 8'||model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port9TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port10TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port11TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "port12TestResult",
      "type": "number",
      "condition": "model.outcome==='TEST Split 12'||model.outcome==='TEST Unsplit 12'"
    },
    {
      "key": "powTestResult",
      "type": "selectWithDefault",
      "condition": "model.outcome!='Please select'&&model.outcome!='No longer required'"
    },
    {
      "key": "constructionNotes",
      "type": "textarea",
      "condition": "model.outcome!='Please select'"
    }
  ],


  "model": {
    "build": "scale_evr_kansas"
  }
}
export default data;
