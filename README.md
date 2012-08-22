# Ruby on Rails Tutorial: sample application

This is the sample application for
[*Ruby on Rails Tutorial: Learn Rails by Example*](http://railstutorial.org/)
by [Michael Hartl](http://michaelhartl.com/).

You can view this application Heroku deployment [*here*](https://empty-day-4404.herokuapp.com)

## My Notes

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