
### conda基础使用
```
conda --version  #查看版本
conda create -n ail_open3d python=3.10 #创建环境
source ~/.bashrc #刷新终端
conda activate open3dtest  #激活环境
conda install numpy   #安装包
pip install numpy     #pip安装包
conda env list        #环境列表
conda deactivate      #退出环境
conda remove -n  Open3D --all  #要删除的虚拟环境路径
```

### conda创建科学环境
```
conda create -n env2 python=3.10 pandas jupyter seaborn scikit-learn keras tensorflow
以创建名为env2的环境
conda create -n env1 python=3.10
conda activate env1
```
### 换源
```
conda config --remove-key channels
conda config --add channels http://mirrors.aliyun.com/anaconda/pkgs/main
conda config --add channels http://mirrors.aliyun.com/anaconda/pkgs/r
conda config --add channels http://mirrors.aliyun.com/anaconda/pkgs/msys2
conda config --set show_channel_urls yes
```

### conda创建open3d
```
conda create -n ail_open3d python=3.10
conda activate ail_open3d

sudo apt-get update
sudo apt-get install -y libegl1 libgl1 libgomp1 libx11-6 #安装依赖库

pip install open3d

python -c "import open3d as o3d; print(o3d.__version__)" #验证

pip install numpy
pip freeze > requirements.txt  #冻结版本

pip install ipykernel #使用 Jupyter Notebook
python -m ipykernel install --user --name=ail_open3d --display-name "Python (ail_open3d)"
```