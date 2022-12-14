<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mario Game</title>
    <style>
        body{
            user-select: none;
            margin: 0;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        #menu{
            background-color: aquamarine;
            text-align: center;
            width: 40%;
            height: 50%;
            position: fixed;
            color: black;
            font-size: 1.5rem;
            border-radius: 5rem; 
            visibility: hidden;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

        }
        #otherMenu{
            background-color: aquamarine;
            text-align: center;
            width: 40%;
            height: 50%;
            position: fixed;
            color: black;
            font-size: 1.5rem;
            border-radius: 5rem; 
            visibility: hidden;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        }
        #homeBtn{
            width: 6rem;
            height: 6rem;
            position: relative;
            display: inline-block;
            margin: 2rem;  
        }
        #homeBtn:hover{
              transform: scale(120%);
            transition-duration: 100ms;
        }
        #replayBtn:hover{
            transform: rotate(180deg) scale(120%);
            transition-duration: 200ms;
            cursor: pointer;
        }
        #replayBtn{
            width: 6rem;
            height: 6rem;
            position: relative;
            display: inline-block;
            margin: 2rem;
        }
        #dialogBox{
            top: 8rem;
            position: fixed;
            width: 80%;
            height: 20%;
            background-color: white;
        }
    </style>
</head>
<body>
    
    <div id="menu">
        <h1>You Failed ! </h1>
        <div id="homeBtn"><a href="../home.html"><img src="images/home.png" alt="" width="100%" height="100%"></a></div>
        <div id="replayBtn"><img src="images/tryAgain.jpg" alt="" width="100%" height="100%"></div>
    </div>
    <div id="otherMenu">
        <h1>You Win ! </h1>
        <div id="homeBtn"><a href="../home.html"><img src="images/home.png" alt="" width="100%" height="100%"></a></div>
        <div id="replayBtn"><img src="images/tryAgain.jpg" alt="" width="100%" height="100%"></div>
    </div>
    <canvas></canvas>
    <script src="index.js"></script>
</body>
</html>