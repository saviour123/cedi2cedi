# Project creation script
# (for Tornado on Heroku)
#
# by Mike Dory | dory.me
# 11.12.11
# modified by saviour | @saviour123

# --------------------------

# git!
git init

# --------------------------

# set up the pip requirements
touch requirements.txt
echo "Tornado==4.5.1" >> requirements.txt

# set up the Procfile
touch Procfile
echo "web: python app.py" >> Procfile

# --------------------------

echo "Committing to Git"

git add --all
git commit -m "Initial Commit"

echo "Creating Heroku app & pushing"

heroku create cedi2cedi
git push heroku master

echo "All Done!"
