# Install with npm
mkdir -p node_modules
npm install git://github.com/andreineculau/strap-jekyll.git
DIR="node_modules/strap-jekyll"

# Create paths
mkdir -p _includes
mkdir -p _layouts
mkdir -p assets

# Create symlinks or copy files
EXTRA="-i"
VERB="Copy"
SYM=false
if [ "$1" == "--symlink" ]; then
    VERB="Symlink"
    SYM=true
fi

if [ "$2" == "--force" ]; then
    EXTRA="-f"
fi

echo "${VERB} _includes/strap-jekyll ..."
if $SYM ; then
    (cd _includes && ln -s $EXTRA ../$DIR/_includes/strap-jekyll)
else
    [ -h "_includes/strap-jekyll" ] && rm _includes/strap-jekyll
    cp -r $EXTRA $DIR/_includes/strap-jekyll _includes/
fi

echo "${VERB} _layouts/strap-jekyll ..."
if $SYM ; then
    (cd _layouts && ln -s $EXTRA ../$DIR/_layouts/strap-jekyll-default.html)
else
    [ -h "_layouts/strap-jekyll-default.html" ] && rm _layouts/strap-jekyll-default.html
    cp $EXTRA $DIR/_layouts/strap-jekyll-default.html _layouts/
fi

echo "${VERB} assets/strap-jekyll ..."
if $SYM ; then
    (cd assets && ln -s $EXTRA ../$DIR/assets/strap-jekyll)
else
    [ -h "assets/strap-jekyll" ] && rm assets/strap-jekyll
    cp -r $EXTRA $DIR/assets/strap-jekyll assets/
fi

echo "Copy _config.sample.strap-jekyll.yml ..."
cp $EXTRA $DIR/_config.sample.strap-jekyll.yml ./
