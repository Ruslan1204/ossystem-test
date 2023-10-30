const biomarkers = [
  "11_14_translocation",
  "11q_deletion",
  "13q_deletion",
  "15_17_translocation",
  "17p_deletion",
  "bcr_abl1",
  "c_met",
  "cd303_bdca_1",
  "cyclin_e_ccne1",
];

const genResult = (type) =>
  biomarkers.reduce((previousValue, biomarker) => {
    let propName =
      "biomarkers" +
      biomarker
        .replace(/^[^a-zа-яё]*([a-zа-яё])/gi, function (m) {
          return m.toUpperCase();
        })
        .replace(/_/gi, "");

    const res1 = {
      [propName]: [
        {
          field: "biomarkers",
          value: biomarker,
        },
      ],
    };

    const res2 = {
      [propName]: [
        {
          type: "string10",
          value: "biomarkers" + biomarker,
        },
      ],
    };

    const res3 = {
      [propName]: {
        name: "biomarkers",
        fields: {
          ["biomarkers" + biomarker]: "biomarkers" + biomarker,
        },
      },
    };

    switch (type) {
      case "type1":
        previousValue.push(res1);
        break;

      case "type2":
        previousValue.push(res2);
        break;

      case "type3":
        previousValue.push(res3);
        break;

      default:
        console.log("Invalid type");
    }

    return previousValue;
  }, []);

console.log(genResult("type2"));

// const res1 = {
//   biomarkers1114Translocation: [
//     { field: "biomarkers", value: "11_14_translocation" },
//   ],
//   biomarkers11qDeletion: [{ field: "biomarkers", value: "11q_deletion" }],
//   biomarkers13qDeletion: [{ field: "biomarkers", value: "13q_deletion" }],
// };

// const rer2 = {
//   biomarkers1114Translocation: {
//     type: "string10",
//     field: "biomarkers_11_14_translocation",
//   },
//   biomarkers11qDeletion: { type: "string10", field: "biomarkers_11q_deletion" },
//   biomarkers13qDeletion: { type: "string10", field: "biomarkers_13q_deletion" },
// };

// const res3 = {
//   name: "biomarkers",
//   fields: {
//     biomarkers_11_14_translocation: "biomarkers_11_14_translocation",
//     biomarkers_11q_deletion: "biomarkers_11q_deletion",
//     biomarkers_13q_deletion: "biomarkers_13q_deletion",
//   },
// };

// genResult("type3");

// biomarkers.forEach((biomarker, index) => {
//   const result = biomarker.replace(/_/gi, "")

//   // parseInt(result)

//   // const explode = x => {
//   //   console.log(x)
//   //   return x.reduce((pre, val) => (typeof val === 'number' ? val : 0) + pre, 0);
//   // }

//   // console.log(explode(result));

//   // console.log(result)

//   // const newResult = result.charAt(0).toUpperCase() + result.slice(1)

//   // console.log(newResult)

//   let res;

//   switch (type) {
//     case "type1":
//       res = {
//         ["biomarkers" + result.replace(/_/gi, "")]: [
//           {
//             field: "biomarkers",
//             value: biomarker,
//           },
//         ],
//       };
//       break;

//     case "type2":
//       res = {
//         ["biomarkers" + result.replace(/_/gi, "")]: {
//           type: "string10",
//           value: "biomarkers" + biomarker,
//         },
//       };
//       break;

//     case "type3":
//       res = {
//         name: "biomarkers",
//         fields: {
//           ["biomarkers" + result]: "biomarkers" + result,
//         },
//       };
//       break;

//     default:
//     // console.log("Invalid type");
//   }

//   // console.log(res);
// });
