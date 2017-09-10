# Project creation and deployment script
# (for Tornado on Heroku)
#
# date: 14.6.2017

# --------------------------
# make sure heroku toolbelt and git is installed before running the scripts

# git!
git init

# --------------------------

# set up the pip requirements
touch requirements.txt
echo "Tornado==4.5.1" >> requirements.txt

# create the Procfile
touch Procfile
echo "web: gunicorn app:app" >> Procfile

# --------------------------

echo "Committing to Git"

git add --all
git commit -m "Initial Commit"

echo "Creating Heroku app & pushing"

# set project name
name=cedi2cedi

heroku create $name
git push heroku master

echo "All Done!"
