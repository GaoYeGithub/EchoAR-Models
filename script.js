var modalviewer = document.getElementById("modal-viewer");

var models = {
  skyscraper: {
    src: "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.glb",
    iosSrc: "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.usdz",
    alt: "Skyscraper",
  },
  car: {
    src: "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/c40af116-f3b3-4d3e-b442-b767f7bb6070.glb",
    iosSrc: "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/50cda243-ccd3-4628-b1bf-14ecd3263cbd.usdz",
    alt: "Car",
  },
  tree: {
    src: "d686a655-e800-430d-bfd2-e38cdfb0c9e9.glb",
    iosSrc: "https://echoar-storage.s3.us-east-2.amazonaws.com/your-tree-model.usdz",
    alt: "Tree",
  },
};

function switchModel(model) {
  modalviewer.setAttribute("src", models[model].src);
  modalviewer.setAttribute("ios-src", models[model].iosSrc);
  modalviewer.setAttribute("alt", models[model].alt);
}

// Default to car
switchModel("car");

// Additional Switching Code
var model_number = 0;
var seconds = 10;
var model_names = ['skyscraper', 'car', 'tree'];

function timeout() {
  switchModel(model_names[model_number]);

  model_number++;
  if (model_number >= model_names.length) model_number = 0;

  setTimeout(timeout, 1000 * seconds);
  console.log("switched");
}

timeout();
