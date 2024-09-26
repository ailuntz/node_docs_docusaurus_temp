### 设置 SSH 免密登录（可选）
```
ssh-keygen -t rsa  #本地生成密钥
ssh-copy-id root@192.168.8.98  #粘贴到服务器
```

### 设置ROOT密码
```
sudo passwd root
```
### 修改SSH置文件，授权root可以远程
```
vi /etc/ssh/sshd_config
PermitRootLogin prohibit-passuord修改为yes
```
先systemctl enable ssh.service
后sudo service sshd restart
### 取消ssh的登陆欢迎界面
```
touch ~/.hushlogin
```

### 关闭防火墙和selinux
```
systemctl stop firewalld #关闭防火墙
systemctl disable firewalld #禁止防火墙开机自启
```

### 关闭selinux
```
setenforce 0 # 临时
sed -i 's/enforcing/disabled/' /etc/selinux/config # 永久
```

### 关闭swap
```
swapoff -a # 临时
vi /etc/fstab  #永久
/dev/mapper/centos-swap swap swap default 0 0 这一行前面加个 # 号将其注释掉
```


### Yum多线程加速
yum install axel
yum install yum-axelget