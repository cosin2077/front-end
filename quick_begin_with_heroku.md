#Getting Started on Heroku with Node.js


###prerequisite:

1. Heroku CLI
[windows](https://devcenter.heroku.com/toolbelt-downloads/windows64)
[MacOS](https://devcenter.heroku.com/toolbelt-downloads/osx)
2. node
3. npm
4. git

then login heroku with CLI.
>$ heroku login

1. Input your account.
2. clone template app.
> git clone https://github.com/heroku/node-js-getting-started.git
> cd node-js-getting-started

3. Deploy the app
> heroku create
> //This will create a instance on Heroku and generate a url for your app.
> //when you create an app, you created a git remote associated with your local git repository.

4. Now deploy your code:
> git push heroku master
> ....
> //This will upload your local code and run it in Heroku instance

5. Make sure there is at least one instance running in Heroku
> heroku ps:scale web=1

6. heroku open
>Open the site.

7. View logs
> heroku logs --tail

8. dyno is a lightweight container that runs the command specidied in the <code>Procfile</code>
> heroku ps 
> //See how manys dynos running 

9. Scale the app
>heroku ps:scale web=0
>//close your app
>heroku ps:scale web=1
>//open one dyno

10. 