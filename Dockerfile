# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将当前目录下的 build 文件夹内容复制到 Nginx 的网页目录中
COPY ./build /usr/share/nginx/html


# 暴露 Nginx 的默认端口 80
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]


# 构建命令
# docker build -t node_docusaurus_code .


#运行命令
# docker run -d -p 80:80 node_docusaurus_code