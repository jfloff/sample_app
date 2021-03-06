# Ruby on Rails Tutorial: sample application

This is the sample application for
[*Ruby on Rails Tutorial: Learn Rails by Example*](http://railstutorial.org/)
by [Michael Hartl](http://michaelhartl.com/).

You can view this application Heroku deployment [*here*](https://empty-day-4404.herokuapp.com)

## My Notes

### GenPop

* **Ajax**: allows web pages to send requests asynchronously to the server without leaving the page. Ajax = _ Asynchronous JavaScript and XML _

### Rake

*	Reset database

		$ bundle exec rake db:reset


### Git

*	Reset to HEAD

		$ git co master
		$ git reset --hard master
		$ git branch -D <branch>

*	Create a branch from another branch

		$ git checkout -b <new-branch> <existing-branch>

*	Change the last local commit message

		$ git commit --amend -m "New commit message"


### Ruby

* What the fuck is ||= ??

		>> @user
		=> nil
		>> @user = @user || "the user"
		=> "the user"
		>> @user = @user || "another user"
		=> "the user"


### Rails

* `<%= render @users %>` automatically renders each of the users in the @users variable using the _\_user.html.erb_ partial. 