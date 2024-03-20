var posts=["2024/03/20/game-ori/","2024/03/20/hello-world/","2024/03/20/software-win-tool/","2024/01/23/vedio recoding/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };