let images = [
   {
     year: "year1",
     ids: ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9", "pic10", "pic11"],
     src: ["https://bit.ly/2LK0nPz", "https://bit.ly/2YqyOMX", "https://bit.ly/2LK0v1v", "https://bit.ly/2Zkhtqe", "https://bit.ly/2LMk89f", "https://bit.ly/2K2D1ma", "http://bit.ly/2YcmPHB", "http://bit.ly/32Y68i1", "http://bit.ly/32Tur0B", "http://bit.ly/331XpeS", "http://bit.ly/31c5zzB"]
      },

   {
     year: "year2",
     ids: ["pic12", "pic13", "pic14", "pic15", "pic16", "pic17", "pic18", "pic19", "pic20", "pic21", "pic22"]
    },

   {
     year: "year3",
     ids: ["pic23", "pic24", "pic25", "pic26", "pic27", "pic28", "pic29", "pic30", "pic31", "pic32", "pic33"]
   },

   {
     year: "year4",
     ids: ["pic34", "pic35", "pic36", "pic37", "pic38", "pic39", "pic40", "pic41", "pic42", "pic43", "pic44"]
   },

   {
     year: "year5",
     ids: ["pic45", "pic46", "pic47", "pic48", "pic49", "pic50", "pic51", "pic52", "pic53", "pic54", "pic55"]
   },

   {
     year: "year6",
     ids: ["pic56", "pic57", "pic58", "pic59", "pic60", "pic61", "pic62", "pic63", "pic64", "pic65", "pic66"]
   },

   {
     year: "year7",
     ids: ["pic67", "pic68", "pic69", "pic70", "pic71", "pic72", "pic73", "pic74", "pic75", "pic76", "pic77"]
   },

   {
     year: "year8",
     ids: ["pic78", "pic79", "pic80", "pic81", "pic82", "pic83", "pic84", "pic85", "pic86", "pic87", "pic88"],
     src: ["http://bit.ly/32Zswrk", "http://bit.ly/2Ypn01R", "http://bit.ly/32ZAP6r", "http://bit.ly/2ypsxGW", "http://bit.ly/2KhdSTC", "http://bit.ly/2ymATyX", "http://bit.ly/2Yv2qsE", "http://bit.ly/330M3Yj","http://bit.ly/32ZsG1U", "http://bit.ly/2GACwxG", "http://bit.ly/2Yep25l"]
   },

   {
     year: "year9",
     ids: ["pic89", "pic90", "pic91", "pic92", "pic93", "pic94", "pic95", "pic96", "pic97", "pic98", "pic99"],
     src: ["http://bit.ly/2SWi6Eb", "http://bit.ly/2K74dAp", "http://bit.ly/2KjHtfs", "http://bit.ly/2Yf3rtG", "http://bit.ly/2SUgbjx", "http://bit.ly/2MsCU4U", "http://bit.ly/2Ms9Ydx", "http://bit.ly/2YFrx0g", "http://bit.ly/2MmArcp", "http://bit.ly/2KeNFVW", "http://bit.ly/2LOgqfp"]
   },

   {
     year: "year10",
     ids: ["pic100", "pic101", "pic102", "pic103", "pic104", "pic105", "pic106", "pic107", "pic108", "pic109", "pic110"],
     src: ["http://bit.ly/2LPvDg2", "http://bit.ly/2SQVAfN", "http://bit.ly/2SQVCEr", "http://bit.ly/2OtDKRO", "http://bit.ly/2LQUMao", "http://bit.ly/2Yqj4cY", "http://bit.ly/330pD9w", "http://bit.ly/2yntm2X", "http://bit.ly/2T1i7XH", "http://bit.ly/2SQNy6I", "http://bit.ly/318TGub"]
   },

   {
     year: "year11",
     ids: ["pic111", "pic112", "pic113", "pic114", "pic115", "pic116", "pic117", "pic118", "pic119", "pic120", "pic121"]
   },

   {
     year: "year12",
     ids: ["pic122", "pic123", "pic124", "pic125", "pic126", "pic127", "pic128", "pic129", "pic130", "pic131", "pic132"]
   },

   {
     year: "year13",
     ids: ["pic133", "pic134", "pic135", "pic136", "pic137", "pic138", "pic139", "pic140", "pic141", "pic142", "pic143"]
   },

   {
     year: "year14",
     ids: ["pic144", "pic145", "pic146", "pic147", "pic148", "pic149", "pic150", "pic151", "pic152","pic153", "pic154"],
     src: ["http://bit.ly/32Y7Z6t", "http://bit.ly/32Ym6bM", "http://bit.ly/2Yq2TAB", "http://bit.ly/2YuglTY", "http://bit.ly/2YugyXg", "http://bit.ly/2MpxibR", "http://bit.ly/2GAM8s1", "http://bit.ly/2yjUJuK", "http://bit.ly/2KoSeNB", "http://bit.ly/2Orir31","http://bit.ly/2OpgvYZ", "http://bit.ly/2Ywew4F"]
   },

   {
     year: "year15",
     ids: ["pic155", "pic156", "pic157", "pic158", "pic159", "pic160", "pic161", "pic162","pic163", "pic164", "pic165"]
   }
]

let wrap = document.querySelector(".wrap");
let imgs = document.write("img");

setInterval(function() {
  time();
}, 1000)

 let age;

 function time() {
   let d = new Date();
   let hours = d.getHours();
   let minutes = d.getMinutes();

// using these hours just to experiment for now
  if (hours == 16 ) {
    age =  7; //year8
    getPictures();
  }

  if (hours == 17 ) {
    age =  8; //year9
    getPictures();
  }

  if (hours == 18 ) {
    age =  9; //year10
    getPictures();
  }

  else {
    age = 0; //year1 just for now since I already have the urls in for it
    getPictures();
    }

  }

time();
getPictures();

  function getPictures() {

    console.log(images[age].year, images[age].src);

    for (i = 0; i < imgs.length; i++)

  {
    let img = imgs[i];
    img.src = images[age].src[i];
    img.id = images[age].ids[i];
    }

  }
