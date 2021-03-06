#!/bin/sh
ISERROR=0

which npm > /dev/null 2>&1
if [ $? -ne 0 ] ; then
	echo "command not found: npm"
	echo "please install npm. e.g. sudo port install npm"
	ISERROR=1
fi

which grunt > /dev/null 2>&1
if [ $? -ne 0 ] ; then
	echo "command not found: grunt"
	echo "please install grunt. e.g. npm install -g grunt-cli"
	ISERROR=1
fi

which compass > /dev/null 2>&1
if [ $? -ne 0 ] ; then
	echo "command not found: compass"
	echo "please install compass. e.g. gem install compass"
	ISERROR=1
fi

if [ $ISERROR == 1 ] ; then
	exit
fi

rm -rf node_modules bower-install components tsd-install .sass-cache && \
npm install && \
grunt setup && \
echo "OK!"
