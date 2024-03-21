var posts=["2024/03/20/software-win-tool/","2024/03/21/game-summary/","2024/01/23/vedio recoding/","2024/03/20/game-ori/","2024/03/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };