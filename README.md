# web, app, db 構成

---

## 環境

- Vagrant 1.6.5 以上
- VirtualBox 4.3.20 以上
- Ansible

## インストール手順

### 1. Ansibleコマンドを実行できる環境にする

```
$ pip install ansible
```

### 2. git clone

```
$ git clone https://github.com/2tom/3tier.git
$ cd 3tier
$ ls
```

### 3. Vagrant起動,ログイン

```
$ vagrant up

$ vagrant ssh

$ cd /vagrant/3tiers
$ ls
docker-compose.yml  mongodb  nginx  node
```

### 4. Dockerコンテナビルド

```
$ sudo docker images
REPOSITORY  TAG  IMAGE ID  CREATED  VIRTUAL SIZE

$ sudo docker-compose build
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
3tiers_nginx        latest              4e971828de87        5 days ago          340.4 MB
3tiers_node         latest              a370636f5a4c        5 days ago          701.1 MB
3tiers_mongodb      latest              a6b0077952f9        5 days ago          524.2 MB
ubuntu              14.04               d2a0ecffe6fa        12 days ago         188.3 MB
```

### 5. Dockerコンテナ起動

```
$ sudo docker ps -a
CONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES

$ sudo docker-compose up -d

```

### 6. ブラウザアクセス(Chrome推奨)

- http://192.168.57.11

