# 关于shopify商店主题本地调试



## (安装choco)

### cmd命令

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```



## (安装主题工具包)

### 管理员权限运行cmd

```
choco install themekit
```



## (本地连接安装)

```
shopify partners ------>stores------>login----->apps(应用)----->管理专有应用----->创建应用----->权限(模板读写权限)----->(查看主题id)theme get --list --password=[密码] --store=[your-store.myshopify.com]------>创建主题目录-----mkdir 文件名----cd 文件名----theme get -p=[密码] -s=[your-store.myshopify.com] -t=[your-theme-id]----->
```



## (创建新主题) 

```
theme new --password=[your-password] --store=[your-store.myshopify.com] --name=[theme name]
```

执行theme new 执行操作--

本地生成基本主题模板

shopify商店创建新主题

新文件上传shopify商店

config.yml使用新主题的配置创建或者更新文件



### (推送主题到shopify)

该`theme watch`命令指示主题工具包监视对本地文件所做的任何更改，并自动将更改推送到所连接的Shopify商店中的主题。要关闭监视连接，请输入`ctrl`+ `c`。

```
theme watch
使用活跃的主题
theme watch --allow-live flag
```

