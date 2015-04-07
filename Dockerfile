FROM node:0.10.28

MAINTAINER Fernando Monteiro, fernando@newaeonweb.com.br

WORKDIR /home/frontendboilerplate

# Install Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install packages
ADD package.json /home/frontendboilerplate/package.json
RUN npm install

# Manually trigger bower.
ADD bower.json /home/frontendboilerplate/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/frontendboilerplate

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["grunt"]
