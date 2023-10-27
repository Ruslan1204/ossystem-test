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

const res1 = {
  biomarkers1114Translocation: [
    { field: "biomarkers", value: "11_14_translocation" },
  ],
  biomarkers11qDeletion: [{ field: "biomarkers", value: "11q_deletion" }],
  biomarkers13qDeletion: [{ field: "biomarkers", value: "13q_deletion" }],
};

const rer2 = {
  biomarkers1114Translocation: {
    type: "string10",
    field: "biomarkers_11_14_translocation",
  },
  biomarkers11qDeletion: { type: "string10", field: "biomarkers_11q_deletion" },
  biomarkers13qDeletion: { type: "string10", field: "biomarkers_13q_deletion" },
};
const res3 = {
  name: "biomarkers",
  fields: {
    biomarkers_11_14_translocation: "biomarkers_11_14_translocation",
    biomarkers_11q_deletion: "biomarkers_11q_deletion",
    biomarkers_13q_deletion: "biomarkers_13q_deletion",
  },
};

const genResult = (type) => {
  biomarkers.forEach((biomarker, index) => {
    const result = biomarker;

    let res;
    const type = "type1";

    switch (type) {
      case "type1":
        res = {
          ["biomarkers" + result.replace(/_/gi, "")]: [
            {
              field: "biomarkers",
              value: biomarker,
            },
          ],
        };
        break;

      case "type2":
        res = {
          ["biomarkers" + result.replace(/_/gi, "")]: {
            type: "string10",
            value: "biomarkers" + biomarker,
          },
        };
        break;

      case "type3":
        res = {
          name: "biomarkers",
          fields: {
            ["biomarkers" + result]: "biomarkers" + result,
          },
        };
        break;

      default:
        console.log("Invalid type");
    }

    console.log(res);
  });
};

genResult();
