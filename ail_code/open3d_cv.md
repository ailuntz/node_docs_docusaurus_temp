### 激活open3d
```
conda create -n open3d python=3.8
conda activate open3d
pip3 install open3d
pip3 install --force-reinstall open3d
numpy 1.26.4  #指定版本
```

### opencv
```
(vscode 中 运行opencv，必须要tasks.json文件，launch和c_cpp_properties不要都可以，参数中必须添加在
            "args": [
                "-fdiagnostics-color=always",
                "-std=c++11”,//必须使用C++11 
                "-stdlib=libc++”,//必须加库
                "-g",
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}",
                "`pkg-config”,//必须加
                "--cflags”,//必须加
                "--libs”,//必须加
                "opencv4`”//必须加动态链接库
            ],
)

```
