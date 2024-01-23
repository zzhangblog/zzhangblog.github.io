var posts=["2023/12/15/hello-world/","2023/12/15/software-win-tool/","2024/01/23/vedio recoding/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };