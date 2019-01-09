# MIT Active Archives Initiative

Official website of the Active Archives Initiative at MIT.

## Setting up locally

To build this site locally, you will need Ruby. For best results, use the version specified in `.ruby-version`.

Checkout the site from GitHub using the following commands:
```
git clone https://github.com/mitaai/mitaai.git
cd mitaai
git pull
```
Then, install Jekyll and dependencies:
```
gem install bundler jekyll
bundle install
```
Finally, you can compile and run the page using the following two commands:
```
bundle exec jekyll build
bundle exec jekyll serve
```

For more information, check the [Skinny Bones Jekyll documentation](https://mmistakes.github.io/skinny-bones-jekyll/getting-started/).
