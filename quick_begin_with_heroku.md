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
