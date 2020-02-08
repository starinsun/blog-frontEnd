###
 # @Date: 2020-01-20 21:23:47
 # @LastEditors  : Asen Wang
 # @LastEditTime : 2020-01-21 00:40:45
 # @content: I
 ###
docker build -t registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v4 .
docker run -d -p 3000:3000 --name blog registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v2
docker push registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v4
