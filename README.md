# drasticaly-precious-project
It will be an app that will help to find lost pets.
# Set up project
Follow the instructions:
 - paste to a terminal and run:
```
git clone https://github.com/RazumauMikita/drasticaly-precious-project
```
 - paste to a terminal and run:
```
cd drasticaly-precious-project/pet-finder
```
 - paste to a terminal and run:
```
npm install && npm run prepare
```
 - replase content in the `husky/_/pre-commit` file with: 
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/"
cd ./pet-finder && npx lint-staged
```
