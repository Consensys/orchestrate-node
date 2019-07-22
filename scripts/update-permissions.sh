 for file in `find . -name *_pb.js -not -path "*/node_modules/*"`; do
    echo "# $file"
    sudo chown -R $USER $file
    sudo chmod 775 $file
    sudo chown -R $USER $(dirname "$file")
    sudo chmod 775 $(dirname "$file")
 done