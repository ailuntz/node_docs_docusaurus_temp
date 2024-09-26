
```
将欧拉角转换为旋转矩阵
tfs.euler.euler2mat(math.radians(rx),math.radians(ry),math.radians(rz))
合并成齐次矩阵
tfs.affines.compose(np.squeeze(np.asarray((x,y,z))), rmat, [1, 1, 1])
旋转矩阵转四元数
tfs.quaternions.mat2quat(m[0:3,0:3])
四元数转旋转矩阵
tfs.quaternions.quat2mat([w,q[0],q[1],q[2]])
```