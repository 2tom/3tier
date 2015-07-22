FROM ubuntu:14.04

MAINTAINER 2tom <tera1215@gmail.com>

RUN echo "Asia/Tokyo" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update && apt-get install -y\
 curl\
 git\
 wget\
 libcurl4-openssl-dev\
 man\
 python\
 make\
 gcc\
 g++\
 bzip2\
 vim\
 && rm -rf /var/lib/apt/lists/*

ENV HOME /root
ENV NODE_VERS v0.12.7
ENV PATH /root/.nvm/$NODE_VERS/bin:$PATH

RUN git clone https://github.com/creationix/nvm.git $HOME/.nvm
RUN bash -c '. $HOME/.nvm/nvm.sh; nvm install $NODE_VERS && nvm alias default $NODE_VERS'\
 && bash -c '. $HOME/.nvm/nvm.sh; nvm use stable ; npm install -g bower'\
 && bash -c '. $HOME/.nvm/nvm.sh; nvm use stable ; npm install -g express-generator'

RUN mkdir -p $HOME/.vim/bundle\
 && git clone https://github.com/Shougo/neobundle.vim $HOME/.vim/bundle/neobundle.vim

ADD vimrc $HOME/.vimrc

VOLUME /src

ADD start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 3000
CMD ["/start.sh"]
