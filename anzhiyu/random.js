var posts=["2023/12/06/data/","2023/12/15/software-win-tool/","2023/12/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };