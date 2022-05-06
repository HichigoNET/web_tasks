const paths = document.querySelectorAll("path");
for(let i=0;i<paths.length;i++){

 if(paths[i].parentElement.parentElement.getAttribute("class")=="snow"){
  // paths[i].style.animationDelay = `${10.0/paths.length*i}s`;
           paths[i].style.animationDelay = "0.1s";//`${10.0/paths.length*i}s`;
//  paths[i].style.transform="rotate(80deg)";// `${10.0/paths.length*i}s`;
 }
 else{
        paths[i].style.strokeDasharray = Math.ceil(paths[i].getTotalLength());
        paths[i].style.strokeDashoffset = Math.ceil(paths[i].getTotalLength());
        // paths[i].style.strokeWidth="3";
        //   paths[i].style.animationIterationCount = "infinite";
        // paths[i].style.animationName="all_str";
        // paths[i].style.animationTimingFunction="ease"
        // paths[i].style.animationFillMode="forwards";
        // paths[i].style.animationDirection="alternative";
        // paths[i].style.animationPlayState="running";
        paths[i].style.animationDelay ="0s";}
    

//       paths[i].style.strokeWidth="1";
  
//         paths[i].style.animationDuration = "4s";
      //   if(paths[i].parentElement.parentElement.parentElement.getAttribute("id")=="all-snow"){
      //    paths[i].style.animationDuration = "2s";
        
      //   }

// }
  /*if(paths[i].parentElement.parentElement.parentElement.getAttribute("id")=="all-snow"){
        paths[i].style.strokeDasharray = Math.ceil(paths[i].getTotalLength());
        paths[i].style.strokeDashoffset = Math.ceil(paths[i].getTotalLength());
        paths[i].style.webkitanimationName="all_str_rev";
        paths[i].style.webkitanimationDuration = "5s";
        paths[i].style.webkitanimationDelay = `${5/paths.length*i}s`;
        paths[i].style.webkitanimationTimingFunction="ease";
        paths[i].style.animationFillMode="forwards";
     }*/
     }
    
//}




