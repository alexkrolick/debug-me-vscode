# debug-me-vscode

A playground for practicing debugging with Visual Studio Code.

## Install

```bash
cd backend && yarn install
cd ..
cd frontend && yarn install
```

## Run

**With VSCode:** Open the Tasks menu and run "Frontend dev server" and "Backend dev server" from the menu.

**Command line:** `yarn dev` in both directories

## Debug

There are two branches that contain bugs: `frontend-bug` and `backend-bug`. Check one out and open VSCode.

Open the VSCode Debug (~`🐞`~) panel and press ▶️ for Frontend or Backend. Add breakpoints throughout the app by clicking in the gutter.

We're expecting to see this:

<img width="357" alt="screen shot 2017-10-12 at 12 35 18 am" src="https://user-images.githubusercontent.com/1571667/31484498-608fa182-aee5-11e7-9d7f-5e667f77de54.png">

But sometimes we end up with something like this:

<img width="349" alt="screen shot 2017-10-12 at 12 35 49 am" src="https://user-images.githubusercontent.com/1571667/31484499-60c1d83c-aee5-11e7-844d-014f2b80211b.png">

Or this:

<img width="344" alt="screen shot 2017-10-12 at 12 32 54 am" src="https://user-images.githubusercontent.com/1571667/31484404-0e4ef828-aee5-11e7-98e8-49b38bb7f8e9.png">


```
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               🐞🐞🐞🐞🐞🐞🐞🐞🐞
               👢👢👢👢⚙️👢👢👢👢
               👢👢👢⚙️⚙️⚙️👢👢👢
               👢👢👢👢⚙️👢👢👢👢
🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞

              Can you fix it? 
    Put on your debugging hat and find out! 
```
